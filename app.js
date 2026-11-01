/* ============================================================
   丝袜的故事 — 应用逻辑
   路由 / i18n / 七大模块渲染 / 选购助手 / localStorage / 年龄门 / 内容分级 / 收藏
   ============================================================ */

(function () {
  'use strict';

  const M = window.MOCK;
  const LS = {
    lang: 'siwa.lang',
    age: 'siwa.ageConfirmed',
    adult: 'siwa.adultConfirmed', // 本次会话内 18+ 确认
    fav: 'siwa.favorites',
    form: 'siwa.assistantForm',
    quiz: 'siwa.quizBest'
  };

  /* ---------- 状态 ---------- */
  let lang = localStorage.getItem(LS.lang) || (navigator.language.startsWith('zh') ? 'zh-CN' : 'en');
  let adultConfirmed = false; // 会话级
  let currentRoute = 'home';

  const t = (path) => path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : path), M.i18n[lang]);

  /* ---------- 工具 ---------- */
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  };
  const toast = (msg) => {
    const t = $('#toast');
    t.textContent = msg; t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 1800);
  };

  // 全局图片错误处理
  window.imgError = function (img) {
    const wrap = img.parentNode;
    if (!wrap) return;
    wrap.innerHTML = `<div style="height:100%;display:flex;align-items:center;justify-content:center;background:var(--c-bg-2);color:var(--c-ink-3);font-size:13px">${M.i18n[lang].common.imgFail}</div>`;
  };

  // 内容分级：all / 16 / 18
  const imgWithRating = (src, rating, alt = '') => {
    const wrap = el('div', 'img-wrap');
    if (rating === '18' && !adultConfirmed) {
      wrap.innerHTML = `<img src="${src}" alt="${alt}" style="filter:blur(20px)" onerror="imgError(this)">
        <div class="img-mask" data-adult="1">
          <div class="lbl">🔞 18+</div>
          <div style="font-size:12px;opacity:.8">${lang === 'zh-CN' ? '点击查看' : 'Click to view'}</div>
        </div>`;
    } else {
      wrap.innerHTML = `<img src="${src}" alt="${alt}" loading="lazy" onerror="imgError(this)">`;
    }
    if (rating && rating !== 'all') {
      const badge = el('div', 'rating-badge', rating + '+');
      wrap.appendChild(badge);
    }
    return wrap;
  };

  /* ---------- i18n 应用到静态 UI ---------- */
  function applyI18n() {
    document.documentElement.lang = lang;
    const brand = $('.brand');
    if (lang === 'zh-CN') {
      brand.innerHTML = '丝袜<span>的故事</span>';
    } else {
      brand.innerHTML = 'The Story of <span>Hosiery</span>';
    }
    const navMap = { home: 'nav.home', timeline: 'nav.timeline', material: 'nav.material', process: 'nav.process', style: 'nav.style', company: 'nav.company', guide: 'nav.guide' };
    $$('#nav a').forEach(a => {
      const key = a.dataset.route;
      if (navMap[key]) a.textContent = t(navMap[key]);
    });
    $('#langBtn').textContent = t('assistant.lang');
    const fab = $('#fab');
    if (fab.lastChild && fab.lastChild.nodeType === 3) fab.lastChild.textContent = ' ' + t('nav.assistant');
    document.title = t('brand');
  }

  /* ---------- 路由 ---------- */
  function getRoute() {
    const h = location.hash.replace(/^#\/?/, '');
    return h || 'home';
  }

  function setActiveNav(route) {
    $$('#nav a').forEach(a => a.classList.toggle('active', a.dataset.route === route));
  }

  function router() {
    currentRoute = getRoute();
    const [base, param] = currentRoute.split('/');
    setActiveNav(base);
    const app = $('#app');
    app.innerHTML = '';
    window.scrollTo(0, 0);
    switch (base) {
      case 'home': renderHome(app); break;
      case 'timeline': renderTimeline(app); break;
      case 'material': renderMaterial(app); break;
      case 'process': renderProcess(app); break;
      case 'style': renderStyle(app); break;
      case 'company': param ? renderCompanyDetail(app, param) : renderCompany(app); break;
      case 'guide': renderGuide(app, param); break;
      case 'assistant': renderAssistant(app); break;
      case 'favorites': renderFavorites(app); break;
      default: renderHome(app);
    }
  }

  /* ---------- 首页 ---------- */
  function renderHome(app) {
    const entries = [
      { route: 'timeline', ico: '🕰️', badge: true },
      { route: 'material', ico: '🧵', badge: true },
      { route: 'process', ico: '⚙️', badge: true },
      { route: 'style', ico: '👗' },
      { route: 'company', ico: '🏢', badge: true },
      { route: 'assistant', ico: '🎯' }
    ];
    app.innerHTML = `
      <section class="hero">
        <div class="hero-inner">
          <span class="eyebrow">${lang === 'zh-CN' ? '百年袜业 · 材料 · 工艺 · 时尚' : 'A Century of Hosiery'}</span>
          <h1>${t('home.heroTitle').replace(lang === 'zh-CN' ? '智能纤维' : 'Smart Fibers', lang === 'zh-CN' ? '<em>智能纤维</em>' : '<em>Smart Fibers</em>')}</h1>
          <p>${t('home.heroSub')}</p>
          <div class="hero-cta">
            <a href="#/timeline" class="btn btn-primary">${t('home.cta')} →</a>
            <a href="#/assistant" class="btn btn-ghost">${t('home.assistantCta')}</a>
          </div>
        </div>
      </section>
      <div class="section-grid">
        ${entries.map(e => `
          <div class="entry-card" onclick="location.hash='/${e.route}'">
            ${e.badge ? `<span class="entry-new">${t('home.guideBand.badge')}</span>` : ''}
            <div class="ico">${e.ico}</div>
            <h3>${t('home.sections.' + e.route + '.t')}</h3>
            <p>${t('home.sections.' + e.route + '.d')}</p>
          </div>
        `).join('')}
      </div>
      <section class="guide-band">
        <div class="gb-left">
          <span class="gb-eyebrow">${t('home.guideBand.eyebrow')}</span>
          <h2>${t('home.guideBand.title')}</h2>
          <p>${t('home.guideBand.sub')}</p>
          <a href="#/guide" class="btn btn-primary">${t('home.guideBand.cta')} →</a>
        </div>
        <div class="gb-pills">
          ${['denier', 'label', 'care', 'myth', 'quiz', 'eco'].map(k =>
            `<a href="#/guide/${k}" class="gb-pill">${t('guide.tabs.' + k)}</a>`).join('')}
        </div>
        <p class="gb-note">${t('home.guideBand.also')}</p>
      </section>
    `;
  }

  /* ---------- 时间轴 ---------- */
  function renderTimeline(app) {
    app.innerHTML = `
      <div class="page-header">
        <h1>${t('timeline.title')}</h1>
        <p>${t('timeline.scroll')}</p>
      </div>
      <div class="timeline-wrap" id="tlWrap"></div>
      <section class="culture-sec">
        <h2 class="sec-title">${t('guide.culture.title')}</h2>
        <p class="sec-sub">${t('guide.culture.sub')}</p>
        <div class="culture-grid" id="cultureGrid"></div>
        <div class="era-wrap">
          <div class="era-frame">
            <img class="era-after" src="assets/tights_fashion.jpg" alt="">
            <div class="era-before" id="eraBefore"><img src="assets/tl_1940.jpg" alt=""></div>
            <span class="era-tag left">${M.guide.culture.pair.before[lang]}</span>
            <span class="era-tag right">${M.guide.culture.pair.after[lang]}</span>
            <div class="era-handle" id="eraHandle"><i>⇄</i></div>
          </div>
          <input class="era-range" type="range" min="0" max="100" value="50" aria-label="compare" oninput="updateEra(this.value)">
          <div class="era-hint">${M.guide.culture.pair.drag[lang]}</div>
        </div>
      </section>
    `;
    const wrap = $('#tlWrap');
    M.timeline.forEach((node, i) => {
      const tagLabels = { material: t('nav.material'), process: t('nav.process'), style: t('nav.style'), company: t('nav.company') };
      const nodeEl = el('div', 'tl-node');
      nodeEl.innerHTML = `<div class="tl-year">${node.year}</div>`;
      const card = el('div', 'tl-card');
      const imgWrap = imgWithRating(node.img, node.rating, node.title[lang]);
      card.appendChild(imgWrap);
      const body = el('div', 'tl-body');
      body.innerHTML = `
        <h3>${node.title[lang]}</h3>
        <p>${node.summary[lang]}</p>
        <div class="tl-tags">${node.tags.map(tg => `<span class="tag">${tagLabels[tg] || tg}</span>`).join('')}</div>
      `;
      card.appendChild(body);
      nodeEl.appendChild(card);
      wrap.appendChild(nodeEl);
    });
    renderCulture();
    window.updateEra(50);
  }

  function renderCulture() {
    const g = M.guide.culture;
    $('#cultureGrid').innerHTML = g.items.map((c, i) => `
      <article class="culture-card" style="animation-delay:${(i * .07).toFixed(2)}s">
        <div class="culture-img"><img src="${c.img}" alt="${c.title[lang]}" loading="lazy" onerror="imgError(this)"></div>
        <div class="culture-body">
          <div class="culture-year">${c.year}</div>
          <h3>${c.title[lang]}</h3>
          <p>${c.text[lang]}</p>
        </div>
      </article>`).join('');
  }

  window.updateEra = function (v) {
    const p = Math.max(0, Math.min(100, Number(v)));
    const before = $('#eraBefore');
    const handle = $('#eraHandle');
    if (!before) return;
    before.style.clipPath = `inset(0 ${100 - p}% 0 0)`;
    handle.style.left = p + '%';
  };

  /* ---------- 材料 ---------- */
  function renderMaterial(app) {
    app.innerHTML = `
      <div class="page-header">
        <h1>${t('material.title')}</h1>
      </div>
      <div class="mat-grid" id="matGrid"></div>
      <h3 style="margin-top:40px">${t('material.compare')}</h3>
      <table class="compare-table">
        <thead><tr>
          <th>${lang === 'zh-CN' ? '材料' : 'Material'}</th>
          <th>${t('material.fields.elasticity')}</th>
          <th>${t('material.fields.sheerness')}</th>
          <th>${t('material.fields.durability')}</th>
          <th>${t('material.fields.price')}</th>
          <th>${t('material.fields.season')}</th>
        </tr></thead>
        <tbody>
          ${M.materials.map(m => `
            <tr>
              <td><strong>${m.name[lang]}</strong></td>
              <td>${'●'.repeat(m.props.elasticity)}${'○'.repeat(5 - m.props.elasticity)}</td>
              <td>${'●'.repeat(m.props.sheerness)}${'○'.repeat(5 - m.props.sheerness)}</td>
              <td>${'●'.repeat(m.props.durability)}${'○'.repeat(5 - m.props.durability)}</td>
              <td>${'●'.repeat(m.props.price)}${'○'.repeat(5 - m.props.price)}</td>
              <td>${m.props.season}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <h3 class="sec-title" style="margin-top:48px">${t('guide.matrix.title')}</h3>
      <p class="sec-sub">${t('guide.matrix.sub')}</p>
      <div class="matrix-scroll">
        <table class="scene-matrix">
          <thead><tr>
            <th>${M.guide.matrix.sceneLabel[lang]}</th>
            ${M.guide.matrix.bands.map(b => `<th>${b[lang]}</th>`).join('')}
          </tr></thead>
          <tbody>
            ${M.guide.matrix.rows.map(r => `
              <tr>
                <th scope="row">${r.scene[lang]}</th>
                ${r.cells.map(c => `<td><strong>${c.style[lang]}</strong><em class="cell-mat">${c.mat[lang]}</em><span>${c.note[lang]}</span></td>`).join('')}
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
    `;
    const grid = $('#matGrid');
    M.materials.forEach(m => {
      const card = el('div', 'mat-card');
      const imgWrap = imgWithRating(m.img, 'all', m.name[lang]);
      card.appendChild(imgWrap);
      const body = el('div', 'body');
      body.innerHTML = `
        <div class="era">${m.era}</div>
        <h3>${m.name[lang]}</h3>
        <p>${m.desc[lang]}</p>
        <div style="margin-top:12px">
          <div class="props-bar"><span class="lbl">${t('material.fields.elasticity')}</span><div class="track"><div class="fill" style="width:${m.props.elasticity * 20}%"></div></div></div>
          <div class="props-bar"><span class="lbl">${t('material.fields.sheerness')}</span><div class="track"><div class="fill" style="width:${m.props.sheerness * 20}%"></div></div></div>
          <div class="props-bar"><span class="lbl">${t('material.fields.durability')}</span><div class="track"><div class="fill" style="width:${m.props.durability * 20}%"></div></div></div>
        </div>
      `;
      card.appendChild(body);
      grid.appendChild(card);
    });
  }

  /* ---------- 工艺 ---------- */
  function renderProcess(app) {
    app.innerHTML = `
      <div class="page-header"><h1>${t('process.title')}</h1></div>
      <div class="process-flow" id="procFlow"></div>
      <div class="process-detail" id="procDetail"></div>
      <section class="weave-sec">
        <h2 class="sec-title">${t('guide.weave.title')}</h2>
        <p class="sec-sub">${t('guide.weave.sub')}</p>
        <div class="weave-wrap">
          <div class="weave-stage" id="weaveStage" onmousemove="moveLens(event)" onmouseleave="hideLens()">
            <img src="assets/proc_knitting.jpg" alt="">
            <div class="weave-lens" id="weaveLens"></div>
            <span class="weave-note">${M.guide.weave.stageNote[lang]}</span>
          </div>
          <div class="weave-panel">
            <div class="weave-list" id="weaveList">
              ${M.guide.weave.items.map((w, i) => `
                <button class="weave-btn${i === 0 ? ' active' : ''}" data-key="${w.key}" onclick="showWeave('${w.key}')">
                  <span>${w.name[lang]}</span><em>${w.tag[lang]}</em>
                </button>`).join('')}
            </div>
            <div class="weave-detail" id="weaveDetail"></div>
          </div>
        </div>
      </section>
    `;
    const flow = $('#procFlow');
    M.processSteps.forEach((s, i) => {
      const step = el('div', 'process-step' + (i === 0 ? ' active' : ''));
      step.dataset.id = s.id;
      step.innerHTML = `<div class="num">${i + 1}</div><div class="nm">${s.name[lang]}</div>`;
      step.onclick = () => {
        $$('.process-step').forEach(x => x.classList.remove('active'));
        step.classList.add('active');
        showProcessStep(s.id);
      };
      flow.appendChild(step);
    });
    showProcessStep(M.processSteps[0].id);
    window.showWeave(M.guide.weave.items[0].key);
  }

  window.showWeave = function (key) {
    const g = M.guide.weave;
    const item = g.items.find(x => x.key === key);
    if (!item) return;
    const detail = $('#weaveDetail');
    if (detail) detail.innerHTML = `<h3>${item.name[lang]}<em>${item.tag[lang]}</em></h3><p>${item.desc[lang]}</p>`;
    $$('.weave-btn').forEach(b => b.classList.toggle('active', b.dataset.key === key));
  };

  window.moveLens = function (e) {
    const stage = $('#weaveStage');
    const lens = $('#weaveLens');
    if (!stage || !lens) return;
    const rect = stage.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const zoom = 2.2;
    const size = lens.offsetWidth || 140;
    lens.style.opacity = '1';
    lens.style.left = x + 'px';
    lens.style.top = y + 'px';
    lens.style.backgroundImage = "url('assets/proc_knitting.jpg')";
    lens.style.backgroundSize = `${rect.width * zoom}px ${rect.height * zoom}px`;
    lens.style.backgroundPosition = `${-(x * zoom - size / 2)}px ${-(y * zoom - size / 2)}px`;
  };

  window.hideLens = function () {
    const lens = $('#weaveLens');
    if (lens) lens.style.opacity = '0';
  };

  function showProcessStep(id) {
    const s = M.processSteps.find(x => x.id === id);
    const detail = $('#procDetail');
    detail.innerHTML = '';
    detail.appendChild(imgWithRating(s.img, 'all', s.name[lang]));
    const body = el('div', 'body');
    body.innerHTML = `<h3>${s.name[lang]}</h3><p>${s.desc[lang]}</p>`;
    detail.appendChild(body);
  }

  /* ---------- 样式 ---------- */
  function renderStyle(app) {
    app.innerHTML = `
      <div class="page-header"><h1>${t('style.title')}</h1></div>
      <div class="tab-bar" id="styleTabs">
        <div class="tab active" data-tab="type">${t('style.byType')}</div>
        <div class="tab" data-tab="denier">${t('style.byDenier')}</div>
        <div class="tab" data-tab="function">${t('style.byFunction')}</div>
      </div>
      <div id="styleContent"></div>
    `;
    const tabs = $$('#styleTabs .tab');
    tabs.forEach(tab => tab.onclick = () => {
      tabs.forEach(x => x.classList.remove('active'));
      tab.classList.add('active');
      renderStyleTab(tab.dataset.tab);
    });
    renderStyleTab('type');
  }

  function renderStyleTab(tab) {
    const c = $('#styleContent');
    if (tab === 'type') {
      c.innerHTML = `<div class="style-grid">${M.stylesByType.map(s => `
        <div class="style-card">
          ${imgWithRating(s.img, s.rating, s.name[lang]).outerHTML}
          <div class="body">
            <h4>${s.name[lang]}</h4>
            <div class="meta">${s.desc[lang]}</div>
            <div class="meta">${lang === 'zh-CN' ? '固定' : 'Fix'}: ${s.fix[lang]}</div>
            <div class="scene">${s.scene[lang]}</div>
            <button class="btn-mini" onclick="location.hash='/assistant'">${t('style.recommend')}</button>
          </div>
        </div>
      `).join('')}</div>`;
    } else if (tab === 'denier') {
      c.innerHTML = `
        <div class="denier-tip">${t('style.denierTip')}</div>
        <div class="denier-grid">${M.stylesByDenier.map(d => `
          <div class="denier-card">
            <div class="d">${d.range}</div>
            <div class="sh">${d.sheer[lang]}</div>
            <div class="feel">${d.feel[lang]}</div>
            <div class="season">${d.season[lang]}</div>
          </div>
        `).join('')}</div>
      `;
    } else {
      c.innerHTML = `<div class="func-grid">${M.stylesByFunction.map(f => `
        <div class="func-card">
          <div class="ico">${f.ico || '✨'}</div>
          <h4>${f.name[lang]}</h4>
        </div>
      `).join('')}</div>`;
    }
  }

  /* ---------- 企业 ---------- */
  function renderCompany(app) {
    app.innerHTML = `
      <div class="page-header"><h1>${t('company.title')}</h1></div>
      <div class="company-grid">${M.companies.map(c => `
        <div class="company-card" onclick="location.hash='/company/${c.id}'">
          ${imgWithRating(c.img, 'all', c.name).outerHTML}
          <div class="body">
            <div class="co-card-top">
              <h3>${c.name}</h3>
              <span class="co-arrow">→</span>
            </div>
            <div class="meta">${c.country[lang]} · ${c.founded ? c.founded : '—'}</div>
            <p>${c.story[lang]}</p>
            <span class="co-more">${t('company.viewDetail')}</span>
          </div>
        </div>
      `).join('')}</div>

      <section class="map-sec">
        <h2 class="sec-title">${t('guide.regions.title')}</h2>
        <p class="sec-sub">${t('guide.regions.sub')}</p>
        <div class="map-wrap">
          <div class="map-canvas">
            <svg class="world-svg" viewBox="0 0 800 320" role="img" aria-label="hosiery industry belt">
              <path class="land" d="M70,70 C120,50 175,70 180,130 C185,200 150,245 115,240 C75,235 55,180 55,130 C55,105 60,80 70,70 Z"/>
              <path class="land" d="M345,95 C372,72 420,78 436,104 C450,128 436,155 410,161 C384,167 354,151 344,126 C337,111 337,101 345,95 Z"/>
              <path class="land" d="M480,68 C540,42 622,54 662,84 C704,116 718,162 692,202 C666,242 600,242 554,226 C514,212 479,184 469,149 C461,119 468,86 480,68 Z"/>
              <path class="land" d="M395,190 C420,180 445,195 448,225 C451,258 430,288 405,292 C380,296 366,270 370,242 C373,218 380,198 395,190 Z"/>
              <g class="graticule">
                <line x1="0" y1="110" x2="800" y2="110"/>
                <line x1="0" y1="180" x2="800" y2="180"/>
                <line x1="0" y1="250" x2="800" y2="250"/>
              </g>
              ${M.guide.regions.items.map(r => `
                <g class="map-pin" data-key="${r.key}" transform="translate(${r.x},${r.y})" onclick="showRegion('${r.key}')">
                  <circle class="halo" r="16"/>
                  <circle class="dot" r="6"/>
                  <text y="-18" text-anchor="middle">${r.name[lang]}</text>
                </g>`).join('')}
            </svg>
            <span class="map-note">${M.guide.regions.mapTitle[lang]}</span>
          </div>
          <div class="region-detail" id="regionDetail"></div>
        </div>
      </section>
    `;
    window.showRegion(M.guide.regions.items[0].key);
  }

  window.showRegion = function (key) {
    const r = M.guide.regions.items.find(x => x.key === key);
    const box = $('#regionDetail');
    if (!r || !box) return;
    box.innerHTML = `
      <div class="rd-head">
        <h3>${r.name[lang]}</h3>
        <span class="rd-tag">${r.tag[lang]}</span>
      </div>
      <p>${r.text[lang]}</p>
      <div class="rd-brands">${r.brands.map(b => `<span>${b}</span>`).join('')}</div>
    `;
    $$('.map-pin').forEach(p => p.classList.toggle('active', p.dataset.key === key));
  };

  /* ---------- 企业详情 ---------- */
  function renderCompanyDetail(app, id) {
    const c = M.companies.find(x => x.id === id);
    if (!c) {
      app.innerHTML = `<div class="page-header"><h1>404</h1>
        <p><a href="#/company">← ${t('company.back')}</a></p></div>`;
      return;
    }
    const host = (c.site || '').replace(/^https?:\/\//, '').replace(/\/$/, '');
    app.innerHTML = `
      <article class="co-detail">
        <div class="co-hero" style="background-image:linear-gradient(100deg, rgba(42,20,32,.94) 0%, rgba(74,29,54,.72) 52%, rgba(74,29,54,.28) 100%), url('${c.img}')">
          <div class="co-hero-inner">
            <a href="#/company" class="back-link">← ${t('company.back')}</a>
            <div class="co-kicker">${c.country[lang]} · ${c.founded ? (t('company.founded') + ' ' + c.founded) : t('company.modern')}</div>
            <h1>${c.name}</h1>
            <p class="co-lede">${c.tagline[lang]}</p>
            <div class="co-meta">
              <a href="${c.site}" target="_blank" rel="noopener">${t('company.official')} ↗</a>
            </div>
          </div>
        </div>

        <div class="co-grid">
          <div class="co-main">
            <h2 class="co-section-title">${t('company.history')}</h2>
            <ol class="co-timeline">
              ${c.history.map((h, i) => `
                <li class="co-milestone" style="animation-delay:${(i * 0.07).toFixed(2)}s">
                  <span class="co-year">${h.year}</span>
                  <div class="co-mtext">
                    <h3>${h.t[lang]}</h3>
                    <p>${h.d[lang]}</p>
                  </div>
                </li>`).join('')}
            </ol>
          </div>

          <aside class="co-side">
            <div class="co-card">
              <div class="co-card-lbl">${t('company.overview')}</div>
              <p>${c.story[lang]}</p>
            </div>
            <div class="co-card">
              <div class="co-card-lbl">${t('company.site')}</div>
              <a href="${c.site}" target="_blank" rel="noopener" class="co-site">${host} ↗</a>
              <div class="co-note">${t('company.sourceNote')}</div>
            </div>
            <div class="co-card">
              <div class="co-card-lbl">${t('company.explore')}</div>
              <div class="co-links">
                <a href="#/timeline">${t('nav.timeline')} →</a>
                <a href="#/material">${t('nav.material')} →</a>
                <a href="#/style">${t('nav.style')} →</a>
                <a href="#/assistant">${t('nav.assistant')} →</a>
              </div>
            </div>
          </aside>
        </div>

        <div class="co-foot">
          <a href="#/company" class="btn btn-outline">← ${t('company.back')}</a>
        </div>
      </article>
    `;
  }

  /* ---------- 选购助手 ---------- */
  const formState = JSON.parse(localStorage.getItem(LS.form) || '{}');

  function renderAssistant(app) {
    app.innerHTML = `
      <div class="page-header"><h1>${t('assistant.title')}</h1></div>
      <div class="assistant-box">
        ${formRow('season', 'season')}
        ${formRow('scene', 'scene')}
        ${formRow('material', 'material')}
        ${formRow('budget', 'budget')}
        ${formRowMulti('needs', 'needs')}
        <div style="display:flex;gap:12px;margin-top:8px">
          <button class="btn btn-primary" id="calcBtn">${t('assistant.viewResult')}</button>
          <button class="btn btn-ghost" id="resetBtn" style="color:var(--c-ink);border-color:var(--c-line)">${t('assistant.reset')}</button>
        </div>
        <div class="result-area" id="resultArea"></div>
      </div>
    `;
    // 绑定选项
    $$('.opt').forEach(o => {
      const key = o.dataset.key;
      const val = o.dataset.val;
      if (formState[key] && (Array.isArray(formState[key]) ? formState[key].includes(val) : formState[key] === val)) {
        o.classList.add('sel');
      }
      o.onclick = () => {
        const multi = o.dataset.multi === '1';
        if (multi) {
          if (!formState[key]) formState[key] = [];
          const idx = formState[key].indexOf(val);
          if (idx >= 0) formState[key].splice(idx, 1); else formState[key].push(val);
        } else {
          formState[key] = val;
          $$(`.opt[data-key="${key}"]`).forEach(x => x.classList.remove('sel'));
        }
        o.classList.toggle('sel');
        localStorage.setItem(LS.form, JSON.stringify(formState));
      };
    });
    $('#calcBtn').onclick = calcResult;
    $('#resetBtn').onclick = () => {
      Object.keys(formState).forEach(k => delete formState[k]);
      localStorage.removeItem(LS.form);
      $$('.opt').forEach(x => x.classList.remove('sel'));
      $('#resultArea').classList.remove('show');
      $('#resultArea').innerHTML = '';
    };
  }

  function formRow(key, labelKey) {
    const opts = M.i18n[lang].assistant[labelKey];
    return `
      <div class="form-row">
        <label>${t('assistant.' + (key === 'season' ? 'step1' : key === 'scene' ? 'step2' : key === 'material' ? 'step3' : key === 'budget' ? 'step4' : 'step5'))}</label>
        <div class="opt-group">
          ${Object.entries(opts).map(([k, v]) => `<div class="opt" data-key="${key}" data-val="${k}">${v}</div>`).join('')}
        </div>
      </div>
    `;
  }

  function formRowMulti(key, labelKey) {
    const opts = M.i18n[lang].assistant[labelKey];
    return `
      <div class="form-row">
        <label>${t('assistant.step5')}</label>
        <div class="opt-group">
          ${Object.entries(opts).map(([k, v]) => `<div class="opt" data-key="${key}" data-val="${k}" data-multi="1">${v}</div>`).join('')}
        </div>
      </div>
    `;
  }

  function calcResult() {
    if (!formState.season) { toast(lang === 'zh-CN' ? '请选择季节' : 'Please select season'); return; }
    if (!formState.scene) { toast(lang === 'zh-CN' ? '请选择场景' : 'Please select scene'); return; }

    // 丹尼数区间
    const denierMap = { summer: [1, 20], spring: [20, 80], autumn: [20, 80], winter: [80, 300] };
    const [dMin, dMax] = denierMap[formState.season] || [20, 80];

    // 款式优先级
    const sceneType = {
      daily: ['pantyhose', 'kneehigh'],
      office: ['pantyhose'],
      date: ['pantyhose', 'stockings'],
      sport: ['kneehigh', 'pantyhose'],
      special: ['stockings', 'fishnet']
    };
    const types = sceneType[formState.scene] || ['pantyhose'];

    // 材质过滤
    const matPref = formState.material;

    // 生成推荐
    const sceneLabel = t('assistant.scene.' + formState.scene);
    const results = types.map(type => {
      const typeName = M.stylesByType.find(s => s.id === type)?.name[lang] || type;
      let denierLabel, materialAdvice;
      if (dMax <= 20) { denierLabel = '10–20D'; materialAdvice = lang === 'zh-CN' ? '尼龙+氨纶' : 'Nylon+Spandex'; }
      else if (dMax <= 80) { denierLabel = '30–80D'; materialAdvice = matPref === 'microfiber' ? (lang === 'zh-CN' ? '超细纤维混纺' : 'Microfiber blend') : (lang === 'zh-CN' ? '尼龙+氨纶' : 'Nylon+Spandex'); }
      else { denierLabel = '80D+'; materialAdvice = matPref === 'functional' ? (lang === 'zh-CN' ? '功能保暖纤维' : 'Functional warm fiber') : (lang === 'zh-CN' ? '超细纤维' : 'Microfiber'); }

      const seasonTip = formState.season === 'summer' ? (lang === 'zh-CN' ? '夏季需超薄透明感' : 'Summer needs ultra-sheer feel')
        : formState.season === 'winter' ? (lang === 'zh-CN' ? '冬季需要厚实保暖' : 'Winter needs warmth')
        : (lang === 'zh-CN' ? '春秋季节适合适中厚度' : 'Spring/autumn suits medium thickness');
      const reason = lang === 'zh-CN'
        ? `${seasonTip}，${denierLabel}提供最佳体感；${sceneLabel}场景宜选${typeName}；${materialAdvice}保证${matPref === 'functional' ? '功能与舒适' : '贴合与耐磨'}。`
        : `${seasonTip}; ${denierLabel} gives the best feel; ${typeName} fits ${sceneLabel}; ${materialAdvice} for ${matPref === 'functional' ? 'function & comfort' : 'fit & durability'}.`;

      // 匹配商品
      const matched = M.products.filter(p =>
        types.includes(p.type) &&
        p.denier[0] <= dMax && p.denier[1] >= dMin &&
        (!matPref || matPref === 'any' || p.material === matPref)
      ).slice(0, 3);

      return { type, typeName, denierLabel, materialAdvice, reason, products: matched };
    });

    const area = $('#resultArea');
    area.classList.add('show');
    area.innerHTML = `
      <h3 style="font-family:var(--f-serif);color:var(--c-primary-d);margin-bottom:16px">${t('assistant.result')}</h3>
      ${results.map(r => `
        <div class="result-card">
          <h4>${r.typeName} · ${r.denierLabel} · ${r.materialAdvice}</h4>
          <div class="reason">${t('assistant.reason')}：${r.reason}</div>
          ${r.products.length ? `
            <div style="font-weight:600;margin:12px 0 6px">${t('assistant.products')}</div>
            <div class="prod-list">
              ${r.products.map(p => `
                <div class="prod-card">
                  <img src="${p.img}" alt="${p.name[lang]}" loading="lazy">
                  <div class="body">
                    <div class="nm">${p.name[lang]}</div>
                    <div class="brand">${p.brand} · ${p.platform[lang]}</div>
                    <div class="price">¥${p.price}</div>
                    <a href="${p.url}" target="_blank" class="goto" onclick="event.stopPropagation()">${t('assistant.goto')} →</a>
                  </div>
                </div>
              `).join('')}
            </div>
            <div class="price-note">${t('assistant.priceNote')}</div>
          ` : `<div class="price-note">${t('assistant.noMatch')}</div>`}
        </div>
      `).join('')}
    `;
  }

  /* ---------- 实用科普 ---------- */
  let quizState = null;

  function renderGuide(app, tab) {
    const tabs = ['denier', 'label', 'care', 'myth', 'quiz', 'eco'];
    if (!tabs.includes(tab)) tab = 'denier';
    app.innerHTML = `
      <div class="page-header">
        <h1>${t('guide.title')}</h1>
        <p>${t('guide.sub')}</p>
      </div>
      <nav class="guide-tabs">
        ${tabs.map(x => `<a href="#/guide/${x}" class="guide-tab${x === tab ? ' active' : ''}">${t('guide.tabs.' + x)}</a>`).join('')}
      </nav>
      <div id="guideBody"></div>
    `;
    const body = $('#guideBody');
    ({ denier: renderDenier, label: renderLabel, care: renderCare, myth: renderMyth, quiz: renderQuiz, eco: renderEco })[tab](body);
  }

  /* 丹尼模拟器 */
  function renderDenier(body) {
    const g = M.guide.denier;
    body.innerHTML = `
      <div class="denier-panel">
        <div class="denier-visual">
          <div class="denier-photo">
            <img src="assets/legs_crossed.jpg" alt="">
            <div class="denier-veil" id="denierVeil"></div>
          </div>
          <div class="denier-badge" id="denierBadge"></div>
        </div>
        <div class="denier-controls">
          <p class="denier-tip">${t('guide.denier.drag')}</p>
          <div class="denier-value"><span id="denierNum">${g.default}</span><small>D</small></div>
          <input type="range" id="denierRange" min="${g.min}" max="${g.max}" step="${g.step}" value="${g.default}"
                 oninput="updateDenierUI(this.value)">
          <div class="denier-scale"><span>${g.min}D</span><span>${g.max}D</span></div>
          <div class="denier-metrics" id="denierMetrics"></div>
          <div class="denier-note" id="denierNote"></div>
          <div class="denier-assume">${t('guide.denier.blackNote')}</div>
        </div>
      </div>
    `;
    window.updateDenierUI(g.default);
  }

  window.updateDenierUI = function (v) {
    const g = M.guide.denier;
    const d = Number(v);
    const lv = g.levels.find(x => d <= x.upTo) || g.levels[g.levels.length - 1];
    const veil = $('#denierVeil');
    if (!veil) return;
    $('#denierNum').textContent = d;
    veil.style.backgroundColor = `rgba(30,20,27,${(0.05 + (d / g.max) * 0.92).toFixed(3)})`;
    $('#denierBadge').textContent = lv.name[lang];
    const bar = (val, max, label, pct) => `
      <div class="metric">
        <span>${label}</span>
        <div class="bar"><i style="width:${(val / max) * 100}%"></i></div>
        <b>${val}${pct ? '%' : ' / 5'}</b>
      </div>`;
    $('#denierMetrics').innerHTML =
      bar(lv.light, 100, t('guide.denier.light'), true) +
      bar(lv.warmth, 5, t('guide.denier.warmth'), false) +
      bar(lv.strength, 5, t('guide.denier.strength'), false) +
      `<div class="metric"><span>${t('guide.denier.season')}</span><b class="metric-txt">${lv.season[lang]}</b></div>`;
    $('#denierNote').innerHTML = `<strong>${t('guide.denier.note')}</strong>${lv.note[lang]}`;
  };

  /* 标签解读 */
  function renderLabel(body) {
    const g = M.guide.label;
    body.innerHTML = `
      <div class="label-demo">
        <div class="label-card">
          <div class="label-head">${g.sampleTitle[lang]}</div>
          <ul class="label-rows">
            ${g.rows.map(r => `
              <li class="label-row" data-key="${r.key}" onclick="showLabelTerm('${r.key}')">
                <span class="lk">${r.k[lang]}</span>
                <span class="lv">${r.v[lang]}</span>
                <i>→</i>
              </li>`).join('')}
          </ul>
          <div class="label-hint">${g.hint[lang]}</div>
        </div>
        <div class="label-detail" id="labelDetail"></div>
      </div>
      <h3 class="guide-sub-title">${t('guide.label.terms')}</h3>
      <div class="term-grid">
        ${g.terms.map(x => `<button class="term-chip" data-key="${x.key}" onclick="showLabelTerm('${x.key}')">${x.term[lang]}</button>`).join('')}
      </div>
    `;
    window.showLabelTerm(g.rows[0].key);
  }

  window.showLabelTerm = function (key) {
    const g = M.guide.label;
    const term = g.terms.find(x => x.key === key);
    if (!term || !$('#labelDetail')) return;
    $('#labelDetail').innerHTML = `
      <div class="ld-term">${term.term[lang]}</div>
      <p>${term.desc[lang]}</p>`;
    $$('.label-row, .term-chip').forEach(x => x.classList.toggle('active', x.dataset.key === key));
  };

  /* 保养指南 */
  function renderCare(body) {
    body.innerHTML = `
      <div class="care-list">
        ${M.guide.care.map(c => `
          <article class="care-item">
            <div class="care-n">${c.n}</div>
            <div>
              <h3>${c.title[lang]}</h3>
              <ul>${c.points.map(p => `<li>${p[lang]}</li>`).join('')}</ul>
            </div>
          </article>`).join('')}
      </div>
    `;
  }

  /* 常见误区 */
  function renderMyth(body) {
    const mythTag = lang === 'zh-CN' ? '误区' : 'Myth';
    const truthTag = lang === 'zh-CN' ? '真相' : 'Truth';
    body.innerHTML = `
      <div class="myth-grid">
        ${M.guide.myths.map(m => `
          <article class="myth-item">
            <div class="myth-claim">
              <span class="tag tag-myth">${mythTag}</span>
              <span class="myth-text">${m.claim[lang]}</span>
            </div>
            <div class="myth-truth">
              <span class="tag tag-truth">${truthTag}</span>
              <span class="myth-text">${m.truth[lang]}</span>
            </div>
          </article>`).join('')}
      </div>
    `;
  }

  /* 知识小测 */
  function renderQuiz(body) {
    const qs = M.guide.quiz;
    if (!quizState) quizState = { answered: {} };
    body.innerHTML = `
      <div class="quiz-wrap">
        ${qs.map((item, qi) => {
          const ans = quizState.answered[qi];
          return `
            <article class="quiz-q">
              <div class="quiz-qnum">${String(qi + 1).padStart(2, '0')}</div>
              <h3>${item.q[lang]}</h3>
              <div class="quiz-opts">
                ${item.options.map((op, oi) => {
                  let cls = 'quiz-opt';
                  if (ans !== undefined) {
                    if (oi === item.answer) cls += ' correct';
                    else if (oi === ans) cls += ' wrong';
                    else cls += ' muted';
                  }
                  return `<button class="${cls}" onclick="answerQuiz(${qi},${oi})"${ans !== undefined ? ' disabled' : ''}>
                    <span class="oi">${String.fromCharCode(65 + oi)}</span>${op[lang]}
                  </button>`;
                }).join('')}
              </div>
              ${ans !== undefined ? `<div class="quiz-explain ${ans === item.answer ? 'ok' : 'no'}">
                ${ans === item.answer ? t('guide.quiz.correct') : t('guide.quiz.wrong')} · ${item.explain[lang]}
              </div>` : ''}
            </article>`;
        }).join('')}
        <div id="quizResult"></div>
      </div>
    `;
    updateQuizResult();
  }

  window.answerQuiz = function (qi, oi) {
    if (!quizState || quizState.answered[qi] !== undefined) return;
    quizState.answered[qi] = oi;
    const score = M.guide.quiz.reduce((s, item, i) => s + (quizState.answered[i] === item.answer ? 1 : 0), 0);
    const best = Math.max(Number(localStorage.getItem(LS.quiz) || 0), score);
    localStorage.setItem(LS.quiz, best);
    renderQuiz($('#guideBody'));
  };

  function updateQuizResult() {
    const total = M.guide.quiz.length;
    const done = Object.keys(quizState.answered).length;
    const box = $('#quizResult');
    if (!box || done < total) return;
    const score = M.guide.quiz.reduce((s, item, i) => s + (quizState.answered[i] === item.answer ? 1 : 0), 0);
    box.innerHTML = `
      <div class="quiz-result">
        <div class="qr-score"><span>${score}</span> / ${total}</div>
        ${score >= 4 ? `<div class="qr-badge">${t('guide.quiz.badge')}</div>` : ''}
        <p>${t('guide.quiz.best')}：${localStorage.getItem(LS.quiz) || 0} / ${total}</p>
        <button class="btn btn-primary" onclick="resetQuiz()">${t('guide.quiz.retry')}</button>
      </div>`;
  }

  window.resetQuiz = function () {
    quizState = { answered: {} };
    renderQuiz($('#guideBody'));
  };

  /* 环保与健康 */
  function renderEco(body) {
    const g = M.guide.eco;
    const grid = (items) => `
      <div class="eco-grid">
        ${items.map((f, i) => `
          <div class="eco-item">
            <span class="eco-n">${i + 1}</span>
            <div><h4>${f.t[lang]}</h4><p>${f.d[lang]}</p></div>
          </div>`).join('')}
      </div>`;
    body.innerHTML = `
      <h3 class="guide-sub-title">${g.factsTitle[lang]}</h3>
      ${grid(g.facts)}
      <h3 class="guide-sub-title">${g.healthTitle[lang]}</h3>
      ${grid(g.health)}
      <p class="eco-disclaimer"><strong>${t('guide.eco.disclaimer')}：</strong>${g.disclaimer[lang]}</p>
    `;
  }

  /* ---------- 收藏 ---------- */
  function getFavs() { return JSON.parse(localStorage.getItem(LS.fav) || '[]'); }
  function toggleFav(id) {
    const favs = getFavs();
    const idx = favs.indexOf(id);
    if (idx >= 0) favs.splice(idx, 1); else favs.push(id);
    localStorage.setItem(LS.fav, JSON.stringify(favs));
    return favs.includes(id);
  }

  function renderFavorites(app) {
    const favs = getFavs();
    app.innerHTML = `<div class="page-header"><h1>${t('assistant.myFav')}</h1></div>`;
    if (!favs.length) {
      app.innerHTML += `<div style="padding:40px;text-align:center;color:var(--c-ink-3)">${lang === 'zh-CN' ? '暂无收藏' : 'No favorites yet'}</div>`;
      return;
    }
    // 从各模块查找收藏项（简化：时间轴节点 + 企业）
    const items = [];
    favs.forEach(id => {
      const tl = M.timeline.find(x => x.id === id);
      if (tl) items.push({ type: 'timeline', title: tl.title[lang], img: tl.img, rating: tl.rating, route: 'timeline' });
      const co = M.companies.find(x => x.id === id);
      if (co) items.push({ type: 'company', title: co.name, img: co.img, rating: 'all', route: 'company' });
      const mt = M.materials.find(x => x.id === id);
      if (mt) items.push({ type: 'material', title: mt.name[lang], img: mt.img, rating: 'all', route: 'material' });
    });
    app.innerHTML += `<div class="company-grid">${items.map(it => `
      <div class="company-card" onclick="location.hash='/${it.route}'">
        ${imgWithRating(it.img, it.rating, it.title).outerHTML}
        <div class="body"><h3>${it.title}</h3></div>
      </div>
    `).join('')}</div>`;
  }

  /* ---------- 年龄门 ---------- */
  function showAgeGate() {
    $('#ageTitle').textContent = lang === 'zh-CN' ? '年龄确认' : 'Age Confirmation';
    $('#ageDesc').textContent = t('assistant.ageGate');
    $('#ageConfirm').textContent = t('assistant.confirm');
    $('#ageUnder').textContent = t('assistant.underage');
    $('#ageModal').classList.add('show');
  }

  /* ---------- 18+ 图片确认 ---------- */
  function bindAdultOverlays() {
    $$('.img-mask[data-adult="1"]').forEach(m => {
      m.onclick = (e) => {
        e.stopPropagation();
        $('#adultDesc').textContent = t('assistant.adultConfirm');
        $('#adultModal').classList.add('show');
        $('#adultConfirm').onclick = () => {
          adultConfirmed = true;
          $('#adultModal').classList.remove('show');
          // 移除所有 18+ 遮罩
          $$('.img-mask[data-adult="1"]').forEach(mm => mm.remove());
        };
      };
    });
  }

  /* ---------- 事件绑定 ---------- */
  function bindGlobal() {
    $('#langBtn').onclick = () => {
      lang = lang === 'zh-CN' ? 'en' : 'zh-CN';
      localStorage.setItem(LS.lang, lang);
      applyI18n();
      router();
    };
    $('#favBtn').onclick = () => { location.hash = '/favorites'; };

    $('#ageConfirm').onclick = () => {
      localStorage.setItem(LS.age, '1');
      $('#ageModal').classList.remove('show');
    };
    $('#ageUnder').onclick = () => {
      $('#ageModal').classList.remove('show');
      toast(lang === 'zh-CN' ? '将仅展示无真人穿搭内容' : 'Showing non-figurative content only');
    };
    $('#adultCancel').onclick = () => $('#adultModal').classList.remove('show');

    // 路由变化
    window.addEventListener('hashchange', () => { router(); bindAdultOverlays(); });
  }

  /* ---------- 启动 ---------- */
  function init() {
    applyI18n();
    bindGlobal();
    if (!localStorage.getItem(LS.age)) {
      showAgeGate();
    }
    router();
    setTimeout(bindAdultOverlays, 100);
  }

  document.addEventListener('DOMContentLoaded', init);
})();

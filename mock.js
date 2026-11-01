/* ============================================================
   丝袜的故事 — 数据层（mock 数据 + i18n）
   所有内容为演示用 mock，真实素材上线前替换
   ============================================================ */

window.MOCK = (function () {

  /* ---------- i18n 文案 ---------- */
  const i18n = {
    'zh-CN': {
      brand: '丝袜的故事',
      subtitle: '一双丝袜的百年演变与选购指南',
      nav: {
        home: '首页', timeline: '时间轴', material: '材料', process: '工艺',
        style: '样式', company: '企业', assistant: '选购助手', guide: '科普指南'
      },
      home: {
        heroTitle: '从丝绸到智能纤维',
        heroSub: '一双丝袜，串联起合成纤维工业、针织工艺与大众时尚的百年进程',
        cta: '开始探索',
        assistantCta: '帮我选丝袜',
        sections: {
          timeline: { t: '百年时间轴', d: '从 1938 年尼龙诞生到今日环保纤维，八个关键节点看懂丝袜演变' },
          material: { t: '材料发展', d: '丝绸、尼龙、莱卡、超细纤维……每一次材料革新都重塑了丝袜' },
          process: { t: '加工工艺', d: '从纱线到成品，五步工艺解密一双丝袜的诞生' },
          style: { t: '成品样式', d: '按款式、丹尼数、功能三个维度系统理解丝袜分类' },
          company: { t: '企业故事', d: '杜邦、莱卡、福助、浪莎……产业变迁背后的企业传奇' },
          assistant: { t: '选购助手', d: '回答几个问题，为你匹配最适合的丝袜类型与商品' }
        },
        guideBand: {
          eyebrow: '可交互小工具',
          title: '实用科普指南',
          sub: '丹尼模拟器、标签解读、保养指南、误区辟谣、知识小测、环保与健康——六个可以上手玩的小工具',
          cta: '进入指南',
          also: '另外：时间轴页底部有「文化符号 + 历史影像对比」，材料页有「材质 × 丹尼 × 场景」三维表，工艺页有「织法放大镜」，企业页有「全球产业带地图」',
          badge: '新增'
        }
      },
      timeline: {
        title: '丝袜发展时间轴',
        scroll: '向下滚动探索',
        related: '关联',
        prev: '上一节点', next: '下一节点'
      },
      material: {
        title: '材料发展',
        compare: '材料对比',
        fields: { elasticity: '弹性', sheerness: '透明度', durability: '耐用度', price: '价格', season: '适用季节' }
      },
      process: {
        title: '加工工艺',
        autoplay: '自动播放'
      },
      style: {
        title: '成品样式',
        byType: '按款式', byDenier: '按丹尼数', byFunction: '按功能',
        denierTip: '丹尼数（Denier）：1D = 1克/9000米纱线，数值越大越厚',
        recommend: '用选购助手推荐此款'
      },
      guide: {
        title: '实用科普',
        sub: '丹尼、标签、保养与常见误区：把丝袜真正用明白',
        tabs: { denier: '丹尼模拟器', label: '标签解读', care: '保养指南', myth: '常见误区', quiz: '知识小测', eco: '环保与健康' },
        denier: { drag: '拖动滑块，看不同丹尼数的透光与体感', light: '透光度', warmth: '保暖度', strength: '耐用度', season: '适合', note: '说明', blackNote: '以黑色款为例，深色通常更不透' },
        label: { terms: '术语速查' },
        quiz: { score: '得分', badge: '丹尼达人', retry: '再测一次', best: '最佳成绩', correct: '回答正确', wrong: '再想想' },
        eco: { disclaimer: '免责声明' },
        weave: { title: '织法放大镜', sub: '把镜头移到织物上，看经编与纬编的结构差异' },
        matrix: { title: '材质 × 丹尼 × 场景', sub: '三个维度对照：先定场合，再选厚度，最后看材质' },
        culture: { title: '丝袜作为文化符号', sub: '从战时配给到职场着装，一双袜子如何记录社会变迁' },
        regions: { title: '全球产业带', sub: '点击地图节点，查看代表性企业与产业特征' }
      },
      company: {
        title: '企业故事',
        back: '返回企业列表', history: '发展历程', overview: '企业概览',
        site: '官方网站', official: '访问官网', sourceNote: '资料整理自企业官网与公开报道，仅供参考',
        explore: '继续探索', founded: '创立于', modern: '现代企业', viewDetail: '查看发展历程'
      },
      assistant: {
        title: '选购助手',
        step1: '季节', step2: '场景', step3: '材质', step4: '预算', step5: '特殊需求',
        season: { spring: '春', summer: '夏', autumn: '秋', winter: '冬' },
        scene: { daily: '日常通勤', office: '职场正式', date: '休闲约会', sport: '运动', special: '特殊场合' },
        material: { any: '不限', nylon: '尼龙', microfiber: '超细纤维', functional: '功能纤维' },
        budget: { low: '平价', mid: '中端', high: '高端' },
        needs: { uv: '防晒', warm: '保暖', shape: '塑型', antiSnag: '防勾丝', antiBacterial: '抗菌' },
        viewResult: '查看推荐', reset: '重新选择', result: '为你推荐',
        reason: '推荐理由', products: '推荐商品', more: '了解更多', goto: '去看看',
        noMatch: '暂无匹配商品，可查看类型介绍', priceNote: '价格仅供参考，以电商平台实时价格为准',
        ageGate: '本应用包含穿搭展示内容，请确认您已年满 16 周岁', confirm: '确认', underage: '未满 16 岁',
        adultConfirm: '本图片可能包含成熟内容，确认查看？',
        fav: '收藏', unfav: '取消收藏', myFav: '我的收藏', lang: 'EN'
      },
      common: { source: '素材来源', loading: '加载中...', imgFail: '素材加载失败', retry: '重试', videoFail: '视频暂不可用' }
    },
    'en': {
      brand: 'The Story of Hosiery',
      subtitle: 'A century of evolution & a guide to choosing stockings',
      nav: {
        home: 'Home', timeline: 'Timeline', material: 'Materials', process: 'Process',
        style: 'Styles', company: 'Companies', assistant: 'Assistant', guide: 'Guide'
      },
      home: {
        heroTitle: 'From Silk to Smart Fibers',
        heroSub: 'A single pair of stockings threads together a century of synthetic fiber, knitting technology, and fashion.',
        cta: 'Explore', assistantCta: 'Find My Hosiery',
        sections: {
          timeline: { t: 'Century Timeline', d: 'Eight key nodes from nylon in 1938 to eco-fibers today' },
          material: { t: 'Materials', d: 'Silk, nylon, LYCRA®, microfiber — each material reshaped hosiery' },
          process: { t: 'Manufacturing', d: 'Five steps from yarn to finished product' },
          style: { t: 'Styles', d: 'Understand hosiery by cut, denier, and function' },
          company: { t: 'Companies', d: 'DuPont, LYCRA, Fukuske, Langsha and more' },
          assistant: { t: 'Shopping Assistant', d: 'Answer a few questions for matched recommendations' }
        },
        guideBand: {
          eyebrow: 'Interactive tools',
          title: 'Practical Guide',
          sub: 'Denier simulator, label decoder, care guide, myths, quick quiz, eco & health — six hands-on tools',
          cta: 'Open the guide',
          also: 'Also new at the bottom of pages: culture cards + before/after slider on Timeline, Material × Denier × Scene matrix on Materials, weave loupe on Manufacturing, and the global industry-belt map on Companies',
          badge: 'New'
        }
      },
      timeline: { title: 'Hosiery Timeline', scroll: 'Scroll to explore', related: 'Related', prev: 'Prev', next: 'Next' },
      material: { title: 'Material Evolution', compare: 'Compare', fields: { elasticity: 'Elasticity', sheerness: 'Sheerness', durability: 'Durability', price: 'Price', season: 'Season' } },
      process: { title: 'Manufacturing Process', autoplay: 'Auto play' },
      style: { title: 'Product Styles', byType: 'By Cut', byDenier: 'By Denier', byFunction: 'By Function', denierTip: 'Denier: 1D = 1g per 9000m of yarn; higher = thicker', recommend: 'Recommend with Assistant' },
      guide: {
        title: 'Practical Guide',
        sub: 'Denier, labels, care and myths — how hosiery actually works',
        tabs: { denier: 'Denier Lab', label: 'Label Decoder', care: 'Care Guide', myth: 'Myths', quiz: 'Quick Quiz', eco: 'Eco & Health' },
        denier: { drag: 'Drag the slider to see sheerness and feel change', light: 'Sheerness', warmth: 'Warmth', strength: 'Durability', season: 'Best for', note: 'Note', blackNote: 'Black shown; darker shades read as more opaque' },
        label: { terms: 'Term glossary' },
        quiz: { score: 'Score', badge: 'Denier Pro', retry: 'Try again', best: 'Best', correct: 'Correct', wrong: 'Not quite' },
        eco: { disclaimer: 'Disclaimer' },
        weave: { title: 'Weave Loupe', sub: 'Move the lens over the fabric to compare warp and weft structure' },
        matrix: { title: 'Material × Denier × Scene', sub: 'Three axes in one table: occasion, thickness, then material' },
        culture: { title: 'Hosiery as a Cultural Sign', sub: 'From wartime rationing to office dress codes, how a pair of stockings records social change' },
        regions: { title: 'Global Industry Belt', sub: 'Tap a map pin to see representative companies and regional strengths' }
      },
      company: {
        title: 'Company Stories',
        back: 'Back to companies', history: 'Milestones', overview: 'Overview',
        site: 'Official website', official: 'Visit official site', sourceNote: 'Compiled from official sites and public reports, for reference only',
        explore: 'Explore more', founded: 'Founded', modern: 'Modern enterprise', viewDetail: 'View history'
      },
      assistant: {
        title: 'Shopping Assistant',
        step1: 'Season', step2: 'Scene', step3: 'Material', step4: 'Budget', step5: 'Needs',
        season: { spring: 'Spring', summer: 'Summer', autumn: 'Autumn', winter: 'Winter' },
        scene: { daily: 'Daily commute', office: 'Formal office', date: 'Casual dating', sport: 'Sports', special: 'Special occasion' },
        material: { any: 'Any', nylon: 'Nylon', microfiber: 'Microfiber', functional: 'Functional' },
        budget: { low: 'Budget', mid: 'Mid-range', high: 'Premium' },
        needs: { uv: 'UV protection', warm: 'Warmth', shape: 'Shaping', antiSnag: 'Anti-snag', antiBacterial: 'Antibacterial' },
        viewResult: 'Show results', reset: 'Reset', result: 'Recommended for you',
        reason: 'Why', products: 'Products', more: 'Learn more', goto: 'View',
        noMatch: 'No matching products, see type intro', priceNote: 'Prices are indicative only', ageGate: 'This app contains fashion imagery. Confirm you are 16+', confirm: 'Confirm', underage: 'Under 16',
        adultConfirm: 'This image may contain mature content. View?',
        fav: 'Favorite', unfav: 'Unfavorite', myFav: 'My Favorites', lang: '中'
      },
      common: { source: 'Source', loading: 'Loading...', imgFail: 'Failed to load', retry: 'Retry', videoFail: 'Video unavailable' }
    }
  };

  /* ---------- 时间轴 ---------- */
  const timeline = [
    { id: 't1938', year: 1938, title: { 'zh-CN': '尼龙纤维诞生', en: 'Nylon is born' },
      summary: { 'zh-CN': '杜邦公司 Wallace Carothers 团队发明尼龙，第一种真正的合成纤维，旨在取代丝绸。', en: "DuPont's Wallace Carothers team invents nylon — the first true synthetic fiber, designed to replace silk." },
      tags: ['material', 'company'], img: 'assets/tl_1938.jpg', rating: 'all' },
    { id: 't1939', year: 1939, title: { 'zh-CN': '尼龙长袜首次发售', en: 'First nylon stockings sold' },
      summary: { 'zh-CN': '尼龙长袜在杜邦工厂所在地 Wilmington 的少量商店开售，引发抢购。', en: 'Nylon stockings go on sale in a few shops in Wilmington, where the DuPont factory is located.' },
      tags: ['style', 'company'], img: 'assets/woman_leaning.jpg', rating: 'all' },
    { id: 't1940', year: 1940, title: { 'zh-CN': '二战中断与"画尼龙"', en: 'WWII disruption & "liquid stockings"' },
      summary: { 'zh-CN': '战争使尼龙转用于降落伞与轮胎，女性用颜料在腿上画"缝线"模拟丝袜。', en: 'Nylon is redirected to parachutes and tires; women paint "seams" on their legs to mimic stockings.' },
      tags: ['material', 'style'], img: 'assets/tl_1940.jpg', rating: 'all' },
    { id: 't1959', year: 1959, title: { 'zh-CN': '莱卡氨纶问世', en: 'LYCRA® spandex arrives' },
      summary: { 'zh-CN': '杜邦推出 LYCRA® 氨纶纤维，丝袜获得弹性革命，更贴合身形。', en: "DuPont launches LYCRA® spandex, an elasticity revolution that makes hosiery fit the body." },
      tags: ['material', 'company'], img: 'assets/mat_lycra.jpg', rating: 'all' },
    { id: 't1960', year: 1960, title: { 'zh-CN': '连裤袜普及', en: 'Pantyhose goes mainstream' },
      summary: { 'zh-CN': '迷你裙风潮推动连裤袜取代长筒袜+吊袜带，成为女性日常主流。', en: 'The miniskirt trend pushes pantyhose to replace stockings-and-garters as everyday wear.' },
      tags: ['style'], img: 'assets/minidress.jpg', rating: '16' },
    { id: 't1985', year: 1985, title: { 'zh-CN': '彩色与图案丝袜', en: 'Colored & patterned hosiery' },
      summary: { 'zh-CN': '流行文化带动渔网袜、彩色丝袜、图案丝袜的多样化表达。', en: 'Pop culture drives fishnet, colored, and patterned hosiery as diverse expression.' },
      tags: ['style'], img: 'assets/fishnet.jpg', rating: '16' },
    { id: 't2000', year: 2000, title: { 'zh-CN': '功能纤维时代', en: 'Age of functional fibers' },
      summary: { 'zh-CN': '吸湿排汗、抗菌、防晒、压力袜等功能性丝袜进入市场。', en: 'Moisture-wicking, antibacterial, UV-protection, and compression hosiery enter the market.' },
      tags: ['material', 'process'], img: 'assets/mat_functional.jpg', rating: 'all' },
    { id: 't2020', year: 2020, title: { 'zh-CN': '环保与可持续', en: 'Eco & sustainability' },
      summary: { 'zh-CN': '再生尼龙（如 Econyl）、生物基纤维进入丝袜材料体系。', en: 'Recycled nylon (e.g. Econyl) and bio-based fibers enter hosiery materials.' },
      tags: ['material'], img: 'assets/mat_eco.jpg', rating: 'all' }
  ];

  /* ---------- 材料 ---------- */
  const materials = [
    { id: 'silk', name: { 'zh-CN': '丝绸 Silk', en: 'Silk' }, era: '尼龙出现前',
      desc: { 'zh-CN': '天然纤维，光泽优雅但昂贵、不耐磨、易缩水，是早期高档长袜的主材。', en: 'Natural fiber with elegant sheen but costly, not durable, prone to shrinkage — the main material for early premium stockings.' },
      props: { elasticity: 1, sheerness: 4, durability: 2, price: 5, season: '春秋' },
      img: 'assets/mat_silk.jpg' },
    { id: 'nylon', name: { 'zh-CN': '尼龙 Nylon', en: 'Nylon' }, era: '1938',
      desc: { 'zh-CN': '强度高、耐磨、价廉，可做到极薄透明，是当代丝袜的主体纤维。', en: 'Strong, durable, affordable, can be ultra-sheer — the main fiber of modern hosiery.' },
      props: { elasticity: 2, sheerness: 5, durability: 4, price: 2, season: '四季' },
      img: 'assets/mat_nylon.jpg' },
    { id: 'lycra', name: { 'zh-CN': '氨纶/莱卡 LYCRA®', en: 'Spandex / LYCRA®' }, era: '1959',
      desc: { 'zh-CN': '高弹性（可拉伸 5–7 倍），与尼龙混纺提供贴合感，占比通常 10%–30%。', en: 'Highly elastic (stretches 5–7x), blended with nylon for fit, usually 10%–30%.' },
      props: { elasticity: 5, sheerness: 3, durability: 3, price: 3, season: '四季' },
      img: 'assets/mat_lycra.jpg' },
    { id: 'microfiber', name: { 'zh-CN': '超细纤维 Microfiber', en: 'Microfiber' }, era: '1990s+',
      desc: { 'zh-CN': '触感柔软、保暖性好、不易勾丝，常用于中厚款与秋冬款。', en: 'Soft touch, good warmth, less prone to snagging — used in medium-thick and autumn/winter styles.' },
      props: { elasticity: 3, sheerness: 2, durability: 4, price: 3, season: '秋冬' },
      img: 'assets/mat_microfiber.jpg' },
    { id: 'functional', name: { 'zh-CN': '功能纤维 Functional', en: 'Functional fiber' }, era: '2000s+',
      desc: { 'zh-CN': '吸湿排汗、抗菌防臭、防晒、远红外保暖等，赋予丝袜特定功能。', en: 'Moisture-wicking, antibacterial, UV-protection, far-infrared warmth — gives hosiery specific functions.' },
      props: { elasticity: 3, sheerness: 3, durability: 3, price: 4, season: '四季' },
      img: 'assets/mat_functional.jpg' },
    { id: 'eco', name: { 'zh-CN': '再生/环保纤维 Eco', en: 'Eco / recycled' }, era: '2020s+',
      desc: { 'zh-CN': '再生尼龙（Econyl 等）、生物基纤维，响应可持续时尚趋势。', en: 'Recycled nylon (Econyl etc.), bio-based fibers — responding to sustainable fashion.' },
      props: { elasticity: 3, sheerness: 3, durability: 3, price: 4, season: '四季' },
      img: 'assets/mat_eco.jpg' }
  ];

  /* ---------- 加工工艺 ---------- */
  const processSteps = [
    { id: 'knitting', name: { 'zh-CN': '编织', en: 'Knitting' },
      desc: { 'zh-CN': '圆形针织机将纱线编织成无缝管状织物。主流设备如意大利 Santoni SM8 系列、日本福原圆机，针距决定细度。', en: 'Circular knitting machines weave seamless tubes of fabric. Mainstream machines include Santoni SM8 and Fukuhara; gauge determines fineness.' },
      img: 'assets/proc_knitting.jpg' },
    { id: 'sewing', name: { 'zh-CN': '缝合', en: 'Sewing' },
      desc: { 'zh-CN': '将两条腿管与裤身部分缝合，形成连裤袜雏形；处理裆部与脚尖加固。', en: 'Sew two leg tubes to the panty body to form the pantyhose; reinforce crotch and toe.' },
      img: 'assets/proc_sewing.jpg' },
    { id: 'dyeing', name: { 'zh-CN': '染色', en: 'Dyeing' },
      desc: { 'zh-CN': '分散染料用于浅色，酸性染料用于中深色，金属络合染料用于极深色（如黑色）。通过匹染机、堆叠机或滚筒染色机完成。', en: 'Disperse dyes for light shades, acid dyes for medium-dark, metal-complex dyes for very dark (e.g. black). Done via palette, stack, or tumble machines.' },
      img: 'assets/proc_dyeing.jpg' },
    { id: 'boarding', name: { 'zh-CN': '定型', en: 'Boarding' },
      desc: { 'zh-CN': '将袜套在金属腿模上加热定型，设定最终形状与弹性，消除褶皱。', en: 'Heat-set hosiery on metal leg forms to set final shape and elasticity, removing wrinkles.' },
      img: 'assets/proc_boarding.jpg' },
    { id: 'inspection', name: { 'zh-CN': '检验与包装', en: 'Inspection & Packaging' },
      desc: { 'zh-CN': '人工或机器检验瑕疵、配对、装袋，最终成为可销售成品。', en: 'Manual or machine inspection for defects, pairing, and bagging into saleable products.' },
      img: 'assets/proc_inspection.jpg' }
  ];

  /* ---------- 成品样式 ---------- */
  const stylesByType = [
    { id: 'pantyhose', name: { 'zh-CN': '连裤袜', en: 'Pantyhose / Tights' },
      desc: { 'zh-CN': '从腰部到脚部一体', en: 'Waist-to-foot one-piece' },
      fix: { 'zh-CN': '腰部松紧', en: 'Waistband' },
      scene: { 'zh-CN': '日常、职场、秋冬', en: 'Daily, office, autumn/winter' },
      img: 'assets/pantyhose.jpg', rating: '16' },
    { id: 'stockings', name: { 'zh-CN': '长筒袜', en: 'Stockings' },
      desc: { 'zh-CN': '独立两条，到大腿', en: 'Two separate pieces to the thigh' },
      fix: { 'zh-CN': '吊袜带或硅胶防滑条', en: 'Garter belt or silicone band' },
      scene: { 'zh-CN': '正式场合、复古穿搭', en: 'Formal occasions, retro looks' },
      img: 'assets/stockings.jpg', rating: '16' },
    { id: 'kneehigh', name: { 'zh-CN': '中筒袜', en: 'Knee-high' },
      desc: { 'zh-CN': '到膝盖下方', en: 'Below the knee' },
      fix: { 'zh-CN': '袜口松紧', en: 'Top band' },
      scene: { 'zh-CN': '通勤、搭配裙装', en: 'Commute, with skirts' },
      img: 'assets/kneehigh.jpg', rating: 'all' },
    { id: 'fishnet', name: { 'zh-CN': '渔网袜', en: 'Fishnet' },
      desc: { 'zh-CN': '大网眼结构', en: 'Large open mesh' },
      fix: { 'zh-CN': '同连裤袜/长筒袜', en: 'Same as pantyhose/stockings' },
      scene: { 'zh-CN': '时尚、个性穿搭', en: 'Fashion, edgy looks' },
      img: 'assets/fishnet.jpg', rating: '18' },
    { id: 'cropped', name: { 'zh-CN': '七分/九分裤袜', en: 'Capri / Footless' },
      desc: { 'zh-CN': '露脚踝', en: 'Ankle-exposed' },
      fix: { 'zh-CN': '腰部松紧', en: 'Waistband' },
      scene: { 'zh-CN': '搭配凉鞋、运动鞋', en: 'With sandals, sneakers' },
      img: 'assets/yarn.jpg', rating: 'all' }
  ];

  const stylesByDenier = [
    { range: '1–20D', sheer: { 'zh-CN': '超薄透明', en: 'Ultra sheer' }, feel: { 'zh-CN': '几乎无感', en: 'Barely there' }, season: { 'zh-CN': '夏季、裸感', en: 'Summer, bare look' } },
    { range: '20–40D', sheer: { 'zh-CN': '半透明', en: 'Semi-sheer' }, feel: { 'zh-CN': '轻薄', en: 'Light' }, season: { 'zh-CN': '春秋', en: 'Spring/autumn' } },
    { range: '40–80D', sheer: { 'zh-CN': '微透', en: 'Semi-opaque' }, feel: { 'zh-CN': '适中', en: 'Medium' }, season: { 'zh-CN': '春秋、空调', en: 'Spring/autumn, AC' } },
    { range: '80D+', sheer: { 'zh-CN': '不透明', en: 'Opaque' }, feel: { 'zh-CN': '厚实保暖', en: 'Thick & warm' }, season: { 'zh-CN': '冬季', en: 'Winter' } }
  ];

  const stylesByFunction = [
    { id: 'warm', name: { 'zh-CN': '保暖', en: 'Warmth' }, ico: '🔥' },
    { id: 'shape', name: { 'zh-CN': '塑型/压力', en: 'Shaping / Compression' }, ico: '🩰' },
    { id: 'uv', name: { 'zh-CN': '防晒', en: 'UV protection' }, ico: '☀️' },
    { id: 'dry', name: { 'zh-CN': '吸湿排汗', en: 'Moisture-wicking' }, ico: '💧' },
    { id: 'antibac', name: { 'zh-CN': '抗菌防臭', en: 'Antibacterial' }, ico: '🛡️' },
    { id: 'antisnag', name: { 'zh-CN': '防勾丝', en: 'Anti-snag' }, ico: '✨' }
  ];

  /* ---------- 企业 ---------- */
  /* history 条目：year / t(标题) / d(说明)，整理自企业官网与公开资料 */
  const companies = [
    { id: 'dupont', name: '杜邦 DuPont', country: { 'zh-CN': '美国', en: 'USA' }, founded: 1802,
      site: 'https://www.dupont.com',
      tagline: { 'zh-CN': '从火药厂到合成纤维帝国', en: 'From gunpowder to synthetic fibers' },
      story: { 'zh-CN': '1802 年创立的化工巨头。1938 年发明尼龙纤维，1959 年推出 LYCRA® 氨纶，两次定义丝袜材料革命。', en: 'Chemical giant founded in 1802. Invented nylon in 1938 and launched LYCRA® spandex in 1959 — two revolutions in hosiery materials.' },
      img: 'assets/fireplace.jpg',
      history: [
        { year: '1802', t: { 'zh-CN': '火药磨坊起家', en: 'Gunpowder on the Brandywine' }, d: { 'zh-CN': 'E.I. du Pont 在特拉华州 Brandywine 河畔开设火药厂，为后来的化工帝国奠定基业。', en: 'E.I. du Pont opens a gunpowder mill on the Brandywine River in Delaware.' } },
        { year: '1902', t: { 'zh-CN': '家族重整', en: 'A new generation takes over' }, d: { 'zh-CN': '三位堂兄弟买下公司，把业务从火药推向多元化化工。', en: 'Three cousins buy the company and steer it from explosives toward diversified chemicals.' } },
        { year: '1930', t: { 'zh-CN': '基础研究计划', en: 'Basic research begins' }, d: { 'zh-CN': '聘请 Wallace Carothers 主持聚合物研究，开启系统性的合成纤维探索。', en: 'Hires Wallace Carothers to lead polymer research, opening systematic fiber exploration.' } },
        { year: '1935', t: { 'zh-CN': '尼龙首次合成', en: 'Nylon first synthesized' }, d: { 'zh-CN': '2 月 28 日，Carothers 团队在实验室制得第一种聚酰胺纤维。', en: 'On 28 February the Carothers team produces the first polyamide fiber in the lab.' } },
        { year: '1938', t: { 'zh-CN': '尼龙公开', en: 'Nylon announced' }, d: { 'zh-CN': '宣布"第一种完全由化学合成的纤维"，最初定位为丝绸的替代品。', en: 'Nylon is announced as the first fully synthetic fiber, initially positioned as a silk substitute.' } },
        { year: '1939', t: { 'zh-CN': '尼龙长袜发售', en: 'Nylon stockings go on sale' }, d: { 'zh-CN': '在 Wilmington 少量商店试销，引发排队抢购。', en: 'Sold in a handful of Wilmington shops, triggering queues and a buying rush.' } },
        { year: '1958', t: { 'zh-CN': '莱卡问世', en: 'LYCRA® is invented' }, d: { 'zh-CN': 'Joseph Shivers 团队发明氨纶弹性纤维，1959 年以 LYCRA® 品牌商业化。', en: 'Joseph Shivers’ team invents spandex, commercialized as LYCRA® in 1959.' } },
        { year: '2019', t: { 'zh-CN': '拆分重组', en: 'Three-way split' }, d: { 'zh-CN': '与陶氏合并后的 DowDuPont 拆分为 DuPont、Dow、Corteva 三家独立公司。', en: 'DowDuPont splits into DuPont, Dow and Corteva as independent companies.' } }
      ] },

    { id: 'lycra', name: '莱卡公司 The LYCRA Company', country: { 'zh-CN': '美国', en: 'USA' }, founded: null,
      site: 'https://www.lycra.com',
      tagline: { 'zh-CN': '让每一双丝袜贴合身体', en: 'Making every pair fit the body' },
      story: { 'zh-CN': 'LYCRA® 氨纶纤维品牌持有方，定义弹性丝袜的行业标准，持续推动纤维创新。', en: 'Owner of the LYCRA® spandex brand, defining the elastic hosiery standard and driving fiber innovation.' },
      img: 'assets/legs_crossed.jpg',
      history: [
        { year: '1958', t: { 'zh-CN': '纤维发明', en: 'The fiber is invented' }, d: { 'zh-CN': '杜邦科学家 Joseph Shivers 研发出可拉伸数倍的氨纶纤维，解决丝袜易松垮的痛点。', en: 'DuPont scientist Joseph Shivers develops spandex that stretches several times its length.' } },
        { year: '1959', t: { 'zh-CN': '品牌诞生', en: 'LYCRA® launches' }, d: { 'zh-CN': 'LYCRA® 作为品牌名正式商用，弹性丝袜时代开启。', en: 'LYCRA® debuts as a brand name, opening the era of elastic hosiery.' } },
        { year: '2004', t: { 'zh-CN': '转入 INVISTA', en: 'Moving to INVISTA' }, d: { 'zh-CN': '杜邦纺织与室内业务以约 44 亿美元出售给科氏工业，整合为 INVISTA。', en: 'DuPont’s textiles unit is sold to Koch Industries for about $4.4B and folded into INVISTA.' } },
        { year: '2019', t: { 'zh-CN': '独立成军', en: 'A standalone company' }, d: { 'zh-CN': '山东如意收购服饰与高级纺织业务，LYCRA 以独立公司 "The LYCRA Company" 运营。', en: 'Shandong Ruyi acquires the apparel business; LYCRA begins operating as The LYCRA Company.' } },
        { year: '2024', t: { 'zh-CN': '重组聚焦', en: 'Restructuring' }, d: { 'zh-CN': '完成财务重组，削减债务，集中资源于弹性纤维与可持续材料研发。', en: 'Completes a financial restructuring, cutting debt and focusing on elastic and sustainable fibers.' } }
      ] },

    { id: 'fukuske', name: '福助 Fukuske', country: { 'zh-CN': '日本', en: 'Japan' }, founded: 1882,
      site: 'https://fukuske.co.jp',
      tagline: { 'zh-CN': '从足袋到综合袜品的百年老铺', en: 'A century from tabi to total legwear' },
      story: { 'zh-CN': '1882 年在大阪以足袋装束店起家，从手工足袋发展为日本代表性袜品企业，百年技术积淀。', en: 'Founded in Osaka in 1882 as a tabi shop, grew into a leading Japanese legwear company with a century of craftsmanship.' },
      img: 'assets/tights_fashion.jpg',
      history: [
        { year: '1882', t: { 'zh-CN': '「丸福」创业', en: '"Marufuku" is founded' }, d: { 'zh-CN': '在大阪堺区大町开设足袋装束店「丸福」，从手工足袋起步。', en: 'Opens the tabi shop "Marufuku" in Sakai, Osaka, starting with hand-sewn tabi.' } },
        { year: '1900', t: { 'zh-CN': '「福助」商标注册', en: '"Fukuske" trademark' }, d: { 'zh-CN': '将「福助」注册为商标，品牌名沿用至今。', en: 'Registers "Fukuske" as its trademark, a name still in use today.' } },
        { year: '1919', t: { 'zh-CN': '会社设立', en: 'Incorporated' }, d: { 'zh-CN': '福助足袋株式会社成立，注册资本 150 万日元，销售网络向全国铺开。', en: 'Fukuske Tabi Co., Ltd. is incorporated with ¥1.5M capital as its network spreads nationwide.' } },
        { year: '1932', t: { 'zh-CN': '品类扩张', en: 'Beyond tabi' }, d: { 'zh-CN': '从足袋扩展到袜子、衬衫、鞋履等品类。', en: 'Expands from tabi into socks, shirts and shoes.' } },
        { year: '1964', t: { 'zh-CN': '更名福助株式会社', en: 'Renamed Fukuske Co., Ltd.' }, d: { 'zh-CN': '成长为综合衣料制造商，正式改名「福助株式会社」。', en: 'Now a full-range apparel maker, it formally becomes Fukuske Co., Ltd.' } },
        { year: '1991', t: { 'zh-CN': '「满足」连裤袜', en: 'The "Manzoku" line' }, d: { 'zh-CN': '推出「満足」连裤袜，成为长销主力系列。', en: 'Launches the long-selling "Manzoku" pantyhose line.' } },
        { year: '2015', t: { 'zh-CN': '三社统合', en: 'Three companies merge' }, d: { 'zh-CN': '整合福助、KB 福助、Unichika Berkshire 三家公司，开启新生福助。', en: 'Fukuske, KB Fukuske and Unichika Berkshire merge into a new Fukuske.' } },
        { year: '2022', t: { 'zh-CN': '创业 140 周年', en: '140th anniversary' }, d: { 'zh-CN': '推出环保连裤袜与"美温活"系列，把百年技术转向可持续发展。', en: 'Introduces eco pantyhose and warmth-care lines, turning century-old know-how toward sustainability.' } }
      ] },

    { id: 'atsugi', name: '厚木 ATSUGI', country: { 'zh-CN': '日本', en: 'Japan' }, founded: 1947,
      site: 'https://www.atsugi.co.jp',
      tagline: { 'zh-CN': '战后创立的日本丝袜标杆', en: 'Japan’s post-war hosiery benchmark' },
      story: { 'zh-CN': '1947 年创立的日本知名丝袜品牌，以高品质透明连裤袜与精细工艺著称。', en: 'Founded in 1947, a renowned Japanese hosiery brand known for high-quality sheer pantyhose and fine craftsmanship.' },
      img: 'assets/offshoulder.jpg',
      history: [
        { year: '1947', t: { 'zh-CN': '厚木编织创立', en: 'Atsugi Knitting is born' }, d: { 'zh-CN': '12 月 24 日，堀禄助在神奈川县厚木市创立厚木编织株式会社。', en: 'On 24 December, Rokosuke Hori founds Atsugi Knitting Co. in Atsugi, Kanagawa.' } },
        { year: '1950s', t: { 'zh-CN': '一体化生产', en: 'Integrated production' }, d: { 'zh-CN': '建立从纱线到成品的连贯生产体系，把品质控制在自己手里。', en: 'Builds a continuous yarn-to-product system, keeping quality control in-house.' } },
        { year: '1990s', t: { 'zh-CN': '透明连裤袜标准', en: 'Sheer pantyhose standard' }, d: { 'zh-CN': '以高透明度与耐用性确立日本连裤袜的品质基准。', en: 'Sets the Japanese quality benchmark for sheerness and durability.' } },
        { year: '2010s', t: { 'zh-CN': 'ASTIGU 系列', en: 'The ASTIGU series' }, d: { 'zh-CN': '推出 ASTIGU 系列，以多丹尼数与多色彩覆盖日常穿搭需求。', en: 'Launches ASTIGU, covering everyday needs across deniers and colors.' } },
        { year: '2020s', t: { 'zh-CN': '女性健康关怀', en: 'FemTech initiatives' }, d: { 'zh-CN': '推出 FemTech 相关产品与「フェムサポ」项目，关注女性不同阶段的需求。', en: 'Introduces FemTech products and the "FemSapo" program for women at every life stage.' } }
      ] },

    { id: 'langsha', name: '浪莎 Langsha', country: { 'zh-CN': '中国', en: 'China' }, founded: 1995,
      site: 'http://langsha.com',
      tagline: { 'zh-CN': '义乌走出的中国袜业龙头', en: 'From Yiwu to China’s hosiery leader' },
      story: { 'zh-CN': '中国袜业龙头企业，覆盖丝袜全品类，是大众市场的代表品牌。', en: "China's leading hosiery enterprise covering all categories, a representative mass-market brand." },
      img: 'assets/floor_legs.jpg',
      history: [
        { year: '1995', t: { 'zh-CN': '义乌创业', en: 'Founded in Yiwu' }, d: { 'zh-CN': '翁氏三兄弟在义乌经济开发区创办义乌浪莎针织有限公司。', en: 'The Weng brothers found Langsha Knitting in the Yiwu Economic Development Zone.' } },
        { year: '1996', t: { 'zh-CN': '正式投产', en: 'Production starts' }, d: { 'zh-CN': '引进意大利袜机，正式投产，从一开始就瞄准规模化与高品质。', en: 'Imports Italian knitting machines and begins production at scale.' } },
        { year: '1997', t: { 'zh-CN': '扩产', en: 'Capacity expands' }, d: { 'zh-CN': '投入 300 万元引进意大利设备，扩大产能。', en: 'Invests ¥3 million in Italian equipment to expand capacity.' } },
        { year: '2002', t: { 'zh-CN': '中国驰名商标', en: 'Well-known trademark' }, d: { 'zh-CN': '「浪莎」获"中国驰名商标"称号。', en: '"Langsha" is named a China Well-Known Trademark.' } },
        { year: '2004', t: { 'zh-CN': '集团成立', en: 'Group established' }, d: { 'zh-CN': '浪莎集团成立，探索主业相关多元化模式。', en: 'Langsha Group is established and explores related diversification.' } },
        { year: '2007', t: { 'zh-CN': '上交所上市', en: 'Listed in Shanghai' }, d: { 'zh-CN': '5 月 30 日，浪莎控股在上海证券交易所上市，被称为"中国内衣第一股"。', en: 'On 30 May, Langsha Holdings lists on the Shanghai Stock Exchange.' } },
        { year: '2013', t: { 'zh-CN': '品牌转型', en: 'Brand transformation' }, d: { 'zh-CN': '启动品牌与渠道转型，布局线上电商。', en: 'Begins a brand and channel transformation, building e-commerce.' } },
        { year: '2020s', t: { 'zh-CN': '全品类布局', en: 'Full category range' }, d: { 'zh-CN': '从丝袜扩展到内衣、家居服等全品类。', en: 'Expands from hosiery into innerwear and loungewear.' } }
      ] },

    { id: 'mengna', name: '梦娜 Mengna', country: { 'zh-CN': '中国', en: 'China' }, founded: 1994,
      site: 'http://www.mengna.com.cn',
      tagline: { 'zh-CN': '义乌的国际化袜业基地', en: 'An international hosiery base in Yiwu' },
      story: { 'zh-CN': '中国知名袜品企业，出口与内销并重，产品远销多个国家。', en: 'A well-known Chinese hosiery enterprise balancing export and domestic sales, shipping to many countries.' },
      img: 'assets/bench.jpg',
      history: [
        { year: '1994', t: { 'zh-CN': '公司成立', en: 'Company founded' }, d: { 'zh-CN': '6 月 29 日，浙江梦娜袜业在义乌成立。', en: 'Zhejiang Mengna Hosiery is founded in Yiwu on 29 June.' } },
        { year: '1990s', t: { 'zh-CN': '规模化生产', en: 'Scale-up' }, d: { 'zh-CN': '引进意大利、韩国先进袜机，形成规模化产能。', en: 'Imports advanced Italian and Korean machines to build scale.' } },
        { year: '2000s', t: { 'zh-CN': '名牌认定', en: 'Top brand honors' }, d: { 'zh-CN': '「梦娜」获"中国名牌""国家免检产品"等称号。', en: '"Mengna" earns China Top Brand and national inspection-exempt status.' } },
        { year: '2000s', t: { 'zh-CN': '驰名商标', en: 'Well-known trademark' }, d: { 'zh-CN': '获国家工商总局认定"中国驰名商标"及"中国行业标志性品牌"。', en: 'Recognized as a China Well-Known Trademark and an industry icon brand.' } },
        { year: '2010s', t: { 'zh-CN': '出口全球', en: 'Global exports' }, d: { 'zh-CN': '产品远销多国，成为全球规模领先的袜业生产基地之一。', en: 'Products ship worldwide, making it one of the largest hosiery bases globally.' } },
        { year: '2020s', t: { 'zh-CN': '浙江制造', en: 'Zhejiang Made' }, d: { 'zh-CN': '参与"浙江制造"认证，推动品质标准化。', en: 'Joins the "Zhejiang Made" certification program to standardize quality.' } }
      ] },

    { id: 'fogal', name: 'Fogal', country: { 'zh-CN': '瑞士', en: 'Switzerland' }, founded: 1921,
      site: 'https://fogal.com',
      tagline: { 'zh-CN': '苏黎世诞生的丝袜精品店鼻祖', en: 'The original hosiery boutique, born in Zurich' },
      story: { 'zh-CN': '1921 年创立的瑞士高端袜品品牌，以精细编织工艺与奢华定位著称。', en: 'Swiss premium hosiery brand founded in 1921, known for fine knitting craftsmanship and luxury positioning.' },
      img: 'assets/skirt_bed.jpg',
      history: [
        { year: '1921', t: { 'zh-CN': '全球首家丝袜精品店', en: 'The first hosiery boutique' }, d: { 'zh-CN': 'Léon Fogal 在苏黎世开设世界第一家专营丝袜的精品店，让顾客无需再找裁缝定制。', en: 'Léon Fogal opens the world’s first hosiery-only boutique in Zurich, freeing customers from custom orders.' } },
        { year: '1920s', t: { 'zh-CN': '门店网络扩张', en: 'Boutiques spread' }, d: { 'zh-CN': '因需求旺盛，精品店迅速扩展至瑞士各城市。', en: 'Strong demand pushes boutiques into cities across Switzerland.' } },
        { year: '1930s', t: { 'zh-CN': '店内即时修补', en: 'In-store repairs' }, d: { 'zh-CN': '首创店内修补服务，以长期陪伴建立客户关系。', en: 'Pioneers in-store repairs, building long-term customer relationships.' } },
        { year: '1940s', t: { 'zh-CN': '率先引入尼龙', en: 'First to import nylon' }, d: { 'zh-CN': '尼龙发明后，成为瑞士首家引进尼龙丝袜的商家。', en: 'After nylon’s invention, it becomes the first to import nylon stockings into Switzerland.' } },
        { year: '1950s', t: { 'zh-CN': '奢华材质', en: 'Luxury fibers' }, d: { 'zh-CN': '将羊绒、丝绸等天然纤维融入丝袜，确立奢华定位。', en: 'Integrates cashmere and silk into hosiery, defining its luxury positioning.' } },
        { year: '2000s', t: { 'zh-CN': '全球精品店', en: 'Global boutiques' }, d: { 'zh-CN': '在欧洲、亚洲多地开设精品店与专柜。', en: 'Opens boutiques and counters across Europe and Asia.' } },
        { year: '2021', t: { 'zh-CN': '百年纪念', en: 'Centenary' }, d: { 'zh-CN': '品牌迎来百年，持续以瑞士工艺制作高端袜品。', en: 'The brand marks 100 years, still making premium hosiery with Swiss craft.' } }
      ] },

    { id: 'wolford', name: 'Wolford', country: { 'zh-CN': '奥地利', en: 'Austria' }, founded: 1949,
      site: 'https://www.wolford.com',
      tagline: { 'zh-CN': '奥地利无缝针织的奢华标准', en: 'Austrian seamless knitting, a luxury standard' },
      story: { 'zh-CN': '1949 年创立的欧洲奢侈袜品与塑型衣品牌，主打无缝工艺与高品质。', en: 'European luxury hosiery and shapewear brand founded in 1949, focusing on seamless craftsmanship and high quality.' },
      img: 'assets/fashion_red.jpg',
      history: [
        { year: '1949', t: { 'zh-CN': 'Wolff & Co. 创立', en: 'Wolff & Co. is founded' }, d: { 'zh-CN': 'Reinhold Wolff 与 Walter Palmers 在博登湖畔的布雷根茨创立公司，用改造的美国棉机生产真丝与人造丝长袜。', en: 'Reinhold Wolff and Walter Palmers found the company in Bregenz, adapting American cotton machines for silk stockings.' } },
        { year: '1950', t: { 'zh-CN': 'Wolford 品牌启用', en: 'The Wolford brand' }, d: { 'zh-CN': '品牌正式启用，专注高品质女袜。', en: 'The Wolford brand is created, focused on premium women’s hosiery.' } },
        { year: '1954', t: { 'zh-CN': '无缝尼龙袜', en: 'Seamless nylon stockings' }, d: { 'zh-CN': '推出首批无缝尼龙长袜，确立舒适与品质路线。', en: 'Presents its first seamless nylon stockings, setting a comfort-and-quality course.' } },
        { year: '1969', t: { 'zh-CN': '透明弹力连裤袜', en: 'Sheer elastic tights' }, d: { 'zh-CN': '推出首批透明且弹力出色的连裤袜。', en: 'Creates the first sheer, highly elastic tights with an impeccable fit.' } },
        { year: '1977', t: { 'zh-CN': 'Miss Wolford', en: 'MISS WOLFORD' }, d: { 'zh-CN': '推出带塑形腰封的支撑型长袜系列。', en: 'Launches MISS WOLFORD, stockings with a shaping waistband.' } },
        { year: '1988', t: { 'zh-CN': 'Satin Touch', en: 'SATIN TOUCH' }, d: { 'zh-CN': '丝缎光泽连裤袜上市，迅速成为长销爆款。', en: 'SATIN TOUCH launches and quickly becomes a bestseller.' } },
        { year: '1994', t: { 'zh-CN': 'Fatal Tights', en: 'FATAL TIGHTS' }, d: { 'zh-CN': '推出全无缝连裤袜，被视为连裤袜工艺的一次革命。', en: 'Creates FATAL TIGHTS, the first fully seamless tights — a revolution in the category.' } },
        { year: '2018', t: { 'zh-CN': '可持续与集团化', en: 'Sustainability & group' }, d: { 'zh-CN': '推出可生物降解的 Aurora 系列，获 Cradle to Cradle 金级认证，并加入 Lanvin Group。', en: 'Launches the biodegradable Aurora line, earns Cradle to Cradle Gold, and joins Lanvin Group.' } }
      ] }
  ];

  /* ---------- 电商商品库（mock） ---------- */
  const products = [
    { id: 'p1', name: { 'zh-CN': '超薄透明连裤袜 10D', en: 'Ultra Sheer Pantyhose 10D' }, brand: 'ATSUGI', type: 'pantyhose', denier: [1, 20], material: 'nylon', price: 89, platform: { 'zh-CN': '天猫', en: 'Tmall' }, url: '#', img: 'assets/pantyhose.jpg' },
    { id: 'p2', name: { 'zh-CN': '哑光连裤袜 30D', en: 'Matte Pantyhose 30D' }, brand: 'Fukuske', type: 'pantyhose', denier: [20, 40], material: 'nylon', price: 69, platform: { 'zh-CN': '天猫', en: 'Tmall' }, url: '#', img: 'assets/tights_fashion.jpg' },
    { id: 'p3', name: { 'zh-CN': '保暖微透连裤袜 80D', en: 'Warm Semi-opaque Pantyhose 80D' }, brand: 'Langsha', type: 'pantyhose', denier: [40, 80], material: 'microfiber', price: 49, platform: { 'zh-CN': '京东', en: 'JD' }, url: '#', img: 'assets/fireplace.jpg' },
    { id: 'p4', name: { 'zh-CN': '加厚保暖连裤袜 120D', en: 'Thick Warm Pantyhose 120D' }, brand: 'Langsha', type: 'pantyhose', denier: [80, 300], material: 'microfiber', price: 79, platform: { 'zh-CN': '京东', en: 'JD' }, url: '#', img: 'assets/bench.jpg' },
    { id: 'p5', name: { 'zh-CN': '复古长筒袜（吊袜带款）', en: 'Vintage Stockings (Garter)' }, brand: 'Fogal', type: 'stockings', denier: [20, 40], material: 'nylon', price: 259, platform: { 'zh-CN': '天猫国际', en: 'Tmall Global' }, url: '#', img: 'assets/stockings.jpg' },
    { id: 'p6', name: { 'zh-CN': '运动压力中筒袜', en: 'Sports Compression Knee-high' }, brand: 'Mengna', type: 'kneehigh', denier: [40, 80], material: 'functional', price: 59, platform: { 'zh-CN': '天猫', en: 'Tmall' }, url: '#', img: 'assets/kneehigh.jpg' },
    { id: 'p7', name: { 'zh-CN': '渔网连裤袜', en: 'Fishnet Pantyhose' }, brand: 'Wolford', type: 'fishnet', denier: [20, 40], material: 'nylon', price: 320, platform: { 'zh-CN': '天猫国际', en: 'Tmall Global' }, url: '#', img: 'assets/fishnet.jpg' },
    { id: 'p8', name: { 'zh-CN': '防晒功能连裤袜 20D', en: 'UV Protection Pantyhose 20D' }, brand: 'ATSUGI', type: 'pantyhose', denier: [1, 20], material: 'functional', price: 129, platform: { 'zh-CN': '天猫', en: 'Tmall' }, url: '#', img: 'assets/offshoulder.jpg' }
  ];

  /* ---------- 实用科普 ---------- */
  const guide = {
    denier: {
      min: 10, max: 120, step: 5, default: 30,
      levels: [
        { upTo: 15, name: { 'zh-CN': '超薄 10–15D', en: 'Ultra sheer 10–15D' }, light: 95, warmth: 1, strength: 2,
          season: { 'zh-CN': '夏季 · 正式场合', en: 'Summer · formal' },
          note: { 'zh-CN': '几乎隐形，适合露肤感与正式穿搭；纤维细，勾丝风险最高，穿脱需格外小心。', en: 'Nearly invisible — ideal for bare-leg looks and formal wear. The finest fibers snag most easily, so handle with care.' } },
        { upTo: 30, name: { 'zh-CN': '轻薄 20–30D', en: 'Sheer 20–30D' }, light: 70, warmth: 2, strength: 3,
          season: { 'zh-CN': '春夏 · 日常通勤', en: 'Spring/summer · daily' },
          note: { 'zh-CN': '最常用的万能厚度，兼顾体面与耐穿，第一次买建议从这一档开始。', en: 'The all-round thickness: presentable and reasonably durable. A good first choice.' } },
        { upTo: 60, name: { 'zh-CN': '半透 40–60D', en: 'Semi-opaque 40–60D' }, light: 40, warmth: 3, strength: 4,
          season: { 'zh-CN': '春秋 · 办公室', en: 'Spring/autumn · office' },
          note: { 'zh-CN': '微透质感，遮瑕与耐穿度更好；深色密织款在室内可能接近不透。', en: 'Slightly sheer with better coverage and durability; dark, densely knit versions can look nearly opaque indoors.' } },
        { upTo: 120, name: { 'zh-CN': '不透 80–120D', en: 'Opaque 80–120D' }, light: 12, warmth: 5, strength: 5,
          season: { 'zh-CN': '秋冬 · 保暖', en: 'Autumn/winter · warmth' },
          note: { 'zh-CN': '保暖度接近打底裤，适合低温与户外；注意与裙长、鞋型的搭配比例。', en: 'Warmth close to leggings — good for cold weather; watch the balance with skirt length and shoes.' } }
      ]
    },

    label: {
      sampleTitle: { 'zh-CN': '一条连裤袜的标签', en: 'A pair of pantyhose, decoded' },
      hint: { 'zh-CN': '点击标签任意一行，或下方术语，查看解释', en: 'Tap any line on the label, or a term below' },
      rows: [
        { key: 'comp', k: { 'zh-CN': '成分', en: 'Composition' }, v: { 'zh-CN': '锦纶 78% · 氨纶 22%', en: 'Nylon 78% · Spandex 22%' } },
        { key: 'denier', k: { 'zh-CN': '丹尼', en: 'Denier' }, v: { 'zh-CN': '30D', en: '30D' } },
        { key: 'size', k: { 'zh-CN': '尺码', en: 'Size' }, v: { 'zh-CN': 'M（155–170cm）', en: 'M (155–170cm)' } },
        { key: 'press', k: { 'zh-CN': '压力', en: 'Pressure' }, v: { 'zh-CN': '无（日常款）', en: 'None (everyday)' } },
        { key: 'origin', k: { 'zh-CN': '产地', en: 'Origin' }, v: { 'zh-CN': '日本', en: 'Japan' } },
        { key: 'care', k: { 'zh-CN': '洗护', en: 'Care' }, v: { 'zh-CN': '30℃ 以下手洗 · 阴干', en: 'Hand wash under 30℃ · line dry' } }
      ],
      terms: [
        { key: 'comp', term: { 'zh-CN': '锦纶 / 尼龙', en: 'Nylon / Polyamide' }, desc: { 'zh-CN': '丝袜的主体纤维，强度高、耐磨、可纺得很细，决定透明感与抗撕裂能力。标签上的百分比通常是锦纶与氨纶之和。', en: 'The main fiber of hosiery: strong, abrasion-resistant and able to be spun very fine. It sets sheerness and tear resistance; label percentages usually add nylon and spandex.' } },
        { key: 'spandex', term: { 'zh-CN': '氨纶 / 莱卡', en: 'Spandex / LYCRA®' }, desc: { 'zh-CN': '弹性纤维，常见占比 10%–30%。比例越高回弹越好、越贴合，但过高会牺牲透气与"薄"的手感。', en: 'The elastic fiber, usually 10%–30%. More means better recovery and fit, though too much sacrifices breathability and a sheer hand-feel.' } },
        { key: 'denier', term: { 'zh-CN': '丹尼 D', en: 'Denier (D)' }, desc: { 'zh-CN': '每 9000 米纱线的克重。数值越大纱线越粗，通常越厚、越不透，也更耐穿。D 描述的是纱线，不是成品厚度。', en: 'Grams per 9,000 meters of yarn. Higher D means coarser yarn — usually thicker, more opaque and more durable. D describes yarn, not finished thickness.' } },
        { key: 'size', term: { 'zh-CN': '尺码', en: 'Size' }, desc: { 'zh-CN': '丝袜常用身高/体重区间而非单纯 S/M/L。偏大容易下滑，偏小会拉扯裆部与脚尖，按身高为主、体重为辅来选。', en: 'Hosiery sizing uses height/weight ranges rather than plain S/M/L. Too large slips down; too small strains the crotch and toe.' } },
        { key: 'press', term: { 'zh-CN': '压力等级 mmHg', en: 'Compression (mmHg)' }, desc: { 'zh-CN': '标注"压力"的多为渐进压力袜。15–20 mmHg 常见于日常缓解疲劳，20–30 mmHg 及以上多属医用范畴，应按需并在专业人士指导下选择。', en: 'Products labeled "compression" are graduated. 15–20 mmHg is common for daily fatigue relief; 20–30 mmHg and above is usually medical and should be chosen with professional guidance.' } },
        { key: 'care', term: { 'zh-CN': '洗护标识', en: 'Care symbols' }, desc: { 'zh-CN': '手洗、不可漂白、不可烘干、阴干是丝袜的常见组合。高温与机械拉扯是弹性纤维老化的主要原因。', en: 'Hand wash, no bleach, no tumble dry, line dry — the usual mix. Heat and mechanical stretching age elastic fibers fastest.' } },
        { key: 'origin', term: { 'zh-CN': '产地', en: 'Origin' }, desc: { 'zh-CN': '产地反映供应链与工艺传统，但不等于品质。日本、意大利、奥地利等地有成熟针织产业，仍需结合成分与做工判断。', en: 'Origin reflects supply chain and craft tradition, not quality itself. Japan, Italy and Austria have mature knitting industries, but composition and construction still matter most.' } },
        { key: 'covered', term: { 'zh-CN': '包覆纱', en: 'Covered yarn' }, desc: { 'zh-CN': '以氨纶为芯、外层包缠锦纶的复合纱。兼顾弹性与手感，是弹力丝袜常见的纱线结构。', en: 'A composite yarn with a spandex core wrapped in nylon, balancing stretch and hand-feel — common in elastic hosiery.' } },
        { key: 'gauge', term: { 'zh-CN': '针数 Gauge', en: 'Gauge' }, desc: { 'zh-CN': '每英寸的织针数。针数越高，织得越细密，通常更薄、更均匀，也更考验机器与工艺。', en: 'Needles per inch. Higher gauge means denser, finer, more even knitting — and greater demands on machines and craft.' } },
        { key: 'knit', term: { 'zh-CN': '经编 / 纬编', en: 'Warp / Weft knit' }, desc: { 'zh-CN': '经编多用于无缝袜身与高弹面料，结构稳定；纬编圆机常用于圆筒袜与大批量生产。', en: 'Warp knitting suits seamless bodies and high-stretch fabrics with stable structure; circular weft knitting is common for tube socks and volume production.' } },
        { key: 'seam', term: { 'zh-CN': '一线裆 / T 裆', en: 'Seamless / T-crotch' }, desc: { 'zh-CN': '裆部缝合方式。一线裆更贴合、外观更整洁，T 裆结构简单、成本更低，舒适度因人而异。', en: 'Crotch construction. A one-line seam fits closer and looks cleaner; a T-crotch is simpler and cheaper, with comfort varying by wearer.' } },
        { key: 'anti', term: { 'zh-CN': '防勾丝', en: 'Anti-snag' }, desc: { 'zh-CN': '通过高密编织或抗勾丝整理降低勾丝概率，并不等于"不会勾丝"。指甲、戒指与粗糙鞋面仍是主要风险。', en: 'Dense knitting or anti-snag finishing lowers the chance of snags — it does not make them impossible. Nails, rings and rough shoes remain the main risks.' } }
      ]
    },

    care: [
      { n: '01', title: { 'zh-CN': '穿前准备', en: 'Before wearing' }, points: [
        { 'zh-CN': '修剪指甲、摘掉戒指与手镯，避免刮伤纱线。', en: 'Trim nails and remove rings or bracelets to avoid snagging.' },
        { 'zh-CN': '先卷到脚尖，再从脚踝向上均匀提拉，不要一次猛拉腰部。', en: 'Roll to the toe, then lift evenly from ankle upward — never yank the waistband at once.' } ] },
      { n: '02', title: { 'zh-CN': '洗涤', en: 'Washing' }, points: [
        { 'zh-CN': '30℃ 以下手洗，使用中性洗涤剂，避免含氯漂白剂。', en: 'Hand wash below 30℃ with a neutral detergent; avoid chlorine bleach.' },
        { 'zh-CN': '不要用力拧干，轻压排水即可；机洗请装入洗衣袋并使用轻柔模式。', en: 'Do not wring; press gently to drain. If machine washing, use a laundry bag on a delicate cycle.' } ] },
      { n: '03', title: { 'zh-CN': '晾晒', en: 'Drying' }, points: [
        { 'zh-CN': '用毛巾轻压吸水后阴干，避免暴晒、暖气片与烘干机。', en: 'Blot with a towel and line dry in the shade; keep away from direct sun, radiators and tumble dryers.' },
        { 'zh-CN': '悬挂时对折搭在晾衣杆上，不要用夹子夹袜口。', en: 'Drape folded over a rail rather than clipping the waistband.' } ] },
      { n: '04', title: { 'zh-CN': '收纳', en: 'Storing' }, points: [
        { 'zh-CN': '卷起或平放分格收纳，避免与拉链、粗糙织物混放。', en: 'Roll or lay flat in separate compartments; keep away from zippers and rough fabrics.' },
        { 'zh-CN': '完全干燥后再收，潮湿环境会加速弹性纤维老化。', en: 'Store only when fully dry — dampness accelerates elastic aging.' } ] },
      { n: '05', title: { 'zh-CN': '应急修补', en: 'Quick repair' }, points: [
        { 'zh-CN': '小勾丝可用透明指甲油点封边缘，防止继续扩散。', en: 'Seal a small run with a dab of clear nail polish to stop it spreading.' },
        { 'zh-CN': '破洞位于脚尖或裆部时，建议直接更换，避免穿着时继续撕裂。', en: 'If the hole is at the toe or crotch, replace the pair rather than risk further tearing.' } ] },
      { n: '06', title: { 'zh-CN': '更换周期', en: 'Replacement' }, points: [
        { 'zh-CN': '高频穿着时建议 20–30 次或 3–6 个月更换，弹性下降就该退役。', en: 'With frequent wear, replace after 20–30 wears or 3–6 months — retire them once elasticity drops.' },
        { 'zh-CN': '多双轮换穿着，比一直穿同一双更耐用。', en: 'Rotating several pairs lasts longer than wearing one pair repeatedly.' } ] }
    ],

    myths: [
      { claim: { 'zh-CN': '越贵越耐穿', en: 'Pricier means longer-lasting' },
        truth: { 'zh-CN': '价格更多体现纱线、工艺与品牌。实际寿命更取决于穿着频率、穿脱习惯与鞋面摩擦。', en: 'Price reflects yarn, construction and brand. Real lifespan depends more on wear frequency, handling and shoe friction.' } },
      { claim: { 'zh-CN': '黑色一定显瘦', en: 'Black always slims' },
        truth: { 'zh-CN': '显瘦取决于光泽、丹尼与整体搭配。高光泽的黑色反而会放大腿部轮廓。', en: 'It depends on sheen, denier and the whole outfit. High-gloss black can actually emphasize leg contours.' } },
      { claim: { 'zh-CN': '"防勾丝"就是不会勾丝', en: '"Anti-snag" means snag-proof' },
        truth: { 'zh-CN': '它只降低勾丝概率。指甲、戒指、粗糙鞋面与干燥皮肤仍是主要风险来源。', en: 'It only lowers the odds. Nails, rings, rough shoes and dry skin remain the main culprits.' } },
      { claim: { 'zh-CN': '压力袜能瘦腿', en: 'Compression tights slim legs' },
        truth: { 'zh-CN': '医用压力袜用于改善循环、缓解肿胀，不等于减脂。减脂需要运动与饮食，有医疗需求请咨询医生。', en: 'Medical compression improves circulation and swelling; it does not reduce fat. Fat loss needs exercise and diet — consult a clinician for medical needs.' } },
      { claim: { 'zh-CN': '冷冻丝袜会更耐穿', en: 'Freezing tights makes them last' },
        truth: { 'zh-CN': '低温无法修复已断的纤维，反复冷冻还可能让弹性纤维变脆。', en: 'Cold cannot repair broken fibers; repeated freezing may even make elastic fibers brittle.' } },
      { claim: { 'zh-CN': '丹尼越高就一定越不透', en: 'Higher denier is always more opaque' },
        truth: { 'zh-CN': '还受针数、编织密度与颜色影响。同为 40D，密织深色款可能接近不透，稀疏浅色款仍然透。', en: 'Gauge, knit density and color also matter. Two 40D pairs can look very different — dense dark ones nearly opaque, open light ones still sheer.' } }
    ],

    quiz: [
      { q: { 'zh-CN': '10D 与 80D 最本质的差别是什么？', en: 'What is the essential difference between 10D and 80D?' },
        options: [
          { 'zh-CN': '丹尼越高纱线越粗，通常越厚、越不透', en: 'Higher denier means coarser yarn — usually thicker and more opaque' },
          { 'zh-CN': '丹尼越高越透明', en: 'Higher denier is more sheer' },
          { 'zh-CN': '丹尼只和颜色有关', en: 'Denier only relates to color' } ],
        answer: 0,
        explain: { 'zh-CN': 'D 是每 9000 米纱线的克重，数值越大纱线越粗，成品通常更厚、更不透。', en: 'D is grams per 9,000 m of yarn: higher D means coarser yarn, usually thicker and more opaque.' } },
      { q: { 'zh-CN': '氨纶（莱卡）在丝袜中主要提供什么？', en: 'What does spandex (LYCRA®) mainly provide?' },
        options: [
          { 'zh-CN': '弹性与回弹，让丝袜贴合身体', en: 'Elasticity and recovery for fit' },
          { 'zh-CN': '防晒功能', en: 'UV protection' },
          { 'zh-CN': '让颜色更鲜艳', en: 'Brighter color' } ],
        answer: 0,
        explain: { 'zh-CN': '氨纶是弹性纤维，常见占比 10%–30%，决定回弹、贴合与抗松垮。', en: 'Spandex is the elastic fiber, usually 10%–30%, governing recovery and fit.' } },
      { q: { 'zh-CN': '关于医用压力袜，哪种说法正确？', en: 'Which statement about medical compression is correct?' },
        options: [
          { 'zh-CN': '可以替代运动减脂', en: 'It can replace exercise for fat loss' },
          { 'zh-CN': '用于改善循环与肿胀，不能替代减脂或医疗建议', en: 'It aids circulation and swelling; it does not replace fat loss or medical advice' },
          { 'zh-CN': '压力越高越好', en: 'Higher pressure is always better' } ],
        answer: 1,
        explain: { 'zh-CN': '压力袜属于功能性产品，按压力等级（mmHg）选择；孕期或静脉疾病人群应先咨询医生。', en: 'Compression is functional and chosen by mmHg level; pregnant or vascular patients should consult a clinician.' } },
      { q: { 'zh-CN': '丝袜最适合的洗涤方式是？', en: 'The best way to wash hosiery?' },
        options: [
          { 'zh-CN': '30℃ 以下手洗，中性洗涤剂，轻压排水', en: 'Hand wash below 30℃ with neutral detergent, press gently' },
          { 'zh-CN': '60℃ 热水机洗并烘干', en: 'Machine wash at 60℃ and tumble dry' },
          { 'zh-CN': '用漂白剂浸泡', en: 'Soak in bleach' } ],
        answer: 0,
        explain: { 'zh-CN': '高温与机械拉扯会加速弹性纤维老化；手洗、阴干最稳妥。', en: 'Heat and mechanical stretching age elastic fibers; hand washing and line drying are safest.' } },
      { q: { 'zh-CN': '丹尼（D）的定义是？', en: 'Denier (D) is defined as…' },
        options: [
          { 'zh-CN': '每 9000 米纱线的克重', en: 'Grams per 9,000 meters of yarn' },
          { 'zh-CN': '每英寸的织针数', en: 'Needles per inch' },
          { 'zh-CN': '氨纶的百分比', en: 'The percentage of spandex' } ],
        answer: 0,
        explain: { 'zh-CN': 'D 描述纱线线密度；每英寸织针数是针数（gauge），不要混淆。', en: 'D describes yarn linear density; needles per inch is gauge — don’t confuse them.' } }
    ],

    eco: {
      factsTitle: { 'zh-CN': '环境代价与更好的选择', en: 'Environmental cost and better choices' },
      healthTitle: { 'zh-CN': '与身体有关的部分', en: 'What it means for your body' },
      facts: [
        { t: { 'zh-CN': '微纤维释放', en: 'Microfiber shedding' }, d: { 'zh-CN': '合成纤维洗涤会释放微塑料。低温、短时洗涤与洗衣袋能明显减少释放量。', en: 'Synthetic fabrics shed microplastics when washed. Lower temperature, shorter cycles and laundry bags cut the release.' } },
        { t: { 'zh-CN': '回收难点', en: 'Why recycling is hard' }, d: { 'zh-CN': '丝袜轻薄且多为混纺，分拣与分离成本高，常规回收渠道难以处理。', en: 'Hosiery is thin and often blended, making sorting and separation costly for standard recycling.' } },
        { t: { 'zh-CN': '再生尼龙', en: 'Recycled nylon' }, d: { 'zh-CN': 'Econyl 等再生尼龙由废渔网、工业废料制成，已有品牌用于袜品，但产能仍有限。', en: 'Recycled nylons such as Econyl are made from waste nets and industrial scrap; some brands use them, though capacity is limited.' } },
        { t: { 'zh-CN': '最有效的做法', en: 'The biggest lever' }, d: { 'zh-CN': '延长使用寿命、减少更换频率，通常比换用"环保材质"更能降低总环境影响。', en: 'Extending useful life and buying less often usually cuts total impact more than switching to an "eco" material.' } }
      ],
      health: [
        { t: { 'zh-CN': '久坐久站', en: 'Sitting or standing long' }, d: { 'zh-CN': '长时间同一姿势容易腿部疲劳与肿胀，渐进压力袜可作为辅助缓解手段。', en: 'Long static postures bring fatigue and swelling; graduated compression can help relieve them.' } },
        { t: { 'zh-CN': '压力分级', en: 'Pressure levels' }, d: { 'zh-CN': '15–20 mmHg 常见于日常款，20–30 mmHg 及以上多属医用范畴，应按需选择。', en: '15–20 mmHg is typical for daily wear; 20–30 mmHg and above is usually medical.' } },
        { t: { 'zh-CN': '特殊人群', en: 'Special groups' }, d: { 'zh-CN': '孕期、静脉曲张或皮肤敏感人群，选袜前应先咨询医生。', en: 'During pregnancy, with varicose veins or sensitive skin, consult a clinician before choosing.' } },
        { t: { 'zh-CN': '舒适优先', en: 'Comfort first' }, d: { 'zh-CN': '腰头勒痕、脚趾压迫、反复下滑都是尺码或结构不合适的信号，不必勉强穿着。', en: 'Waistband marks, toe pressure and constant slipping signal a wrong size or construction — don’t force it.' } }
      ],
      disclaimer: { 'zh-CN': '本页为一般科普内容，不构成医疗建议；如有健康问题请咨询专业医生。', en: 'This page is general education, not medical advice. Consult a clinician for health concerns.' }
    },

    weave: {
      stageNote: { 'zh-CN': '移动鼠标到织物上，放大镜会跟随并放大 2.2 倍', en: 'Move over the fabric — a 2.2× loupe follows your cursor' },
      items: [
        { key: 'warp', name: { 'zh-CN': '经编', en: 'Warp knit' }, tag: { 'zh-CN': '结构稳定', en: 'Stable' },
          desc: { 'zh-CN': '多根经纱同时成圈，纵向排列。结构稳定、不易脱散，常用于无缝袜身与高弹面料，对机器精度要求高。', en: 'Many warp yarns loop simultaneously in columns. Stable and hard to unravel — common in seamless bodies and high-stretch fabrics, demanding on machine precision.' } },
        { key: 'weft', name: { 'zh-CN': '纬编', en: 'Weft knit' }, tag: { 'zh-CN': '弹性好', en: 'Stretchy' },
          desc: { 'zh-CN': '一根纱线横向连续成圈，圆机高速生产。弹性与手感好，但勾丝后容易沿纵向脱散，是连裤袜最常见的结构。', en: 'One yarn loops across in rows on circular machines. Good stretch and hand-feel, but a snag can run vertically — the most common structure for pantyhose.' } },
        { key: 'jacquard', name: { 'zh-CN': '提花', en: 'Jacquard' }, tag: { 'zh-CN': '图案自由', en: 'Patterning' },
          desc: { 'zh-CN': '通过选针逐针控制，让不同纱线在特定位置成圈，形成图案、网眼与纹理。设计与调机成本更高，产量较低。', en: 'Needle selection controls each stitch so different yarns loop at chosen points, creating patterns, mesh and texture. Higher design and setup cost, lower output.' } },
        { key: 'seamless', name: { 'zh-CN': '无缝 / 筒状', en: 'Seamless / tubular' }, tag: { 'zh-CN': '减少侧缝', en: 'Fewer seams' },
          desc: { 'zh-CN': '圆机一次成型为筒状，袜身没有侧缝，穿着更平滑。“无缝”指主体无侧缝，裆部与脚尖仍可能有接缝。', en: 'Circular machines form a tube in one piece, so the leg has no side seam. “Seamless” means no side seam — the crotch and toe may still be joined.' } }
      ]
    },

    matrix: {
      bands: [
        { 'zh-CN': '10–20D', en: '10–20D' },
        { 'zh-CN': '30–60D', en: '30–60D' },
        { 'zh-CN': '80–120D', en: '80–120D' }
      ],
      sceneLabel: { 'zh-CN': '场景', en: 'Scene' },
      rows: [
        { scene: { 'zh-CN': '通勤 / 办公室', en: 'Commute / office' }, cells: [
          { style: { 'zh-CN': '超薄连裤袜', en: 'Ultra-sheer pantyhose' }, mat: { 'zh-CN': '尼龙 + 氨纶', en: 'Nylon + spandex' }, note: { 'zh-CN': '自然哑光，适合正式鞋型', en: 'Natural matte finish' } },
          { style: { 'zh-CN': '哑光连裤袜', en: 'Matte pantyhose' }, mat: { 'zh-CN': '超细纤维尼龙', en: 'Microfiber nylon' }, note: { 'zh-CN': '体面耐穿，最稳妥', en: 'Polished and durable' } },
          { style: { 'zh-CN': '不透连裤袜', en: 'Opaque pantyhose' }, mat: { 'zh-CN': '超细纤维 / 加绒', en: 'Microfiber / brushed' }, note: { 'zh-CN': '秋冬保暖，注意裙长', en: 'Warm; mind skirt length' } } ] },
        { scene: { 'zh-CN': '正式 / 婚礼', en: 'Formal / wedding' }, cells: [
          { style: { 'zh-CN': '超薄透明款', en: 'Ultra-sheer' }, mat: { 'zh-CN': '尼龙 + 氨纶', en: 'Nylon + spandex' }, note: { 'zh-CN': '露肤感强，易勾丝', en: 'Bare look, snags easily' } },
          { style: { 'zh-CN': '半透长筒袜', en: 'Semi-sheer stockings' }, mat: { 'zh-CN': '尼龙 + 氨纶', en: 'Nylon + spandex' }, note: { 'zh-CN': '配吊袜带或礼服', en: 'With garters or gowns' } },
          { style: { 'zh-CN': '不建议', en: 'Not ideal' }, mat: { 'zh-CN': '加绒 / 功能纤维', en: 'Brushed / functional' }, note: { 'zh-CN': '过厚会破坏正式感', en: 'Too heavy for formal' } } ] },
        { scene: { 'zh-CN': '休闲 / 约会', en: 'Casual / date' }, cells: [
          { style: { 'zh-CN': '薄款长筒袜', en: 'Sheer stockings' }, mat: { 'zh-CN': '尼龙 + 氨纶', en: 'Nylon + spandex' }, note: { 'zh-CN': '强调线条', en: 'Accent the line' } },
          { style: { 'zh-CN': '渔网 / 提花款', en: 'Fishnet / pattern' }, mat: { 'zh-CN': '提花尼龙', en: 'Patterned nylon' }, note: { 'zh-CN': '风格表达更强', en: 'Strong style statement' } },
          { style: { 'zh-CN': '不透连裤袜', en: 'Opaque tights' }, mat: { 'zh-CN': '棉感超细纤维', en: 'Cotton-touch microfiber' }, note: { 'zh-CN': '保暖又利落', en: 'Warm and neat' } } ] },
        { scene: { 'zh-CN': '运动 / 久站', en: 'Sport / long standing' }, cells: [
          { style: { 'zh-CN': '压力中筒袜', en: 'Compression knee-high' }, mat: { 'zh-CN': '锦纶 + 弹性纱', en: 'Nylon + elastane' }, note: { 'zh-CN': '15–20 mmHg 日常款', en: '15–20 mmHg daily' } },
          { style: { 'zh-CN': '压力中筒袜', en: 'Compression knee-high' }, mat: { 'zh-CN': '功能纤维', en: 'Functional fiber' }, note: { 'zh-CN': '按运动强度选择', en: 'Match intensity' } },
          { style: { 'zh-CN': '保暖压力袜', en: 'Warm compression' }, mat: { 'zh-CN': '羊毛混纺 / 加绒', en: 'Wool blend / brushed' }, note: { 'zh-CN': '低温户外可用', en: 'Cold-weather use' } } ] }
      ]
    },

    culture: {
      items: [
        { year: '1940', img: 'assets/tl_1940.jpg', title: { 'zh-CN': '尼龙配给与“画缝线”', en: 'Rationing & painted seams' },
          text: { 'zh-CN': '战争把尼龙转向降落伞与轮胎，丝袜成为稀缺品。女性用颜料在腿上画出后缝，甚至让化妆品柜台提供“液体丝袜”服务。', en: 'War redirected nylon to parachutes and tires, making stockings scarce. Women drew seams on their legs with paint — department stores even offered “liquid stockings”.' } },
        { year: '1960', img: 'assets/minidress.jpg', title: { 'zh-CN': '迷你裙革命', en: 'The miniskirt revolution' },
          text: { 'zh-CN': '裙摆上移让长筒袜与吊袜带显得突兀，连裤袜由此成为日常主流，也让“丝袜”从内衣走向外穿叙事。', en: 'Rising hemlines made stockings and garters awkward, pushing pantyhose into the mainstream and moving hosiery from underwear into outerwear stories.' } },
        { year: '1985', img: 'assets/fishnet.jpg', title: { 'zh-CN': '渔网与朋克', en: 'Fishnets and punk' },
          text: { 'zh-CN': '渔网袜从舞台与亚文化进入高街，成为反叛、性感与舞台感的视觉符号；彩色与图案丝袜同时流行。', en: 'Fishnets moved from stage and subculture into high street, becoming a visual sign of rebellion, sex appeal and performance; colored and patterned tights followed.' } },
        { year: '1990s', img: 'assets/tights_fashion.jpg', title: { 'zh-CN': '职场着装规范', en: 'Dress codes at work' },
          text: { 'zh-CN': '“必须穿丝袜”一度写进许多行业的着装手册；随着着装规范放松，它从硬性要求变成个人选择。', en: '“Hosiery required” once appeared in many workplace dress codes; as rules relaxed, it shifted from obligation to personal choice.' } },
        { year: '2020s', img: 'assets/woman_leaning.jpg', title: { 'zh-CN': '从正装到日常', en: 'From formal to everyday' },
          text: { 'zh-CN': '今天丝袜更多作为搭配与功能单品出现：防晒、压力、保暖与造型并存，性别与场合的边界也在变宽。', en: 'Today hosiery is a styling and functional item — UV protection, compression, warmth and looks — with looser boundaries of gender and occasion.' } }
      ],
      pair: {
        before: { 'zh-CN': '1940 · 画缝线', en: '1940 · Painted seams' },
        after: { 'zh-CN': '今天 · 现代连裤袜', en: 'Today · Modern pantyhose' },
        drag: { 'zh-CN': '拖动滑块对比两个时代', en: 'Drag to compare two eras' }
      }
    },

    regions: {
      items: [
        { key: 'usa', x: 150, y: 175, name: { 'zh-CN': '美国 · 特拉华', en: 'Delaware, USA' },
          tag: { 'zh-CN': '合成纤维发源地', en: 'Birthplace of synthetic fiber' },
          brands: ['DuPont', 'The LYCRA Company'],
          text: { 'zh-CN': '1938 年尼龙在杜邦实验室诞生，1958 年莱卡问世。这里定义了现代丝袜的原料基础。', en: 'Nylon was born in DuPont labs in 1938 and LYCRA® in 1958 — defining the raw-material basis of modern hosiery.' } },
        { key: 'europe', x: 400, y: 130, name: { 'zh-CN': '欧洲 · 奥地利 / 瑞士', en: 'Europe · Austria / Switzerland' },
          tag: { 'zh-CN': '高端制造与奢侈品', en: 'Premium craft & luxury' },
          brands: ['Wolford', 'Fogal'],
          text: { 'zh-CN': '奥地利 Bregenz 与瑞士苏黎世聚集了高端丝袜品牌，以精细针织、无缝结构与奢侈品定位著称。', en: 'Bregenz in Austria and Zurich in Switzerland host premium hosiery houses known for fine knitting, seamless construction and luxury positioning.' } },
        { key: 'japan', x: 655, y: 175, name: { 'zh-CN': '日本 · 厚木 / 大阪', en: 'Japan · Atsugi / Osaka' },
          tag: { 'zh-CN': '精细针织与功能袜', en: 'Fine knitting & functional' },
          brands: ['ATSUGI 厚木', 'Fukuske 福助'],
          text: { 'zh-CN': '战后日本建立起一体化针织体系，以高针数、细腻手感与功能袜（防晒、压力、保暖）见长。', en: 'Post-war Japan built an integrated knitting system known for high gauge, refined hand-feel and functional hosiery — UV, compression and warmth.' } },
        { key: 'yiwu', x: 555, y: 215, name: { 'zh-CN': '中国 · 义乌', en: 'Yiwu, China' },
          tag: { 'zh-CN': '全球袜业集散地', en: 'Global hosiery hub' },
          brands: ['Langsha 浪莎', 'Mengna 梦娜'],
          text: { 'zh-CN': '依托小商品市场与完整供应链，义乌形成大规模袜业集群，覆盖从原料、织造到批发出口的全链条。', en: 'Built on its commodity market and a complete supply chain, Yiwu forms a large hosiery cluster spanning yarn, knitting, wholesale and export.' } }
      ],
      mapTitle: { 'zh-CN': '示意地图，非精确地理比例', en: 'Schematic map, not to scale' }
    }

  };

  return { i18n, timeline, materials, processSteps, stylesByType, stylesByDenier, stylesByFunction, companies, products, guide };
})();

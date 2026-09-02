(() => {
  "use strict";

  const config = window.NINE_QUANT_CONFIG || {};
  const dictionary = {
    zh: {
      "nav.product": "产品", "nav.capabilities": "能力", "nav.architecture": "架构", "nav.boundaries": "边界", "nav.roadmap": "路线图", "nav.start": "开始构建",
      "hero.eyebrow": "999AI.ONE 开源项目", "hero.title": "让量化研究更轻、更透明", "hero.subtitle": "面向个人投资者与开发者的开源量化研究终端。支持 A 股、美股、ETF、因子研究、策略回测与组合分析；不接券商、不碰资金、不自动交易。", "hero.demo": "查看产品", "hero.opensource": "开源计划", "hero.trustDb": "数据库服务", "hero.trustContainer": "容器即可部署", "hero.trustMarkets": "类核心市场",
      "dashboard.research": "研究模式", "dashboard.overview": "市场快照", "dashboard.today": "今日研究概览", "dashboard.cached": "已缓存", "dashboard.factor": "因子画像", "dashboard.watchlist": "研究列表", "dashboard.asset": "资产", "dashboard.profile": "画像", "dashboard.change": "变动", "dashboard.history": "历史表现", "dashboard.simulation": "历史模拟，不代表未来", "dashboard.storage": "列式缓存", "dashboard.noTrade": "无交易权限",
      "factor.momentum": "动量", "factor.quality": "质量", "factor.volatility": "波动", "factor.value": "估值", "factor.trend": "趋势",
      "metrics.markets": "市场类别", "metrics.factors": "核心因子族", "metrics.database": "常驻数据库", "metrics.container": "容器部署",
      "product.title": "研究，不替你下单", "product.subtitle": "把行情、因子、回测和组合风险整理成透明、可复现的研究流程，而不是制造“神秘评分”或交易冲动。", "product.transparentTitle": "透明因子", "product.transparentText": "展示趋势、动量、估值、质量和风险分位；输入一致，结果一致，计算路径可解释。", "product.lightTitle": "轻量存储", "product.lightText": "Parquet 负责存储，DuckDB 负责按需查询。无需维护 MySQL、Redis 或消息队列。", "product.boundaryTitle": "清晰边界", "product.boundaryText": "不连接券商账户、不托管资金、不自动下单；国内模式不输出目标价、仓位或直接买卖指令。",
      "cap.title": "一套研究链路，覆盖六个核心场景", "cap.subtitle": "从每日市场快照到组合风险分析，每个模块既可独立运行，也可通过统一 API 调用。", "cap.snapshotTitle": "市场快照", "cap.snapshotText": "收盘后批量更新行情、指标和因子分位，一次计算，多次读取，减少服务器并发。", "cap.factorTitle": "因子研究", "cap.factorText": "趋势、动量、估值、质量、低波动及行业横截面排名。", "cap.backtestTitle": "策略回测", "cap.backtestText": "参数化策略、基准对照、回撤、夏普和交易暴露分析。", "cap.portfolioTitle": "组合风险", "cap.portfolioText": "收益、波动、相关性、最大回撤、资产贡献与情景压力测试。", "cap.screenerTitle": "自定义筛选", "cap.screenerText": "由用户定义研究条件，系统仅执行查询并展示匹配结果。", "cap.selfhostTitle": "本地优先", "cap.selfhostText": "个人电脑、NAS、VPS 或私有云均可运行，云端只是可选项。",
      "arch.title": "没有常驻数据库，也能保持清晰扩展", "arch.subtitle": "数据源、存储、计算和界面彻底解耦。V0.1 保持单体部署，需求增长后再按模块横向扩展。", "arch.provider": "数据适配层", "arch.storage": "列式文件存储", "arch.engine": "量化计算核心", "arch.interface": "接口与界面", "arch.note1": "日线优先：先解决中低频研究，不引入 Tick 与 Level 2 成本。", "arch.note2": "预计算优先：排行榜、因子和市场状态收盘后批量生成。", "arch.note3": "AI 后置：量化模型负责计算，AI 只解释结构化结果。",
      "boundary.title": "从代码层面建立资金与建议防火墙", "boundary.subtitle": "999Quant 的国内研究模式定位为数据与研究工具，不以“荐股、喊单、承诺收益”为产品卖点。以下是产品边界，不等同于法律意见或牌照认定。", "boundary.mainTitle": "研究工具优先", "boundary.noBrokerTitle": "不接入证券账户", "boundary.noBrokerText": "不保存券商密码，不获取下单权限。", "boundary.noFundsTitle": "不托管用户资金", "boundary.noFundsText": "不代客理财，不参与收益分成。", "boundary.noOrderTitle": "不自动交易", "boundary.noOrderText": "用户仅进行历史研究和模拟组合分析。", "boundary.noPromiseTitle": "不承诺收益", "boundary.noPromiseText": "所有回测明确标记为历史模拟，不代表未来。", "boundary.blocked": "国内模式禁用", "boundary.blockedTitle": "直接决策输出", "boundary.targetPrice": "目标价与止损价", "boundary.position": "建议仓位", "boundary.tomorrow": "明日涨跌预测", "boundary.stockPicks": "“今日牛股”榜单", "boundary.allowed": "研究模式保留", "boundary.allowedTitle": "可解释研究信息", "boundary.factorPercentile": "因子分位与行业排名", "boundary.historyStats": "历史收益与风险统计", "boundary.userScreener": "用户自定义筛选", "boundary.backtest": "历史策略回测", "boundary.portfolioResearch": "模拟组合研究",
      "oss.title": "开源核心负责能力，云端版本负责便利", "oss.subtitle": "本地核心保持可审计、可替换、可自托管；商业化围绕托管、自动更新、任务提醒、团队权限和技术支持，而不是锁住研究算法。", "oss.providers": "可插拔数据源", "oss.engine": "独立量化引擎", "oss.api": "统一 Python / REST API", "oss.selfhost": "本地与私有化部署", "oss.roadmap": "查看开源路线图", "deploy.copy": "复制",
      "roadmap.title": "先把研究核心做深，再逐步增加便利层", "roadmap.subtitle": "路线图刻意控制范围，避免从轻量工具膨胀为昂贵的交易基础设施。", "roadmap.foundation": "基础版本", "roadmap.enhance": "研究增强", "roadmap.explain": "解释与托管", "roadmap.v01Title": "研究基础", "roadmap.v01a": "A股 / 美股 / ETF 日线", "roadmap.v01b": "市场快照与因子画像", "roadmap.v01c": "基础回测与组合风险", "roadmap.v01d": "Parquet + DuckDB", "roadmap.v02a": "自定义股票池与筛选器", "roadmap.v02b": "策略参数实验", "roadmap.v02c": "组合优化与情景分析", "roadmap.v02d": "报告导出", "roadmap.v03a": "结构化结果的 AI 解释", "roadmap.v03b": "云端定时更新", "roadmap.v03c": "研究任务提醒", "roadmap.v03d": "团队权限与私有部署",
      "faq.title": "常见问题", "faq.q1": "这是一个自动炒股软件吗？", "faq.a1": "不是。999Quant 定位为量化研究工具，不连接证券账户、不自动下单，也不托管资金。", "faq.q2": "为什么第一版不使用数据库？", "faq.a2": "日线量化研究更适合批处理。Parquet 文件配合 DuckDB 足以完成本地存储与快速查询，减少部署和运维成本。", "faq.q3": "评分是否由 AI 决定？", "faq.a3": "不是。因子和风险指标由确定性公式计算；未来的 AI 模块只负责解释结构化结果，不能改写模型分数。", "faq.q4": "可以在中国大陆商业化吗？", "faq.a4": "可按“研究工具”方向继续验证，但商业化仍需结合完整功能、收费模式、数据授权和宣传文案进行专业法律及牌照审查。本网站不构成法律意见。",
      "cta.title": "Open Source. Low Cost. Research First.", "cta.subtitle": "开源 · 低成本 · 研究优先", "cta.build": "开始构建 999Quant", "cta.contact": "联系项目",
      "footer.description": "轻量、透明、可自托管的开源量化研究基础设施。", "footer.product": "产品", "footer.principles": "原则", "footer.resources": "资源", "footer.deploy": "部署说明", "footer.rights": "保留所有权利。", "footer.risk": "风险提示：本项目仅用于数据、技术与量化研究展示，不构成证券投资咨询或任何收益承诺。历史数据与回测结果不代表未来表现。",
      "toast.copied": "部署命令已复制", "toast.failed": "复制失败，请手动选择"
    },
    en: {
      "nav.product": "Product", "nav.capabilities": "Capabilities", "nav.architecture": "Architecture", "nav.boundaries": "Boundaries", "nav.roadmap": "Roadmap", "nav.start": "Get Started",
      "hero.eyebrow": "An open-source project by 999AI.ONE", "hero.title": "Quant research, made lighter and clearer", "hero.subtitle": "An open-source quant research terminal for individual investors and developers. Explore China A-shares, US stocks, ETFs, factors, backtests and portfolios—without broker access, fund custody or automated trading.", "hero.demo": "Explore Product", "hero.opensource": "Open-source Plan", "hero.trustDb": "database services", "hero.trustContainer": "container to deploy", "hero.trustMarkets": "core market groups",
      "dashboard.research": "Research Mode", "dashboard.overview": "Market Snapshot", "dashboard.today": "Today's Research Overview", "dashboard.cached": "Cached", "dashboard.factor": "Factor Profile", "dashboard.watchlist": "Research List", "dashboard.asset": "Asset", "dashboard.profile": "Profile", "dashboard.change": "Change", "dashboard.history": "Historical View", "dashboard.simulation": "Historical simulation, not a forecast", "dashboard.storage": "Columnar cache", "dashboard.noTrade": "No trading access",
      "factor.momentum": "Momentum", "factor.quality": "Quality", "factor.volatility": "Volatility", "factor.value": "Value", "factor.trend": "Trend",
      "metrics.markets": "market groups", "metrics.factors": "factor families", "metrics.database": "resident databases", "metrics.container": "container deployment",
      "product.title": "Research—not an order ticket", "product.subtitle": "Turn market data, factors, backtests and portfolio risk into a transparent, repeatable workflow—not a mysterious score or a reason to trade impulsively.", "product.transparentTitle": "Transparent Factors", "product.transparentText": "Inspect trend, momentum, value, quality and risk percentiles. Same inputs, same results, explainable calculations.", "product.lightTitle": "Lightweight Storage", "product.lightText": "Parquet stores the data while DuckDB queries it on demand. No MySQL, Redis or message queue to maintain.", "product.boundaryTitle": "Clear Boundaries", "product.boundaryText": "No broker connection, fund custody or automatic orders. China mode excludes target prices, position advice and direct trade instructions.",
      "cap.title": "One research pipeline, six core use cases", "cap.subtitle": "From daily market snapshots to portfolio risk, each module runs independently or through a unified API.", "cap.snapshotTitle": "Market Snapshot", "cap.snapshotText": "Batch-update prices, indicators and factor percentiles after close. Compute once, read many times, and reduce server concurrency.", "cap.factorTitle": "Factor Research", "cap.factorText": "Trend, momentum, value, quality, low volatility and industry cross-sectional ranks.", "cap.backtestTitle": "Strategy Backtests", "cap.backtestText": "Parameterized strategies, benchmark comparison, drawdown, Sharpe and exposure analysis.", "cap.portfolioTitle": "Portfolio Risk", "cap.portfolioText": "Return, volatility, correlation, max drawdown, risk contribution and stress scenarios.", "cap.screenerTitle": "Custom Screener", "cap.screenerText": "Users define the research rules; the system executes the query and displays matching assets.", "cap.selfhostTitle": "Local-first", "cap.selfhostText": "Run it on a laptop, NAS, VPS or private cloud. Hosted cloud remains optional.",
      "arch.title": "No resident database, still cleanly extensible", "arch.subtitle": "Providers, storage, computation and UI stay decoupled. V0.1 remains a simple monolith and scales by module only when needed.", "arch.provider": "Data Adapter", "arch.storage": "Columnar Storage", "arch.engine": "Quant Core", "arch.interface": "API & Interface", "arch.note1": "Daily-first: solve medium- and low-frequency research before adding Tick or Level 2 cost.", "arch.note2": "Precompute-first: rankings, factors and regimes are generated after market close.", "arch.note3": "AI comes later: quant models calculate; AI only explains structured outputs.",
      "boundary.title": "Build fund and advice firewalls into the code", "boundary.subtitle": "China Research Mode is designed as a data and research tool—not a stock-picking, signal-calling or return-promising product. These are product boundaries, not legal advice or a licensing determination.", "boundary.mainTitle": "Research-first", "boundary.noBrokerTitle": "No brokerage connection", "boundary.noBrokerText": "No broker passwords and no order permissions.", "boundary.noFundsTitle": "No custody of user funds", "boundary.noFundsText": "No discretionary management or profit sharing.", "boundary.noOrderTitle": "No automated orders", "boundary.noOrderText": "Users conduct historical research and simulated portfolio analysis only.", "boundary.noPromiseTitle": "No return promises", "boundary.noPromiseText": "All backtests are labeled as historical simulations, not future outcomes.", "boundary.blocked": "Disabled in China mode", "boundary.blockedTitle": "Direct decision outputs", "boundary.targetPrice": "Target and stop-loss prices", "boundary.position": "Position-size advice", "boundary.tomorrow": "Next-day price forecasts", "boundary.stockPicks": "“Top stock picks” lists", "boundary.allowed": "Retained for research", "boundary.allowedTitle": "Explainable research data", "boundary.factorPercentile": "Factor percentiles and industry ranks", "boundary.historyStats": "Historical return and risk statistics", "boundary.userScreener": "User-defined screening", "boundary.backtest": "Historical backtests", "boundary.portfolioResearch": "Simulated portfolio research",
      "oss.title": "Open core for capability, cloud for convenience", "oss.subtitle": "The local core stays auditable, replaceable and self-hosted. Commercial value comes from hosting, scheduled updates, task alerts, team permissions and support—not from locking the research algorithms.", "oss.providers": "Pluggable data providers", "oss.engine": "Independent quant engine", "oss.api": "Unified Python / REST API", "oss.selfhost": "Local and private deployment", "oss.roadmap": "View open-source roadmap", "deploy.copy": "Copy",
      "roadmap.title": "Deepen the research core before adding convenience", "roadmap.subtitle": "The roadmap deliberately limits scope so a lightweight tool does not turn into expensive trading infrastructure.", "roadmap.foundation": "Foundation", "roadmap.enhance": "Research Lab", "roadmap.explain": "Explain & Host", "roadmap.v01Title": "Research Foundation", "roadmap.v01a": "A-shares / US stocks / ETF daily data", "roadmap.v01b": "Market snapshots and factor profiles", "roadmap.v01c": "Core backtests and portfolio risk", "roadmap.v01d": "Parquet + DuckDB", "roadmap.v02a": "Custom universes and screeners", "roadmap.v02b": "Strategy parameter experiments", "roadmap.v02c": "Portfolio optimization and scenarios", "roadmap.v02d": "Research report export", "roadmap.v03a": "AI explanations of structured results", "roadmap.v03b": "Scheduled cloud updates", "roadmap.v03c": "Research task alerts", "roadmap.v03d": "Team permissions and private deployment",
      "faq.title": "Frequently Asked Questions", "faq.q1": "Is this an automated trading application?", "faq.a1": "No. 999Quant is a quant research tool. It does not connect to brokerage accounts, execute orders or hold user funds.", "faq.q2": "Why does V0.1 avoid a traditional database?", "faq.a2": "Daily quant research is naturally batch-oriented. Parquet plus DuckDB provides local storage and fast queries while reducing deployment and operations cost.", "faq.q3": "Does AI decide the scores?", "faq.a3": "No. Factors and risk metrics are calculated with deterministic formulas. A future AI module may explain structured results but cannot rewrite model scores.", "faq.q4": "Can it be commercialized in mainland China?", "faq.a4": "The research-tool direction can be validated further, but commercialization still requires professional review of the complete feature set, pricing model, data licenses and marketing language. This website is not legal advice.",
      "cta.title": "Open Source. Low Cost. Research First.", "cta.subtitle": "Built for transparent, lightweight quantitative research.", "cta.build": "Build with 999Quant", "cta.contact": "Contact Project",
      "footer.description": "Lightweight, transparent and self-hostable open-source quant research infrastructure.", "footer.product": "Product", "footer.principles": "Principles", "footer.resources": "Resources", "footer.deploy": "Deployment", "footer.rights": "All rights reserved.", "footer.risk": "Risk notice: This project is for data, technology and quantitative research demonstrations only. It is not securities investment advice or a promise of returns. Historical data and backtests do not represent future performance.",
      "toast.copied": "Deployment command copied", "toast.failed": "Copy failed. Please select manually."
    }
  };

  const safeStorage = {
    get(key) {
      try { return window.localStorage.getItem(key); } catch { return null; }
    },
    set(key, value) {
      try { window.localStorage.setItem(key, value); } catch { /* Storage can be blocked in private/file contexts. */ }
    }
  };

  let language = safeStorage.get("999quant-language") || config.defaultLanguage || "zh";
  if (!dictionary[language]) language = "zh";

  const applyLanguage = (lang) => {
    language = lang;
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      const value = dictionary[lang][key];
      if (value) node.textContent = value;
    });
    document.querySelectorAll("[data-lang-option]").forEach((node) => node.classList.toggle("is-active", node.dataset.langOption === lang));
    document.title = lang === "zh" ? "999Quant | 开源轻量量化研究终端" : "999Quant | Open-source Lightweight Quant Research";
    safeStorage.set("999quant-language", lang);
  };

  const languageSwitch = document.getElementById("languageSwitch");
  languageSwitch?.addEventListener("click", () => applyLanguage(language === "zh" ? "en" : "zh"));
  applyLanguage(language);

  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  navToggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }));

  const header = document.querySelector(".site-header");
  const onScroll = () => header?.classList.toggle("is-scrolled", window.scrollY > 24);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((node) => revealObserver.observe(node));

  const counters = document.querySelectorAll("[data-count]");
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const target = Number(entry.target.dataset.count || 0);
      const start = performance.now();
      const duration = 750;
      const animate = (time) => {
        const progress = Math.min(1, (time - start) / duration);
        entry.target.textContent = String(Math.round(target * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
      observer.unobserve(entry.target);
    });
  }, { threshold: .5 });
  counters.forEach((counter) => counterObserver.observe(counter));

  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll(".main-nav a[href^='#']")];
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach((section) => sectionObserver.observe(section));

  const periodPaths = {
    "1M": "M0 116 C34 104 48 112 78 90 S126 100 155 77 S207 84 238 61 S291 69 321 49 S371 55 401 37 S456 46 489 24 S550 35 620 12",
    "3M": "M0 116 C32 104 41 87 70 92 S116 72 146 78 S187 50 219 61 S264 39 298 48 S339 27 374 42 S419 31 454 38 S505 16 538 29 S582 17 620 9",
    "1Y": "M0 98 C40 120 69 83 107 101 S168 55 208 72 S278 29 318 60 S376 22 421 39 S480 19 522 31 S574 2 620 17"
  };
  document.querySelectorAll(".period-switch button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".period-switch button").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      const line = document.querySelector(".chart-line");
      const area = document.querySelector(".chart-area");
      const path = periodPaths[button.dataset.period];
      if (line && path) line.setAttribute("d", path);
      if (area && path) area.setAttribute("d", `${path} L620 132 L0 132 Z`);
    });
  });

  const toast = document.getElementById("toast");
  let toastTimer;
  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
  };

  document.querySelectorAll("[data-copy-target]").forEach((button) => {
    button.addEventListener("click", async () => {
      const target = document.getElementById(button.dataset.copyTarget);
      try {
        await navigator.clipboard.writeText(target?.innerText || "");
        showToast(dictionary[language]["toast.copied"]);
      } catch {
        showToast(dictionary[language]["toast.failed"]);
      }
    });
  });

  const contact = document.getElementById("contactLink");
  if (contact && config.contactEmail) contact.href = `mailto:${config.contactEmail}`;

  const githubLink = document.getElementById("githubLink");
  if (githubLink && config.githubUrl) {
    githubLink.href = config.githubUrl;
    githubLink.target = "_blank";
    githubLink.rel = "noopener";
  }

  const deployCommand = document.getElementById("deployCommand");
  if (deployCommand && config.githubUrl) {
    deployCommand.innerHTML = deployCommand.innerHTML.replace("&lt;YOUR_GITHUB_REPOSITORY_URL&gt;", config.githubUrl);
  }

  document.getElementById("currentYear").textContent = String(new Date().getFullYear());

  if ("serviceWorker" in navigator && location.protocol === "https:") {
    window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
  }
})();

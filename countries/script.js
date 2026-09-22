// ===== SHARED HELPERS =====
function companyFavicon(domain){ return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`; }
function initialsOf(name){ return name.split(" ").filter(Boolean).map(w=>w[0]).slice(0,2).join("").toUpperCase(); }
function isoFor(countryName){ const c = COUNTRIES.find(c=>c.name === countryName); return c ? c.iso : "xx"; }
function flagImgUrl(countryName, w=80){ return `https://flagcdn.com/w${w}/${isoFor(countryName)}.png`; }
function flagImgTag(countryName, w=80, cls=""){
  return `<img class="${cls}" src="${flagImgUrl(countryName,w)}" alt="${countryName} flag" loading="lazy">`;
}

const ICONS = {
  arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  chevLeft: '<svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>',
  chevRight: '<svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>',
  trendUp: '<svg viewBox="0 0 24 24"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>',
  building: '<svg viewBox="0 0 24 24"><path d="M3 21h18M6 21V10l6-6 6 6v11M9 21v-6h6v6"/></svg>',
  users: '<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
  flag: '<svg viewBox="0 0 24 24"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>',
  pin: '<svg viewBox="0 0 24 24"><path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  people: '<svg viewBox="0 0 24 24"><path d="M18 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-4-4"/></svg>',
  globe: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20 15 15 0 010-20z"/></svg>',
  target: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  bolt: '<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  earthAmericas: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 3.5c1.5 2 1 4.5-1 6-2 1.5-2.5 4-1.5 6.5M15 3.8c-.5 2 .5 3.5 2 4.5 2 1.3 2.5 3 2 5"/></svg>',
  earthEurope: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9 3.2c1 1.5 3 2 4.5 1.2 1.8-1 2.6.5 4 1.3M4 9c1.8.5 2.5 2 2 3.5-1 2.8 1 4 3 3.8 2.5-.2 3 1.5 2.5 3.7"/></svg>',
  earthAsia: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M6 6c2 1.5 1 3.5-.5 4.5-2 1.3-1 3.8 1 4 3 .3 2.5 3 1.5 5.2M14 3.5c1.5 2 3.5 2 5 .8"/></svg>',
  factory: '<svg viewBox="0 0 24 24"><path d="M2 21V11l6 4v-4l6 4V7l6 4v10z"/><path d="M2 21h20"/></svg>',
  cpu: '<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>',
  heart: '<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z"/></svg>',
  bank: '<svg viewBox="0 0 24 24"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>',
  cart: '<svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6"/></svg>',
  reset: '<svg viewBox="0 0 24 24"><path d="M1 4v6h6M23 20v-6h-6"/><path d="M20.49 9A9 9 0 105.64 18.36L1 20M23 4l-4.64 4.64"/></svg>',
  chart: '<svg viewBox="0 0 24 24"><path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="6"/><rect x="12" y="8" width="3" height="10"/><rect x="17" y="5" width="3" height="13"/></svg>',
};

const AVATAR_COLORS = ["#0f9488","#2563eb","#7c3aed","#f97316","#16a34a","#dc2626"];

// ============================================================
// DATA
// ============================================================
const COUNTRIES = [
  { name:"United States", iso:"us", region:"North America", category:"Developed Market", income:"High Income", sector:"Technology", companies:6768, founders:3287, regions:12, link:"united-states/index.html" },
  { name:"United Kingdom", iso:"gb", region:"Europe", category:"Developed Market", income:"High Income", sector:"Finance", companies:3421, founders:1849, regions:9 },
  { name:"Canada", iso:"ca", region:"North America", category:"Developed Market", income:"High Income", sector:"Manufacturing", companies:2187, founders:1102, regions:10 },
  { name:"Germany", iso:"de", region:"Europe", category:"Developed Market", income:"High Income", sector:"Manufacturing", companies:2563, founders:1516, regions:16 },
  { name:"Singapore", iso:"sg", region:"Asia", category:"Developed Market", income:"High Income", sector:"Finance", companies:1458, founders:1120, regions:8 },
  { name:"India", iso:"in", region:"Asia", category:"Emerging Market", income:"Lower-Middle Income", sector:"Technology", companies:6695, founders:2931, regions:29 },
  { name:"Australia", iso:"au", region:"Oceania", category:"Developed Market", income:"High Income", sector:"Retail & E-commerce", companies:2346, founders:1108, regions:10 },
  { name:"France", iso:"fr", region:"Europe", category:"Developed Market", income:"High Income", sector:"Retail & E-commerce", companies:2240, founders:1280, regions:13 },
  { name:"United Arab Emirates", iso:"ae", region:"Asia", category:"Emerging Market", income:"High Income", sector:"Finance", companies:2052, founders:1183, regions:11 },
  { name:"Japan", iso:"jp", region:"Asia", category:"Developed Market", income:"High Income", sector:"Manufacturing", companies:1818, founders:1032, regions:8 },
  { name:"Brazil", iso:"br", region:"South America", category:"Emerging Market", income:"Upper-Middle Income", sector:"Manufacturing", companies:1975, founders:987, regions:14 },
  { name:"South Korea", iso:"kr", region:"Asia", category:"Developed Market", income:"High Income", sector:"Technology", companies:1650, founders:842, regions:9 },
  { name:"China", iso:"cn", region:"Asia", category:"Emerging Market", income:"Upper-Middle Income", sector:"Manufacturing", companies:5230, founders:2710, regions:22 },
  { name:"Netherlands", iso:"nl", region:"Europe", category:"Developed Market", income:"High Income", sector:"Finance", companies:1320, founders:701, regions:7 },
  { name:"Switzerland", iso:"ch", region:"Europe", category:"Developed Market", income:"High Income", sector:"Finance", companies:980, founders:520, regions:6 },
  { name:"Mexico", iso:"mx", region:"North America", category:"Emerging Market", income:"Upper-Middle Income", sector:"Manufacturing", companies:1410, founders:690, regions:12 },
  { name:"South Africa", iso:"za", region:"Africa", category:"Emerging Market", income:"Upper-Middle Income", sector:"Retail & E-commerce", companies:890, founders:410, regions:9 },
  { name:"Nigeria", iso:"ng", region:"Africa", category:"Frontier Market", income:"Lower-Middle Income", sector:"Technology", companies:760, founders:395, regions:11 },
  { name:"Italy", iso:"it", region:"Europe", category:"Developed Market", income:"High Income", sector:"Retail & E-commerce", companies:1580, founders:812, regions:10 },
  { name:"Spain", iso:"es", region:"Europe", category:"Developed Market", income:"High Income", sector:"Retail & E-commerce", companies:1290, founders:640, regions:9 },
  { name:"Indonesia", iso:"id", region:"Asia", category:"Emerging Market", income:"Lower-Middle Income", sector:"Technology", companies:1145, founders:602, regions:15 },
  { name:"Saudi Arabia", iso:"sa", region:"Asia", category:"Emerging Market", income:"High Income", sector:"Finance", companies:870, founders:445, regions:10 },
  { name:"Sweden", iso:"se", region:"Europe", category:"Developed Market", income:"High Income", sector:"Technology", companies:760, founders:398, regions:8 },
  { name:"Israel", iso:"il", region:"Asia", category:"Developed Market", income:"High Income", sector:"Technology", companies:1020, founders:588, regions:6 },
  { name:"Egypt", iso:"eg", region:"Africa", category:"Emerging Market", income:"Lower-Middle Income", sector:"Retail & E-commerce", companies:520, founders:260, regions:8 },
  { name:"Argentina", iso:"ar", region:"South America", category:"Emerging Market", income:"Upper-Middle Income", sector:"Manufacturing", companies:680, founders:340, regions:10 },
  { name:"Vietnam", iso:"vn", region:"Asia", category:"Emerging Market", income:"Lower-Middle Income", sector:"Manufacturing", companies:610, founders:305, regions:12 },
  { name:"Poland", iso:"pl", region:"Europe", category:"Emerging Market", income:"High Income", sector:"Manufacturing", companies:730, founders:378, regions:10 },
  { name:"Turkey", iso:"tr", region:"Europe", category:"Emerging Market", income:"Upper-Middle Income", sector:"Retail & E-commerce", companies:840, founders:412, regions:12 },
  { name:"New Zealand", iso:"nz", region:"Oceania", category:"Developed Market", income:"High Income", sector:"Healthcare", companies:410, founders:210, regions:6 },
];

const TRENDING = [
  { name:"United States", pct:24.7 },
  { name:"India", pct:18.3 },
  { name:"United Kingdom", pct:15.2 },
  { name:"Canada", pct:13.8 },
  { name:"Germany", pct:11.9 },
  { name:"Australia", pct:10.6 },
  { name:"France", pct:9.4 },
  { name:"Singapore", pct:8.7 },
  { name:"United Arab Emirates", pct:8.2 },
  { name:"Japan", pct:7.1 },
];

const HIGHLIGHTS = [
  { icon:"building", num:"312", label:"Companies added this month", sub:"+8.4% vs last month" },
  { icon:"trendUp", num:"18.3%", label:"Fastest growing market — India", sub:"Momentum rising" },
  { icon:"pin", num:"42", label:"New regions tracked this quarter", sub:"+6 new markets" },
  { icon:"users", num:"1,204", label:"Founders profiled this month", sub:"+11.2% growth" },
];

const COMPANIES = [
  { name:"Apple", domain:"apple.com", country:"United States", region:"North America" },
  { name:"Microsoft", domain:"microsoft.com", country:"United States", region:"North America" },
  { name:"Amazon", domain:"amazon.com", country:"United States", region:"North America" },
  { name:"Mercedes-Benz", domain:"mercedes-benz.com", country:"Germany", region:"Europe" },
  { name:"HSBC", domain:"hsbc.com", country:"United Kingdom", region:"Europe" },
  { name:"Tencent", domain:"tencent.com", country:"China", region:"Asia" },
  { name:"Reliance", domain:"ril.com", country:"India", region:"Asia" },
  { name:"Samsung", domain:"samsung.com", country:"South Korea", region:"Asia" },
  { name:"Toyota", domain:"toyota.com", country:"Japan", region:"Asia" },
  { name:"Shell", domain:"shell.com", country:"United Kingdom", region:"Europe" },
];

const FOUNDERS = [
  { name:"Elon Musk", country:"United States", region:"North America", twitter:"elonmusk" },
  { name:"Satya Nadella", country:"United States", region:"North America", twitter:"satyanadella" },
  { name:"Jeff Bezos", country:"United States", region:"North America", twitter:"JeffBezos" },
  { name:"Mukesh Ambani", country:"India", region:"Asia", twitter:null },
  { name:"Jensen Huang", country:"United States", region:"North America", twitter:null },
  { name:"Zhang Yiming", country:"China", region:"Asia", twitter:null },
  { name:"Mark Zuckerberg", country:"United States", region:"North America", twitter:"finkd" },
  { name:"Tim Cook", country:"United States", region:"North America", twitter:"tim_cook" },
  { name:"Masayoshi Son", country:"Japan", region:"Asia", twitter:"masason" },
  { name:"Falguni Nayar", country:"India", region:"Asia", twitter:null },
  { name:"Tobi Lütke", country:"Canada", region:"North America", twitter:"tobi" },
  { name:"Carlos Slim", country:"Mexico", region:"North America", twitter:null },
  { name:"Richard Branson", country:"United Kingdom", region:"Europe", twitter:"richardbranson" },
  { name:"Hasso Plattner", country:"Germany", region:"Europe", twitter:null },
  { name:"Xavier Niel", country:"France", region:"Europe", twitter:null },
  { name:"Wietse Bruinsma", country:"Netherlands", region:"Europe", twitter:null },
  { name:"Ernesto Bertarelli", country:"Switzerland", region:"Europe", twitter:null },
  { name:"Giovanni Ferrero", country:"Italy", region:"Europe", twitter:null },
  { name:"Amancio Ortega", country:"Spain", region:"Europe", twitter:null },
  { name:"Daniel Ek", country:"Sweden", region:"Europe", twitter:"eldsjal" },
  { name:"Michał Sołowow", country:"Poland", region:"Europe", twitter:null },
  { name:"Hamdi Ulukaya", country:"Turkey", region:"Europe", twitter:null },
  { name:"Forrest Li", country:"Singapore", region:"Asia", twitter:null },
  { name:"Mohamed Alabbar", country:"United Arab Emirates", region:"Asia", twitter:null },
  { name:"Kim Beom-su", country:"South Korea", region:"Asia", twitter:null },
  { name:"Nadiem Makarim", country:"Indonesia", region:"Asia", twitter:null },
  { name:"Alwaleed bin Talal", country:"Saudi Arabia", region:"Asia", twitter:"Alwaleed_Talal" },
  { name:"Amnon Shashua", country:"Israel", region:"Asia", twitter:null },
  { name:"Pham Nhat Vuong", country:"Vietnam", region:"Asia", twitter:null },
  { name:"David Vélez", country:"Brazil", region:"South America", twitter:null },
  { name:"Marcos Galperin", country:"Argentina", region:"South America", twitter:"marcosgalperin" },
  { name:"Adrian Gore", country:"South Africa", region:"Africa", twitter:null },
  { name:"Tony Elumelu", country:"Nigeria", region:"Africa", twitter:"TonyOElumelu" },
  { name:"Naguib Sawiris", country:"Egypt", region:"Africa", twitter:"NNSawiris" },
  { name:"Mike Cannon-Brookes", country:"Australia", region:"Oceania", twitter:"mcannonbrookes" },
  { name:"Rod Drury", country:"New Zealand", region:"Oceania", twitter:null },
];

const INSIGHTS = [
  { title:"US Startup Ecosystem Q1 2024 Report", date:"May 5, 2024", tag:"Startups", seed:"bizmend-startup-office" },
  { title:"India's Fintech Landscape 2024 Outlook", date:"May 2, 2024", tag:"Fintech", seed:"bizmend-fintech-mobile" },
  { title:"UK Green Tech Investment Trends in 2024", date:"Apr 28, 2024", tag:"Green Tech", seed:"bizmend-green-energy" },
  { title:"UAE Economic Diversification Report 2024", date:"Apr 25, 2024", tag:"Economy", seed:"bizmend-dubai-skyline" },
  { title:"Germany's Manufacturing Outlook 2024", date:"Apr 23, 2024", tag:"Manufacturing", seed:"bizmend-factory-floor" },
  { title:"Canada's AI Innovation Ecosystem", date:"Apr 20, 2024", tag:"AI", seed:"bizmend-ai-lab" },
  { title:"Singapore's Fintech Regulatory Shift", date:"Apr 17, 2024", tag:"Policy", seed:"bizmend-finance-district" },
  { title:"Japan's Robotics Industry in 2024", date:"Apr 14, 2024", tag:"Robotics", seed:"bizmend-robotics-arm" },
];

const INDUSTRIES = [
  { name:"Technology", count:128, icon:"cpu" },
  { name:"Healthcare", count:112, icon:"heart" },
  { name:"Finance", count:115, icon:"bank" },
  { name:"Manufacturing", count:98, icon:"factory" },
  { name:"Retail & E-commerce", count:90, icon:"cart" },
];

const FAQS = [
  { q:"What is included in the BizMend country insights?", a:"Each country profile includes market snapshots, leading companies, top founders, regional benchmarks, and the latest industry reports curated by our research team." },
  { q:"How often is country data updated?", a:"Core datasets are refreshed monthly, while trending scores and market snapshots are updated on a rolling weekly basis." },
  { q:"Can I suggest a country to be added?", a:"Yes — use the 'Suggest a Country' action at the top or bottom of this page to submit a country for our team to review." },
  { q:"How can I contribute country insights or reports?", a:"Contributors can submit reports and insights through the Resources section, subject to editorial review before publishing." },
  { q:"How can I compare countries side by side?", a:"Use the Country Explorer filters to shortlist countries, then open two or more profiles to compare key metrics side by side." },
  { q:"Can I access detailed country reports?", a:"Detailed reports are available on each country's profile page, with downloadable PDFs for premium members." },
];

// ============================================================
// STATE
// ============================================================
let filteredCountries = [...COUNTRIES];
let currentPage = 1;
const PER_PAGE = 6;
let activeCompanyRegionTab = "All";
let activeFounderRegionTab = "All";
let founderShowAll = false;
const FOUNDER_LIMIT = 10;

// ============================================================
// RENDER: SNAPSHOT
// ============================================================
function renderSnapshot(){
  const items = [
    { icon:"globe", num:"249", label:"Countries Covered" },
    { icon:"building", num:"28,745", label:"Companies Tracked Globally" },
    { icon:"users", num:"18,392", label:"Active Founders Profiled" },
    { icon:"pin", num:"156", label:"Markets Covered Across Continents" },
  ];
  document.getElementById('snapshotGrid').innerHTML = items.map(i=>`
    <div class="snap-item">
      <div class="snap-icon">${ICONS[i.icon]}</div>
      <div>
        <div class="snap-num">${i.num}</div>
        <div class="snap-label">${i.label}</div>
      </div>
    </div>
  `).join('');
}

// ============================================================
// RENDER: COUNTRY EXPLORER
// ============================================================
function populateFilterOptions(){
  const uniq = (key) => [...new Set(COUNTRIES.map(c=>c[key]))].sort();
  const fill = (id, values) => {
    const el = document.getElementById(id);
    values.forEach(v=>{
      const opt = document.createElement('option');
      opt.value = v; opt.textContent = v;
      el.appendChild(opt);
    });
  };
  fill('filterRegion', uniq('region'));
  fill('filterCategory', uniq('category'));
  fill('filterIncome', uniq('income'));
  fill('filterSector', uniq('sector'));
}

function renderCountries(){
  const grid = document.getElementById('countryGrid');
  const start = (currentPage - 1) * PER_PAGE;
  const pageItems = filteredCountries.slice(start, start + PER_PAGE);

  if(pageItems.length === 0){
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--muted);padding:30px 0;">No countries match your filters.</p>`;
  } else {
    grid.innerHTML = pageItems.map(c => `
      <div class="country-card">
        <div class="cc-flag">${flagImgTag(c.name, 80)}</div>
        <h3>${c.name}</h3>
        <p class="cc-sub">${c.region} &middot; ${c.category}</p>
        <div class="cc-stats">
          <div><span>Companies</span><b>${c.companies.toLocaleString()}</b></div>
          <div><span>Founders</span><b>${c.founders.toLocaleString()}</b></div>
          <div><span>Regions</span><b>${c.regions}</b></div>
        </div>
        <a href="${c.link || '#'}" class="cc-explore-link">Explore Country ${ICONS.arrow}</a>
      </div>
    `).join('');
  }
  renderPagination();
}

function renderPagination(){
  const totalPages = Math.max(1, Math.ceil(filteredCountries.length / PER_PAGE));
  if(currentPage > totalPages) currentPage = totalPages;
  const el = document.getElementById('pagination');
  let html = `<button class="page-btn" id="prevPage" ${currentPage===1?'disabled':''}>${ICONS.chevLeft}</button>`;

  const pages = [];
  if(totalPages <= 5){
    for(let i=1;i<=totalPages;i++) pages.push(i);
  } else if(currentPage <= 3){
    pages.push(1,2,3,'...',totalPages);
  } else if(currentPage >= totalPages-2){
    pages.push(1,'...',totalPages-2,totalPages-1,totalPages);
  } else {
    pages.push(1,'...',currentPage,'...',totalPages);
  }
  pages.forEach(p=>{
    if(p === '...'){
      html += `<span class="page-btn dots">...</span>`;
    } else {
      html += `<button class="page-btn ${p===currentPage?'active':''}" data-page="${p}">${p}</button>`;
    }
  });
  html += `<button class="page-btn" id="nextPage" ${currentPage===totalPages?'disabled':''}>${ICONS.chevRight}</button>`;
  el.innerHTML = html;

  el.querySelectorAll('button[data-page]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      currentPage = parseInt(btn.dataset.page);
      renderCountries();
      document.getElementById('explorer').scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
  const prevBtn = document.getElementById('prevPage');
  const nextBtn = document.getElementById('nextPage');
  if(prevBtn) prevBtn.addEventListener('click', ()=>{ if(currentPage>1){currentPage--; renderCountries();} });
  if(nextBtn) nextBtn.addEventListener('click', ()=>{ if(currentPage<totalPages){currentPage++; renderCountries();} });
}

function applyFilters(){
  const search = document.getElementById('filterSearch').value.trim().toLowerCase();
  const region = document.getElementById('filterRegion').value;
  const category = document.getElementById('filterCategory').value;
  const income = document.getElementById('filterIncome').value;
  const sector = document.getElementById('filterSector').value;

  filteredCountries = COUNTRIES.filter(c=>{
    return (!search || c.name.toLowerCase().includes(search))
      && (!region || c.region === region)
      && (!category || c.category === category)
      && (!income || c.income === income)
      && (!sector || c.sector === sector);
  });
  currentPage = 1;
  renderCountries();
}

// ============================================================
// RENDER: TRENDING
// ============================================================
function renderTrending(){
  document.getElementById('trendingList').innerHTML = TRENDING.map((t,i)=>`
    <div class="trend-row">
      <span class="trend-rank">${i+1}</span>
      <div class="trend-icon">${flagImgTag(t.name, 80)}</div>
      <span class="trend-name">${t.name}</span>
      <span class="trend-change">${ICONS.trendUp} ${t.pct}%</span>
      <svg class="trend-spark" viewBox="0 0 72 30"><polyline points="0,25 12,18 24,20 36,10 48,13 60,4 72,7" fill="none" stroke="#16a34a" stroke-width="2"/></svg>
    </div>`).join('');
}

// ============================================================
// RENDER: HIGHLIGHTS
// ============================================================
function renderHighlights(){
  document.getElementById('highlightsGrid').innerHTML = HIGHLIGHTS.map(h=>`
    <div class="highlight-tile">
      <div class="hl-icon">${ICONS[h.icon]}</div>
      <div class="hl-num">${h.num}</div>
      <div class="hl-label">${h.label}</div>
      <div class="hl-sub">${ICONS.trendUp} ${h.sub}</div>
    </div>
  `).join('');
}

// ============================================================
// RENDER: COMPANIES (with region tabs + country search)
// ============================================================
function renderCompanyTabs(){
  const regions = ["All", ...new Set(COMPANIES.map(c=>c.region))];
  document.getElementById('companyTabs').innerHTML = regions.map(r=>`
    <button class="company-tab ${r===activeCompanyRegionTab?'active':''}" data-region="${r}">${r}</button>
  `).join('');
  document.querySelectorAll('#companyTabs .company-tab').forEach(tab=>{
    tab.addEventListener('click', ()=>{
      activeCompanyRegionTab = tab.dataset.region;
      document.getElementById('companyCountrySearch').value = '';
      renderCompanyTabs();
      renderCompanies();
    });
  });
}

function renderCompanies(){
  const search = (document.getElementById('companyCountrySearch').value || '').trim().toLowerCase();
  const list = COMPANIES.filter(c=>{
    const regionMatch = activeCompanyRegionTab === "All" || c.region === activeCompanyRegionTab;
    const searchMatch = !search || c.country.toLowerCase().includes(search);
    return regionMatch && searchMatch;
  });
  document.getElementById('companyGrid').innerHTML = list.map(c=>`
    <div class="company-card">
      <div class="logo-wrap">
        <div class="company-logo">
          <img src="${companyFavicon(c.domain)}" alt="${c.name} logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <span class="logo-fallback" style="display:none;align-items:center;justify-content:center;width:100%;height:100%;position:absolute;top:0;left:0;">${initialsOf(c.name)}</span>
        </div>
        <span class="logo-flag-badge">${flagImgTag(c.country, 40)}</span>
      </div>
      <h4>${c.name}</h4>
      <div class="company-loc">${c.country}</div>
      <a href="#" class="company-view">View Profile ${ICONS.arrow}</a>
    </div>
  `).join('') || `<p style="grid-column:1/-1;text-align:center;color:var(--muted);padding:20px 0;">No companies match this filter.</p>`;
}

function fillAllCountriesDatalist(){
  document.getElementById('allCountriesList').innerHTML = COUNTRIES.map(c=>`<option value="${c.name}">`).join('');
}

// ============================================================
// RENDER: FOUNDERS (with region tabs + country search)
// ============================================================
function renderFounderTabs(){
  const regions = ["All", ...new Set(FOUNDERS.map(f=>f.region))];
  document.getElementById('founderTabs').innerHTML = regions.map(r=>`
    <button class="company-tab ${r===activeFounderRegionTab?'active':''}" data-region="${r}">${r}</button>
  `).join('');
  document.querySelectorAll('#founderTabs .company-tab').forEach(tab=>{
    tab.addEventListener('click', ()=>{
      activeFounderRegionTab = tab.dataset.region;
      document.getElementById('founderCountrySearch').value = '';
      founderShowAll = false;
      renderFounderTabs();
      renderFounders();
    });
  });
}

function renderFounders(){
  const search = (document.getElementById('founderCountrySearch').value || '').trim().toLowerCase();
  const fullList = FOUNDERS.filter(f=>{
    const regionMatch = activeFounderRegionTab === "All" || f.region === activeFounderRegionTab;
    const searchMatch = !search || f.country.toLowerCase().includes(search);
    return regionMatch && searchMatch;
  });
  const hasMore = !founderShowAll && fullList.length > FOUNDER_LIMIT;
  const list = hasMore ? fullList.slice(0, FOUNDER_LIMIT) : fullList;

  const wrap = document.getElementById('founderViewMoreWrap');
  wrap.style.display = hasMore ? 'flex' : 'none';

  document.getElementById('founderGrid').innerHTML = list.map((f)=>{
    const idx = FOUNDERS.indexOf(f);
    const color = AVATAR_COLORS[idx % AVATAR_COLORS.length];
    const photo = f.twitter
      ? `<img class="founder-photo" src="https://unavatar.io/twitter/${f.twitter}?fallback=false" alt="${f.name} photo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`
      : '';
    return `
    <div class="company-card">
      <div class="logo-wrap">
        <div class="company-logo" style="background:${color}22;border-color:${color}55;">
          ${photo}
          <span class="logo-fallback" style="color:${color};${f.twitter ? "display:none;position:absolute;top:0;left:0;width:100%;height:100%;" : ""}">${initialsOf(f.name)}</span>
        </div>
        <span class="logo-flag-badge">${flagImgTag(f.country, 40)}</span>
      </div>
      <h4>${f.name}</h4>
      <div class="company-loc">${f.country}</div>
      <a href="#" class="company-view">View Profile ${ICONS.arrow}</a>
    </div>
  `;
  }).join('') || `<p style="grid-column:1/-1;text-align:center;color:var(--muted);padding:20px 0;">No founders match this filter.</p>`;
}

// ============================================================
// RENDER: INSIGHTS
// ============================================================
function renderInsights(){
  document.getElementById('insightsGrid').innerHTML = INSIGHTS.map(i=>`
    <div class="insight-card">
      <div class="insight-thumb">
        <img src="https://picsum.photos/seed/${i.seed}/500/360" alt="${i.title}" loading="lazy">
        <span class="insight-badge">${i.tag}</span>
      </div>
      <div class="insight-body">
        <h4>${i.title}</h4>
        <div class="insight-date">${i.date}</div>
      </div>
    </div>
  `).join('');
}

// ============================================================
// RENDER: BROWSE BY REGION / INDUSTRY
// ============================================================
function renderIndustryChips(){
  const colors = ["#2563eb","#dc2626","#0f9488","#64748b","#d63384"];
  let html = INDUSTRIES.map((ind,i)=>`
    <a href="#" class="chip">
      <div class="chip-icon" style="background:${colors[i%colors.length]}1f;color:${colors[i%colors.length]};">${ICONS[ind.icon]}</div>
      <div class="chip-text"><strong>${ind.name}</strong><span>${ind.count} Countries</span></div>
    </a>
  `).join('');
  html += `
    <a href="#" class="chip chip-viewall">
      <div class="chip-icon chip-icon-viewall">${ICONS.arrow}</div>
      <div class="chip-text"><strong>View All Industries</strong></div>
    </a>`;
  document.getElementById('industryChips').innerHTML = html;
}

// ============================================================
// RENDER: FAQ
// ============================================================
function renderFaqs(){
  document.getElementById('faqList').innerHTML = FAQS.map((f,i)=>`
    <div class="faq-item">
      <button class="faq-question" type="button">
        <span class="faq-number">${i+1}</span>
        <span class="faq-q-text">${f.q}</span>
        <svg class="faq-chevron" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div class="faq-answer"><p>${f.a}</p></div>
    </div>
  `).join('');

  document.querySelectorAll('.faq-question').forEach(q=>{
    q.addEventListener('click', ()=>{
      q.parentElement.classList.toggle('open');
    });
  });
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', ()=>{
  renderSnapshot();
  populateFilterOptions();
  renderCountries();
  renderTrending();
  renderHighlights();
  renderCompanyTabs();
  renderCompanies();
  fillAllCountriesDatalist();
  renderFounderTabs();
  renderFounders();
  renderInsights();
  renderIndustryChips();
  renderFaqs();

  document.getElementById('filterSearch').addEventListener('input', applyFilters);
  document.getElementById('filterRegion').addEventListener('change', applyFilters);
  document.getElementById('filterCategory').addEventListener('change', applyFilters);
  document.getElementById('filterIncome').addEventListener('change', applyFilters);
  document.getElementById('filterSector').addEventListener('change', applyFilters);

  document.getElementById('clearAll').addEventListener('click', ()=>{
    document.getElementById('filterSearch').value = '';
    document.getElementById('filterRegion').value = '';
    document.getElementById('filterCategory').value = '';
    document.getElementById('filterIncome').value = '';
    document.getElementById('filterSector').value = '';
    applyFilters();
  });

  document.getElementById('heroSearchBtn').addEventListener('click', (e)=>{
    e.preventDefault();
    const val = document.getElementById('heroSearch').value;
    document.getElementById('filterSearch').value = val;
    applyFilters();
    document.getElementById('explorer').scrollIntoView({behavior:'smooth'});
  });

  document.getElementById('companyCountrySearch').addEventListener('input', renderCompanies);
  document.getElementById('founderCountrySearch').addEventListener('input', ()=>{
    founderShowAll = false;
    renderFounders();
  });
  document.getElementById('founderViewMoreBtn').addEventListener('click', ()=>{
    founderShowAll = true;
    renderFounders();
  });

  // Mobile nav is handled by the shared site header (../shared/bm-chrome.js via #bmHamburgerBtn/#bmMobileNav).
});

// ===== SHARED HELPERS =====
function companyFavicon(domain){ return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`; }
function initialsOf(name){ return name.split(" ").filter(Boolean).map(w=>w[0]).slice(0,2).join("").toUpperCase(); }
function isoFor(cityName){ const c = CITIES.find(c=>c.name === cityName); return c ? c.iso : "xx"; }
function flagImgUrl(cityName, w=80){ return `https://flagcdn.com/w${w}/${isoFor(cityName)}.png`; }
function flagImgTag(cityName, w=80, cls=""){
  return `<img class="${cls}" src="${flagImgUrl(cityName,w)}" alt="${cityName} flag" loading="lazy">`;
}
function cityPhotoUrl(seed, w=400, h=220){ return `https://picsum.photos/seed/${seed}/${w}/${h}`; }

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
  factory: '<svg viewBox="0 0 24 24"><path d="M2 21V11l6 4v-4l6 4V7l6 4v10z"/><path d="M2 21h20"/></svg>',
  cpu: '<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>',
  heart: '<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z"/></svg>',
  bank: '<svg viewBox="0 0 24 24"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>',
  cart: '<svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6"/></svg>',
  reset: '<svg viewBox="0 0 24 24"><path d="M1 4v6h6M23 20v-6h-6"/><path d="M20.49 9A9 9 0 105.64 18.36L1 20M23 4l-4.64 4.64"/></svg>',
  grid: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/></svg>',
};

const AVATAR_COLORS = ["#0f9488","#2563eb","#7c3aed","#f97316","#16a34a","#dc2626"];

// ============================================================
// DATA
// ============================================================
const CITIES = [
  { name:"New York", iso:"us", country:"United States", region:"North America", category:"Financial Hub", tagline:"Global Financial Hub", industry:"Finance", companies:40742, founders:26884, industries:112, seed:"bizmend-city-newyork", url:"new-york-city/index.html" },
  { name:"London", iso:"gb", country:"United Kingdom", region:"Europe", category:"Financial Hub", tagline:"Global Financial Hub", industry:"Finance", companies:15681, founders:7548, industries:98, seed:"bizmend-city-london" },
  { name:"Toronto", iso:"ca", country:"Canada", region:"North America", category:"Innovation Hub", tagline:"North America Innovation Hub", industry:"Technology", companies:8215, founders:4126, industries:78, seed:"bizmend-city-toronto" },
  { name:"Singapore", iso:"sg", country:"Singapore", region:"Asia", category:"Innovation Hub", tagline:"Asia Innovation Hub", industry:"Finance", companies:12808, founders:6679, industries:87, seed:"bizmend-city-singapore" },
  { name:"Dubai", iso:"ae", country:"United Arab Emirates", region:"Asia", category:"Emerging Hub", tagline:"Emerging Hub", industry:"Finance", companies:10947, founders:4751, industries:73, seed:"bizmend-city-dubai" },
  { name:"Bengaluru", iso:"in", country:"India", region:"Asia", category:"Tech Hub", tagline:"Technology & Startup Hub", industry:"Technology", companies:14325, founders:8613, industries:83, seed:"bizmend-city-bengaluru" },
  { name:"San Francisco", iso:"us", country:"United States", region:"North America", category:"Tech Hub", tagline:"Global Tech Hub", industry:"Technology", companies:22150, founders:15230, industries:95, seed:"bizmend-city-sf" },
  { name:"Paris", iso:"fr", country:"France", region:"Europe", category:"Business Hub", tagline:"European Innovation Hub", industry:"Retail & E-commerce", companies:9840, founders:5210, industries:80, seed:"bizmend-city-paris" },
  { name:"Berlin", iso:"de", country:"Germany", region:"Europe", category:"Innovation Hub", tagline:"European Startup Hub", industry:"Manufacturing", companies:7650, founders:4020, industries:68, seed:"bizmend-city-berlin" },
  { name:"Sydney", iso:"au", country:"Australia", region:"Oceania", category:"Innovation Hub", tagline:"Oceania Innovation Hub", industry:"Technology", companies:6320, founders:3180, industries:60, seed:"bizmend-city-sydney" },
  { name:"Tokyo", iso:"jp", country:"Japan", region:"Asia", category:"Financial Hub", tagline:"Asia Financial Hub", industry:"Manufacturing", companies:11200, founders:5890, industries:88, seed:"bizmend-city-tokyo" },
  { name:"Shanghai", iso:"cn", country:"China", region:"Asia", category:"Business Hub", tagline:"Asia Manufacturing Hub", industry:"Manufacturing", companies:13900, founders:6540, industries:90, seed:"bizmend-city-shanghai" },
  { name:"Hong Kong", iso:"hk", country:"China", region:"Asia", category:"Financial Hub", tagline:"Asia Financial Hub", industry:"Finance", companies:9200, founders:4680, industries:76, seed:"bizmend-city-hongkong" },
  { name:"Mumbai", iso:"in", country:"India", region:"Asia", category:"Financial Hub", tagline:"South Asia Financial Hub", industry:"Finance", companies:12030, founders:6210, industries:79, seed:"bizmend-city-mumbai" },
  { name:"Seoul", iso:"kr", country:"South Korea", region:"Asia", category:"Tech Hub", tagline:"Asia Technology Hub", industry:"Technology", companies:8760, founders:4390, industries:70, seed:"bizmend-city-seoul" },
  { name:"Amsterdam", iso:"nl", country:"Netherlands", region:"Europe", category:"Financial Hub", tagline:"European Finance Hub", industry:"Finance", companies:5410, founders:2870, industries:55, seed:"bizmend-city-amsterdam" },
  { name:"Zurich", iso:"ch", country:"Switzerland", region:"Europe", category:"Financial Hub", tagline:"European Finance Hub", industry:"Finance", companies:4120, founders:2140, industries:48, seed:"bizmend-city-zurich" },
  { name:"Sao Paulo", iso:"br", country:"Brazil", region:"South America", category:"Business Hub", tagline:"Latin America Business Hub", industry:"Manufacturing", companies:8930, founders:4580, industries:65, seed:"bizmend-city-saopaulo" },
  { name:"Mexico City", iso:"mx", country:"Mexico", region:"North America", category:"Innovation Hub", tagline:"Latin America Innovation Hub", industry:"Manufacturing", companies:6780, founders:3420, industries:58, seed:"bizmend-city-mexicocity" },
  { name:"Tel Aviv", iso:"il", country:"Israel", region:"Asia", category:"Tech Hub", tagline:"Global Startup Hub", industry:"Technology", companies:5230, founders:3110, industries:52, seed:"bizmend-city-telaviv" },
  { name:"Lagos", iso:"ng", country:"Nigeria", region:"Africa", category:"Innovation Hub", tagline:"Africa Innovation Hub", industry:"Technology", companies:3410, founders:1820, industries:42, seed:"bizmend-city-lagos" },
  { name:"Johannesburg", iso:"za", country:"South Africa", region:"Africa", category:"Business Hub", tagline:"Africa Business Hub", industry:"Finance", companies:3120, founders:1650, industries:45, seed:"bizmend-city-johannesburg" },
  { name:"Cairo", iso:"eg", country:"Egypt", region:"Africa", category:"Emerging Hub", tagline:"MENA Emerging Hub", industry:"Retail & E-commerce", companies:2680, founders:1340, industries:38, seed:"bizmend-city-cairo" },
  { name:"Jakarta", iso:"id", country:"Indonesia", region:"Asia", category:"Emerging Hub", tagline:"Southeast Asia Emerging Hub", industry:"Technology", companies:5680, founders:2940, industries:55, seed:"bizmend-city-jakarta" },
  { name:"Bangkok", iso:"th", country:"Thailand", region:"Asia", category:"Emerging Hub", tagline:"Southeast Asia Emerging Hub", industry:"Retail & E-commerce", companies:4230, founders:2210, industries:47, seed:"bizmend-city-bangkok" },
  { name:"Madrid", iso:"es", country:"Spain", region:"Europe", category:"Business Hub", tagline:"European Business Hub", industry:"Retail & E-commerce", companies:5980, founders:3080, industries:53, seed:"bizmend-city-madrid" },
  { name:"Milan", iso:"it", country:"Italy", region:"Europe", category:"Business Hub", tagline:"European Fashion & Finance Hub", industry:"Manufacturing", companies:6120, founders:3190, industries:56, seed:"bizmend-city-milan" },
  { name:"Warsaw", iso:"pl", country:"Poland", region:"Europe", category:"Emerging Hub", tagline:"Central Europe Emerging Hub", industry:"Manufacturing", companies:3980, founders:2040, industries:44, seed:"bizmend-city-warsaw" },
  { name:"Istanbul", iso:"tr", country:"Turkey", region:"Europe", category:"Emerging Hub", tagline:"Emerging Market Hub", industry:"Retail & E-commerce", companies:5340, founders:2760, industries:50, seed:"bizmend-city-istanbul" },
  { name:"Auckland", iso:"nz", country:"New Zealand", region:"Oceania", category:"Emerging Hub", tagline:"Oceania Emerging Hub", industry:"Healthcare", companies:2140, founders:1080, industries:34, seed:"bizmend-city-auckland" },
];

function sizeBucketFor(companies){
  if(companies >= 20000) return "20,000+ Companies";
  if(companies >= 10000) return "10,000–20,000 Companies";
  return "Under 10,000 Companies";
}
CITIES.forEach(c=> c.sizeBucket = sizeBucketFor(c.companies));

const TRENDING = [
  { name:"New York", pct:18.7 },
  { name:"London", pct:15.3 },
  { name:"Bengaluru", pct:14.0 },
  { name:"Singapore", pct:13.6 },
  { name:"Dubai", pct:12.1 },
  { name:"Toronto", pct:11.2 },
  { name:"San Francisco", pct:10.4 },
  { name:"Paris", pct:9.6 },
  { name:"Berlin", pct:8.9 },
  { name:"Sydney", pct:8.2 },
];

const HIGHLIGHTS = [
  { icon:"building", num:"1,482", label:"Cities covered worldwide", sub:"+12.4% vs last quarter" },
  { icon:"trendUp", num:"14.3%", label:"Avg. founding growth rate", sub:"+2.6% vs last month" },
  { icon:"users", num:"48,316", label:"Founders profiled this quarter", sub:"+15.1% vs last quarter" },
  { icon:"grid", num:"132", label:"Industries covered", sub:"+3.7% vs last month" },
];

const COMPANIES = [
  { name:"JPMorganChase", domain:"jpmorganchase.com", city:"New York", country:"United States" },
  { name:"Goldman Sachs", domain:"goldmansachs.com", city:"New York", country:"United States" },
  { name:"Revolut", domain:"revolut.com", city:"London", country:"United Kingdom" },
  { name:"HSBC", domain:"hsbc.com", city:"London", country:"United Kingdom" },
  { name:"Grab", domain:"grab.com", city:"Singapore", country:"Singapore" },
  { name:"DBS Bank", domain:"dbs.com", city:"Singapore", country:"Singapore" },
  { name:"Careem", domain:"careem.com", city:"Dubai", country:"United Arab Emirates" },
  { name:"Emirates", domain:"emirates.com", city:"Dubai", country:"United Arab Emirates" },
  { name:"Flipkart", domain:"flipkart.com", city:"Bengaluru", country:"India" },
  { name:"Infosys", domain:"infosys.com", city:"Bengaluru", country:"India" },
  { name:"RBC", domain:"rbc.com", city:"Toronto", country:"Canada" },
  { name:"Shopify", domain:"shopify.com", city:"Toronto", country:"Canada" },
];

const FOUNDERS = [
  { name:"Elon Musk", city:"New York", country:"United States", twitter:"elonmusk" },
  { name:"Jamie Dimon", city:"New York", country:"United States", twitter:null },
  { name:"Satya Nadella", city:"London", country:"United Kingdom", twitter:"satyanadella" },
  { name:"Richard Branson", city:"London", country:"United Kingdom", twitter:"richardbranson" },
  { name:"Anthony Tan", city:"Singapore", country:"Singapore", twitter:null },
  { name:"Forrest Li", city:"Singapore", country:"Singapore", twitter:null },
  { name:"Mohamed Alabbar", city:"Dubai", country:"United Arab Emirates", twitter:null },
  { name:"Ronaldo Mouchawar", city:"Dubai", country:"United Arab Emirates", twitter:null },
  { name:"Binny Bansal", city:"Bengaluru", country:"India", twitter:null },
  { name:"Sachin Bansal", city:"Bengaluru", country:"India", twitter:null },
  { name:"Tobi Lütke", city:"Toronto", country:"Canada", twitter:"tobi" },
  { name:"Kevin O'Leary", city:"Toronto", country:"Canada", twitter:"kevinolearytv" },
];

const INSIGHTS = [
  { title:"New York Startup Ecosystem Outlook 2024", date:"May 6, 2024", tag:"Startup", seed:"bizmend-startup-office" },
  { title:"London Fintech Landscape 2024 Report", date:"May 2, 2024", tag:"Finance", seed:"bizmend-fintech-mobile" },
  { title:"Singapore's Tech Trends to Watch in 2024", date:"Apr 28, 2024", tag:"Technology", seed:"bizmend-finance-district" },
  { title:"Bengaluru Innovation Ecosystem Report 2024", date:"Apr 25, 2024", tag:"Innovation", seed:"bizmend-ai-lab" },
];

const INDUSTRIES = [
  { name:"Technology", count:312, icon:"cpu" },
  { name:"Finance", count:498, icon:"bank" },
  { name:"Healthcare", count:410, icon:"heart" },
  { name:"Manufacturing", count:347, icon:"factory" },
  { name:"Retail & E-commerce", count:296, icon:"cart" },
];

const FAQS = [
  { q:"What data is included in the BizMend city insights?", a:"Each city profile includes market snapshots, leading companies, top founders, innovation metrics, and the latest reports curated by our research team." },
  { q:"How often is city data updated?", a:"Core datasets are refreshed monthly, while trending scores and market snapshots are updated on a rolling weekly basis." },
  { q:"Can I suggest a city to be added?", a:"Yes — use the 'Suggest a City' action at the top or bottom of this page to submit a city for our team to review." },
  { q:"How can I contribute city insights or reports?", a:"Contributors can submit reports and insights through the Resources section, subject to editorial review before publishing." },
  { q:"How can I compare cities side by side?", a:"Use the City Explorer filters to shortlist cities, then open two or more profiles to compare key metrics side by side." },
  { q:"Can I access detailed city reports?", a:"Detailed reports are available on each city's profile page, with downloadable PDFs for premium members." },
];

// ============================================================
// STATE
// ============================================================
let filteredCities = [...CITIES];
let currentPage = 1;
const PER_PAGE = 6;
let activeCompanyCityTab = "All";
let activeFounderCityTab = "All";
let founderShowAll = false;
const FOUNDER_LIMIT = 10;

// ============================================================
// RENDER: SNAPSHOT
// ============================================================
function renderSnapshot(){
  const items = [
    { icon:"building", num:"1,482", label:"Cities Covered", sub:"Across 195+ countries" },
    { icon:"pin", num:"95,672", label:"Companies Tracked Globally", sub:"Local & global presence" },
    { icon:"users", num:"48,316", label:"Active Founders Profiled", sub:"Building tomorrow" },
    { icon:"grid", num:"132", label:"Industries Covered", sub:"From tech to traditional" },
  ];
  document.getElementById('snapshotGrid').innerHTML = items.map(i=>`
    <div class="snap-item">
      <div class="snap-icon">${ICONS[i.icon]}</div>
      <div>
        <div class="snap-num">${i.num}</div>
        <div class="snap-label">${i.label}</div>
        <div class="snap-sub">${i.sub}</div>
      </div>
    </div>
  `).join('');
}

// ============================================================
// RENDER: CITY EXPLORER
// ============================================================
function populateFilterOptions(){
  const uniq = (key) => [...new Set(CITIES.map(c=>c[key]))].sort();
  const fill = (id, values) => {
    const el = document.getElementById(id);
    values.forEach(v=>{
      const opt = document.createElement('option');
      opt.value = v; opt.textContent = v;
      el.appendChild(opt);
    });
  };
  fill('filterRegion', uniq('region'));
  fill('filterCountry', uniq('country'));
  fill('filterIndustry', uniq('industry'));
  fill('filterSize', ["Under 10,000 Companies","10,000–20,000 Companies","20,000+ Companies"]);
}

function renderCities(){
  const grid = document.getElementById('cityGrid');
  const start = (currentPage - 1) * PER_PAGE;
  const pageItems = filteredCities.slice(start, start + PER_PAGE);

  if(pageItems.length === 0){
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--muted);padding:30px 0;">No cities match your filters.</p>`;
  } else {
    grid.innerHTML = pageItems.map(c => `
      <div class="city-card">
        <div class="city-photo-wrap">
          <img src="${cityPhotoUrl(c.seed)}" alt="${c.name} skyline" loading="lazy">
          <div class="city-flag-badge">${flagImgTag(c.name, 40)}</div>
        </div>
        <div class="city-body">
          <h3>${c.name}</h3>
          <p class="cc-sub">${c.country} &middot; ${c.tagline}</p>
          <div class="city-stats">
            <div class="city-stat-row"><span class="cs-label">${ICONS.building} Companies</span><b>${c.companies.toLocaleString()}</b></div>
            <div class="city-stat-row"><span class="cs-label">${ICONS.people} Founders</span><b>${c.founders.toLocaleString()}</b></div>
            <div class="city-stat-row"><span class="cs-label">${ICONS.grid} Industries</span><b>${c.industries}</b></div>
          </div>
          <a href="${c.url || '#'}" class="cc-explore-link">Explore City ${ICONS.arrow}</a>
        </div>
      </div>
    `).join('');
  }
  renderPagination();
}

function renderPagination(){
  const totalPages = Math.max(1, Math.ceil(filteredCities.length / PER_PAGE));
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
      renderCities();
      document.getElementById('explorer').scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
  const prevBtn = document.getElementById('prevPage');
  const nextBtn = document.getElementById('nextPage');
  if(prevBtn) prevBtn.addEventListener('click', ()=>{ if(currentPage>1){currentPage--; renderCities();} });
  if(nextBtn) nextBtn.addEventListener('click', ()=>{ if(currentPage<totalPages){currentPage++; renderCities();} });
}

function applyFilters(){
  const search = document.getElementById('filterSearch').value.trim().toLowerCase();
  const region = document.getElementById('filterRegion').value;
  const country = document.getElementById('filterCountry').value;
  const industry = document.getElementById('filterIndustry').value;
  const size = document.getElementById('filterSize').value;

  filteredCities = CITIES.filter(c=>{
    return (!search || c.name.toLowerCase().includes(search) || c.country.toLowerCase().includes(search))
      && (!region || c.region === region)
      && (!country || c.country === country)
      && (!industry || c.industry === industry)
      && (!size || c.sizeBucket === size);
  });
  currentPage = 1;
  renderCities();
}

// ============================================================
// RENDER: TRENDING
// ============================================================
function renderTrending(){
  document.getElementById('trendingList').innerHTML = TRENDING.map((t,i)=>{
    const c = CITIES.find(c=>c.name === t.name);
    return `
    <div class="trend-row">
      <span class="trend-rank">${i+1}</span>
      <div class="trend-icon"><img src="${cityPhotoUrl(c.seed,80,80)}" alt="${t.name}"></div>
      <div>
        <div class="trend-name">${t.name}</div>
        <div class="trend-sub">${c.country}</div>
      </div>
      <span class="trend-change">${ICONS.trendUp} ${t.pct}%</span>
      <svg class="trend-spark" viewBox="0 0 72 30"><polyline points="0,25 12,18 24,20 36,10 48,13 60,4 72,7" fill="none" stroke="#16a34a" stroke-width="2"/></svg>
    </div>`;
  }).join('');
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
// RENDER: COMPANIES (with city tabs + city search)
// ============================================================
function renderCompanyTabs(){
  const cities = ["All", ...new Set(COMPANIES.map(c=>c.city))];
  document.getElementById('companyTabs').innerHTML = cities.map(c=>`
    <button class="company-tab ${c===activeCompanyCityTab?'active':''}" data-city="${c}">${c}</button>
  `).join('');
  document.querySelectorAll('#companyTabs .company-tab').forEach(tab=>{
    tab.addEventListener('click', ()=>{
      activeCompanyCityTab = tab.dataset.city;
      document.getElementById('companyCitySearch').value = '';
      renderCompanyTabs();
      renderCompanies();
    });
  });
}

function renderCompanies(){
  const search = (document.getElementById('companyCitySearch').value || '').trim().toLowerCase();
  const list = COMPANIES.filter(c=>{
    const cityMatch = activeCompanyCityTab === "All" || c.city === activeCompanyCityTab;
    const searchMatch = !search || c.city.toLowerCase().includes(search);
    return cityMatch && searchMatch;
  });
  document.getElementById('companyGrid').innerHTML = list.map(c=>`
    <div class="company-card">
      <div class="logo-wrap">
        <div class="company-logo">
          <img src="${companyFavicon(c.domain)}" alt="${c.name} logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <span class="logo-fallback" style="display:none;align-items:center;justify-content:center;width:100%;height:100%;position:absolute;top:0;left:0;">${initialsOf(c.name)}</span>
        </div>
        <span class="logo-flag-badge">${flagImgTag(c.city, 40)}</span>
      </div>
      <h4>${c.name}</h4>
      <div class="company-loc">${c.city}, ${c.country}</div>
      <a href="#" class="company-view">View Profile ${ICONS.arrow}</a>
    </div>
  `).join('') || `<p style="grid-column:1/-1;text-align:center;color:var(--muted);padding:20px 0;">No companies match this filter.</p>`;
}

function fillAllCitiesDatalist(){
  document.getElementById('allCitiesList').innerHTML = CITIES.map(c=>`<option value="${c.name}">`).join('');
}

// ============================================================
// RENDER: FOUNDERS (with city tabs + city search)
// ============================================================
function renderFounderTabs(){
  const cities = ["All", ...new Set(FOUNDERS.map(f=>f.city))];
  document.getElementById('founderTabs').innerHTML = cities.map(c=>`
    <button class="company-tab ${c===activeFounderCityTab?'active':''}" data-city="${c}">${c}</button>
  `).join('');
  document.querySelectorAll('#founderTabs .company-tab').forEach(tab=>{
    tab.addEventListener('click', ()=>{
      activeFounderCityTab = tab.dataset.city;
      document.getElementById('founderCitySearch').value = '';
      founderShowAll = false;
      renderFounderTabs();
      renderFounders();
    });
  });
}

function renderFounders(){
  const search = (document.getElementById('founderCitySearch').value || '').trim().toLowerCase();
  const fullList = FOUNDERS.filter(f=>{
    const cityMatch = activeFounderCityTab === "All" || f.city === activeFounderCityTab;
    const searchMatch = !search || f.city.toLowerCase().includes(search);
    return cityMatch && searchMatch;
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
        <span class="logo-flag-badge">${flagImgTag(f.city, 40)}</span>
      </div>
      <h4>${f.name}</h4>
      <div class="company-loc">${f.city}, ${f.country}</div>
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
// RENDER: BROWSE BY INDUSTRY
// ============================================================
function renderIndustryChips(){
  const colors = ["#2563eb","#dc2626","#0f9488","#64748b","#d63384"];
  let html = INDUSTRIES.map((ind,i)=>`
    <a href="#" class="chip">
      <div class="chip-icon" style="background:${colors[i%colors.length]}1f;color:${colors[i%colors.length]};">${ICONS[ind.icon]}</div>
      <div class="chip-text"><strong>${ind.name}</strong><span>${ind.count} Cities</span></div>
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
  renderCities();
  renderTrending();
  renderHighlights();
  renderCompanyTabs();
  renderCompanies();
  fillAllCitiesDatalist();
  renderFounderTabs();
  renderFounders();
  renderInsights();
  renderIndustryChips();
  renderFaqs();

  document.getElementById('filterSearch').addEventListener('input', applyFilters);
  document.getElementById('filterRegion').addEventListener('change', applyFilters);
  document.getElementById('filterCountry').addEventListener('change', applyFilters);
  document.getElementById('filterIndustry').addEventListener('change', applyFilters);
  document.getElementById('filterSize').addEventListener('change', applyFilters);

  document.getElementById('clearAll').addEventListener('click', ()=>{
    document.getElementById('filterSearch').value = '';
    document.getElementById('filterRegion').value = '';
    document.getElementById('filterCountry').value = '';
    document.getElementById('filterIndustry').value = '';
    document.getElementById('filterSize').value = '';
    applyFilters();
  });

  document.getElementById('heroSearchBtn').addEventListener('click', (e)=>{
    e.preventDefault();
    const val = document.getElementById('heroSearch').value;
    document.getElementById('filterSearch').value = val;
    applyFilters();
    document.getElementById('explorer').scrollIntoView({behavior:'smooth'});
  });

  document.getElementById('companyCitySearch').addEventListener('input', renderCompanies);
  document.getElementById('founderCitySearch').addEventListener('input', ()=>{
    founderShowAll = false;
    renderFounders();
  });
  document.getElementById('founderViewMoreBtn').addEventListener('click', ()=>{
    founderShowAll = true;
    renderFounders();
  });

  // Mobile nav is handled by the shared site header (../shared/bm-chrome.js via #bmHamburgerBtn/#bmMobileNav).
});

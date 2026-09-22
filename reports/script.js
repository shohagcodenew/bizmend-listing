// ===== SHARED HELPERS =====
function reportPhotoUrl(seed, w=500, h=320){ return `https://picsum.photos/seed/${seed}/${w}/${h}`; }

const ICONS = {
  arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  chevLeft: '<svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>',
  chevRight: '<svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>',
  trendUp: '<svg viewBox="0 0 24 24"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>',
  doc: '<svg viewBox="0 0 24 24"><path d="M14.5 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V9.5L14.5 4z"/><path d="M14 4v6h6"/></svg>',
  building: '<svg viewBox="0 0 24 24"><path d="M3 21h18M6 21V10l6-6 6 6v11M9 21v-6h6v6"/></svg>',
  tag: '<svg viewBox="0 0 24 24"><path d="M20.59 13.41L11 3.83A2 2 0 009.59 3H4a1 1 0 00-1 1v5.59a2 2 0 00.59 1.41l9.58 9.59a2 2 0 002.83 0l4.59-4.59a2 2 0 000-2.83z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>',
  globe: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20 15 15 0 010-20z"/></svg>',
  users: '<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
  clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  calendar: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  pages: '<svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>',
  star: '<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  cpu: '<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>',
  bank: '<svg viewBox="0 0 24 24"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>',
  leaf: '<svg viewBox="0 0 24 24"><path d="M11 20A7 7 0 019.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 11 13.5 11 12"/></svg>',
  cart: '<svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6"/></svg>',
  flag: '<svg viewBox="0 0 24 24"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>',
  shield: '<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  truck: '<svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
  layers: '<svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
};

const TYPE_COLORS = {
  "Industry Report": "#1b2a4a",
  "Country Report": "#2563eb",
  "Company Report": "#7c3aed",
  "Topic Report": "#f97316",
};

// ============================================================
// DATA
// ============================================================
const REPORTS = [
  { title:"The Global AI Market Outlook 2024–2030", type:"Industry Report", industry:"Technology", topic:"Artificial Intelligence", country:"Global", company:"", year:2024, date:"May 6, 2024", readTime:35, pages:86, desc:"Comprehensive analysis of AI market size, key trends, investment flows, and future opportunities.", seed:"bm-rep-ai", link:"openai-market-outlook/index.html" },
  { title:"U.S. Economic Outlook Q2 2024", type:"Country Report", industry:"Finance", topic:"Macroeconomics", country:"United States", company:"", year:2024, date:"Apr 30, 2024", readTime:28, pages:72, desc:"In-depth outlook on U.S. GDP growth, inflation, monetary policy, and sector performance.", seed:"bm-rep-us" },
  { title:"Renewable Energy Market Report 2024", type:"Industry Report", industry:"Energy", topic:"Sustainability", country:"Global", company:"", year:2024, date:"Apr 25, 2024", readTime:32, pages:64, desc:"Global renewable energy trends, capacity additions, policy landscape, and investment.", seed:"bm-rep-renew" },
  { title:"Apple Inc. Company Analysis 2024", type:"Company Report", industry:"Technology", topic:"Consumer Tech", country:"United States", company:"Apple", year:2024, date:"Apr 18, 2024", readTime:24, pages:58, desc:"Financial performance, product pipeline, strategy outlook, and competitive positioning.", seed:"bm-rep-apple" },
  { title:"Global Fintech Industry Report 2024", type:"Industry Report", industry:"Finance", topic:"Fintech", country:"Global", company:"", year:2024, date:"Apr 15, 2024", readTime:30, pages:70, desc:"Market size, key segments, regulation, funding trends, and future outlook.", seed:"bm-rep-fintech" },
  { title:"Supply Chain Resilience in 2024", type:"Topic Report", industry:"Manufacturing", topic:"Supply Chain", country:"Global", company:"", year:2024, date:"Apr 10, 2024", readTime:28, pages:61, desc:"Risk landscape, regional insights, and strategies for building resilient supply chains.", seed:"bm-rep-supply" },
  { title:"India Fintech Market Report 2024", type:"Country Report", industry:"Finance", topic:"Fintech", country:"India", company:"", year:2024, date:"May 6, 2024", readTime:26, pages:54, desc:"Deep dive into India's fintech ecosystem, digital payments, and lending innovation.", seed:"bm-rep-india-fintech" },
  { title:"Global Cybersecurity Industry Outlook 2024", type:"Industry Report", industry:"Technology", topic:"Cybersecurity", country:"Global", company:"", year:2024, date:"May 5, 2024", readTime:33, pages:77, desc:"Threat landscape, enterprise spending, and emerging cybersecurity technologies.", seed:"bm-rep-cyber" },
  { title:"Tesla, Inc. Company Analysis 2024", type:"Company Report", industry:"Manufacturing", topic:"Electric Vehicles", country:"United States", company:"Tesla", year:2024, date:"May 4, 2024", readTime:27, pages:62, desc:"Production capacity, energy business, margins, and competitive EV landscape.", seed:"bm-rep-tesla" },
  { title:"European Economic Outlook Q2 2024", type:"Country Report", industry:"Finance", topic:"Macroeconomics", country:"Germany", company:"", year:2024, date:"May 3, 2024", readTime:29, pages:68, desc:"Eurozone growth outlook, inflation trends, and central bank policy direction.", seed:"bm-rep-europe" },
  { title:"Retail Industry Trends Report 2024", type:"Industry Report", industry:"Retail", topic:"E-commerce", country:"Global", company:"", year:2024, date:"May 2, 2024", readTime:25, pages:59, desc:"Omnichannel strategy, consumer behavior shifts, and the future of physical retail.", seed:"bm-rep-retail" },
  { title:"Healthcare Innovation Report 2024", type:"Industry Report", industry:"Healthcare", topic:"Digital Health", country:"Global", company:"", year:2024, date:"Apr 22, 2024", readTime:31, pages:66, desc:"Telemedicine adoption, biotech breakthroughs, and healthcare investment trends.", seed:"bm-rep-health" },
  { title:"Southeast Asia Startup Ecosystem 2024", type:"Country Report", industry:"Technology", topic:"Startups", country:"Singapore", company:"", year:2024, date:"Apr 20, 2024", readTime:27, pages:60, desc:"Funding trends, key hubs, and breakout startups across Southeast Asia.", seed:"bm-rep-sea" },
  { title:"Microsoft Corporation Company Analysis 2024", type:"Company Report", industry:"Technology", topic:"Cloud Computing", country:"United States", company:"Microsoft", year:2023, date:"Dec 12, 2023", readTime:30, pages:74, desc:"Cloud growth, AI integration strategy, and enterprise software positioning.", seed:"bm-rep-msft" },
  { title:"ESG & Sustainability Trends 2024", type:"Topic Report", industry:"Energy", topic:"Sustainability", country:"Global", company:"", year:2024, date:"Apr 22, 2024", readTime:29, pages:66, desc:"ESG investing trends, regulatory updates, and corporate sustainability performance.", seed:"bm-rep-esg" },
  { title:"UAE Business & Investment Outlook 2023", type:"Country Report", industry:"Finance", topic:"Investment", country:"United Arab Emirates", company:"", year:2023, date:"Nov 8, 2023", readTime:24, pages:52, desc:"Diversification strategy, FDI trends, and key growth sectors in the UAE.", seed:"bm-rep-uae" },
  { title:"Amazon.com Company Analysis 2023", type:"Company Report", industry:"Retail", topic:"E-commerce", country:"United States", company:"Amazon", year:2023, date:"Oct 3, 2023", readTime:28, pages:64, desc:"Logistics network, AWS growth, and competitive positioning in e-commerce.", seed:"bm-rep-amazon" },
  { title:"Global Manufacturing Outlook 2023", type:"Industry Report", industry:"Manufacturing", topic:"Automation", country:"Global", company:"", year:2023, date:"Sep 14, 2023", readTime:26, pages:57, desc:"Automation adoption, reshoring trends, and global manufacturing capacity shifts.", seed:"bm-rep-mfg" },
];

// ---- generate additional reports so the explorer has a full 10-page catalog ----
const GEN_INDUSTRIES = ["Technology","Finance","Healthcare","Manufacturing","Retail","Energy"];
const GEN_TOPICS = {
  Technology: ["Artificial Intelligence","Cybersecurity","Cloud Computing","SaaS & Software","Semiconductors"],
  Finance: ["Fintech","Macroeconomics","Investment Banking","Insurance","Digital Payments"],
  Healthcare: ["Digital Health","Biotechnology","Medical Devices","Pharmaceuticals","Health Insurance"],
  Manufacturing: ["Automation","Supply Chain","Robotics","Industrial IoT","Advanced Materials"],
  Retail: ["E-commerce","Omnichannel Retail","Consumer Trends","Fashion & Apparel","Grocery & FMCG"],
  Energy: ["Sustainability","Renewable Energy","Oil & Gas","Energy Storage","Carbon Markets"],
};
const GEN_COUNTRIES = ["Global","United States","United Kingdom","India","Germany","Singapore","United Arab Emirates","Japan","Brazil","China","France","Canada","Australia","South Korea"];
const GEN_COMPANIES = ["Apple","Tesla","Microsoft","Amazon","Google","Meta","Samsung","JPMorgan Chase","Nvidia","Toyota","Shopify","Netflix"];
const GEN_TYPES = ["Industry Report","Country Report","Company Report","Topic Report"];
const GEN_MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function generateReports(count){
  const out = [];
  for(let i=0;i<count;i++){
    const type = GEN_TYPES[i % GEN_TYPES.length];
    const year = [2024,2023,2022,2021][Math.floor(i / 9) % 4];
    const industry = GEN_INDUSTRIES[i % GEN_INDUSTRIES.length];
    const topicsForIndustry = GEN_TOPICS[industry];
    const topic = topicsForIndustry[(i + 1) % topicsForIndustry.length];
    const country = GEN_COUNTRIES[(i + 2) % GEN_COUNTRIES.length];
    const company = GEN_COMPANIES[(i + 3) % GEN_COMPANIES.length];
    const date = `${GEN_MONTHS[(i * 3) % 12]} ${(i % 27) + 1}, ${year}`;

    let title, desc;
    if(type === "Industry Report"){
      title = `${industry} Industry Outlook ${year}`;
      desc = `Market size, competitive landscape, and growth trends shaping the ${industry.toLowerCase()} industry in ${year}.`;
    } else if(type === "Country Report"){
      title = `${country} Market & Economic Report ${year}`;
      desc = `Economic indicators, business climate, and investment opportunities in ${country} for ${year}.`;
    } else if(type === "Company Report"){
      title = `${company} Company Analysis ${year}`;
      desc = `Financial performance, strategy, and competitive positioning of ${company} in ${year}.`;
    } else {
      title = `${topic} Trends Report ${year}`;
      desc = `Key developments, adoption trends, and outlook for ${topic} in ${year}.`;
    }

    out.push({
      title, type, industry, topic, country,
      company: type === "Company Report" ? company : "",
      year, date,
      readTime: 20 + (i % 20),
      pages: 40 + ((i * 7) % 50),
      desc,
      seed: `bm-gen-${i}`,
    });
  }
  return out;
}

REPORTS.push(...generateReports(72));

const FEATURED = [
  { title:"Global Tech Industry Outlook 2024", desc:"Key tech trends, valuation benchmarks, and growth forecasts across major sub-sectors.", date:"May 3, 2024", readTime:40, pages:92, seed:"bm-feat-tech" },
  { title:"Emerging Markets Outlook 2024", desc:"Growth prospects, risk factors, and investment opportunities in emerging economies.", date:"Apr 28, 2024", readTime:34, pages:78, seed:"bm-feat-emerging" },
  { title:"ESG & Sustainability Trends 2024", desc:"ESG investing trends, regulatory updates, and corporate sustainability performance insights.", date:"Apr 22, 2024", readTime:29, pages:66, seed:"bm-feat-esg" },
  { title:"Global Healthcare Innovation Outlook 2024", desc:"Telemedicine growth, biotech breakthroughs, and healthcare investment trends worldwide.", date:"Apr 19, 2024", readTime:32, pages:70, seed:"bm-feat-health" },
  { title:"Future of Work: Global Workforce Trends 2024", desc:"Remote work, automation's impact on jobs, and evolving talent strategies across industries.", date:"Apr 16, 2024", readTime:27, pages:58, seed:"bm-feat-work" },
  { title:"Digital Payments & Banking Outlook 2024", desc:"Real-time payments, embedded finance, and the future of digital banking infrastructure.", date:"Apr 12, 2024", readTime:31, pages:68, seed:"bm-feat-payments" },
  { title:"Global Real Estate Market Report 2024", desc:"Commercial and residential trends, financing conditions, and regional market outlooks.", date:"Apr 8, 2024", readTime:26, pages:60, seed:"bm-feat-realestate" },
  { title:"Artificial Intelligence Investment Outlook 2024", desc:"Venture funding trends, key AI sub-sectors, and where capital is flowing next.", date:"Apr 5, 2024", readTime:33, pages:74, seed:"bm-feat-ai-invest" },
  { title:"Climate Tech & Clean Energy Outlook 2024", desc:"Investment trends, breakthrough technologies, and policy shifts driving the clean energy transition.", date:"Apr 1, 2024", readTime:30, pages:65, seed:"bm-feat-climate" },
];

const TRENDING = [
  { title:"AI in Business: What Leaders Need to Know", category:"Technology", pct:24.8, seed:"bm-trend-ai" },
  { title:"Top Fintech Startups to Watch in 2024", category:"Finance", pct:22.1, seed:"bm-trend-fintech" },
  { title:"Sustainability Trends Shaping Industries", category:"Sustainability", pct:19.6, seed:"bm-trend-sustain" },
  { title:"Digital Transformation in Manufacturing", category:"Industry", pct:17.3, seed:"bm-trend-mfg" },
  { title:"Consumer Behavior Trends in 2024", category:"Marketing", pct:16.2, seed:"bm-trend-consumer" },
  { title:"Global Funding Winter: Recovery in Sight?", category:"Finance", pct:15.8, seed:"bm-trend-funding" },
  { title:"The Rise of Remote Work: New Data", category:"Business", pct:14.7, seed:"bm-trend-remote" },
  { title:"E-commerce Growth in Emerging Markets", category:"E-commerce", pct:13.9, seed:"bm-trend-ecommerce" },
  { title:"Cybersecurity Threats and Solutions 2024", category:"Technology", pct:12.4, seed:"bm-trend-cyber" },
  { title:"Inflation Trends and Market Impact", category:"Economy", pct:11.6, seed:"bm-trend-inflation" },
];

const CATEGORY_COLORS = {
  Technology: "#2563eb",
  Finance: "#16a34a",
  Sustainability: "#16a34a",
  Industry: "#0f9488",
  Marketing: "#f97316",
  Business: "#7c3aed",
  "E-commerce": "#f97316",
  Economy: "#0f9488",
};

const FRESH = [
  { title:"India Fintech Market Report 2024", type:"Country Report", updated:"May 6, 2024", status:"new" },
  { title:"Global Cybersecurity Industry Outlook 2024", type:"Industry Report", updated:"May 5, 2024", status:"updated" },
  { title:"Tesla, Inc. Company Analysis 2024", type:"Company Report", updated:"May 4, 2024", status:"new" },
  { title:"European Economic Outlook Q2 2024", type:"Country Report", updated:"May 3, 2024", status:"updated" },
  { title:"Retail Industry Trends Report 2024", type:"Industry Report", updated:"May 2, 2024", status:"new" },
];

const COLLECTIONS = [
  { name:"AI Industry Reports", icon:"cpu", color:"#dc2626", count:38, latest:"May 6, 2024", desc:"AI market research, trends, company analysis, and technology outlooks.", coverage:"Global Coverage", seed:"bm-col-ai" },
  { name:"Global Fintech Reports", icon:"bank", color:"#2563eb", count:54, latest:"May 5, 2024", desc:"Fintech market insights, regulation, startups, and innovation trends.", coverage:"Global Coverage", seed:"bm-col-fintech" },
  { name:"U.S. Business Reports", icon:"flag", color:"#16a34a", count:62, latest:"May 4, 2024", desc:"U.S. economy, industries, companies, and business trend reports.", coverage:"United States", seed:"bm-col-us" },
  { name:"Startup Ecosystem Reports", icon:"layers", color:"#f97316", count:47, latest:"May 3, 2024", desc:"Startup funding, ecosystems, accelerators, and founder trend reports.", coverage:"Multi-Country", seed:"bm-col-startup" },
  { name:"Annual Market Outlook Series", icon:"trendUp", color:"#7c3aed", count:31, latest:"Apr 30, 2024", desc:"Annual outlook reports across industries and key markets.", coverage:"Global Coverage", seed:"bm-col-outlook" },
  { name:"Digital Banking Research", icon:"shield", color:"#0f9488", count:29, latest:"Apr 20, 2024", desc:"Digital banking trends, neobanks, platforms, and customer insights.", coverage:"Global Coverage", seed:"bm-col-banking" },
];

const AUTHORS = [
  { name:"Dr. Emily Carter", role:"Chief Economist", count:28, photo:47 },
  { name:"Rohan Mehta", role:"Senior Research Analyst", count:24, photo:51 },
  { name:"Lisa Chen", role:"Industry Research Lead", count:22, photo:25 },
  { name:"Michael Anderson", role:"Market Strategist", count:21, photo:12 },
  { name:"Sofia Alvarez", role:"ESG Research Director", count:19, photo:44 },
  { name:"James Wilson", role:"Senior Data Analyst", count:17, photo:33 },
];

const FAQS = [
  { q:"What types of reports are available on BizMend?", a:"BizMend offers industry reports, country/market outlooks, company analyses, and topic-focused research covering finance, technology, sustainability, and more." },
  { q:"How often are reports updated?", a:"Core reports are refreshed quarterly, while trending and freshly published lists are updated on a rolling weekly basis as new research is added." },
  { q:"Can I download full reports?", a:"Yes — most reports offer a downloadable PDF version. Some in-depth or premium reports may require a subscription to access the full document." },
  { q:"Are reports available for specific countries or industries?", a:"Yes — use the Report Explorer filters to narrow results by industry, topic, country, company, report type, or publication year." },
  { q:"Can I request a custom report or data?", a:"Yes — reach out through the Resources section to request custom research, and our team will evaluate feasibility and turnaround time." },
  { q:"How do report collections work?", a:"Collections are auto-generated groupings of related reports based on shared tags, industries, countries, or recurring annual series." },
];

// ============================================================
// STATE
// ============================================================
let filteredReports = [...REPORTS];
let currentPage = 1;
const PER_PAGE = 9;

let featuredPage = 1;
const FEATURED_PER_PAGE = 3;

// ============================================================
// GENERIC PAGINATION
// ============================================================
function renderPager(el, current, totalPages, onChange){
  if(totalPages <= 1){ el.innerHTML = ''; return; }
  let html = `<button class="page-btn" data-act="prev" ${current===1?'disabled':''}>${ICONS.chevLeft}</button>`;

  const pages = [];
  if(totalPages <= 5){
    for(let i=1;i<=totalPages;i++) pages.push(i);
  } else if(current <= 3){
    pages.push(1,2,3,'...',totalPages);
  } else if(current >= totalPages-2){
    pages.push(1,'...',totalPages-2,totalPages-1,totalPages);
  } else {
    pages.push(1,'...',current,'...',totalPages);
  }
  pages.forEach(p=>{
    if(p === '...'){
      html += `<span class="page-btn dots">...</span>`;
    } else {
      html += `<button class="page-btn ${p===current?'active':''}" data-page="${p}">${p}</button>`;
    }
  });
  html += `<button class="page-btn" data-act="next" ${current===totalPages?'disabled':''}>${ICONS.chevRight}</button>`;
  el.innerHTML = html;

  el.querySelectorAll('button[data-page]').forEach(btn=>{
    btn.addEventListener('click', ()=> onChange(parseInt(btn.dataset.page)));
  });
  const prevBtn = el.querySelector('[data-act="prev"]');
  const nextBtn = el.querySelector('[data-act="next"]');
  if(prevBtn) prevBtn.addEventListener('click', ()=>{ if(current>1) onChange(current-1); });
  if(nextBtn) nextBtn.addEventListener('click', ()=>{ if(current<totalPages) onChange(current+1); });
}

// ============================================================
// RENDER: STATS STRIP
// ============================================================
function renderSnapshot(){
  const items = [
    { icon:"doc", num:"1,248", label:"Reports" },
    { icon:"building", num:"42", label:"Industries" },
    { icon:"tag", num:"96", label:"Topics" },
    { icon:"globe", num:"58", label:"Countries" },
    { icon:"building", num:"312", label:"Companies Analyzed" },
    { icon:"users", num:"74", label:"Contributors" },
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
// RENDER: REPORT EXPLORER
// ============================================================
function populateFilterOptions(){
  const uniq = (key) => [...new Set(REPORTS.map(r=>r[key]).filter(Boolean))].sort();
  const fill = (id, values, placeholder) => {
    const el = document.getElementById(id);
    el.innerHTML = `<option value="">${placeholder}</option>` + values.map(v=>`<option value="${v}">${v}</option>`).join('');
  };
  fill('filterIndustry', uniq('industry'), 'Industry');
  fill('filterTopic', uniq('topic'), 'Topic');
  fill('filterCountry', uniq('country'), 'Country');
  fill('filterCompany', uniq('company'), 'Company');
  fill('filterType', uniq('type'), 'Report Type');
  fill('filterYear', [...new Set(REPORTS.map(r=>r.year))].sort((a,b)=>b-a), 'Published Year');
}

function renderReports(){
  const grid = document.getElementById('reportGrid');
  const start = (currentPage - 1) * PER_PAGE;
  const pageItems = filteredReports.slice(start, start + PER_PAGE);

  if(pageItems.length === 0){
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--muted);padding:30px 0;">No reports match your filters.</p>`;
  } else {
    grid.innerHTML = pageItems.map(r => `
      <div class="report-card">
        <div class="report-thumb">
          <img src="${reportPhotoUrl(r.seed)}" alt="${r.title}" loading="lazy">
          <span class="report-type-badge" style="background:${TYPE_COLORS[r.type]};">${r.type}</span>
        </div>
        <div class="report-body">
          <h3>${r.title}</h3>
          <p class="report-desc">${r.desc}</p>
          <div class="report-meta-row">
            <span>${ICONS.calendar} ${r.date}</span>
            <span>${ICONS.clock} ${r.readTime} min read</span>
            <span>${ICONS.pages} ${r.pages} pages</span>
          </div>
          <a href="${r.link || '#'}" class="report-view-link">View Report ${ICONS.arrow}</a>
        </div>
      </div>
    `).join('');
  }
  const totalPages = Math.max(1, Math.ceil(filteredReports.length / PER_PAGE));
  if(currentPage > totalPages) currentPage = totalPages;
  renderPager(document.getElementById('pagination'), currentPage, totalPages, (p)=>{
    currentPage = p;
    renderReports();
    document.getElementById('explorer').scrollIntoView({behavior:'smooth', block:'start'});
  });
}

function applyFilters(){
  const search = document.getElementById('filterSearch').value.trim().toLowerCase();
  const industry = document.getElementById('filterIndustry').value;
  const topic = document.getElementById('filterTopic').value;
  const country = document.getElementById('filterCountry').value;
  const company = document.getElementById('filterCompany').value;
  const type = document.getElementById('filterType').value;
  const year = document.getElementById('filterYear').value;
  const sort = document.getElementById('filterSort').value;

  filteredReports = REPORTS.filter(r=>{
    return (!search || r.title.toLowerCase().includes(search) || r.desc.toLowerCase().includes(search))
      && (!industry || r.industry === industry)
      && (!topic || r.topic === topic)
      && (!country || r.country === country)
      && (!company || r.company === company)
      && (!type || r.type === type)
      && (!year || String(r.year) === year);
  });

  if(sort === 'az'){
    filteredReports.sort((a,b)=>a.title.localeCompare(b.title));
  } else if(sort === 'oldest'){
    filteredReports.sort((a,b)=> a.year - b.year || a.title.localeCompare(b.title));
  } else {
    filteredReports.sort((a,b)=> b.year - a.year || new Date(b.date) - new Date(a.date));
  }

  currentPage = 1;
  renderReports();
}

// ============================================================
// RENDER: FEATURED
// ============================================================
function renderFeatured(){
  const start = (featuredPage - 1) * FEATURED_PER_PAGE;
  const pageItems = FEATURED.slice(start, start + FEATURED_PER_PAGE);

  document.getElementById('featuredGrid').innerHTML = pageItems.map(f=>`
    <div class="featured-card">
      <div class="featured-photo">
        <img src="${reportPhotoUrl(f.seed,600,400)}" alt="${f.title}">
        <span class="featured-badge">Featured</span>
        <span class="featured-star">${ICONS.star}</span>
        <div class="featured-title-on-photo">${f.title}</div>
      </div>
      <div class="featured-body">
        <p>${f.desc}</p>
        <div class="featured-meta-row">
          <span>${ICONS.calendar} ${f.date}</span>
          <span>${ICONS.clock} ${f.readTime} min read</span>
          <span>${ICONS.pages} ${f.pages} pages</span>
        </div>
        <a href="${f.link || '#'}" class="report-view-link">View Report ${ICONS.arrow}</a>
      </div>
    </div>
  `).join('');

  const totalPages = Math.max(1, Math.ceil(FEATURED.length / FEATURED_PER_PAGE));
  renderPager(document.getElementById('featuredPagination'), featuredPage, totalPages, (p)=>{
    featuredPage = p;
    renderFeatured();
    document.getElementById('featuredGrid').scrollIntoView({behavior:'smooth', block:'start'});
  });
}

// ============================================================
// RENDER: TRENDING
// ============================================================
function renderTrending(){
  document.getElementById('trendingGrid').innerHTML = TRENDING.map((t,i)=>{
    const color = CATEGORY_COLORS[t.category] || "#0f9488";
    return `
    <div class="trend-list-row">
      <span class="trend-list-rank">${i+1}</span>
      <div class="trend-list-thumb"><img src="${reportPhotoUrl(t.seed,88,88)}" alt="${t.title}" loading="lazy"></div>
      <div class="trend-list-info">
        <div class="trend-list-name">${t.title}</div>
        <span class="trend-list-tag" style="background:${color}1f;color:${color};">${t.category}</span>
      </div>
      <div class="trend-list-right">
        <span class="trend-list-change" style="color:${color};">${ICONS.trendUp} ${t.pct}%</span>
        <svg class="trend-list-spark" viewBox="0 0 72 30"><polyline points="0,25 12,18 24,20 36,10 48,13 60,4 72,7" fill="none" stroke="${color}" stroke-width="2"/></svg>
      </div>
    </div>`;
  }).join('');
}

// ============================================================
// RENDER: FRESHLY PUBLISHED TABLE
// ============================================================
function renderFresh(){
  document.getElementById('freshTableBody').innerHTML = FRESH.map(f=>`
    <tr>
      <td><div class="fresh-title-cell">${ICONS.doc}<span>${f.title}</span></div></td>
      <td><span class="type-pill" style="background:${TYPE_COLORS[f.type]}1a;color:${TYPE_COLORS[f.type]};">${f.type}</span></td>
      <td class="fresh-date">${f.updated}</td>
      <td><span class="status-pill status-${f.status}">${f.status === 'new' ? 'New' : 'Updated'}</span></td>
    </tr>
  `).join('');
}

// ============================================================
// RENDER: COLLECTIONS
// ============================================================
function renderCollections(){
  document.getElementById('collectionsGrid').innerHTML = COLLECTIONS.map(c=>`
    <div class="collection-card">
      <div class="collection-thumb">
        <img src="${reportPhotoUrl(c.seed,480,300)}" alt="${c.name}" loading="lazy">
        <span class="collection-icon-badge" style="background:${c.color};">${ICONS[c.icon]}</span>
      </div>
      <div class="collection-card-body">
        <h3>${c.name}</h3>
        <div class="collection-count">${c.count} reports</div>
        <p class="collection-desc">${c.desc}</p>
        <div class="collection-foot">
          <span>${ICONS.clock} Latest: ${c.latest}</span>
          <span>${ICONS.globe} ${c.coverage}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ============================================================
// RENDER: AUTHORS
// ============================================================
function renderAuthors(){
  document.getElementById('authorsScroll').innerHTML = AUTHORS.map((a)=>`
    <div class="author-card">
      <div class="author-photo">
        <img src="https://i.pravatar.cc/160?img=${a.photo}" alt="${a.name} photo">
      </div>
      <h4>${a.name}</h4>
      <div class="author-role">${a.role}</div>
      <div class="author-count">${a.count} reports</div>
      <a href="#" class="author-view">View Author ${ICONS.arrow}</a>
    </div>`
  ).join('');
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
  renderReports();
  renderFeatured();
  renderTrending();
  renderFresh();
  renderCollections();
  renderAuthors();
  renderFaqs();

  document.getElementById('filterSearch').addEventListener('input', applyFilters);
  document.getElementById('filterIndustry').addEventListener('change', applyFilters);
  document.getElementById('filterTopic').addEventListener('change', applyFilters);
  document.getElementById('filterCountry').addEventListener('change', applyFilters);
  document.getElementById('filterCompany').addEventListener('change', applyFilters);
  document.getElementById('filterType').addEventListener('change', applyFilters);
  document.getElementById('filterYear').addEventListener('change', applyFilters);
  document.getElementById('filterSort').addEventListener('change', applyFilters);

  document.getElementById('heroSearchBtn').addEventListener('click', (e)=>{
    e.preventDefault();
    const val = document.getElementById('heroSearch').value;
    document.getElementById('filterSearch').value = val;
    applyFilters();
    document.getElementById('explorer').scrollIntoView({behavior:'smooth'});
  });

  // Mobile nav is handled by the shared site header (../shared/bm-chrome.js via #bmHamburgerBtn/#bmMobileNav).
});

// ===== SHARED HELPERS =====
function initialsOf(name){ return name.split(" ").filter(Boolean).map(w=>w[0]).slice(0,2).join("").toUpperCase(); }

const ICONS = {
  arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  file: '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>',
  tag: '<svg viewBox="0 0 24 24"><path d="M20.59 13.41L11 3.83A2 2 0 009.59 3.3H4a1 1 0 00-1 1v5.59a2 2 0 00.59 1.41l9.6 9.6a2 2 0 002.82 0l6.58-6.58a2 2 0 000-2.83z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>',
  building: '<svg viewBox="0 0 24 24"><path d="M3 21h18M6 21V10l6-6 6 6v11" /><rect x="10" y="14" width="4" height="7"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>',
  users: '<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
  globe: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20 15 15 0 010-20z"/></svg>',
  clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  trendUp: '<svg viewBox="0 0 24 24"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>',
  eye: '<svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
};

const CATEGORY_COLORS = {
  "Technology":{fg:"#2563eb",bg:"#eef2ff"},
  "Finance":{fg:"#16a34a",bg:"#e7f8ed"},
  "Business":{fg:"#7c3aed",bg:"#f1e9fe"},
  "Marketing":{fg:"#f97316",bg:"#fef1e6"},
  "Economy":{fg:"#0f9488",bg:"#e6f6f4"},
  "Sustainability":{fg:"#16a34a",bg:"#e7f8ed"},
  "Supply Chain":{fg:"#f97316",bg:"#fef1e6"},
  "HR":{fg:"#7c3aed",bg:"#f1e9fe"},
  "Real Estate":{fg:"#2563eb",bg:"#eef2ff"},
  "Payments":{fg:"#16a34a",bg:"#e7f8ed"},
  "Cybersecurity":{fg:"#dc2626",bg:"#fdeaea"},
  "E-commerce":{fg:"#f97316",bg:"#fef1e6"},
  "Featured":{fg:"#16a34a",bg:"#e7f8ed"},
};

function unsplash(id){ return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=70`; }
function avatar(seed){ return `https://i.pravatar.cc/100?img=${seed}`; }

// ===== DATA: SNAPSHOT =====
const snapshotStats = [
  { num:"12,847", label:"Total Insights", icon:ICONS.file },
  { num:"512", label:"Topics Covered", icon:ICONS.tag },
  { num:"156", label:"Industries Covered", icon:ICONS.building },
  { num:"2,948", label:"Companies Covered", icon:ICONS.briefcase },
  { num:"1,283", label:"Authors / Contributors", icon:ICONS.users },
  { num:"98", label:"Countries Covered", icon:ICONS.globe },
];

// ===== DATA: AUTHORS =====
const authors = [
  { name:"John Carter", role:"Senior Analyst", insights:128, views:"24.5K", img:avatar(12) },
  { name:"Sarah Mitchell", role:"Research Director", insights:96, views:"19.7K", img:avatar(45) },
  { name:"Michael Chen", role:"Industry Expert", insights:112, views:"16.3K", img:avatar(33) },
  { name:"Emily Johnson", role:"Marketing Strategist", insights:94, views:"14.6K", img:avatar(48) },
  { name:"David Rodriguez", role:"Economist", insights:88, views:"13.2K", img:avatar(15) },
  { name:"Sophia Lee", role:"Cybersecurity Analyst", insights:81, views:"12.1K", img:avatar(28) },
  { name:"Alex Morgan", role:"Industry Analyst", insights:77, views:"11.4K", img:avatar(22) },
  { name:"James Wilson", role:"Policy Researcher", insights:69, views:"10.8K", img:avatar(51) },
];

// ===== DATA: INSIGHT EXPLORER CARDS =====
const EXPLORER_INSIGHTS = [
  { cat:"Technology", title:"AI Adoption in 2024: Global Trends and Key Takeaways", desc:"Explore how businesses worldwide are adopting AI and the impact on productivity and innovation.", author:authors[0], date:"May 17, 2024", read:"6 min read", img:unsplash("1677442136019-21780ecad995") },
  { cat:"Finance", title:"Global Fintech Investment Trends Q1 2024", desc:"In-depth analysis of fintech funding patterns, top investors and emerging opportunities.", author:authors[1], date:"May 16, 2024", read:"5 min read", img:unsplash("1611974789855-9c2a0a7236a3") },
  { cat:"Business", title:"Cross-Border Expansion Strategies for SMEs", desc:"Proven strategies to expand your business into new markets successfully.", author:authors[2], date:"May 15, 2024", read:"7 min read", img:unsplash("1560250097-0b93528c311a") },
  { cat:"Marketing", title:"The Future of Digital Marketing in 2024", desc:"Key digital marketing trends, channel performance and what to expect in the coming year.", author:authors[3], date:"May 14, 2024", read:"6 min read", img:unsplash("1611162617213-7d7a39e9b1d7") },
  { cat:"Economy", title:"Global Economic Outlook 2024-2025", desc:"Key predictions and analysis of global economic trends shaping businesses and markets.", author:authors[4], date:"May 13, 2024", read:"6 min read", img:unsplash("1526304640581-d334cdbbf45e") },
  { cat:"Technology", title:"Cloud Infrastructure Spending Hits Record High", desc:"Enterprise cloud budgets grow as workloads shift toward AI-driven services.", author:authors[0], date:"May 12, 2024", read:"5 min read", img:unsplash("1544197150-b99a580bb7a8") },
  { cat:"Finance", title:"Central Bank Digital Currencies: State of Play", desc:"Which economies are furthest along in CBDC pilots and what it means for banks.", author:authors[1], date:"May 11, 2024", read:"8 min read", img:unsplash("1621761191319-c6fb62004040") },
  { cat:"Business", title:"M&A Activity Rebounds Across Mid-Market Deals", desc:"Deal volume trends and what's driving renewed appetite for acquisitions.", author:authors[2], date:"May 10, 2024", read:"6 min read", img:unsplash("1454165804606-c3d57bc86b40") },
  { cat:"Sustainability", title:"Corporate Net-Zero Pledges: Progress Report", desc:"Tracking how major companies are performing against their climate commitments.", author:authors[4], date:"May 9, 2024", read:"7 min read", img:unsplash("1466611653911-95081537e5b7") },
  { cat:"Cybersecurity", title:"Ransomware Trends Businesses Should Watch", desc:"Attack patterns, sectors at risk, and how enterprises are responding.", author:authors[5], date:"May 8, 2024", read:"6 min read", img:unsplash("1550751827-4bd374c3f58b") },
  { cat:"Supply Chain", title:"Global Supply Chain Resilience in 2024", desc:"How companies are rebuilding logistics networks after years of disruption.", author:authors[6], date:"May 7, 2024", read:"5 min read", img:unsplash("1494412651409-8963ce7935a7") },
  { cat:"HR", title:"The Skills Employers Actually Want in 2024", desc:"Hiring data reveals a shift toward hybrid technical and soft-skill profiles.", author:authors[3], date:"May 6, 2024", read:"4 min read", img:unsplash("1521737604893-d14cc237f11d") },
  { cat:"Real Estate", title:"Commercial Real Estate: Office Demand Shifts", desc:"Vacancy rates and leasing trends across major metro markets.", author:authors[7], date:"May 5, 2024", read:"6 min read", img:unsplash("1486406146926-c627a92ad1ab") },
  { cat:"Payments", title:"The Evolution of Digital Payments", desc:"Wallets, real-time rails and the race to replace cash globally.", author:authors[1], date:"May 4, 2024", read:"5 min read", img:unsplash("1556742049-0cfed4f6a45d") },
  { cat:"E-commerce", title:"Social Commerce Growth Across Emerging Markets", desc:"Livestream shopping and in-app checkout are reshaping retail funnels.", author:authors[2], date:"May 3, 2024", read:"6 min read", img:unsplash("1556742212-5b321f3c261b") },
  { cat:"Technology", title:"Edge Computing Moves From Pilot to Production", desc:"Enterprises scale edge deployments to cut latency for real-time workloads.", author:authors[0], date:"May 2, 2024", read:"5 min read", img:unsplash("1518770660439-4636190af475") },
  { cat:"Finance", title:"Private Credit Keeps Growing as Banks Pull Back", desc:"Non-bank lenders fill the gap left by tighter traditional credit standards.", author:authors[4], date:"May 1, 2024", read:"7 min read", img:unsplash("1454165833685-cf2701d1e4e6") },
  { cat:"Business", title:"Founder-Led Sales: Why Early Traction Depends on It", desc:"Why the best early-stage go-to-market motion starts with the founder.", author:authors[6], date:"Apr 30, 2024", read:"5 min read", img:unsplash("1552664730-d307ca884978") },
  { cat:"Marketing", title:"Retail Media Networks Are the New Ad Battleground", desc:"Brands shift budget toward on-platform advertising as it scales.", author:authors[3], date:"Apr 29, 2024", read:"6 min read", img:unsplash("1533750349088-cd871a92f312") },
  { cat:"Economy", title:"Inflation Trends and What They Mean for 2025", desc:"A look at core inflation drivers and central bank responses worldwide.", author:authors[4], date:"Apr 28, 2024", read:"6 min read", img:unsplash("1590283603385-17ffb3a7f29f") },
];

// generate extra pages of filler content so pagination has real depth (20 pages)
const TOPIC_NAMES = ["AI","Fintech","Sustainability","Digital Marketing","Cybersecurity","E-commerce","Supply Chain","HR Tech","Real Estate","Payments"];
const INDUSTRY_NAMES = ["Technology","Finance","Healthcare","Retail","Manufacturing","Energy","Education"];
const COMPANY_NAMES = ["Microsoft","Google","Amazon","JPMorgan Chase","Shopify","Siemens","Pfizer"];
const COUNTRY_NAMES = ["United States","United Kingdom","Germany","Singapore","Canada","India"];
const CONTENT_TYPES = ["Report","Analysis","Insight","Interview","Case Study"];

const allInsights = [...EXPLORER_INSIGHTS];
const CATS = Object.keys(CATEGORY_COLORS).filter(c=>c!=="Featured");
for (let i=0;i<80;i++){
  const base = EXPLORER_INSIGHTS[i % EXPLORER_INSIGHTS.length];
  const cat = CATS[i % CATS.length];
  allInsights.push({
    cat,
    title: `${base.title.split(":")[0]} — Update ${i+21}`,
    desc: base.desc,
    author: authors[i % authors.length],
    date: base.date,
    read: base.read,
    img: base.img,
  });
}

// ===== DATA: TRENDING =====
const trending = [
  { title:"AI in Business: What Leaders Need to Know", cat:"Technology", change:"24.8%", img:unsplash("1677442136019-21780ecad995"), pts:[3,5,4,7,9,14,22] },
  { title:"Top Fintech Startups to Watch in 2024", cat:"Finance", change:"22.1%", img:unsplash("1611974789855-9c2a0a7236a3"), pts:[4,5,5,6,8,11,16] },
  { title:"Sustainability Trends Shaping Industries", cat:"Sustainability", change:"19.6%", img:unsplash("1466611653911-95081537e5b7"), pts:[5,6,6,8,9,11,14] },
  { title:"Digital Transformation in Manufacturing", cat:"Industry", change:"17.3%", img:unsplash("1518770660439-4636190af475"), pts:[6,6,7,8,8,10,12] },
  { title:"Consumer Behavior Trends in 2024", cat:"Marketing", change:"16.2%", img:unsplash("1533750349088-cd871a92f312"), pts:[7,7,8,8,9,10,11] },
  { title:"Global Funding Winter: Recovery in Sight?", cat:"Finance", change:"15.8%", img:unsplash("1454165804606-c3d57bc86b40"), pts:[5,6,5,7,9,10,13] },
  { title:"The Rise of Remote Work New Data", cat:"Business", change:"14.7%", img:unsplash("1521737604893-d14cc237f11d"), pts:[6,6,7,7,8,9,10] },
  { title:"E-commerce Growth in Emerging Markets", cat:"E-commerce", change:"13.9%", img:unsplash("1556742212-5b321f3c261b"), pts:[5,5,6,7,8,9,11] },
  { title:"Cybersecurity Threats and Solutions 2024", cat:"Technology", change:"12.4%", img:unsplash("1550751827-4bd374c3f58b"), pts:[6,7,6,8,8,9,10] },
  { title:"Inflation Trends and Market Impact", cat:"Economy", change:"11.6%", img:unsplash("1590283603385-17ffb3a7f29f"), pts:[5,6,6,7,7,8,9] },
];

// ===== DATA: RECENTLY PUBLISHED =====
const recentInsights = [
  { cat:"Sustainability", title:"Renewable Energy Investments in 2024", date:"May 17, 2024", read:"5 min read", img:unsplash("1466611653911-95081537e5b7") },
  { cat:"Supply Chain", title:"Global Supply Chain Trends and Challenges", date:"May 17, 2024", read:"6 min read", img:unsplash("1494412651409-8963ce7935a7") },
  { cat:"HR", title:"Future of Work: Skills in High Demand", date:"May 16, 2024", read:"4 min read", img:unsplash("1521737604893-d14cc237f11d") },
  { cat:"Real Estate", title:"Commercial Real Estate Outlook 2024", date:"May 16, 2024", read:"6 min read", img:unsplash("1486406146926-c627a92ad1ab") },
  { cat:"Payments", title:"The Evolution of Digital Payments", date:"May 16, 2024", read:"5 min read", img:unsplash("1556742049-0cfed4f6a45d") },
  { cat:"Technology", title:"Quantum Computing Reaches New Milestone", date:"May 15, 2024", read:"5 min read", img:unsplash("1635070041078-e363dbe005cb") },
  { cat:"Finance", title:"Venture Funding Trends Across Fintech", date:"May 15, 2024", read:"6 min read", img:unsplash("1611974789855-9c2a0a7236a3") },
  { cat:"Marketing", title:"Retail Media Ad Spend Keeps Climbing", date:"May 14, 2024", read:"5 min read", img:unsplash("1533750349088-cd871a92f312") },
];

// ===== DATA: FEATURED =====
const featured = [
  { title:"The Global Startup Ecosystem Report 2024", desc:"Comprehensive analysis of funding, valuations, and key trends.", author:"BizMend Research Team", date:"May 10, 2024", read:"10 min read", img:unsplash("1477959858617-67f85cf4f1df") },
  { title:"Top 10 Industries to Watch in the Next Decade", desc:"Industry analysis and growth opportunities for the future.", author:"Alex Morgan", date:"May 9, 2024", read:"8 min read", img:unsplash("1451187580459-43490279c0fa") },
  { title:"Cybersecurity in 2024: Risks and Opportunities", desc:"Key cybersecurity trends and how businesses can stay protected.", author:"Sophia Lee", date:"May 8, 2024", read:"7 min read", img:unsplash("1550751827-4bd374c3f58b") },
  { title:"Economic Policy Changes Impacting Businesses", desc:"Analysis of recent policy changes and business implications.", author:"James Wilson", date:"May 7, 2024", read:"9 min read", img:unsplash("1454165804606-c3d57bc86b40") },
  { title:"The State of Global Trade in 2024", desc:"Tariffs, shifting alliances, and what it means for supply chains.", author:"David Rodriguez", date:"May 6, 2024", read:"8 min read", img:unsplash("1494412651409-8963ce7935a7") },
  { title:"Venture Capital Outlook for Emerging Markets", desc:"Where global investors are placing early-stage bets this year.", author:"Sarah Mitchell", date:"May 5, 2024", read:"7 min read", img:unsplash("1454165833685-cf2701d1e4e6") },
  { title:"AI Regulation: What Businesses Need to Know", desc:"A practical breakdown of emerging AI governance frameworks worldwide.", author:"John Carter", date:"May 4, 2024", read:"9 min read", img:unsplash("1620712943543-bcc4688e7485") },
  { title:"The Next Decade of Renewable Energy Investment", desc:"Capital flows, policy incentives, and the path to grid parity.", author:"Michael Chen", date:"May 3, 2024", read:"8 min read", img:unsplash("1466611653911-95081537e5b7") },
];

// ===== DATA: FAQ =====
const faqs = [
  { q:"What types of insights are available on BizMend?", a:"BizMend offers reports, analyses, interviews and case studies covering industries, companies, founders, and market trends worldwide." },
  { q:"Can I contribute or submit my own insight?", a:"Yes. Use the \"Contribute an Insight\" button on this page to submit your analysis for our editorial team to review." },
  { q:"How often are new insights published?", a:"New insights are added daily, with major reports and analyses published on a weekly cadence." },
  { q:"How can I stay updated with the latest insights?", a:"Subscribe to our newsletter or follow BizMend on social media to get notified of new insights as they publish." },
  { q:"Can I filter insights by industry, topic or country?", a:"Yes. Use the filters in the Insight Explorer above to narrow results by topic, industry, company, country, or content type." },
  { q:"Can I share insights from BizMend?", a:"Yes, insights can be shared with attribution. See our Content Guidelines for full reuse terms." },
  { q:"Are BizMend insights free to access?", a:"Most insights are free to read. Select in-depth reports may require a free account to unlock." },
  { q:"How can I contact the BizMend research team?", a:"Reach out via the Contact page in our footer, or use the \"Suggest a Topic\" button to route a request directly to research." },
];

// ===== RENDER: SNAPSHOT =====
function renderSnapshot(){
  document.getElementById("snapshotGrid").innerHTML = snapshotStats.map(s=>`
    <div class="snap-item">
      <div class="snap-icon">${s.icon}</div>
      <div>
        <div class="snap-num">${s.num}</div>
        <div class="snap-label">${s.label}</div>
      </div>
    </div>
  `).join("");
}

// ===== RENDER: EXPLORER =====
const PAGE_SIZE = 12;
let currentPage = 1;
const insightGrid = document.getElementById("insightGrid");
const pagination = document.getElementById("pagination");
const filterSearch = document.getElementById("filterSearch");
const heroSearch = document.getElementById("heroSearch");
const filterTopic = document.getElementById("filterTopic");
const filterIndustry = document.getElementById("filterIndustry");
const filterCompany = document.getElementById("filterCompany");
const filterCountry = document.getElementById("filterCountry");
const filterType = document.getElementById("filterType");
const sortBy = document.getElementById("sortBy");

function populateSelect(select, values, placeholder){
  select.innerHTML = `<option value="">${placeholder}</option>` +
    values.map(v => `<option value="${v}">${v}</option>`).join("");
}

function initFilters(){
  populateSelect(filterTopic, TOPIC_NAMES, "All Topics");
  populateSelect(filterIndustry, INDUSTRY_NAMES, "All Industries");
  populateSelect(filterCompany, COMPANY_NAMES, "All Companies");
  populateSelect(filterCountry, COUNTRY_NAMES, "All Countries");
  populateSelect(filterType, CONTENT_TYPES, "All Content Types");
}

function getFilteredInsights(){
  const q = (filterSearch.value || heroSearch.value || "").toLowerCase().trim();
  let list = allInsights.filter(a=>{
    if (q && !(a.title.toLowerCase().includes(q) || a.desc.toLowerCase().includes(q) || a.cat.toLowerCase().includes(q))) return false;
    return true;
  });
  if (sortBy.value === "az") list = [...list].sort((a,b)=>a.title.localeCompare(b.title));
  else if (sortBy.value === "za") list = [...list].sort((a,b)=>b.title.localeCompare(a.title));
  return list;
}

function insightCard(a){
  const c = CATEGORY_COLORS[a.cat] || {fg:"#0f9488",bg:"#e6f6f4"};
  return `
    <div class="insight-card">
      <div class="insight-thumb">
        <img src="${a.img}" alt="${a.title}" loading="lazy">
        <span class="insight-cat" style="background:${c.fg};">${a.cat}</span>
      </div>
      <div class="insight-body">
        <h4>${a.title}</h4>
        <p>${a.desc}</p>
        <div class="insight-meta">
          <img class="insight-avatar" src="${a.author.img}" alt="${a.author.name}">
          <div class="insight-meta-text">
            <div class="insight-author">${a.author.name}</div>
            <div class="insight-subtext">${a.date} &middot; ${a.read}</div>
          </div>
        </div>
        <a href="#" class="insight-read">Read Insight ${ICONS.arrow}</a>
      </div>
    </div>
  `;
}

function renderPagination(totalItems){
  const totalPages = Math.max(1, Math.ceil(totalItems / PAGE_SIZE));
  if (currentPage > totalPages) currentPage = totalPages;

  let html = `<button class="page-btn" id="prevPage" ${currentPage===1?"disabled":""}>
    <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
  </button>`;

  const pages = [];
  for (let i=1;i<=totalPages;i++){
    if (i<=3 || i===totalPages || Math.abs(i-currentPage)<=1) pages.push(i);
    else if (pages[pages.length-1] !== "...") pages.push("...");
  }

  pages.forEach(p=>{
    if (p==="...") html += `<span class="page-btn dots">...</span>`;
    else html += `<button class="page-btn ${p===currentPage?"active":""}" data-page="${p}">${p}</button>`;
  });

  html += `<button class="page-btn" id="nextPage" ${currentPage===totalPages?"disabled":""}>
    <svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
  </button>`;

  pagination.innerHTML = html;

  pagination.querySelectorAll("[data-page]").forEach(btn=>{
    btn.addEventListener("click", ()=>{ currentPage = parseInt(btn.dataset.page,10); renderInsights(); document.getElementById("explorer").scrollIntoView({behavior:"smooth"}); });
  });
  const prev = document.getElementById("prevPage");
  const next = document.getElementById("nextPage");
  if (prev) prev.addEventListener("click", ()=>{ if(currentPage>1){currentPage--; renderInsights(); document.getElementById("explorer").scrollIntoView({behavior:"smooth"});} });
  if (next) next.addEventListener("click", ()=>{ if(currentPage<totalPages){currentPage++; renderInsights(); document.getElementById("explorer").scrollIntoView({behavior:"smooth"});} });
}

function renderInsights(){
  const list = getFilteredInsights();
  const start = (currentPage-1)*PAGE_SIZE;
  const pageItems = list.slice(start, start+PAGE_SIZE);

  insightGrid.innerHTML = pageItems.length
    ? pageItems.map(insightCard).join("")
    : `<div style="grid-column:1/-1;text-align:center;color:#94a3b8;padding:40px 0;">No insights match your filters.</div>`;

  renderPagination(list.length);
}

// ===== RENDER: TRENDING =====
function sparkline(pts, color){
  const w=56,h=24,max=Math.max(...pts),min=Math.min(...pts);
  const step = w/(pts.length-1);
  const norm = v => h - 3 - ((v-min)/((max-min)||1))*(h-6);
  const d = pts.map((p,i)=>`${i===0?"M":"L"}${(i*step).toFixed(1)},${norm(p).toFixed(1)}`).join(" ");
  return `<svg class="trend-spark" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
    <path d="${d}" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}

function renderTrending(){
  document.getElementById("trendingList").innerHTML = trending.map((t,i)=>{
    const c = CATEGORY_COLORS[t.cat] || {fg:"#0f9488",bg:"#e6f6f4"};
    return `
    <div class="trend-row">
      <div class="trend-rank">${i+1}</div>
      <img class="trend-thumb" src="${t.img}" alt="${t.title}" loading="lazy">
      <div class="trend-info">
        <div class="trend-name">${t.title}</div>
        <span class="trend-tag" style="background:${c.bg};color:${c.fg};">${t.cat}</span>
      </div>
      <div class="trend-change">${ICONS.trendUp} ${t.change}</div>
      ${sparkline(t.pts, c.fg)}
    </div>
  `;}).join("");
}

// ===== RENDER: RECENTLY PUBLISHED =====
function renderRecent(){
  document.getElementById("recentScroller").innerHTML = recentInsights.map(r=>{
    const c = CATEGORY_COLORS[r.cat] || {fg:"#0f9488",bg:"#e6f6f4"};
    return `
    <div class="recent-card">
      <div class="recent-thumb">
        <img src="${r.img}" alt="${r.title}" loading="lazy">
        <span class="insight-cat" style="background:${c.fg};">${r.cat}</span>
      </div>
      <div class="recent-body">
        <h4>${r.title}</h4>
        <div class="recent-sub">${r.date} &middot; ${r.read}</div>
      </div>
    </div>
  `;}).join("");
}

// ===== RENDER: FEATURED =====
const FEATURED_PAGE_SIZE = 4;
let featuredPage = 1;

function renderFeaturedPagination(totalItems){
  const el = document.getElementById("featuredPagination");
  const totalPages = Math.max(1, Math.ceil(totalItems / FEATURED_PAGE_SIZE));
  if (featuredPage > totalPages) featuredPage = totalPages;

  let html = `<button class="page-btn" id="featuredPrevPage" ${featuredPage===1?"disabled":""}>
    <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
  </button>`;

  for (let i=1;i<=totalPages;i++){
    html += `<button class="page-btn ${i===featuredPage?"active":""}" data-page="${i}">${i}</button>`;
  }

  html += `<button class="page-btn" id="featuredNextPage" ${featuredPage===totalPages?"disabled":""}>
    <svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
  </button>`;

  el.innerHTML = html;
  el.querySelectorAll("[data-page]").forEach(btn=>{
    btn.addEventListener("click", ()=>{ featuredPage = parseInt(btn.dataset.page,10); renderFeatured(); });
  });
  const prev = document.getElementById("featuredPrevPage");
  const next = document.getElementById("featuredNextPage");
  if (prev) prev.addEventListener("click", ()=>{ if(featuredPage>1){featuredPage--; renderFeatured();} });
  if (next) next.addEventListener("click", ()=>{ if(featuredPage<totalPages){featuredPage++; renderFeatured();} });
}

function renderFeatured(){
  const start = (featuredPage-1)*FEATURED_PAGE_SIZE;
  const pageItems = featured.slice(start, start+FEATURED_PAGE_SIZE);

  document.getElementById("featuredGrid").innerHTML = pageItems.map(f=>`
    <div class="featured-card">
      <img src="${f.img}" alt="${f.title}" loading="lazy">
      <div class="featured-overlay"></div>
      <span class="featured-badge">Featured</span>
      <div class="featured-body">
        <h4>${f.title}</h4>
        <p>${f.desc}</p>
        <div class="featured-meta"><strong>${f.author}</strong> &middot; ${f.date} &middot; ${f.read}</div>
      </div>
    </div>
  `).join("");

  renderFeaturedPagination(featured.length);
}

// ===== RENDER: TOP AUTHORS =====
function renderAuthors(){
  const cards = authors.slice(0,4).map(a=>`
    <div class="author-card">
      <img class="author-avatar" src="${a.img}" alt="${a.name}">
      <h4>${a.name}</h4>
      <div class="author-role">${a.role}</div>
      <div class="author-stats">
        <span>${ICONS.file} ${a.insights} Insights</span>
        <span>${ICONS.eye} ${a.views} Views</span>
      </div>
    </div>
  `).join("");
  const viewAll = `
    <a href="#" class="author-viewall">
      <span class="author-viewall-icon">${ICONS.arrow}</span>
      View All
    </a>`;
  document.getElementById("authorScroller").innerHTML = cards + viewAll;
}

// ===== RENDER: FAQ =====
function renderFaq(){
  const list = document.getElementById("faqList");
  list.innerHTML = faqs.map((f)=>`
    <div class="faq-item">
      <button class="faq-question" type="button">
        <span class="faq-q-text">${f.q}</span>
        <span class="faq-toggle-icon">
          <svg class="faq-chevron" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
        </span>
      </button>
      <div class="faq-answer"><p>${f.a}</p></div>
    </div>
  `).join("");
  list.querySelectorAll(".faq-item").forEach(item=>{
    item.querySelector(".faq-question").addEventListener("click", ()=>{
      item.classList.toggle("open");
    });
  });
}

// ===== EVENTS =====
[filterSearch, filterTopic, filterIndustry, filterCompany, filterCountry, filterType, sortBy].forEach(el=>{
  el.addEventListener("input", ()=>{ currentPage=1; renderInsights(); });
  el.addEventListener("change", ()=>{ currentPage=1; renderInsights(); });
});

document.getElementById("heroSearchBtn").addEventListener("click", ()=>{
  filterSearch.value = heroSearch.value;
  currentPage = 1;
  renderInsights();
  document.getElementById("explorer").scrollIntoView({behavior:"smooth"});
});
heroSearch.addEventListener("keydown", (e)=>{
  if (e.key === "Enter"){
    filterSearch.value = heroSearch.value;
    currentPage = 1;
    renderInsights();
    document.getElementById("explorer").scrollIntoView({behavior:"smooth"});
  }
});

document.getElementById("clearAll").addEventListener("click", ()=>{
  filterSearch.value = "";
  heroSearch.value = "";
  filterTopic.value = "";
  filterIndustry.value = "";
  filterCompany.value = "";
  filterCountry.value = "";
  filterType.value = "";
  sortBy.value = "latest";
  currentPage = 1;
  renderInsights();
});

// ===== MOBILE NAV =====
// Note: the page's own header/mobile-nav markup (menuToggle/mainNav) was
// replaced by the shared BizMend site chrome (../shared/bm-chrome.js),
// which handles mobile nav toggling via #bmHamburgerBtn/#bmMobileNav.

// ===== INIT =====
renderSnapshot();
initFilters();
renderInsights();
renderTrending();
renderRecent();
renderFeatured();
renderAuthors();
renderFaq();

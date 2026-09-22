// ===== DATA =====
function logo(domain){ return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`; }

const companies = [
  { name:"OpenAI", domain:"openai.com", color:"#111827", initials:"O", verified:true, city:"San Francisco", country:"United States", industry:"Artificial Intelligence", founded:2015, type:"Private", listing:"Premium", desc:"AI research and deployment company building safe and beneficial AGI.", tags:["AI","Research","SaaS"], updated:"2 days ago" },
  { name:"Stripe", domain:"stripe.com", color:"#635BFF", initials:"S", verified:true, city:"San Francisco", country:"United States", industry:"Fintech", founded:2010, type:"Private", listing:"Premium", desc:"Financial infrastructure platform for online businesses.", tags:["Payments","Fintech","SaaS"], updated:"3 days ago" },
  { name:"Amazon", domain:"amazon.com", color:"#FF9900", initials:"a", verified:true, city:"Seattle", country:"United States", industry:"E-commerce", founded:1994, type:"Public", listing:"Enterprise", desc:"Global e-commerce and cloud computing giant.", tags:["E-commerce","Cloud","Retail"], updated:"1 day ago" },
  { name:"Microsoft", domain:"microsoft.com", color:"#00A4EF", initials:"M", verified:true, city:"Redmond", country:"United States", industry:"Technology", founded:1975, type:"Public", listing:"Enterprise", desc:"Technology company focused on software, cloud and AI.", tags:["Software","Cloud","AI"], updated:"2 days ago" },
  { name:"Google", domain:"google.com", color:"#4285F4", initials:"G", verified:true, city:"Mountain View", country:"United States", industry:"Technology", founded:1998, type:"Public", listing:"Enterprise", desc:"Search engine and technology company offering internet services.", tags:["Search","Ads","Cloud"], updated:"2 days ago" },
  { name:"Meta", domain:"meta.com", color:"#0866FF", initials:"∞", verified:true, city:"Menlo Park", country:"United States", industry:"Technology", founded:2004, type:"Public", listing:"Enterprise", desc:"Social technology company building apps and metaverse.", tags:["Social Media","VR/AR","AI"], updated:"3 days ago" },
  { name:"Apple", domain:"apple.com", color:"#111827", initials:"A", verified:true, city:"Cupertino", country:"United States", industry:"Technology", founded:1976, type:"Public", listing:"Enterprise", desc:"Designs and sells consumer electronics, software and services.", tags:["Hardware","Software","Services"], updated:"2 days ago" },
  { name:"NVIDIA", domain:"nvidia.com", color:"#76B900", initials:"N", verified:true, city:"Santa Clara", country:"United States", industry:"Semiconductors", founded:1993, type:"Public", listing:"Enterprise", desc:"Leader in graphics processors and AI computing hardware.", tags:["Semiconductors","AI","Hardware"], updated:"1 day ago" },
  { name:"Tesla", domain:"tesla.com", color:"#CC0000", initials:"T", verified:true, city:"Palo Alto", country:"United States", industry:"Automotive", founded:2003, type:"Public", listing:"Premium", desc:"Electric vehicles and clean energy company.", tags:["Automotive","Energy","AI"], updated:"2 days ago" },
  { name:"Adobe", domain:"adobe.com", color:"#FF0000", initials:"A", verified:true, city:"San Jose", country:"United States", industry:"Software", founded:1982, type:"Public", listing:"Basic", desc:"Software company known for creative and digital solutions.", tags:["Software","Creative","Cloud"], updated:"3 days ago" },
  { name:"Salesforce", domain:"salesforce.com", color:"#00A1E0", initials:"S", verified:true, city:"San Francisco", country:"United States", industry:"SaaS", founded:1999, type:"Public", listing:"Basic", desc:"Customer relationship management platform and cloud applications.", tags:["CRM","SaaS","Cloud"], updated:"2 days ago" },
  { name:"Shopify", domain:"shopify.com", color:"#95BF47", initials:"S", verified:true, city:"Ottawa", country:"Canada", industry:"E-commerce", founded:2006, type:"Public", listing:"Basic", desc:"E-commerce platform for online stores and retail businesses.", tags:["E-commerce","SaaS","Retail"], updated:"1 day ago" },
  { name:"Notion", domain:"notion.so", color:"#111827", initials:"N", verified:true, city:"San Francisco", country:"United States", industry:"SaaS", founded:2016, type:"Private", listing:"Premium", desc:"All-in-one workspace for notes, docs, wikis and team collaboration.", tags:["Productivity","SaaS","Collaboration"], updated:"3 hours ago" },
  { name:"Airbnb", domain:"airbnb.com", color:"#FF5A5F", initials:"A", verified:true, city:"San Francisco", country:"United States", industry:"Travel", founded:2008, type:"Public", listing:"Enterprise", desc:"Online marketplace for short-term lodging and unique travel experiences.", tags:["Travel","Marketplace","Hospitality"], updated:"5 hours ago" },
  { name:"Canva", domain:"canva.com", color:"#00C4CC", initials:"C", verified:true, city:"Sydney", country:"Australia", industry:"Software", founded:2013, type:"Private", listing:"Premium", desc:"Online design platform for creating graphics, presentations and videos.", tags:["Design","SaaS","Creative"], updated:"1 day ago" },
  { name:"Databricks", domain:"databricks.com", color:"#FF3621", initials:"D", verified:true, city:"San Francisco", country:"United States", industry:"Artificial Intelligence", founded:2013, type:"Private", listing:"Premium", desc:"Unified data analytics and AI platform for enterprise teams.", tags:["Data","AI","Cloud"], updated:"1 day ago" },
  { name:"Revolut", domain:"revolut.com", color:"#191919", initials:"R", verified:true, city:"London", country:"United Kingdom", industry:"Fintech", founded:2015, type:"Private", listing:"Basic", desc:"Digital banking and financial services super-app.", tags:["Fintech","Banking"], updated:"2 days ago" },
];

const industries = [
  { name:"Artificial Intelligence", count:162 },
  { name:"Fintech", count:134 },
  { name:"SaaS", count:128 },
  { name:"E-commerce", count:115 },
  { name:"Financial Services", count:98 },
];

const countries = [
  { name:"United States", count:638, code:"us" },
  { name:"United Kingdom", count:142, code:"gb" },
  { name:"Canada", count:98, code:"ca" },
  { name:"UAE", count:67, code:"ae" },
  { name:"Singapore", count:55, code:"sg" },
];

const recentUpdates = [
  { name:"Notion", domain:"notion.so", color:"#111827", initials:"N", city:"San Francisco", country:"United States", update:"Added new product features and company growth data.", when:"3 hours ago" },
  { name:"Airbnb", domain:"airbnb.com", color:"#FF5A5F", initials:"A", city:"San Francisco", country:"United States", update:"Updated company description and leadership information.", when:"5 hours ago" },
  { name:"Canva", domain:"canva.com", color:"#00C4CC", initials:"C", city:"Sydney", country:"Australia", update:"Added Q2 financial highlights and new market data.", when:"1 day ago" },
  { name:"Databricks", domain:"databricks.com", color:"#FF3621", initials:"D", city:"San Francisco", country:"United States", update:"Updated funding round and valuation information.", when:"1 day ago" },
  { name:"Revolut", domain:"revolut.com", color:"#191919", initials:"R", city:"London", country:"United Kingdom", update:"Added new business lines and global expansion updates.", when:"2 days ago" },
];

const faqs = [
  { q:"What is BizMend?", a:"BizMend is a company intelligence platform that offers structured, verified profiles for thousands of companies worldwide — covering industries, founders, funding, and key business insights." },
  { q:"Who maintains and verifies BizMend's data?", a:"Our research team curates and cross-checks each profile against public filings, company announcements, and trusted news sources before marking it as Verified." },
  { q:"Is BizMend only for investors and researchers?", a:"No. Founders, job seekers, journalists, students, and business teams all use BizMend to quickly understand a company's background, industry, and growth." },
  { q:"Where can BizMend be used?", a:"BizMend is available directly through the web app. You can browse, search, and filter companies from any device without installing anything." },
  { q:"What can I find on a company profile?", a:"Each profile includes founding year, headquarters, industry tags, company type, verification status, recent updates, and a short overview of what the company does." },
  { q:"Is BizMend the same as Crunchbase or LinkedIn?", a:"BizMend focuses on structured, easy-to-scan company snapshots rather than deep funding databases or social networking — it's built for quick, reliable lookups." },
  { q:"Can I submit or suggest an update to a company profile?", a:"Yes. Use the \"Submit a Company\" or \"Suggest an Update\" buttons on this page to add a missing company or flag outdated information for our team to review." },
  { q:"Is BizMend free to use?", a:"Browsing and searching company profiles is free. Some advanced insights and bulk data access may be part of a future premium tier." },
];

const ICONS = {
  pin: '<svg viewBox="0 0 24 24"><path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>',
  arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>',
};

const PAGE_SIZE = 12;
let currentPage = 1;
let currentView = "grid";

const grid = document.getElementById("companyGrid");
const pagination = document.getElementById("pagination");
const filterSearch = document.getElementById("filterSearch");
const heroSearch = document.getElementById("heroSearch");
const filterIndustry = document.getElementById("filterIndustry");
const filterCountry = document.getElementById("filterCountry");
const filterType = document.getElementById("filterType");
const filterListing = document.getElementById("filterListing");
const filterVerification = document.getElementById("filterVerification");
const sortBy = document.getElementById("sortBy");

function populateSelect(select, values, placeholder){
  select.innerHTML = `<option value="">${placeholder}</option>` +
    values.map(v => `<option value="${v}">${v}</option>`).join("");
}

function initFilters(){
  const uniqueIndustries = [...new Set(companies.map(c => c.industry))].sort();
  const uniqueCountries = [...new Set(companies.map(c => c.country))].sort();
  populateSelect(filterIndustry, uniqueIndustries, "Industry");
  populateSelect(filterCountry, uniqueCountries, "Country");
}

function getFiltered(){
  const q = (filterSearch.value || heroSearch.value || "").toLowerCase().trim();
  const ind = filterIndustry.value;
  const ctry = filterCountry.value;
  const type = filterType.value;
  const listing = filterListing.value;
  const ver = filterVerification.value;

  let list = companies.filter(c => {
    if (q && !(c.name.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q) || c.industry.toLowerCase().includes(q))) return false;
    if (ind && c.industry !== ind) return false;
    if (ctry && c.country !== ctry) return false;
    if (type && c.type !== type) return false;
    if (listing && c.listing !== listing) return false;
    if (ver === "Verified" && !c.verified) return false;
    if (ver === "Unverified" && c.verified) return false;
    return true;
  });

  const sortVal = sortBy.value;
  if (sortVal === "az") list = [...list].sort((a,b)=>a.name.localeCompare(b.name));
  else if (sortVal === "za") list = [...list].sort((a,b)=>b.name.localeCompare(a.name));
  else if (sortVal === "founded") list = [...list].sort((a,b)=>a.founded-b.founded);

  return list;
}

function cardTemplate(c){
  return `
    <div class="company-card">
      <div class="card-top">
        <div class="company-logo">
          <img src="${logo(c.domain)}" alt="${c.name} logo" loading="lazy"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
          <span class="logo-fallback" style="color:${c.color};">${c.initials}</span>
        </div>
        <div class="card-heading">
          <div class="card-name-row">
            <span class="cname">${c.name}</span>
            ${c.verified ? `<span class="badge-verified">${ICONS.check} Verified</span>` : ""}
          </div>
          <div class="card-loc">${ICONS.pin} ${c.city}, ${c.country}</div>
          <div class="card-industry">${ICONS.briefcase} ${c.industry}</div>
        </div>
      </div>
      <div class="card-founded">Founded ${c.founded}</div>
      <div class="card-desc">${c.desc}</div>
      <div class="card-tags">${c.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
      <div class="card-bottom">
        <span class="card-updated">Updated ${c.updated}</span>
        <a href="${c.name === "OpenAI" ? "openai/index.html" : "#"}" class="card-view">View Profile ${ICONS.arrow}</a>
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
    if (i===1 || i===totalPages || Math.abs(i-currentPage)<=1) pages.push(i);
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
    btn.addEventListener("click", ()=>{ currentPage = parseInt(btn.dataset.page,10); render(); });
  });
  const prev = document.getElementById("prevPage");
  const next = document.getElementById("nextPage");
  if (prev) prev.addEventListener("click", ()=>{ if(currentPage>1){currentPage--; render();} });
  if (next) next.addEventListener("click", ()=>{ if(currentPage<totalPages){currentPage++; render();} });
}

function render(){
  const filtered = getFiltered();
  const start = (currentPage-1)*PAGE_SIZE;
  const pageItems = filtered.slice(start, start+PAGE_SIZE);

  grid.className = "company-grid" + (currentView==="list" ? " list-view" : "");
  grid.innerHTML = pageItems.length
    ? pageItems.map(cardTemplate).join("")
    : `<div style="grid-column:1/-1;text-align:center;color:#94a3b8;padding:40px 0;">No companies match your filters.</div>`;

  renderPagination(filtered.length);
}

function renderRecent(){
  const list = document.getElementById("recentList");
  list.innerHTML = recentUpdates.map(r => `
    <div class="recent-row">
      <div class="col-company">
        <div class="mini-logo">
          <img src="${logo(r.domain)}" alt="${r.name} logo" loading="lazy"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
          <span class="logo-fallback" style="color:${r.color};">${r.initials}</span>
        </div>
        <div>
          <div class="mini-name">${r.name}</div>
          <div class="mini-loc">${ICONS.pin} ${r.city}, ${r.country}</div>
        </div>
      </div>
      <div class="col-update">${r.update}</div>
      <div class="col-when">${r.when}</div>
      <div class="col-action"><a href="#" class="view-profile-btn">View Profile</a></div>
    </div>
  `).join("");
}

const VIEW_ALL_CHIP = `
  <a href="#" class="chip chip-viewall">
    <span class="chip-icon chip-icon-viewall">${ICONS.arrow}</span>
    <span class="chip-text"><strong>View All</strong></span>
  </a>`;

function renderChips(){
  const indColors = ["#e8f0fe","#e7f8ed","#f1e9fe","#fef1e6","#e6f6f4"];
  const indIcons = ["🧠","🏦","☁️","🛒","💼"];
  const industryEl = document.getElementById("industryChips");
  industryEl.innerHTML = industries.map((it,i)=>`
    <a href="#" class="chip">
      <span class="chip-icon" style="background:${indColors[i%indColors.length]};">${indIcons[i%indIcons.length]}</span>
      <span class="chip-text"><strong>${it.name}</strong><span>${it.count} Companies</span></span>
    </a>
  `).join("") + VIEW_ALL_CHIP;

  const countryEl = document.getElementById("countryChips");
  countryEl.innerHTML = countries.map(ct=>`
    <a href="#" class="chip">
      <span class="chip-flag">
        <img src="https://flagcdn.com/w80/${ct.code}.png" alt="${ct.name} flag" loading="lazy"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
        <span class="logo-fallback flag-fallback">${ct.code.toUpperCase()}</span>
      </span>
      <span class="chip-text"><strong>${ct.name}</strong><span>${ct.count} Companies</span></span>
    </a>
  `).join("") + VIEW_ALL_CHIP;
}

// ===== EVENTS =====
[filterSearch, filterIndustry, filterCountry, filterType, filterListing, filterVerification, sortBy].forEach(el=>{
  el.addEventListener("input", ()=>{ currentPage=1; render(); });
  el.addEventListener("change", ()=>{ currentPage=1; render(); });
});

heroSearch.addEventListener("keydown", (e)=>{
  if (e.key === "Enter"){
    filterSearch.value = heroSearch.value;
    currentPage = 1;
    render();
    document.getElementById("explorer").scrollIntoView({behavior:"smooth"});
  }
});

document.getElementById("clearAll").addEventListener("click", ()=>{
  filterSearch.value = "";
  heroSearch.value = "";
  filterIndustry.value = "";
  filterCountry.value = "";
  filterVerification.value = "";
  filterType.value = "";
  filterListing.value = "";
  sortBy.value = "recent";
  currentPage = 1;
  render();
});

document.getElementById("gridViewBtn").addEventListener("click", function(){
  currentView = "grid";
  this.classList.add("active");
  document.getElementById("listViewBtn").classList.remove("active");
  render();
});
document.getElementById("listViewBtn").addEventListener("click", function(){
  currentView = "list";
  this.classList.add("active");
  document.getElementById("gridViewBtn").classList.remove("active");
  render();
});

function renderFaq(){
  const list = document.getElementById("faqList");
  list.innerHTML = faqs.map((f,i)=>`
    <div class="faq-item">
      <button class="faq-question" type="button">
        <span class="faq-number">${i+1}</span>
        <span class="faq-q-text">${f.q}</span>
        <svg class="faq-chevron" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
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

// ===== INIT =====
initFilters();
renderRecent();
renderChips();
renderFaq();
render();

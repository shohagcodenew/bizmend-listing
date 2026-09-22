// ===== DATA =====
function companyIcon(domain){ return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`; }

const AVATAR_COLORS = ["#0f9488","#2563eb","#7c3aed","#f97316","#16a34a","#dc2626","#0891b2","#9333ea"];
function initialsOf(name){
  return name.split(" ").filter(Boolean).map(w=>w[0]).slice(0,2).join("").toUpperCase();
}
function colorFor(i){ return AVATAR_COLORS[i % AVATAR_COLORS.length]; }

const founders = [
  { name:"Sam Altman", role:"Co-founder & CEO", company:"OpenAI", domain:"openai.com", country:"United States", industry:"Artificial Intelligence", verified:true, tags:["AI","Startups","Technology"], updated:"2 hours ago" },
  { name:"Elon Musk", role:"CEO & CTO", company:"SpaceX, Tesla", domain:"spacex.com", country:"United States", industry:"Aerospace, Automotive", verified:true, tags:["Space","AI","Energy"], updated:"1 day ago" },
  { name:"Satya Nadella", role:"Chairman & CEO", company:"Microsoft", domain:"microsoft.com", country:"United States", industry:"Technology", verified:true, tags:["Cloud","AI","Enterprise"], updated:"2 days ago" },
  { name:"Mark Zuckerberg", role:"Founder & CEO", company:"Meta", domain:"meta.com", country:"United States", industry:"Technology", verified:true, tags:["Social Media","VR/AR","AI"], updated:"3 days ago" },
  { name:"Sundar Pichai", role:"CEO", company:"Alphabet (Google)", domain:"google.com", country:"United States", industry:"Technology", verified:true, tags:["Search","AI","Cloud"], updated:"2 days ago" },
  { name:"Jensen Huang", role:"Founder & CEO", company:"NVIDIA", domain:"nvidia.com", country:"United States", industry:"Semiconductors", verified:true, tags:["AI","GPU","Hardware"], updated:"1 day ago" },
  { name:"Whitney Wolfe Herd", role:"Founder & CEO", company:"Bumble", domain:"bumble.com", country:"United States", industry:"Social, Dating", verified:true, tags:["Social","Startups","Women"], updated:"4 days ago" },
  { name:"Brian Chesky", role:"Co-founder & CEO", company:"Airbnb", domain:"airbnb.com", country:"United States", industry:"Hospitality", verified:true, tags:["Travel","Startups","Technology"], updated:"3 days ago" },
  { name:"Melinda French Gates", role:"Co-chair", company:"Bill & Melinda Gates Foundation", domain:"gatesfoundation.org", country:"United States", industry:"Philanthropy", verified:true, tags:["Philanthropy","Health","Education"], updated:"5 days ago" },
  { name:"Patrick Collison", role:"Co-founder & CEO", company:"Stripe", domain:"stripe.com", country:"Ireland", industry:"Fintech", verified:true, tags:["Payments","Fintech","Startups"], updated:"4 days ago" },
  { name:"Reed Hastings", role:"Co-founder", company:"Netflix", domain:"netflix.com", country:"United States", industry:"Entertainment", verified:true, tags:["Streaming","Tech","Leadership"], updated:"6 days ago" },
  { name:"Sara Blakely", role:"Founder & Executive Chair", company:"Spanx", domain:"spanx.com", country:"United States", industry:"Apparel", verified:true, tags:["E-commerce","Fashion","Entrepreneurship"], updated:"1 week ago" },
  { name:"Aravind Srinivas", role:"Co-founder & CEO", company:"Perplexity AI", domain:"perplexity.ai", country:"United States", industry:"Artificial Intelligence", verified:true, tags:["AI","Search","Startups"], updated:"2 hours ago" },
  { name:"Ilya Sutskever", role:"Co-founder", company:"OpenAI", domain:"openai.com", country:"United States", industry:"Artificial Intelligence", verified:true, tags:["AI","Research","Deep Learning"], updated:"5 hours ago" },
  { name:"Zach Perret", role:"Co-founder & CEO", company:"Plaid", domain:"plaid.com", country:"United States", industry:"Fintech", verified:true, tags:["Fintech","APIs","Startups"], updated:"1 day ago" },
  { name:"Aman Gupta", role:"Co-founder & CMO", company:"boAt", domain:"boat-lifestyle.com", country:"Bangladesh", industry:"Consumer Electronics", verified:false, tags:["E-commerce","Consumer Tech","Startups"], updated:"1 day ago" },
  { name:"Demis Hassabis", role:"Co-founder & CEO", company:"Google DeepMind", domain:"deepmind.google", country:"United Kingdom", industry:"Artificial Intelligence", verified:true, tags:["AI","Research","Science"], updated:"2 days ago" },
  { name:"Tobi Lütke", role:"Founder & CEO", company:"Shopify", domain:"shopify.com", country:"Canada", industry:"E-commerce", verified:true, tags:["E-commerce","SaaS","Retail"], updated:"3 days ago" },
  { name:"Melanie Perkins", role:"Co-founder & CEO", company:"Canva", domain:"canva.com", country:"Singapore", industry:"SaaS", verified:true, tags:["Design","SaaS","Creative"], updated:"4 days ago" },
  { name:"Ritesh Agarwal", role:"Founder & CEO", company:"OYO", domain:"oyorooms.com", country:"UAE", industry:"Hospitality", verified:false, tags:["Travel","Hospitality","Startups"], updated:"5 days ago" },
];

founders.forEach((f,i)=>{ f.initials = initialsOf(f.name); f.color = colorFor(i); });

const industries = [
  { name:"Artificial Intelligence", count:14 },
  { name:"Fintech", count:9 },
  { name:"E-commerce", count:10 },
  { name:"Financial Services", count:8 },
  { name:"Business Services", count:7 },
];

const countries = [
  { name:"United States", count:18, code:"us" },
  { name:"United Kingdom", count:6, code:"gb" },
  { name:"Canada", count:4, code:"ca" },
  { name:"Singapore", count:2, code:"sg" },
  { name:"Bangladesh", count:2, code:"bd" },
];

const recentUpdates = [
  { name:"Aravind Srinivas", company:"Perplexity AI", domain:"perplexity.ai", country:"United States", update:"Leadership information updated", when:"2 hours ago" },
  { name:"Ilya Sutskever", company:"OpenAI", domain:"openai.com", country:"United States", update:"New role and company association added", when:"5 hours ago" },
  { name:"Zach Perret", company:"Plaid", domain:"plaid.com", country:"United States", update:"Biography and career details reviewed", when:"1 day ago" },
  { name:"Aman Gupta", company:"boAt", domain:"boat-lifestyle.com", country:"Bangladesh", update:"New venture information added", when:"1 day ago" },
  { name:"Demis Hassabis", company:"Google DeepMind", domain:"deepmind.google", country:"United Kingdom", update:"Recent achievements and awards updated", when:"2 days ago" },
];
recentUpdates.forEach((r,i)=>{ r.initials = initialsOf(r.name); r.color = colorFor(i); });

const faqs = [
  { q:"What information is included in a BizMend founder profile?", a:"Each founder profile includes their role, associated company, industry, country, verification status, and a short overview of their background and achievements." },
  { q:"How does BizMend verify founder information?", a:"Our research team cross-checks each founder profile against public filings, official company pages, and trusted news sources before marking it as Verified." },
  { q:"Can a founder be linked to multiple companies?", a:"Yes. Founders who have started or led more than one company will have all relevant associations listed on their profile." },
  { q:"How are founder profiles updated?", a:"Profiles are refreshed as new roles, ventures, or public information become available, with the most recent changes shown in the Recently Updated section." },
  { q:"Can I suggest a correction to a founder profile?", a:"Yes. Use the \"Suggest an Update\" button on this page to flag outdated or incorrect information for our team to review." },
  { q:"How can I submit a founder to BizMend?", a:"Use the \"Submit a Founder\" button to add a founder who isn't yet listed in our database, along with their company and role details." },
];

// ===== REAL PHOTOS (Wikipedia, with initials fallback) =====
// Direct overrides for founders whose Wikipedia summary has no thumbnail
// (image confirmed via their Wikidata P18 claim instead).
const PHOTO_OVERRIDES = {
  "Aravind Srinivas": "https://upload.wikimedia.org/wikipedia/commons/c/c9/Aravind_Srinivas_2024.jpg",
  "Aman Gupta": "https://upload.wikimedia.org/wikipedia/commons/d/de/Aman_Gupta_of_boAt_Lifestyle.jpg",
};

const photoCache = new Map();

function resolveFounderPhoto(name){
  if (photoCache.has(name)) return photoCache.get(name);
  if (PHOTO_OVERRIDES[name]){
    const overridden = Promise.resolve(PHOTO_OVERRIDES[name]);
    photoCache.set(name, overridden);
    return overridden;
  }
  const title = encodeURIComponent(name.replace(/ /g, "_"));
  const promise = fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${title}`)
    .then(res => res.ok ? res.json() : null)
    .then(data => (data && data.thumbnail && data.thumbnail.source) || null)
    .catch(() => null);
  photoCache.set(name, promise);
  return promise;
}

function hydratePhotos(root){
  root.querySelectorAll("[data-founder-photo]").forEach(img => {
    resolveFounderPhoto(img.dataset.founderPhoto).then(src => {
      if (!src) return;
      img.src = src;
      img.style.display = "block";
      const fallback = img.nextElementSibling;
      if (fallback) fallback.style.display = "none";
    });
  });
}

const ICONS = {
  pin: '<svg viewBox="0 0 24 24"><path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>',
};

const PAGE_SIZE = 12;
let currentPage = 1;
let currentView = "grid";

const grid = document.getElementById("founderGrid");
const pagination = document.getElementById("pagination");
const filterSearch = document.getElementById("filterSearch");
const heroSearch = document.getElementById("heroSearch");
const filterIndustry = document.getElementById("filterIndustry");
const filterCountry = document.getElementById("filterCountry");
const filterCompany = document.getElementById("filterCompany");
const filterVerification = document.getElementById("filterVerification");
const sortBy = document.getElementById("sortBy");

function populateSelect(select, values, placeholder){
  select.innerHTML = `<option value="">${placeholder}</option>` +
    values.map(v => `<option value="${v}">${v}</option>`).join("");
}

function initFilters(){
  const uniqueIndustries = [...new Set(founders.map(f => f.industry))].sort();
  const uniqueCountries = [...new Set(founders.map(f => f.country))].sort();
  const uniqueCompanies = [...new Set(founders.map(f => f.company))].sort();
  populateSelect(filterIndustry, uniqueIndustries, "Industry");
  populateSelect(filterCountry, uniqueCountries, "Country");
  populateSelect(filterCompany, uniqueCompanies, "Associated Company");
}

function getFiltered(){
  const q = (filterSearch.value || heroSearch.value || "").toLowerCase().trim();
  const ind = filterIndustry.value;
  const ctry = filterCountry.value;
  const comp = filterCompany.value;
  const ver = filterVerification.value;

  let list = founders.filter(f => {
    if (q && !(f.name.toLowerCase().includes(q) || f.company.toLowerCase().includes(q) || f.industry.toLowerCase().includes(q))) return false;
    if (ind && f.industry !== ind) return false;
    if (ctry && f.country !== ctry) return false;
    if (comp && f.company !== comp) return false;
    if (ver === "Verified" && !f.verified) return false;
    if (ver === "Unverified" && f.verified) return false;
    return true;
  });

  const sortVal = sortBy.value;
  if (sortVal === "az") list = [...list].sort((a,b)=>a.name.localeCompare(b.name));
  else if (sortVal === "za") list = [...list].sort((a,b)=>b.name.localeCompare(a.name));

  return list;
}

function cardTemplate(f){
  return `
    <div class="founder-card">
      <div class="card-top">
        <div class="founder-photo">
          <img data-founder-photo="${f.name}" alt="${f.name}" loading="lazy">
          <span class="photo-fallback" style="background:${f.color};">${f.initials}</span>
        </div>
        <div class="card-heading">
          <div class="card-name-row">
            <span class="fname">${f.name}</span>
            ${f.verified ? `<span class="badge-verified">${ICONS.check} Verified</span>` : ""}
          </div>
          <div class="card-role">${f.role}</div>
          <div class="card-company"><img src="${companyIcon(f.domain)}" alt="" loading="lazy"> ${f.company}</div>
          <div class="card-loc">${ICONS.pin} ${f.country}</div>
        </div>
      </div>
      <div class="card-industry-line">${f.industry}</div>
      <div class="card-tags">${f.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
      <div class="card-bottom">
        <a href="${f.name === "Sam Altman" ? "sam-altman/index.html" : "#"}" class="card-view">View Profile ${ICONS.arrow}</a>
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

  grid.className = "founder-grid" + (currentView==="list" ? " list-view" : "");
  grid.innerHTML = pageItems.length
    ? pageItems.map(cardTemplate).join("")
    : `<div style="grid-column:1/-1;text-align:center;color:#94a3b8;padding:40px 0;">No founders match your filters.</div>`;

  renderPagination(filtered.length);
  hydratePhotos(grid);
}

function renderRecent(){
  const list = document.getElementById("recentList");
  list.innerHTML = recentUpdates.map(r => `
    <div class="recent-row">
      <div class="col-founder">
        <div class="mini-photo">
          <img data-founder-photo="${r.name}" alt="${r.name}" loading="lazy">
          <span class="photo-fallback" style="background:${r.color};">${r.initials}</span>
        </div>
        <div>
          <div class="mini-name">${r.name}</div>
          <div class="mini-loc">${ICONS.pin} ${r.country}</div>
        </div>
      </div>
      <div class="col-company">
        <img src="${companyIcon(r.domain)}" alt="" loading="lazy">
        ${r.company}
      </div>
      <div class="col-update">${r.update}</div>
      <div class="col-when">${r.when}</div>
      <div class="col-action"><a href="#" class="view-profile-btn">View Profile</a></div>
    </div>
  `).join("");
  hydratePhotos(list);
}

const VIEW_ALL_CHIP = `
  <a href="#" class="chip chip-viewall">
    <span class="chip-icon chip-icon-viewall">${ICONS.arrow}</span>
    <span class="chip-text"><strong>View All</strong></span>
  </a>`;

function renderChips(){
  const indColors = ["#e8f0fe","#e7f8ed","#f1e9fe","#fef1e6","#e6f6f4"];
  const indIcons = ["🧠","🏦","🛒","💼","📈"];
  const industryEl = document.getElementById("industryChips");
  industryEl.innerHTML = industries.map((it,i)=>`
    <a href="#" class="chip">
      <span class="chip-icon" style="background:${indColors[i%indColors.length]};">${indIcons[i%indIcons.length]}</span>
      <span class="chip-text"><strong>${it.name}</strong><span>${it.count} Founders</span></span>
    </a>
  `).join("") + VIEW_ALL_CHIP;

  const countryEl = document.getElementById("countryChips");
  countryEl.innerHTML = countries.map(ct=>`
    <a href="#" class="chip">
      <span class="chip-flag">
        <img src="https://flagcdn.com/w80/${ct.code}.png" alt="${ct.name} flag" loading="lazy"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
        <span class="logo-fallback flag-fallback" style="display:none;">${ct.code.toUpperCase()}</span>
      </span>
      <span class="chip-text"><strong>${ct.name}</strong><span>${ct.count} Founders</span></span>
    </a>
  `).join("") + VIEW_ALL_CHIP;
}

// ===== EVENTS =====
[filterSearch, filterIndustry, filterCountry, filterCompany, filterVerification, sortBy].forEach(el=>{
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
  filterCompany.value = "";
  filterVerification.value = "";
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

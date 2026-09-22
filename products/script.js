// ===== SHARED HELPERS =====
const TAG_COLORS = {
  "AI":["#e6f6f4","#0f9488"], "Productivity":["#e7f8ed","#16a34a"], "APIs":["#e8f0fe","#2563eb"],
  "Developer Tools":["#f1e9fe","#7c3aed"], "Payments":["#e8f0fe","#2563eb"], "Fintech":["#fef1e6","#f97316"],
  "Banking":["#e6f6f4","#0f9488"], "E-commerce":["#f1e9fe","#7c3aed"], "SaaS":["#e8f0fe","#2563eb"],
  "Collaboration":["#f1e9fe","#7c3aed"], "Marketing":["#fef1e6","#f97316"], "CRM":["#e8f0fe","#2563eb"],
  "Automation":["#f1e9fe","#7c3aed"], "Design":["#e6f6f4","#0f9488"]
};
function tagStyle(tag){ const c = TAG_COLORS[tag] || ["#f1f5f9","#475569"]; return `background:${c[0]};color:${c[1]};`; }
function favicon(domain, sz=64){ return `https://www.google.com/s2/favicons?domain=${domain}&sz=${sz}`; }
function initialsOf(name){ return name.split(" ").filter(Boolean).map(w=>w[0]).slice(0,2).join("").toUpperCase(); }
function flagImgUrl(iso, w=80){ return `https://flagcdn.com/w${w}/${iso}.png`; }
function logoTag(name, domain, bg){
  return `<img src="${favicon(domain)}" alt="${name} logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
    <span class="logo-fallback" style="background:${bg}">${initialsOf(name)}</span>`;
}

// ============================================================
// DATA
// ============================================================
const PRODUCTS = [
  {name:"ChatGPT", company:"OpenAI", domain:"openai.com", desc:"Conversational AI assistant for writing, coding, and more.", tags:["AI","Productivity"], rating:4.8, country:"United States", users:"10M+", bg:"#10a37f"},
  {name:"OpenAI API", company:"OpenAI", domain:"openai.com", desc:"Powerful APIs for building AI applications and integrations.", tags:["APIs","Developer Tools"], rating:4.7, country:"United States", users:"50K+", bg:"#10a37f", link:"../services/openai-api/index.html"},
  {name:"Stripe", company:"Stripe", domain:"stripe.com", desc:"Online payments infrastructure for internet businesses.", tags:["Payments","Fintech"], rating:4.6, country:"United States", users:"1M+", bg:"#635bff"},
  {name:"PayPal", company:"PayPal", domain:"paypal.com", desc:"Secure online payments and money transfer solutions.", tags:["Payments","Fintech"], rating:4.5, country:"United States", users:"500K+", bg:"#003087"},
  {name:"Wise", company:"Wise", domain:"wise.com", desc:"International money transfers at the real exchange rate.", tags:["Fintech","Banking"], rating:4.4, country:"United Kingdom", users:"2M+", bg:"#9fe870"},
  {name:"Mercury", company:"Mercury", domain:"mercury.com", desc:"Business banking for startups and modern companies.", tags:["Banking","Fintech"], rating:4.6, country:"United States", users:"200K+", bg:"#0f2540"},
  {name:"Shopify", company:"Shopify", domain:"shopify.com", desc:"E-commerce platform to build and grow your business online.", tags:["E-commerce","SaaS"], rating:4.7, country:"Canada", users:"1M+", bg:"#95BF47"},
  {name:"Notion", company:"Notion Labs", domain:"notion.so", desc:"All-in-one workspace for notes, tasks, and collaboration.", tags:["Productivity","Collaboration"], rating:4.6, country:"United States", users:"500K+", bg:"#0f2540"},
  {name:"Slack", company:"Salesforce", domain:"slack.com", desc:"Team communication and collaboration platform.", tags:["Collaboration","Productivity"], rating:4.5, country:"United States", users:"10M+", bg:"#611f69"},
  {name:"HubSpot", company:"HubSpot", domain:"hubspot.com", desc:"CRM platform for marketing, sales, and customer service.", tags:["Marketing","CRM"], rating:4.6, country:"United States", users:"200K+", bg:"#ff7a59"},
  {name:"Zapier", company:"Zapier", domain:"zapier.com", desc:"Automate workflows between thousands of apps.", tags:["Automation","Productivity"], rating:4.7, country:"United States", users:"2M+", bg:"#ff4a00"},
  {name:"Canva", company:"Canva", domain:"canva.com", desc:"Graphic design platform for everyone, anywhere.", tags:["Design","Marketing"], rating:4.6, country:"Australia", users:"10M+", bg:"#00c4cc"},
];

const SNAPSHOT = [
  {icon:"fa-cube", color:"blue", num:"1,248", label:"Products Listed"},
  {icon:"fa-building", color:"purple", num:"342", label:"Companies Represented"},
  {icon:"fa-file-lines", color:"green", num:"96", label:"Topics Covered"},
  {icon:"fa-briefcase", color:"orange", num:"41", label:"Industries Connected"},
  {icon:"fa-globe", color:"teal", num:"28", label:"Countries Covered"},
];

const TRENDING = [
  {name:"ChatGPT", company:"OpenAI", domain:"openai.com", bg:"#10a37f", pct:28},
  {name:"Notion", company:"Notion Labs", domain:"notion.so", bg:"#0f2540", pct:24},
  {name:"Canva", company:"Canva", domain:"canva.com", bg:"#00c4cc", pct:21},
  {name:"Zapier", company:"Zapier", domain:"zapier.com", bg:"#ff4a00", pct:20},
  {name:"Stripe", company:"Stripe", domain:"stripe.com", bg:"#635bff", pct:18},
  {name:"Slack", company:"Salesforce", domain:"slack.com", bg:"#611f69", pct:17},
];

const UPDATED = [
  {name:"Stripe", company:"Stripe", domain:"stripe.com", bg:"#635bff", desc:"Updated: Added support for Link saved payment methods and improved fraud detection.", date:"May 13, 2025"},
  {name:"OpenAI API", company:"OpenAI", domain:"openai.com", bg:"#10a37f", desc:"Updated: New GPT-4.1 model, improved function calling, and token usage optimizations.", date:"May 11, 2025", link:"../services/openai-api/index.html"},
  {name:"Shopify", company:"Shopify", domain:"shopify.com", bg:"#95BF47", desc:"Updated: Enhanced analytics dashboard and new B2B features for wholesale merchants.", date:"May 9, 2025"},
  {name:"Notion", company:"Notion Labs", domain:"notion.so", bg:"#0f2540", desc:"Updated: New AI block improvements and database formula upgrades.", date:"May 7, 2025"},
  {name:"Slack", company:"Salesforce", domain:"slack.com", bg:"#611f69", desc:"Updated: Huddle improvements and new workflow builder integrations.", date:"May 6, 2025"},
];

const COMPANIES = ["OpenAI","Stripe","PayPal","Shopify","Google","Microsoft","Salesforce","Atlassian","Canva","Notion","Amazon","Meta","Adobe","Figma","Zoom","Dropbox","Asana","Twilio"];
const COMPANY_BG = {
  OpenAI:"#10a37f", Stripe:"#635bff", PayPal:"#003087", Shopify:"#95BF47", Google:"#4285F4",
  Microsoft:"#00A4EF", Salesforce:"#00A1E0", Atlassian:"#0052CC", Canva:"#00c4cc", Notion:"#0f2540",
  Amazon:"#FF9900", Meta:"#0866FF", Adobe:"#FA0F00", Figma:"#0ACF83", Zoom:"#2D8CFF",
  Dropbox:"#0061FE", Asana:"#F06A6A", Twilio:"#F22F46"
};
const COMPANY_DOMAINS = {
  OpenAI:"openai.com", Stripe:"stripe.com", PayPal:"paypal.com", Shopify:"shopify.com", Google:"google.com",
  Microsoft:"microsoft.com", Salesforce:"salesforce.com", Atlassian:"atlassian.com", Canva:"canva.com", Notion:"notion.so",
  Amazon:"amazon.com", Meta:"meta.com", Adobe:"adobe.com", Figma:"figma.com", Zoom:"zoom.us",
  Dropbox:"dropbox.com", Asana:"asana.com", Twilio:"twilio.com"
};

// Real, live BizMend company profile pages — used for the "View all X products" link.
const COMPANY_PROFILE_LINKS = {
  OpenAI: "../companies/openai/index.html",
};

const COMPANY_PRODUCTS = {
  OpenAI: [
    {name:"ChatGPT", desc:"Conversational AI assistant.", tag:"AI", logo:"C"},
    {name:"OpenAI API", desc:"APIs for building AI applications.", tag:"APIs", logo:"O", link:"../services/openai-api/index.html"},
    {name:"DALL-E", desc:"AI system for image generation.", tag:"AI", logo:"D"},
    {name:"Whisper", desc:"Automatic speech recognition.", tag:"APIs", logo:"W"},
    {name:"Codex", desc:"AI for software engineering.", tag:"Developer Tools", logo:"C", link:"codex/index.html"},
  ],
  Stripe: [
    {name:"Payments", desc:"Accept payments online globally.", tag:"Payments", logo:"P"},
    {name:"Billing", desc:"Recurring revenue and subscriptions.", tag:"Fintech", logo:"B"},
    {name:"Radar", desc:"Fraud prevention powered by machine learning.", tag:"Fintech", logo:"R"},
    {name:"Connect", desc:"Payments for platforms and marketplaces.", tag:"Payments", logo:"C"},
    {name:"Terminal", desc:"In-person card payment hardware.", tag:"Payments", logo:"T"},
  ],
  PayPal: [
    {name:"Checkout", desc:"One-click online checkout experience.", tag:"Payments", logo:"C"},
    {name:"Braintree", desc:"Full-stack payments platform.", tag:"Fintech", logo:"B"},
    {name:"Venmo", desc:"Social payments for friends and business.", tag:"Payments", logo:"V"},
    {name:"Xoom", desc:"International money transfers.", tag:"Banking", logo:"X"},
    {name:"Zettle", desc:"Point of sale for small businesses.", tag:"Payments", logo:"Z"},
  ],
  Shopify: [
    {name:"Shopify POS", desc:"Point of sale for retail stores.", tag:"E-commerce", logo:"P"},
    {name:"Shopify Payments", desc:"Built-in payment processing.", tag:"Payments", logo:"S"},
    {name:"Shopify Plus", desc:"Enterprise e-commerce platform.", tag:"SaaS", logo:"S"},
    {name:"Shop App", desc:"Shopping and order tracking app.", tag:"E-commerce", logo:"S"},
    {name:"Shopify Markets", desc:"Sell to global markets easily.", tag:"E-commerce", logo:"M"},
  ],
  Google: [
    {name:"Google Cloud", desc:"Cloud computing services suite.", tag:"SaaS", logo:"G"},
    {name:"Workspace", desc:"Productivity and collaboration apps.", tag:"Productivity", logo:"W"},
    {name:"Firebase", desc:"App development platform.", tag:"Developer Tools", logo:"F"},
    {name:"Google Ads", desc:"Online advertising platform.", tag:"Marketing", logo:"A"},
    {name:"Gemini", desc:"Multimodal AI assistant.", tag:"AI", logo:"G"},
  ],
  Microsoft: [
    {name:"Azure", desc:"Cloud computing platform.", tag:"SaaS", logo:"A"},
    {name:"Microsoft 365", desc:"Productivity suite for teams.", tag:"Productivity", logo:"M"},
    {name:"Teams", desc:"Chat and video collaboration.", tag:"Collaboration", logo:"T"},
    {name:"Dynamics 365", desc:"CRM and ERP applications.", tag:"CRM", logo:"D"},
    {name:"Copilot", desc:"AI assistant across Microsoft apps.", tag:"AI", logo:"C"},
  ],
  Salesforce: [
    {name:"Slack", desc:"Team communication platform.", tag:"Collaboration", logo:"S"},
    {name:"Sales Cloud", desc:"CRM for sales teams.", tag:"CRM", logo:"S"},
    {name:"Service Cloud", desc:"Customer service platform.", tag:"CRM", logo:"S"},
    {name:"Tableau", desc:"Data visualization and analytics.", tag:"SaaS", logo:"T"},
    {name:"Marketing Cloud", desc:"Digital marketing automation.", tag:"Marketing", logo:"M"},
  ],
  Atlassian: [
    {name:"Jira", desc:"Issue and project tracking.", tag:"Productivity", logo:"J"},
    {name:"Confluence", desc:"Team workspace and documentation.", tag:"Collaboration", logo:"C"},
    {name:"Trello", desc:"Visual project management boards.", tag:"Productivity", logo:"T"},
    {name:"Bitbucket", desc:"Git code hosting and CI/CD.", tag:"Developer Tools", logo:"B"},
    {name:"Opsgenie", desc:"Incident management and alerting.", tag:"Developer Tools", logo:"O"},
  ],
  Canva: [
    {name:"Canva Docs", desc:"Visual document creation.", tag:"Productivity", logo:"D"},
    {name:"Canva Whiteboards", desc:"Real-time visual collaboration.", tag:"Collaboration", logo:"W"},
    {name:"Magic Studio", desc:"AI-powered design tools.", tag:"AI", logo:"M"},
    {name:"Canva Print", desc:"Print your designs on demand.", tag:"Design", logo:"P"},
    {name:"Brand Kit", desc:"Centralized brand asset management.", tag:"Design", logo:"B"},
  ],
  Notion: [
    {name:"Notion Docs", desc:"Flexible notes and documents.", tag:"Productivity", logo:"D"},
    {name:"Notion Wikis", desc:"Centralized team knowledge base.", tag:"Collaboration", logo:"W"},
    {name:"Notion Projects", desc:"Task and project tracking.", tag:"Productivity", logo:"P"},
    {name:"Notion AI", desc:"AI writing and search assistant.", tag:"AI", logo:"A"},
    {name:"Notion Calendar", desc:"Scheduling built into your workspace.", tag:"Productivity", logo:"C"},
  ],
  Amazon: [
    {name:"AWS", desc:"Cloud computing and infrastructure services.", tag:"SaaS", logo:"A"},
    {name:"Amazon Prime", desc:"Shopping, streaming, and delivery membership.", tag:"E-commerce", logo:"P"},
    {name:"Alexa", desc:"Voice assistant for smart devices.", tag:"AI", logo:"A"},
    {name:"Amazon Pay", desc:"Checkout using your Amazon account.", tag:"Payments", logo:"P"},
    {name:"Kindle Direct Publishing", desc:"Self-publish books online.", tag:"E-commerce", logo:"K"},
  ],
  Meta: [
    {name:"Facebook", desc:"Social networking platform.", tag:"Collaboration", logo:"F"},
    {name:"Instagram", desc:"Photo and video sharing app.", tag:"Marketing", logo:"I"},
    {name:"WhatsApp Business", desc:"Messaging tools for businesses.", tag:"Collaboration", logo:"W"},
    {name:"Meta Ads Manager", desc:"Create and manage ad campaigns.", tag:"Marketing", logo:"M"},
    {name:"Messenger", desc:"Real-time chat and video calling.", tag:"Collaboration", logo:"M"},
  ],
  Adobe: [
    {name:"Photoshop", desc:"Industry-standard image editing.", tag:"Design", logo:"P"},
    {name:"Illustrator", desc:"Vector graphics and illustration.", tag:"Design", logo:"I"},
    {name:"Adobe Acrobat", desc:"Create and edit PDF documents.", tag:"Productivity", logo:"A"},
    {name:"Premiere Pro", desc:"Professional video editing.", tag:"Design", logo:"P"},
    {name:"Adobe Express", desc:"Quick social and marketing graphics.", tag:"Marketing", logo:"E"},
  ],
  Figma: [
    {name:"Figma Design", desc:"Collaborative interface design tool.", tag:"Design", logo:"F"},
    {name:"FigJam", desc:"Online whiteboard for teams.", tag:"Collaboration", logo:"J"},
    {name:"Figma Slides", desc:"Collaborative presentation design.", tag:"Design", logo:"S"},
    {name:"Dev Mode", desc:"Hand off designs to developers.", tag:"Developer Tools", logo:"D"},
    {name:"Figma Make", desc:"Turn prompts into working apps.", tag:"AI", logo:"M"},
  ],
  Zoom: [
    {name:"Zoom Meetings", desc:"Video conferencing for teams.", tag:"Collaboration", logo:"M"},
    {name:"Zoom Phone", desc:"Cloud-based business phone system.", tag:"Collaboration", logo:"P"},
    {name:"Zoom Webinars", desc:"Host large-scale virtual events.", tag:"Marketing", logo:"W"},
    {name:"Zoom Rooms", desc:"Conference room hardware and software.", tag:"Collaboration", logo:"R"},
    {name:"Zoom Whiteboard", desc:"Visual collaboration canvas.", tag:"Collaboration", logo:"W"},
  ],
  Dropbox: [
    {name:"Dropbox", desc:"Cloud file storage and sync.", tag:"SaaS", logo:"D"},
    {name:"Dropbox Paper", desc:"Collaborative docs for teams.", tag:"Collaboration", logo:"P"},
    {name:"Dropbox Sign", desc:"Send and sign documents online.", tag:"Productivity", logo:"S"},
    {name:"Dropbox Transfer", desc:"Send large files securely.", tag:"Productivity", logo:"T"},
    {name:"Dropbox Backup", desc:"Automatic computer backup.", tag:"SaaS", logo:"B"},
  ],
  Asana: [
    {name:"Asana", desc:"Task and project management platform.", tag:"Productivity", logo:"A"},
    {name:"Asana Goals", desc:"Track company and team objectives.", tag:"Productivity", logo:"G"},
    {name:"Asana Workflows", desc:"Automate repeatable team processes.", tag:"Automation", logo:"W"},
    {name:"Asana Intelligence", desc:"AI-powered project insights.", tag:"AI", logo:"I"},
    {name:"Asana Forms", desc:"Collect requests directly into projects.", tag:"Productivity", logo:"F"},
  ],
  Twilio: [
    {name:"Twilio SMS", desc:"Send and receive text messages at scale.", tag:"APIs", logo:"S"},
    {name:"Twilio Voice", desc:"Build voice calling into any app.", tag:"APIs", logo:"V"},
    {name:"SendGrid", desc:"Reliable transactional email delivery.", tag:"APIs", logo:"S"},
    {name:"Twilio Flex", desc:"Fully programmable contact center.", tag:"SaaS", logo:"F"},
    {name:"Twilio Verify", desc:"Two-factor authentication API.", tag:"Developer Tools", logo:"V"},
  ],
};

const INSIGHTS = [
  {title:"AI Product Trends Report 2025", date:"May 5, 2025", tag:"AI", seed:"bizmend-ai-lab"},
  {title:"Fintech Product Landscape This Quarter", date:"May 2, 2025", tag:"Fintech", seed:"bizmend-finance-district"},
  {title:"Top SaaS Tools for Growing Teams", date:"Apr 28, 2025", tag:"SaaS", seed:"bizmend-saas-office"},
  {title:"E-commerce Platforms Compared", date:"Apr 25, 2025", tag:"E-commerce", seed:"bizmend-ecommerce-warehouse"},
  {title:"Productivity Apps Worth Switching To", date:"Apr 21, 2025", tag:"Productivity", seed:"bizmend-startup-office"},
];

const TOPICS = [
  {name:"APIs", count:"154 products", icon:"fa-plug", bg:"#e8f0fe", fg:"#2563eb"},
  {name:"Automation", count:"137 products", icon:"fa-robot", bg:"#f1e9fe", fg:"#7c3aed"},
  {name:"Business Banking", count:"86 products", icon:"fa-building-columns", bg:"#e6f6f4", fg:"#0f9488"},
  {name:"Compliance", count:"72 products", icon:"fa-shield-halved", bg:"#fef1e6", fg:"#f97316"},
  {name:"Customer Support", count:"116 products", icon:"fa-headset", bg:"#e7f8ed", fg:"#16a34a"},
  {name:"Generative AI", count:"95 products", icon:"fa-wand-magic-sparkles", bg:"#e6f6f4", fg:"#0f9488"},
  {name:"Team Collaboration", count:"163 products", icon:"fa-people-group", bg:"#f1e9fe", fg:"#7c3aed"},
  {name:"Analytics", count:"121 products", icon:"fa-chart-line", bg:"#e8f0fe", fg:"#2563eb"},
];

const COUNTRIES = [
  {name:"United States", count:"682 products", iso:"us", link:"../countries/united-states/index.html"},
  {name:"United Kingdom", count:"186 products", iso:"gb"},
  {name:"Canada", count:"98 products", iso:"ca"},
  {name:"Singapore", count:"74 products", iso:"sg"},
  {name:"UAE", count:"63 products", iso:"ae"},
  {name:"India", count:"142 products", iso:"in"},
];

const FAQS = [
  {q:"What information is included in a product profile?", a:"Each product profile includes the company name, category tags, a short description, user ratings, country of origin, estimated user base, and a link to learn more or visit the product's website."},
  {q:"How often is product information updated?", a:"We review and refresh listings on a rolling basis, with the most popular and actively changing products updated weekly. Recently updated products are highlighted in the section above."},
  {q:"How can I suggest a product to be listed?", a:"Use the \"Suggest a Product\" action at the top or bottom of this page. Fill in the product name, company, category, and a short description, and our team will review it for listing."},
  {q:"How can I update or correct a product listing?", a:"Click \"Update a Product\" and provide the product name along with the corrected details. Our team verifies changes before publishing them to keep the directory accurate."},
  {q:"Is there a cost to list a product on BizMend?", a:"No, basic listings are free. We may offer optional premium placements in the future, but every product can be listed and discovered at no cost."},
  {q:"How are trending products determined?", a:"Trending products are ranked based on recent growth in views, searches, and user engagement over a rolling 30-day window compared to the previous period."},
];

// ============================================================
// STATE
// ============================================================
let filteredProducts = [...PRODUCTS];
let currentPage = 1;
const PER_PAGE = 9;
let activeCompanyTab = "OpenAI";

// ============================================================
// RENDER: SNAPSHOT
// ============================================================
function renderSnapshot(){
  document.getElementById('snapshotGrid').innerHTML = SNAPSHOT.map(s => `
    <div class="snap-item">
      <div class="snap-icon ${s.color}"><i class="fa-solid ${s.icon}"></i></div>
      <div>
        <div class="snap-num">${s.num}</div>
        <div class="snap-label">${s.label}</div>
      </div>
    </div>
  `).join('');
}

// ============================================================
// RENDER: PRODUCT EXPLORER
// ============================================================
function renderProducts(){
  const grid = document.getElementById('productGrid');
  const start = (currentPage - 1) * PER_PAGE;
  const pageItems = filteredProducts.slice(start, start + PER_PAGE);

  if(pageItems.length === 0){
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--muted);padding:30px 0;">No products match your filters.</p>`;
  } else {
    grid.innerHTML = pageItems.map(p => `
      <div class="product-card">
        <div class="product-top">
          <div class="product-head">
            <div class="product-logo">${logoTag(p.name, p.domain, p.bg)}</div>
            <div>
              <div class="product-name">${p.name}</div>
              <div class="product-company">${p.company}</div>
            </div>
          </div>
          <div class="rating"><i class="fa-solid fa-star"></i>${p.rating.toFixed(1)}</div>
        </div>
        <div class="tag-row">
          ${p.tags.map(t => `<span class="tag" style="${tagStyle(t)}">${t}</span>`).join('')}
        </div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-meta">
          <div class="meta-left">
            <span><i class="fa-solid fa-globe"></i> ${p.country}</span>
            <span><i class="fa-solid fa-users"></i> ${p.users}</span>
          </div>
          ${p.link ? `<a class="view-btn" href="${p.link}">View Product</a>` : `<button class="view-btn">View Product</button>`}
        </div>
      </div>
    `).join('');
  }
  renderPagination();
}

function renderPagination(){
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PER_PAGE));
  if(currentPage > totalPages) currentPage = totalPages;
  const el = document.getElementById('pagination');
  let html = `<button class="page-btn" id="prevPage" ${currentPage===1?'disabled':''}><i class="fa-solid fa-chevron-left"></i></button>`;

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
    if(p === '...'){ html += `<span class="page-btn dots">...</span>`; }
    else { html += `<button class="page-btn ${p===currentPage?'active':''}" data-page="${p}">${p}</button>`; }
  });
  html += `<button class="page-btn" id="nextPage" ${currentPage===totalPages?'disabled':''}><i class="fa-solid fa-chevron-right"></i></button>`;
  el.innerHTML = html;

  el.querySelectorAll('button[data-page]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      currentPage = parseInt(btn.dataset.page);
      renderProducts();
      document.getElementById('explorer').scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
  const prevBtn = document.getElementById('prevPage');
  const nextBtn = document.getElementById('nextPage');
  if(prevBtn) prevBtn.addEventListener('click', ()=>{ if(currentPage>1){currentPage--; renderProducts();} });
  if(nextBtn) nextBtn.addEventListener('click', ()=>{ if(currentPage<totalPages){currentPage++; renderProducts();} });
}

function populateCompanyFilter(){
  const companies = [...new Set(PRODUCTS.map(p=>p.company))].sort();
  const el = document.getElementById('filterCompany');
  companies.forEach(c=>{
    const opt = document.createElement('option');
    opt.value = c; opt.textContent = c;
    el.appendChild(opt);
  });
}

function applyFilters(){
  const search = document.getElementById('productSearch').value.trim().toLowerCase();
  const industry = document.getElementById('filterIndustry').value;
  const topic = document.getElementById('filterTopic').value;
  const country = document.getElementById('filterCountry').value;
  const company = document.getElementById('filterCompany').value;
  const sort = document.getElementById('sortBy').value;

  filteredProducts = PRODUCTS.filter(p=>{
    const searchMatch = !search || p.name.toLowerCase().includes(search) || p.company.toLowerCase().includes(search) || p.tags.some(t=>t.toLowerCase().includes(search));
    const industryMatch = !industry || p.tags.includes(industry);
    const topicMatch = !topic || p.tags.includes(topic);
    const countryMatch = !country || p.country === country;
    const companyMatch = !company || p.company === company;
    return searchMatch && industryMatch && topicMatch && countryMatch && companyMatch;
  });

  if(sort === 'rating') filteredProducts.sort((a,b)=>b.rating-a.rating);
  else if(sort === 'newest') filteredProducts.sort((a,b)=>PRODUCTS.indexOf(b)-PRODUCTS.indexOf(a));

  currentPage = 1;
  renderProducts();
}

// ============================================================
// RENDER: TRENDING
// ============================================================
function renderTrending(){
  document.getElementById('trendingRow').innerHTML = TRENDING.map((t,i)=>`
    <div class="trend-box">
      <span class="trend-rank">${i+1}</span>
      <div class="trend-icon">${logoTag(t.name, t.domain, t.bg)}</div>
      <div class="trend-info">
        <div class="trend-name">${t.name}</div>
        <div class="trend-company">${t.company}</div>
      </div>
      <span class="trend-change"><i class="fa-solid fa-arrow-trend-up"></i> ${t.pct}%</span>
    </div>
  `).join('');
}

// ============================================================
// RENDER: RECENTLY UPDATED
// ============================================================
function renderUpdated(){
  document.getElementById('updatedList').innerHTML = UPDATED.map(u=>{
    const tag = u.link ? 'a' : 'div';
    const hrefAttr = u.link ? ` href="${u.link}"` : '';
    return `
    <${tag} class="updated-row"${hrefAttr}>
      <div class="updated-prod">
        <div class="updated-logo">${logoTag(u.name, u.domain, u.bg)}</div>
        <div>
          <div class="updated-name">${u.name}</div>
          <div class="updated-company">${u.company}</div>
        </div>
      </div>
      <div class="updated-desc">${u.desc}</div>
      <div class="updated-date"><i class="fa-regular fa-calendar"></i> ${u.date}</div>
    </${tag}>
  `;
  }).join('');
}

// ============================================================
// RENDER: PRODUCTS BY COMPANY
// ============================================================
function fillCompaniesDatalist(){
  document.getElementById('allCompaniesList').innerHTML = COMPANIES.map(c=>`<option value="${c}">`).join('');
}

function renderCompanyTabs(){
  const q = (document.getElementById('companySearch').value || '').trim().toLowerCase();
  document.getElementById('companyTabs').innerHTML = COMPANIES.map(c => `
    <button class="company-tab ${c===activeCompanyTab?'active':''}" data-company="${c}" style="${q && !c.toLowerCase().includes(q) ? 'display:none;' : ''}">${c}</button>
  `).join('');
  document.querySelectorAll('#companyTabs .company-tab').forEach(tab=>{
    tab.addEventListener('click', ()=>{
      activeCompanyTab = tab.dataset.company;
      document.getElementById('companySearch').value = '';
      renderCompanyTabs();
      renderCompanyProducts();
    });
  });
}

function renderCompanyProducts(){
  const bg = COMPANY_BG[activeCompanyTab];
  const domain = COMPANY_DOMAINS[activeCompanyTab];
  const items = COMPANY_PRODUCTS[activeCompanyTab] || [];
  document.getElementById('companyProducts').innerHTML = items.map(p => {
    const tag = p.link ? 'a' : 'div';
    const hrefAttr = p.link ? ` href="${p.link}"` : '';
    return `
    <${tag} class="mini-product"${hrefAttr}>
      <div class="mini-logo">${logoTag(p.name, domain, bg)}</div>
      <div class="mini-name">${p.name}</div>
      <div class="mini-company">${activeCompanyTab}</div>
      <div class="mini-desc">${p.desc}</div>
      <span class="tag" style="${tagStyle(p.tag)}">${p.tag}</span>
    </${tag}>
  `;
  }).join('');
  const viewAllLink = document.getElementById('viewAllLink');
  viewAllLink.innerHTML = `View all ${activeCompanyTab} products <i class="fa-solid fa-arrow-right"></i>`;
  viewAllLink.href = COMPANY_PROFILE_LINKS[activeCompanyTab] || '#';
}

// ============================================================
// RENDER: CHIP ROWS
// ============================================================
function renderInsights(){
  document.getElementById('insightRow').innerHTML = INSIGHTS.map(i => `
    <a href="#" class="insight-card">
      <div class="insight-thumb">
        <img src="https://picsum.photos/seed/${i.seed}/400/300" alt="${i.title}" loading="lazy">
        <span class="insight-badge">${i.tag}</span>
      </div>
      <div class="insight-body">
        <h4>${i.title}</h4>
        <div class="insight-count">${i.date}</div>
      </div>
    </a>
  `).join('');
}

function renderTopics(){
  const q = (document.getElementById('topicSearch').value || '').trim().toLowerCase();
  const list = TOPICS.filter(t => !q || t.name.toLowerCase().includes(q));
  document.getElementById('topicGrid').innerHTML = list.map(t => `
    <a href="${t.link || '#'}" class="chip">
      <div class="chip-icon" style="background:${t.bg};color:${t.fg};"><i class="fa-solid ${t.icon}"></i></div>
      <div class="chip-text"><strong>${t.name}</strong><span>${t.count}</span></div>
    </a>
  `).join('') || `<p style="grid-column:1/-1;text-align:center;color:var(--muted);padding:16px 0;">No topics match your search.</p>`;
}

function renderCountries(){
  const shown = COUNTRIES.slice(0, 4);
  let html = shown.map(c => `
    <a href="${c.link || '#'}" class="chip">
      <div class="chip-flag"><img src="${flagImgUrl(c.iso, 80)}" alt="${c.name} flag"></div>
      <div class="chip-text"><strong>${c.name}</strong><span>${c.count}</span></div>
    </a>
  `).join('');
  html += `
    <a href="#" class="chip chip-viewall">
      <div class="chip-icon chip-icon-viewall"><i class="fa-solid fa-arrow-right"></i></div>
      <div class="chip-text"><strong>View All Countries</strong></div>
    </a>`;
  document.getElementById('countryRow').innerHTML = html;
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
        <i class="fa-solid fa-chevron-down faq-chevron"></i>
      </button>
      <div class="faq-answer"><p>${f.a}</p></div>
    </div>
  `).join('');

  document.querySelectorAll('.faq-question').forEach(q=>{
    q.addEventListener('click', ()=>{
      const item = q.parentElement;
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.toggle('open');
      answer.style.maxHeight = isOpen ? answer.scrollHeight + 'px' : null;
    });
  });
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', ()=>{
  renderSnapshot();
  populateCompanyFilter();
  renderProducts();
  renderTrending();
  renderUpdated();
  fillCompaniesDatalist();
  renderCompanyTabs();
  renderCompanyProducts();
  renderInsights();
  renderTopics();
  renderCountries();
  renderFaqs();

  document.getElementById('productSearch').addEventListener('input', applyFilters);
  document.getElementById('filterIndustry').addEventListener('change', applyFilters);
  document.getElementById('filterTopic').addEventListener('change', applyFilters);
  document.getElementById('filterCountry').addEventListener('change', applyFilters);
  document.getElementById('filterCompany').addEventListener('change', applyFilters);
  document.getElementById('sortBy').addEventListener('change', applyFilters);

  document.getElementById('clearAll').addEventListener('click', ()=>{
    document.getElementById('productSearch').value = '';
    document.getElementById('filterIndustry').value = '';
    document.getElementById('filterTopic').value = '';
    document.getElementById('filterCountry').value = '';
    document.getElementById('filterCompany').value = '';
    document.getElementById('sortBy').value = 'popular';
    applyFilters();
  });

  document.getElementById('heroSearchBtn').addEventListener('click', (e)=>{
    e.preventDefault();
    const val = document.getElementById('heroSearch').value;
    document.getElementById('productSearch').value = val;
    applyFilters();
    document.getElementById('explorer').scrollIntoView({behavior:'smooth'});
  });

  document.getElementById('companySearch').addEventListener('input', (e)=>{
    const match = COMPANIES.find(c => c.toLowerCase() === e.target.value.trim().toLowerCase());
    if(match){ activeCompanyTab = match; renderCompanyProducts(); }
    renderCompanyTabs();
    document.getElementById('companySearch').focus();
  });

  document.getElementById('topicSearch').addEventListener('input', renderTopics);
});

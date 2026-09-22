/* ============================================================
   BizMend unified search index. One flat list of every entity
   BizMend knows about, spanning all types, so a single query can
   match across companies, founders, products, services, topics,
   industries, countries, cities, reports and insights — and so
   compound queries like "Stripe Ireland" or "Fintech United
   Kingdom" work naturally (all query words must appear somewhere
   in an entity's combined searchable fields).
   `url` is root-relative (e.g. "companies/openai/index.html");
   bm-search.js resolves it against the current page's depth.
   ============================================================ */
window.BM_SEARCH_INDEX = [
  // ---- Companies ----
  { type:"Company", name:"OpenAI", badge:"Artificial Intelligence", meta:"San Francisco, United States", url:"companies/openai/index.html", verified:true },
  { type:"Company", name:"Stripe", badge:"Fintech", meta:"San Francisco, United States" },
  { type:"Company", name:"Amazon", badge:"E-commerce", meta:"Seattle, United States" },
  { type:"Company", name:"Microsoft", badge:"Technology", meta:"Redmond, United States" },
  { type:"Company", name:"Google", badge:"Technology", meta:"Mountain View, United States" },
  { type:"Company", name:"Meta", badge:"Technology", meta:"Menlo Park, United States" },
  { type:"Company", name:"Apple", badge:"Technology", meta:"Cupertino, United States" },
  { type:"Company", name:"NVIDIA", badge:"Semiconductors", meta:"Santa Clara, United States" },
  { type:"Company", name:"Tesla", badge:"Automotive", meta:"Palo Alto, United States" },
  { type:"Company", name:"Adobe", badge:"Software", meta:"San Jose, United States" },
  { type:"Company", name:"Salesforce", badge:"SaaS", meta:"San Francisco, United States" },
  { type:"Company", name:"Shopify", badge:"E-commerce", meta:"Ottawa, Canada" },
  { type:"Company", name:"Notion", badge:"SaaS", meta:"San Francisco, United States" },
  { type:"Company", name:"Airbnb", badge:"Travel", meta:"San Francisco, United States" },
  { type:"Company", name:"Canva", badge:"Software", meta:"Sydney, Australia" },
  { type:"Company", name:"Databricks", badge:"Artificial Intelligence", meta:"San Francisco, United States" },
  { type:"Company", name:"Revolut", badge:"Fintech", meta:"London, United Kingdom" },

  // ---- Founders ----
  { type:"Founder", name:"Sam Altman", badge:"CEO, OpenAI", meta:"United States", url:"founders/sam-altman/index.html", verified:true },
  { type:"Founder", name:"Elon Musk", badge:"CEO, SpaceX &amp; Tesla", meta:"United States" },
  { type:"Founder", name:"Satya Nadella", badge:"Chairman &amp; CEO, Microsoft", meta:"United States" },
  { type:"Founder", name:"Mark Zuckerberg", badge:"Founder &amp; CEO, Meta", meta:"United States" },
  { type:"Founder", name:"Sundar Pichai", badge:"CEO, Alphabet (Google)", meta:"United States" },
  { type:"Founder", name:"Jensen Huang", badge:"Founder &amp; CEO, NVIDIA", meta:"United States" },
  { type:"Founder", name:"Brian Chesky", badge:"Co-founder &amp; CEO, Airbnb", meta:"United States" },
  { type:"Founder", name:"Patrick Collison", badge:"Co-founder &amp; CEO, Stripe", meta:"Ireland" },
  { type:"Founder", name:"Reed Hastings", badge:"Co-founder, Netflix", meta:"United States" },
  { type:"Founder", name:"Sara Blakely", badge:"Founder, Spanx", meta:"United States" },
  { type:"Founder", name:"Ilya Sutskever", badge:"Co-founder, OpenAI", meta:"United States" },
  { type:"Founder", name:"Zach Perret", badge:"Co-founder &amp; CEO, Plaid", meta:"United States" },
  { type:"Founder", name:"Aman Gupta", badge:"Co-founder &amp; CMO, boAt", meta:"Bangladesh" },
  { type:"Founder", name:"Demis Hassabis", badge:"Co-founder &amp; CEO, Google DeepMind", meta:"United Kingdom" },
  { type:"Founder", name:"Tobi Lütke", badge:"Founder &amp; CEO, Shopify", meta:"Canada" },
  { type:"Founder", name:"Melanie Perkins", badge:"Co-founder &amp; CEO, Canva", meta:"Singapore" },
  { type:"Founder", name:"Ritesh Agarwal", badge:"Founder &amp; CEO, OYO", meta:"UAE" },

  // ---- Products ----
  { type:"Product", name:"Codex by OpenAI", badge:"AI Tools · Dev Tools", meta:"by OpenAI", url:"products/codex/index.html", verified:true },
  { type:"Product", name:"ChatGPT Enterprise", badge:"AI Tools", meta:"by OpenAI" },
  { type:"Product", name:"Stripe Billing", badge:"Payments", meta:"by Stripe" },
  { type:"Product", name:"Notion AI", badge:"Productivity", meta:"by Notion" },
  { type:"Product", name:"Salesforce Einstein", badge:"CRM", meta:"by Salesforce" },
  { type:"Product", name:"Figma Dev Mode", badge:"Design Tools", meta:"by Figma" },
  { type:"Product", name:"Shopify Plus", badge:"E-commerce", meta:"by Shopify" },
  { type:"Product", name:"Linear", badge:"Dev Tools", meta:"by Linear" },

  // ---- Services ----
  { type:"Service", name:"OpenAI API", badge:"Developer API", meta:"by OpenAI", url:"services/openai-api/index.html", verified:true },
  { type:"Service", name:"Stripe Payments API", badge:"Developer API", meta:"by Stripe" },
  { type:"Service", name:"AWS Cloud Services", badge:"Cloud", meta:"by Amazon" },
  { type:"Service", name:"Google Cloud AI", badge:"Cloud", meta:"by Google" },
  { type:"Service", name:"Cloudflare Security", badge:"Security", meta:"by Cloudflare" },
  { type:"Service", name:"Deloitte Digital Consulting", badge:"Consulting", meta:"by Deloitte" },
  { type:"Service", name:"McKinsey Digital Strategy", badge:"Consulting", meta:"by McKinsey" },
  { type:"Service", name:"Ogilvy Digital Marketing", badge:"Marketing", meta:"by Ogilvy" },

  // ---- Topics ----
  { type:"Topic", name:"Digital Banking", badge:"FinTech", meta:"20 companies", url:"topics/digital-banking/index.html", verified:true },
  { type:"Topic", name:"AI Infrastructure", badge:"Artificial Intelligence", meta:"Growing interest" },
  { type:"Topic", name:"Generative AI", badge:"Artificial Intelligence", meta:"Growing interest" },
  { type:"Topic", name:"Startup Funding", badge:"Venture Capital", meta:"Growing interest" },
  { type:"Topic", name:"Global Payments", badge:"FinTech", meta:"Active" },
  { type:"Topic", name:"Cybersecurity Trends", badge:"Security", meta:"Growing interest" },
  { type:"Topic", name:"Cloud Computing", badge:"Infrastructure", meta:"Active" },
  { type:"Topic", name:"Creator Economy", badge:"Media", meta:"Growing interest" },

  // ---- Industries ----
  { type:"Industry", name:"Artificial Intelligence Software", badge:"Technology", meta:"320 companies", url:"industries/artificial-intelligence-software/index.html", verified:true },
  { type:"Industry", name:"Fintech", badge:"Finance", meta:"Growth stage" },
  { type:"Industry", name:"SaaS", badge:"Technology", meta:"Mature market" },
  { type:"Industry", name:"E-commerce", badge:"Commerce", meta:"Mature market" },
  { type:"Industry", name:"Cybersecurity", badge:"Security", meta:"Growth stage" },
  { type:"Industry", name:"Healthcare Technology", badge:"Healthcare", meta:"Growth stage" },
  { type:"Industry", name:"Renewable Energy", badge:"Energy", meta:"Growth stage" },
  { type:"Industry", name:"Biotechnology", badge:"Healthcare", meta:"Emerging" },

  // ---- Countries ----
  { type:"Country", name:"United States", badge:"North America", meta:"3,840 companies tracked", url:"countries/united-states/index.html", verified:true },
  { type:"Country", name:"United Kingdom", badge:"Europe", meta:"1,920 companies tracked" },
  { type:"Country", name:"Canada", badge:"North America", meta:"1,240 companies tracked" },
  { type:"Country", name:"UAE", badge:"Middle East", meta:"890 companies tracked" },
  { type:"Country", name:"Singapore", badge:"Asia Pacific", meta:"760 companies tracked" },
  { type:"Country", name:"Australia", badge:"Asia Pacific", meta:"705 companies tracked" },
  { type:"Country", name:"India", badge:"Asia Pacific", meta:"Large market" },
  { type:"Country", name:"Germany", badge:"Europe", meta:"Large market" },

  // ---- Cities ----
  { type:"City", name:"New York City", badge:"United States", meta:"1,280 companies tracked", url:"cities/new-york-city/index.html", verified:true },
  { type:"City", name:"San Francisco", badge:"United States", meta:"1,050 companies tracked" },
  { type:"City", name:"London", badge:"United Kingdom", meta:"960 companies tracked" },
  { type:"City", name:"Toronto", badge:"Canada", meta:"540 companies tracked" },
  { type:"City", name:"Dubai", badge:"UAE", meta:"510 companies tracked" },
  { type:"City", name:"Singapore", badge:"Singapore", meta:"480 companies tracked" },
  { type:"City", name:"Berlin", badge:"Germany", meta:"Growing hub" },
  { type:"City", name:"Mumbai", badge:"India", meta:"Growing hub" },

  // ---- Reports ----
  { type:"Report", name:"OpenAI Market Outlook", badge:"Market Report", meta:"Artificial Intelligence · 2026", url:"reports/openai-market-outlook/index.html", verified:true },
  { type:"Report", name:"State of AI Software 2026", badge:"Market Report", meta:"Artificial Intelligence · 2026" },
  { type:"Report", name:"Global Fintech Outlook", badge:"Market Report", meta:"Fintech · 2026" },
  { type:"Report", name:"SaaS Market Landscape", badge:"Market Report", meta:"SaaS · 2026" },
  { type:"Report", name:"Cybersecurity Threat Report", badge:"Industry Report", meta:"Security · 2026" },
  { type:"Report", name:"Startup Funding Q3 2026", badge:"Regional Report", meta:"Venture Capital · 2026" },

  // ---- Insights ----
  { type:"Insight", name:"What Is a Depository Institution?", badge:"Guide", meta:"6 min read", url:"insights/what-is-a-depository-institution/index.html", verified:true },
  { type:"Insight", name:"Why Enterprise AI Adoption Is Accelerating", badge:"Analysis", meta:"6 min read" },
  { type:"Insight", name:"Cross-Border Payments Rebuilt From Scratch", badge:"Analysis", meta:"5 min read" },
  { type:"Insight", name:"The Shift From Seat-Based to Usage-Based Pricing", badge:"Analysis", meta:"4 min read" },
  { type:"Insight", name:"How to Evaluate a SaaS Vendor", badge:"Guide", meta:"7 min read" },
  { type:"Insight", name:"Understanding Startup Valuation Basics", badge:"Explainer", meta:"6 min read" }
];

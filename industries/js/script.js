// ===== SHARED HELPERS =====
function companyIcon(domain){ return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`; }
function initialsOf(name){ return name.split(" ").filter(Boolean).map(w=>w[0]).slice(0,2).join("").toUpperCase(); }

const ICONS = {
  arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>',
  trendUp: '<svg viewBox="0 0 24 24"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>',
  building: '<svg viewBox="0 0 24 24"><path d="M3 21h18M6 21V10l6-6 6 6v11M9 21v-6h6v6"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>',
  users: '<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
  file: '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>',
  globe: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20 15 15 0 010-20z"/></svg>',
  pin: '<svg viewBox="0 0 24 24"><path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
  clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  target: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  disc: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>',
  cpu: '<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>',
  bank: '<svg viewBox="0 0 24 24"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>',
  heart: '<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z"/></svg>',
  cart: '<svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6"/></svg>',
  leaf: '<svg viewBox="0 0 24 24"><path d="M11 20A7 7 0 019.8 6.1C15.5 5 17 1 17 1s2.5 4.5 1 8c-1.5 3.5-4 5-7 5"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 11 13.24 12 11"/></svg>',
  gear: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>',
  graduationCap: '<svg viewBox="0 0 24 24"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5"/></svg>',
};

const AVATAR_COLORS = ["#0f9488","#2563eb","#7c3aed","#f97316","#16a34a","#dc2626"];

// ===== TWO-TONE INDUSTRY ICONS (navy #1b2a4a + teal #0f9488) =====
const NAVY = "#1b2a4a", TEAL = "#0f9488";
const IND_ICONS = {
  brainCircuit: `<svg viewBox="0 0 24 24">
    <path d="M9.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 01-4.96.44 2.5 2.5 0 01-2.96-3.08 3 3 0 01-.34-5.58 2.5 2.5 0 011.32-4.24 2.5 2.5 0 011.98-3A2.5 2.5 0 019.5 2z" stroke="${NAVY}"/>
    <path d="M14.5 2A2.5 2.5 0 0012 4.5v15a2.5 2.5 0 004.96.44 2.5 2.5 0 002.96-3.08 3 3 0 00.34-5.58 2.5 2.5 0 00-1.32-4.24 2.5 2.5 0 00-1.98-3A2.5 2.5 0 0014.5 2z" stroke="${NAVY}"/>
    <path d="M15.5 13a4.5 4.5 0 01-3-4c-1.5 1-2.5 2-3 4" stroke="${NAVY}"/>
    <circle cx="6" cy="6.2" r="1" fill="${TEAL}"/><circle cx="18" cy="6.2" r="1" fill="${TEAL}"/>
  </svg>`,
  bankCard: `<svg viewBox="0 0 24 24">
    <rect x="2" y="6" width="20" height="14" rx="2" stroke="${NAVY}"/>
    <line x1="2" y1="10.5" x2="22" y2="10.5" stroke="${NAVY}"/>
    <rect x="5" y="14" width="5" height="3" rx="0.6" fill="${TEAL}"/>
  </svg>`,
  cartTwo: `<svg viewBox="0 0 24 24">
    <circle cx="9" cy="21" r="1" fill="${TEAL}"/><circle cx="20" cy="21" r="1" fill="${TEAL}"/>
    <path d="M1 1h4l2.7 13.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6" stroke="${NAVY}"/>
  </svg>`,
  heartPulse: `<svg viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="${NAVY}"/>
    <path d="M5.5 13h3l1.5-4 2 7 1.5-3h4.5" stroke="${TEAL}"/>
  </svg>`,
  cloudServer: `<svg viewBox="0 0 24 24">
    <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" stroke="${NAVY}"/>
    <rect x="9" y="13.2" width="7" height="1.8" rx="0.4" fill="${TEAL}"/>
    <rect x="9" y="15.6" width="7" height="1.8" rx="0.4" fill="${TEAL}"/>
  </svg>`,
  shieldLock: `<svg viewBox="0 0 24 24">
    <path d="M12 2l8 3v7c0 6-8 10-8 10s-8-4-8-10V5l8-3z" stroke="${NAVY}"/>
    <rect x="9.3" y="11.5" width="5.4" height="4.2" rx="0.7" stroke="${TEAL}"/>
    <path d="M10.3 11.5V9.8a1.7 1.7 0 013.4 0v1.7" stroke="${TEAL}"/>
  </svg>`,
  dashboard: `<svg viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="${NAVY}"/>
    <circle cx="8.2" cy="12" r="3" stroke="${TEAL}"/><path d="M8.2 9v3l2.2 1.3" stroke="${TEAL}"/>
    <rect x="14" y="13.5" width="1.8" height="3" fill="${TEAL}"/><rect x="16.6" y="10.5" width="1.8" height="6" fill="${TEAL}"/><rect x="19.2" y="8" width="1.8" height="8.5" fill="${TEAL}"/>
  </svg>`,
  graduationCap: `<svg viewBox="0 0 24 24">
    <path d="M22 10L12 5 2 10l10 5 10-5z" stroke="${NAVY}"/>
    <path d="M6 12v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5" stroke="${NAVY}"/>
    <circle cx="22" cy="10" r="1" fill="${TEAL}"/><line x1="22" y1="10" x2="22" y2="16" stroke="${TEAL}"/>
  </svg>`,
  leafTwo: `<svg viewBox="0 0 24 24">
    <path d="M11 20A7 7 0 019.8 6.1C15.5 5 17 1 17 1s2.5 4.5 1 8c-1.5 3.5-4 5-7 5" stroke="${NAVY}"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 11 13.24 12 11" stroke="${TEAL}"/>
  </svg>`,
  signalTwo: `<svg viewBox="0 0 24 24">
    <circle cx="12" cy="19" r="1.2" fill="${TEAL}"/>
    <path d="M8.5 16.1a6 6 0 016.95 0" stroke="${TEAL}"/>
    <path d="M5 12.55a11 11 0 0114.08 0" stroke="${NAVY}"/>
    <path d="M1.42 9a16 16 0 0121.16 0" stroke="${NAVY}"/>
  </svg>`,
  truckTwo: `<svg viewBox="0 0 24 24">
    <rect x="1" y="8" width="13" height="9" stroke="${NAVY}"/>
    <path d="M14 11h4l3 3v3h-7" stroke="${NAVY}"/>
    <circle cx="5.5" cy="18.5" r="2" stroke="${TEAL}"/><circle cx="17.5" cy="18.5" r="2" stroke="${TEAL}"/>
  </svg>`,
  boltTwo: `<svg viewBox="0 0 24 24">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="${NAVY}" fill="${TEAL}" fill-opacity="0.18"/>
  </svg>`,
  rocketTwo: `<svg viewBox="0 0 24 24">
    <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" stroke="${NAVY}"/>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" stroke="${NAVY}"/>
    <circle cx="16.5" cy="7.5" r="1.6" fill="${TEAL}"/>
  </svg>`,
  gearTwo: `<svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="3" stroke="${TEAL}"/>
    <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" stroke="${NAVY}"/>
  </svg>`,
  buildingTwo: `<svg viewBox="0 0 24 24">
    <path d="M3 21h18M6 21V10l6-6 6 6v11" stroke="${NAVY}"/>
    <rect x="9" y="12.5" width="2.4" height="2.4" fill="${TEAL}"/><rect x="12.6" y="12.5" width="2.4" height="2.4" fill="${TEAL}"/>
    <rect x="10" y="17" width="4" height="4" stroke="${TEAL}"/>
  </svg>`,
  packageTwo: `<svg viewBox="0 0 24 24">
    <path d="M3 8l9-4 9 4-9 4-9-4z" stroke="${NAVY}"/>
    <path d="M3 8v9l9 4 9-4V8" stroke="${NAVY}"/>
    <line x1="12" y1="12" x2="12" y2="21" stroke="${TEAL}"/>
  </svg>`,
  sunTwo: `<svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="4" stroke="${TEAL}"/>
    <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" stroke="${NAVY}"/>
  </svg>`,
  pickaxe: `<svg viewBox="0 0 24 24">
    <path d="M4 4c4 0 8 2 10 6" stroke="${NAVY}"/>
    <path d="M20 4c-4 0-8 2-10 6" stroke="${NAVY}"/>
    <path d="M9 10L3 20l1.5 1.5L14 15" stroke="${TEAL}"/>
  </svg>`,
  flask: `<svg viewBox="0 0 24 24">
    <path d="M9 2h6M10 2v6l-6 11a2 2 0 001.8 3h12.4a2 2 0 001.8-3l-6-11V2" stroke="${NAVY}"/>
    <path d="M6.5 15h11" stroke="${TEAL}"/>
  </svg>`,
};

// ===== DATA: SNAPSHOT =====
const snapshotStats = [
  { num:"41", label:"Total Industries", sub:"Across all sectors", icon:ICONS.building },
  { num:"612", label:"Industry Reports", sub:"From our research desk", icon:ICONS.file },
  { num:"14", label:"Trending Now", sub:"Hot & rising", icon:ICONS.trendUp },
  { num:"126", label:"Expert-Curated", sub:"Verified profiles", icon:ICONS.users },
  { num:"7", label:"Macro Sectors", sub:"Global coverage", icon:ICONS.globe },
];

// ===== DATA: INDUSTRIES =====
// "sector" groups industries into the 7 macro buckets also used for the
// "Top Companies by Industry" tabs. "classification" uses the standard
// economic-sector framework (Primary / Secondary / Tertiary / Quaternary).
const CLASSIFICATIONS = ["Primary Sector","Secondary Sector","Tertiary Sector","Quaternary Sector"];
const SECTORS = ["Technology","Finance","Healthcare","Commerce","Sustainability","Society","Industry"];

// First 12 are the featured industries shown on page one of the explorer.
const FEATURED_INDUSTRIES = [
  { name:"Artificial Intelligence Software", desc:"Machine learning platforms, generative AI and intelligent automation software.", companies:77, insights:85, icon:IND_ICONS.brainCircuit, sector:"Technology", classification:"Quaternary Sector", url:"artificial-intelligence-software/index.html" },
  { name:"Enterprise Software & SaaS", desc:"Cloud-delivered business software, from CRM to workflow automation.", companies:118, insights:74, icon:IND_ICONS.cloudServer, sector:"Technology", classification:"Quaternary Sector" },
  { name:"Cybersecurity", desc:"Network security, data protection and threat intelligence services.", companies:73, insights:59, icon:IND_ICONS.shieldLock, sector:"Technology", classification:"Quaternary Sector" },
  { name:"Banking & Financial Services", desc:"Retail and commercial banking, lending and core financial infrastructure.", companies:96, insights:81, icon:IND_ICONS.bankCard, sector:"Finance", classification:"Tertiary Sector" },
  { name:"Fintech & Digital Payments", desc:"Digital wallets, payment rails and financial technology platforms.", companies:116, insights:87, icon:IND_ICONS.bankCard, sector:"Finance", classification:"Quaternary Sector" },
  { name:"Pharmaceuticals & Biotechnology", desc:"Drug discovery, clinical development and biologics manufacturing.", companies:84, insights:66, icon:IND_ICONS.flask, sector:"Healthcare", classification:"Secondary Sector" },
  { name:"Hospitals & Healthcare Services", desc:"Patient care delivery, health systems and clinical services.", companies:68, insights:51, icon:IND_ICONS.heartPulse, sector:"Healthcare", classification:"Tertiary Sector" },
  { name:"Retail & E-commerce", desc:"Online and offline retail, marketplaces and consumer commerce.", companies:92, insights:58, icon:IND_ICONS.cartTwo, sector:"Commerce", classification:"Tertiary Sector" },
  { name:"Renewable Energy", desc:"Solar, wind and clean power generation and storage.", companies:57, insights:44, icon:IND_ICONS.sunTwo, sector:"Sustainability", classification:"Secondary Sector" },
  { name:"Oil & Gas", desc:"Upstream exploration, extraction and downstream energy production.", companies:41, insights:39, icon:IND_ICONS.boltTwo, sector:"Sustainability", classification:"Primary Sector" },
  { name:"Automotive Manufacturing", desc:"Passenger and commercial vehicle design, production and EVs.", companies:62, insights:48, icon:IND_ICONS.truckTwo, sector:"Industry", classification:"Secondary Sector" },
  { name:"Telecommunications", desc:"Wireless networks, broadband and connectivity infrastructure.", companies:49, insights:41, icon:IND_ICONS.signalTwo, sector:"Society", classification:"Secondary Sector" },
];

// Additional industries fill the explorer out to 3 pages (12 per page = 36 total).
const MORE_INDUSTRIES = [
  ["Insurance","Life, property and casualty risk underwriting and claims.",IND_ICONS.shieldLock,"Finance","Tertiary Sector"],
  ["Asset & Wealth Management","Investment funds, portfolio management and private wealth advisory.",IND_ICONS.bankCard,"Finance","Tertiary Sector"],
  ["Venture Capital & Private Equity","Startup funding, buyouts and growth-stage investment.",IND_ICONS.dashboard,"Finance","Tertiary Sector"],
  ["Medical Devices","Diagnostic and therapeutic hardware for clinical use.",IND_ICONS.heartPulse,"Healthcare","Secondary Sector"],
  ["Digital Health & Telemedicine","Remote care platforms, health apps and virtual clinics.",IND_ICONS.brainCircuit,"Healthcare","Quaternary Sector"],
  ["Health Insurance","Coverage plans, claims processing and payer networks.",IND_ICONS.shieldLock,"Healthcare","Tertiary Sector"],
  ["Consumer Packaged Goods","Household and personal care products manufacturing.",IND_ICONS.packageTwo,"Commerce","Secondary Sector"],
  ["Food & Beverage","Food production, processing and beverage manufacturing.",IND_ICONS.cartTwo,"Commerce","Secondary Sector"],
  ["Fashion & Apparel","Clothing design, textile manufacturing and retail fashion.",IND_ICONS.packageTwo,"Commerce","Secondary Sector"],
  ["Hospitality & Tourism","Hotels, travel services and leisure experiences.",IND_ICONS.buildingTwo,"Commerce","Tertiary Sector"],
  ["Utilities & Power Generation","Electricity, water and gas distribution infrastructure.",IND_ICONS.boltTwo,"Sustainability","Secondary Sector"],
  ["Mining & Metals","Raw material extraction, ore processing and metal production.",IND_ICONS.pickaxe,"Sustainability","Primary Sector"],
  ["Agriculture & Farming","Crop production, livestock and food supply chains.",IND_ICONS.leafTwo,"Sustainability","Primary Sector"],
  ["Education & EdTech","Schools, universities and digital learning platforms.",IND_ICONS.graduationCap,"Society","Tertiary Sector"],
  ["Media & Entertainment","Film, streaming, publishing and content production.",IND_ICONS.signalTwo,"Society","Tertiary Sector"],
  ["Government & Public Sector","Public administration, civic services and policy institutions.",IND_ICONS.buildingTwo,"Society","Tertiary Sector"],
  ["Non-Profit & Social Impact","Charitable organizations, foundations and mission-driven work.",IND_ICONS.leafTwo,"Society","Tertiary Sector"],
  ["Aerospace & Defense","Aircraft manufacturing, space systems and defense technology.",IND_ICONS.rocketTwo,"Industry","Secondary Sector"],
  ["Construction & Real Estate","Building development, property management and infrastructure.",IND_ICONS.buildingTwo,"Industry","Secondary Sector"],
  ["Logistics & Supply Chain","Freight, warehousing and global distribution networks.",IND_ICONS.truckTwo,"Industry","Tertiary Sector"],
  ["Industrial Manufacturing & Machinery","Heavy equipment, industrial machinery and factory production.",IND_ICONS.gearTwo,"Industry","Secondary Sector"],
  ["Chemicals & Materials","Industrial chemicals, plastics and advanced materials production.",IND_ICONS.flask,"Industry","Secondary Sector"],
  ["Semiconductors & Chip Manufacturing","Chip design, fabrication and semiconductor supply chains.",IND_ICONS.dashboard,"Technology","Secondary Sector"],
  ["Cloud Infrastructure & Data Centers","Hosting, compute infrastructure and data center operations.",IND_ICONS.cloudServer,"Technology","Quaternary Sector"],
].map(([name,desc,icon,sector,classification], i)=>{
  const seed = 12 + i;
  const companies = 18 + (seed*17)%160;
  const insights = 14 + (seed*11)%120;
  return { name, desc, icon, sector, classification, companies, insights };
});

const industries = [...FEATURED_INDUSTRIES, ...MORE_INDUSTRIES];

// ===== DATA: TRENDING =====
const trending = [
  { name:"Artificial Intelligence Software", change:"142%", icon:IND_ICONS.brainCircuit, fg:"var(--blue)", bg:"var(--blue-light)", pts:[3,5,4,7,9,14,22] },
  { name:"Renewable Energy", change:"88%", icon:IND_ICONS.sunTwo, fg:"var(--green)", bg:"var(--green-light)", pts:[5,6,6,8,9,11,14] },
  { name:"Fintech & Digital Payments", change:"71%", icon:IND_ICONS.bankCard, fg:"var(--teal)", bg:"var(--teal-light)", pts:[6,7,7,8,10,10,13] },
  { name:"Digital Health & Telemedicine", change:"64%", icon:IND_ICONS.heartPulse, fg:"var(--navy-2)", bg:"var(--bg-soft)", pts:[6,6,7,8,8,10,12] },
  { name:"Cybersecurity", change:"57%", icon:IND_ICONS.shieldLock, fg:"var(--purple)", bg:"var(--purple-light)", pts:[7,8,7,9,10,10,12] },
  { name:"Semiconductors & Chip Manufacturing", change:"49%", icon:IND_ICONS.dashboard, fg:"var(--orange)", bg:"var(--orange-light)", pts:[6,7,6,8,9,9,11] },
];

// ===== DATA: TOP COMPANIES BY INDUSTRY (keyed by sector) =====
const companiesBySectorTab = {
  "Technology":[
    {name:"Microsoft",domain:"microsoft.com",loc:"Redmond, USA"},
    {name:"Apple",domain:"apple.com",loc:"Cupertino, USA"},
    {name:"Google",domain:"google.com",loc:"Mountain View, USA"},
    {name:"Amazon",domain:"amazon.com",loc:"Seattle, USA"},
    {name:"Meta",domain:"meta.com",loc:"Menlo Park, USA"},
    {name:"NVIDIA",domain:"nvidia.com",loc:"Santa Clara, USA"},
    {name:"OpenAI",domain:"openai.com",loc:"San Francisco, USA",url:"../companies/openai/index.html"},
    {name:"IBM",domain:"ibm.com",loc:"Armonk, USA"},
    {name:"Oracle",domain:"oracle.com",loc:"Austin, USA"},
    {name:"SAP",domain:"sap.com",loc:"Walldorf, Germany"},
    {name:"Adobe",domain:"adobe.com",loc:"San Jose, USA"},
    {name:"Salesforce",domain:"salesforce.com",loc:"San Francisco, USA"},
    {name:"Intel",domain:"intel.com",loc:"Santa Clara, USA"},
    {name:"Samsung Electronics",domain:"samsung.com",loc:"Suwon, South Korea"},
    {name:"Cisco",domain:"cisco.com",loc:"San Jose, USA"},
  ],
  "Finance":[
    {name:"JPMorgan Chase",domain:"jpmorganchase.com",loc:"New York, USA"},
    {name:"Bank of America",domain:"bankofamerica.com",loc:"Charlotte, USA"},
    {name:"Goldman Sachs",domain:"goldmansachs.com",loc:"New York, USA"},
    {name:"Morgan Stanley",domain:"morganstanley.com",loc:"New York, USA"},
    {name:"Citigroup",domain:"citigroup.com",loc:"New York, USA"},
    {name:"Wells Fargo",domain:"wellsfargo.com",loc:"San Francisco, USA"},
    {name:"HSBC",domain:"hsbc.com",loc:"London, UK"},
    {name:"Visa",domain:"visa.com",loc:"Foster City, USA"},
    {name:"Mastercard",domain:"mastercard.com",loc:"Purchase, USA"},
    {name:"PayPal",domain:"paypal.com",loc:"San Jose, USA"},
    {name:"Stripe",domain:"stripe.com",loc:"South San Francisco, USA"},
    {name:"American Express",domain:"americanexpress.com",loc:"New York, USA"},
    {name:"BlackRock",domain:"blackrock.com",loc:"New York, USA"},
    {name:"Barclays",domain:"barclays.com",loc:"London, UK"},
    {name:"UBS",domain:"ubs.com",loc:"Zurich, Switzerland"},
  ],
  "Healthcare":[
    {name:"UnitedHealth Group",domain:"unitedhealthgroup.com",loc:"Minnetonka, USA"},
    {name:"Pfizer",domain:"pfizer.com",loc:"New York, USA"},
    {name:"Johnson & Johnson",domain:"jnj.com",loc:"New Brunswick, USA"},
    {name:"Roche",domain:"roche.com",loc:"Basel, Switzerland"},
    {name:"Novartis",domain:"novartis.com",loc:"Basel, Switzerland"},
    {name:"Moderna",domain:"modernatx.com",loc:"Cambridge, USA"},
    {name:"AstraZeneca",domain:"astrazeneca.com",loc:"Cambridge, UK"},
    {name:"Merck",domain:"merck.com",loc:"Rahway, USA"},
    {name:"Eli Lilly",domain:"lilly.com",loc:"Indianapolis, USA"},
    {name:"CVS Health",domain:"cvshealth.com",loc:"Woonsocket, USA"},
    {name:"Cigna",domain:"cigna.com",loc:"Bloomfield, USA"},
    {name:"Medtronic",domain:"medtronic.com",loc:"Dublin, Ireland"},
    {name:"Abbott",domain:"abbott.com",loc:"Abbott Park, USA"},
    {name:"Bayer",domain:"bayer.com",loc:"Leverkusen, Germany"},
    {name:"GSK",domain:"gsk.com",loc:"London, UK"},
  ],
  "Commerce":[
    {name:"Amazon",domain:"amazon.com",loc:"Seattle, USA"},
    {name:"Walmart",domain:"walmart.com",loc:"Bentonville, USA"},
    {name:"Alibaba",domain:"alibaba.com",loc:"Hangzhou, China"},
    {name:"eBay",domain:"ebay.com",loc:"San Jose, USA"},
    {name:"Shopify",domain:"shopify.com",loc:"Ottawa, Canada"},
    {name:"Target",domain:"target.com",loc:"Minneapolis, USA"},
    {name:"Costco",domain:"costco.com",loc:"Issaquah, USA"},
    {name:"JD.com",domain:"jd.com",loc:"Beijing, China"},
    {name:"MercadoLibre",domain:"mercadolibre.com",loc:"Buenos Aires, Argentina"},
    {name:"Etsy",domain:"etsy.com",loc:"Brooklyn, USA"},
    {name:"Zalando",domain:"zalando.com",loc:"Berlin, Germany"},
    {name:"Rakuten",domain:"rakuten.com",loc:"Tokyo, Japan"},
    {name:"Best Buy",domain:"bestbuy.com",loc:"Richfield, USA"},
    {name:"Wayfair",domain:"wayfair.com",loc:"Boston, USA"},
    {name:"Flipkart",domain:"flipkart.com",loc:"Bengaluru, India"},
  ],
  "Sustainability":[
    {name:"Saudi Aramco",domain:"aramco.com",loc:"Dhahran, Saudi Arabia"},
    {name:"ExxonMobil",domain:"exxonmobil.com",loc:"Spring, USA"},
    {name:"Chevron",domain:"chevron.com",loc:"San Ramon, USA"},
    {name:"Shell",domain:"shell.com",loc:"London, UK"},
    {name:"BP",domain:"bp.com",loc:"London, UK"},
    {name:"TotalEnergies",domain:"totalenergies.com",loc:"Courbevoie, France"},
    {name:"NextEra Energy",domain:"nexteraenergy.com",loc:"Juno Beach, USA"},
    {name:"Duke Energy",domain:"duke-energy.com",loc:"Charlotte, USA"},
    {name:"Ørsted",domain:"orsted.com",loc:"Fredericia, Denmark"},
    {name:"Vestas",domain:"vestas.com",loc:"Aarhus, Denmark"},
    {name:"First Solar",domain:"firstsolar.com",loc:"Tempe, USA"},
    {name:"Enphase Energy",domain:"enphase.com",loc:"Fremont, USA"},
    {name:"EDF",domain:"edf.fr",loc:"Paris, France"},
    {name:"Iberdrola",domain:"iberdrola.com",loc:"Bilbao, Spain"},
    {name:"Enel",domain:"enel.com",loc:"Rome, Italy"},
  ],
  "Society":[
    {name:"Coursera",domain:"coursera.org",loc:"Mountain View, USA"},
    {name:"Udemy",domain:"udemy.com",loc:"San Francisco, USA"},
    {name:"Duolingo",domain:"duolingo.com",loc:"Pittsburgh, USA"},
    {name:"Khan Academy",domain:"khanacademy.org",loc:"Mountain View, USA"},
    {name:"Chegg",domain:"chegg.com",loc:"Santa Clara, USA"},
    {name:"Pearson",domain:"pearson.com",loc:"London, UK"},
    {name:"BYJU'S",domain:"byjus.com",loc:"Bengaluru, India"},
    {name:"Skillshare",domain:"skillshare.com",loc:"New York, USA"},
    {name:"Udacity",domain:"udacity.com",loc:"Mountain View, USA"},
    {name:"edX",domain:"edx.org",loc:"Cambridge, USA"},
    {name:"Blackboard",domain:"blackboard.com",loc:"Reston, USA"},
    {name:"Pluralsight",domain:"pluralsight.com",loc:"Draper, USA"},
    {name:"MasterClass",domain:"masterclass.com",loc:"San Francisco, USA"},
    {name:"Quizlet",domain:"quizlet.com",loc:"San Francisco, USA"},
    {name:"2U",domain:"2u.com",loc:"Lanham, USA"},
  ],
  "Industry":[
    {name:"Siemens",domain:"siemens.com",loc:"Munich, Germany"},
    {name:"General Electric",domain:"ge.com",loc:"Boston, USA"},
    {name:"Honeywell",domain:"honeywell.com",loc:"Charlotte, USA"},
    {name:"3M",domain:"3m.com",loc:"Saint Paul, USA"},
    {name:"Caterpillar",domain:"caterpillar.com",loc:"Irving, USA"},
    {name:"Boeing",domain:"boeing.com",loc:"Arlington, USA"},
    {name:"Airbus",domain:"airbus.com",loc:"Toulouse, France"},
    {name:"Toyota",domain:"toyota.com",loc:"Toyota City, Japan"},
    {name:"Ford Motor Company",domain:"ford.com",loc:"Dearborn, USA"},
    {name:"Volkswagen Group",domain:"volkswagen.com",loc:"Wolfsburg, Germany"},
    {name:"Foxconn",domain:"foxconn.com",loc:"New Taipei, Taiwan"},
    {name:"Panasonic",domain:"panasonic.com",loc:"Osaka, Japan"},
    {name:"Bosch",domain:"bosch.com",loc:"Gerlingen, Germany"},
    {name:"Schneider Electric",domain:"se.com",loc:"Rueil-Malmaison, France"},
    {name:"ABB",domain:"abb.com",loc:"Zurich, Switzerland"},
  ],
};

const SECTOR_TAB_ICONS = {
  "Technology": ICONS.cpu,
  "Finance": ICONS.bank,
  "Healthcare": ICONS.heart,
  "Commerce": ICONS.cart,
  "Sustainability": ICONS.leaf,
  "Society": ICONS.graduationCap,
  "Industry": ICONS.gear,
};

// ===== DATA: KEY HIGHLIGHTS =====
const highlights = [
  { num:"28,500+", label:"Total Companies", sub:"Global", icon:ICONS.briefcase },
  { num:"4,200+", label:"New Reports (2024)", sub:"+21% vs 2023", icon:ICONS.trendUp, trend:true },
  { num:"9.8%", label:"Avg. Sector Growth", sub:"Last 12 Months", icon:ICONS.clock },
  { num:"AI Software", label:"Fastest Growing Industry", sub:"+31% growth", icon:ICONS.target, trend:true },
];

// ===== DATA: INSIGHTS =====
const insights = [
  { badge:"Report", title:"AI Software Industry Outlook 2024", desc:"Market size, key players and growth projections for AI software.", date:"May 12, 2024", img:"https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?auto=format&fit=crop&w=800&q=70" },
  { badge:"Insight", title:"Fintech's Next Wave", desc:"How digital payments are reshaping financial services worldwide.", date:"May 9, 2024", img:"https://images.unsplash.com/photo-1556742521-9713bf272865?auto=format&fit=crop&w=800&q=70" },
  { badge:"Analysis", title:"The State of Healthcare Tech", desc:"Digital health adoption, telemedicine and what's next for care delivery.", date:"May 8, 2024", img:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=70" },
  { badge:"Report", title:"Renewable Energy Industry Report", desc:"Market size, key players, and future projections for renewable energy.", date:"May 5, 2024", img:"https://images.unsplash.com/photo-1638068109209-002be3ae4950?auto=format&fit=crop&w=800&q=70" },
];

// ===== DATA: COUNTRIES =====
const countries = [
  { name:"United States", count:"38+", code:"us", url:"../countries/united-states/index.html" },
  { name:"United Kingdom", count:"22+", code:"gb" },
  { name:"Canada", count:"19+", code:"ca" },
  { name:"Germany", count:"21+", code:"de" },
  { name:"Singapore", count:"16+", code:"sg" },
];

// ===== DATA: FAQ =====
const faqs = [
  { q:"What are industries on BizMend?", a:"Industries on BizMend are the economic sectors — like AI software, banking or healthcare — that group companies, founders, and insights around a shared line of business." },
  { q:"How is an industry different from a topic?", a:"An industry is a sector of the economy a company operates in, like Fintech or Manufacturing. A topic is a trend or theme, like Digital Banking, that can span multiple industries." },
  { q:"How often is industry information updated?", a:"Industry pages are refreshed regularly as new companies, reports, and market data become available, with recent changes reflected across the site." },
  { q:"How is industry data collected and verified?", a:"Our research team aggregates data from public filings, company sites, and trusted news sources, then cross-checks it before publishing." },
  { q:"What kind of insights are available for each industry?", a:"Each industry includes trending metrics, top companies, related reports, and curated analysis from domain experts." },
  { q:"Can I suggest a new industry to be added?", a:"Yes. Use the \"Suggest an Industry\" button on this page to propose a new industry for our team to review." },
];

// ===== SNAPSHOT =====
function renderSnapshot(){
  document.getElementById("snapshotGrid").innerHTML = snapshotStats.map(s=>`
    <div class="snap-item">
      <div class="snap-icon">${s.icon}</div>
      <div>
        <div class="snap-num">${s.num}</div>
        <div class="snap-label">${s.label}</div>
        <div class="snap-sub">${s.sub}</div>
      </div>
    </div>
  `).join("");
}

// ===== INDUSTRY EXPLORER =====
const PAGE_SIZE = 12;
let currentPage = 1;
const industryGrid = document.getElementById("industryGrid");
const pagination = document.getElementById("pagination");
const filterSearch = document.getElementById("filterSearch");
const heroSearch = document.getElementById("heroSearch");
const filterClassification = document.getElementById("filterClassification");
const filterSector = document.getElementById("filterSector");
const sortBy = document.getElementById("sortBy");

function populateSelect(select, values, placeholder){
  select.innerHTML = `<option value="">${placeholder}</option>` +
    values.map(v => `<option value="${v}">${v}</option>`).join("");
}

function initFilters(){
  populateSelect(filterClassification, CLASSIFICATIONS, "By Classification");
  populateSelect(filterSector, SECTORS, "By Sector");
}

function getFilteredIndustries(){
  const q = (filterSearch.value || heroSearch.value || "").toLowerCase().trim();
  let list = industries.filter(t=>{
    if (q && !(t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q) || t.sector.toLowerCase().includes(q))) return false;
    if (filterClassification.value && t.classification !== filterClassification.value) return false;
    if (filterSector.value && t.sector !== filterSector.value) return false;
    return true;
  });
  if (sortBy.value === "az") list = [...list].sort((a,b)=>a.name.localeCompare(b.name));
  else if (sortBy.value === "za") list = [...list].sort((a,b)=>b.name.localeCompare(a.name));
  else if (sortBy.value === "companies") list = [...list].sort((a,b)=>b.companies-a.companies);
  return list;
}

function industryCard(t){
  return `
    <div class="industry-card">
      <div class="ind-card-icon">${t.icon}</div>
      <h3>${t.name}</h3>
      <p class="ind-card-desc">${t.desc}</p>
      <div class="ind-card-stats">
        <div><b>${t.companies}</b> Companies</div>
        <div><b>${t.insights}</b> Reports</div>
      </div>
      <a href="${t.url || '#'}" class="ind-explore-link">Explore Industry ${ICONS.arrow}</a>
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
    btn.addEventListener("click", ()=>{ currentPage = parseInt(btn.dataset.page,10); renderIndustries(); document.getElementById("explorer").scrollIntoView({behavior:"smooth"}); });
  });
  const prev = document.getElementById("prevPage");
  const next = document.getElementById("nextPage");
  if (prev) prev.addEventListener("click", ()=>{ if(currentPage>1){currentPage--; renderIndustries(); document.getElementById("explorer").scrollIntoView({behavior:"smooth"});} });
  if (next) next.addEventListener("click", ()=>{ if(currentPage<totalPages){currentPage++; renderIndustries(); document.getElementById("explorer").scrollIntoView({behavior:"smooth"});} });
}

function renderIndustries(){
  const list = getFilteredIndustries();
  const start = (currentPage-1)*PAGE_SIZE;
  const pageItems = list.slice(start, start+PAGE_SIZE);

  industryGrid.innerHTML = pageItems.length
    ? pageItems.map(industryCard).join("")
    : `<div style="grid-column:1/-1;text-align:center;color:#94a3b8;padding:40px 0;">No industries match your filters.</div>`;

  renderPagination(list.length);
}

// ===== TRENDING =====
function sparkline(pts, color){
  const w=64,h=26,max=Math.max(...pts),min=Math.min(...pts);
  const step = w/(pts.length-1);
  const norm = v => h - 3 - ((v-min)/((max-min)||1))*(h-6);
  const d = pts.map((p,i)=>`${i===0?"M":"L"}${(i*step).toFixed(1)},${norm(p).toFixed(1)}`).join(" ");
  return `<svg class="trend-spark" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
    <path d="${d}" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}

function renderTrending(){
  document.getElementById("trendingList").innerHTML = trending.map(t=>`
    <div class="trend-row">
      <div class="trend-icon" style="background:${t.bg};color:${t.fg};">${t.icon}</div>
      <div class="trend-name">${t.name}</div>
      <div class="trend-change">${ICONS.trendUp} ${t.change}</div>
      ${sparkline(t.pts, t.fg.startsWith("var")? "#0f9488": t.fg)}
    </div>
  `).join("");
}

// ===== TOP COMPANIES BY INDUSTRY =====
const COMPANY_PAGE_SIZE = 10;
let activeTab = "Technology";
let companyPage = 1;

function renderCompanyTabs(){
  const tabs = document.getElementById("companyTabs");
  tabs.innerHTML = Object.keys(companiesBySectorTab).map(name=>`
    <button class="company-tab ${name===activeTab?"active":""}" data-tab="${name}">${SECTOR_TAB_ICONS[name] || ""}${name}</button>
  `).join("");
  tabs.querySelectorAll(".company-tab").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      activeTab = btn.dataset.tab;
      companyPage = 1;
      renderCompanyTabs();
      renderCompanyGrid();
    });
  });
}

function renderCompanyPagination(totalItems){
  const el = document.getElementById("companyPagination");
  const totalPages = Math.max(1, Math.ceil(totalItems / COMPANY_PAGE_SIZE));
  if (companyPage > totalPages) companyPage = totalPages;

  let html = `<button class="page-btn" id="companyPrevPage" ${companyPage===1?"disabled":""}>
    <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
  </button>`;

  const pages = [];
  for (let i=1;i<=totalPages;i++){
    if (i===1 || i===totalPages || Math.abs(i-companyPage)<=1) pages.push(i);
    else if (pages[pages.length-1] !== "...") pages.push("...");
  }
  pages.forEach(p=>{
    if (p==="...") html += `<span class="page-btn dots">...</span>`;
    else html += `<button class="page-btn ${p===companyPage?"active":""}" data-page="${p}">${p}</button>`;
  });

  html += `<button class="page-btn" id="companyNextPage" ${companyPage===totalPages?"disabled":""}>
    <svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
  </button>`;

  el.innerHTML = html;
  el.querySelectorAll("[data-page]").forEach(btn=>{
    btn.addEventListener("click", ()=>{ companyPage = parseInt(btn.dataset.page,10); renderCompanyGrid(); });
  });
  const prev = document.getElementById("companyPrevPage");
  const next = document.getElementById("companyNextPage");
  if (prev) prev.addEventListener("click", ()=>{ if(companyPage>1){companyPage--; renderCompanyGrid();} });
  if (next) next.addEventListener("click", ()=>{ if(companyPage<totalPages){companyPage++; renderCompanyGrid();} });
}

function renderCompanyGrid(){
  const grid = document.getElementById("companyGrid");
  const list = companiesBySectorTab[activeTab] || [];
  const start = (companyPage-1)*COMPANY_PAGE_SIZE;
  const pageItems = list.slice(start, start+COMPANY_PAGE_SIZE);

  grid.innerHTML = pageItems.map((c,i)=>`
    <div class="company-card">
      <div class="company-logo">
        <img src="${companyIcon(c.domain)}" alt="${c.name}" onload="this.style.display='block';this.nextElementSibling.style.display='none';" onerror="this.style.display='none';">
        <span class="logo-fallback" style="color:${AVATAR_COLORS[i%AVATAR_COLORS.length]};">${initialsOf(c.name)}</span>
      </div>
      <h4>${c.name}</h4>
      <div class="company-loc">${c.loc}</div>
      <a href="${c.url || '#'}" class="company-view">View Profile ${ICONS.arrow}</a>
    </div>
  `).join("");

  renderCompanyPagination(list.length);
}

function initIndustrySearchFilter(){
  const datalist = document.getElementById("allIndustriesList");
  datalist.innerHTML = industries.map(t=>`<option value="${t.name}">`).join("");

  const input = document.getElementById("companyIndustrySearch");
  input.addEventListener("input", ()=>{
    const match = industries.find(t=>t.name.toLowerCase() === input.value.trim().toLowerCase());
    if (!match) return;
    const tab = match.sector;
    if (!companiesBySectorTab[tab]) return;
    activeTab = tab;
    companyPage = 1;
    renderCompanyTabs();
    renderCompanyGrid();
  });
}

// ===== HIGHLIGHTS =====
function renderHighlights(){
  document.getElementById("highlightsGrid").innerHTML = highlights.map(h=>`
    <div class="highlight-tile">
      <div class="hl-icon">${h.icon}</div>
      <div class="hl-num">${h.num}</div>
      <div class="hl-label">${h.label}</div>
      <div class="hl-sub" style="${h.trend?"":"color:var(--muted);font-weight:600;"}">${h.trend?ICONS.trendUp:""} ${h.sub}</div>
    </div>
  `).join("");
}

// ===== INSIGHTS =====
function renderInsights(){
  document.getElementById("insightsGrid").innerHTML = insights.map(a=>`
    <div class="insight-card">
      <div class="insight-thumb">
        <img src="${a.img}" alt="${a.title}" loading="lazy">
        <span class="insight-badge">${a.badge}</span>
      </div>
      <div class="insight-body">
        <h4>${a.title}</h4>
        <p>${a.desc}</p>
        <div class="insight-date">${a.date}</div>
      </div>
    </div>
  `).join("");
}

// ===== COUNTRY CHIPS =====
function renderCountryChips(){
  const cards = countries.map(ct=>`
    <a href="${ct.url || '#'}" class="chip">
      <span class="chip-flag">
        <img src="https://flagcdn.com/w80/${ct.code}.png" alt="${ct.name} flag" loading="lazy"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
        <span class="flag-fallback">${ct.code.toUpperCase()}</span>
      </span>
      <span class="chip-text"><strong>${ct.name}</strong><span>${ct.count} Industries</span></span>
    </a>
  `).join("");
  const viewAll = `
    <a href="../countries/index.html" class="chip chip-viewall">
      <span class="chip-icon chip-icon-viewall">${ICONS.arrow}</span>
      <span class="chip-text"><strong>View All</strong></span>
    </a>`;
  document.getElementById("countryChips").innerHTML = cards + viewAll;
}

// ===== FAQ =====
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

// ===== EVENTS =====
[filterSearch, filterClassification, filterSector, sortBy].forEach(el=>{
  el.addEventListener("input", ()=>{ currentPage=1; renderIndustries(); });
  el.addEventListener("change", ()=>{ currentPage=1; renderIndustries(); });
});

document.getElementById("heroSearchBtn").addEventListener("click", ()=>{
  filterSearch.value = heroSearch.value;
  currentPage = 1;
  renderIndustries();
  document.getElementById("explorer").scrollIntoView({behavior:"smooth"});
});
heroSearch.addEventListener("keydown", (e)=>{
  if (e.key === "Enter"){
    filterSearch.value = heroSearch.value;
    currentPage = 1;
    renderIndustries();
    document.getElementById("explorer").scrollIntoView({behavior:"smooth"});
  }
});

document.getElementById("clearAll").addEventListener("click", ()=>{
  filterSearch.value = "";
  heroSearch.value = "";
  filterClassification.value = "";
  filterSector.value = "";
  sortBy.value = "relevant";
  currentPage = 1;
  renderIndustries();
});

// ===== INIT =====
renderSnapshot();
initFilters();
renderIndustries();
renderTrending();
renderCompanyTabs();
renderCompanyGrid();
initIndustrySearchFilter();
renderHighlights();
renderInsights();
renderCountryChips();
renderFaq();

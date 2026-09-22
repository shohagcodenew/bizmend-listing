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

// ===== TWO-TONE TOPIC ICONS (navy #1b2a4a + teal #0f9488) — same visual system as the Industries page =====
const NAVY = "#1b2a4a", TEAL = "#0f9488";
const TOPIC_ICONS = {
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
  blockchain: `<svg viewBox="0 0 24 24">
    <rect x="2" y="9" width="6" height="6" rx="1.2" stroke="${NAVY}"/>
    <rect x="16" y="9" width="6" height="6" rx="1.2" stroke="${NAVY}"/>
    <rect x="9" y="3" width="6" height="6" rx="1.2" stroke="${TEAL}"/>
    <rect x="9" y="15" width="6" height="6" rx="1.2" stroke="${TEAL}"/>
    <path d="M8 10.5L9.5 8M16 10.5L14.5 8M8 13.5L9.5 16M16 13.5L14.5 16" stroke="${NAVY}"/>
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
  devicesCluster: `<svg viewBox="0 0 24 24">
    <rect x="9" y="3" width="6" height="11" rx="1.6" stroke="${NAVY}"/>
    <circle cx="4.5" cy="8" r="2.3" stroke="${TEAL}"/><circle cx="19.5" cy="8" r="2.3" stroke="${TEAL}"/>
    <rect x="9" y="16" width="6" height="5" rx="1.3" stroke="${TEAL}"/>
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
  atomTwo: `<svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="1.4" fill="${TEAL}"/>
    <ellipse cx="12" cy="12" rx="9.5" ry="4" stroke="${NAVY}"/>
    <ellipse cx="12" cy="12" rx="9.5" ry="4" stroke="${NAVY}" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="9.5" ry="4" stroke="${NAVY}" transform="rotate(120 12 12)"/>
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
};

// ===== HERO =====
// (uses the same photo-hero pattern as the Industries page — assets/222.png)

// ===== DATA: SNAPSHOT =====
const snapshotStats = [
  { num:"126", label:"Total Topics", sub:"Across all domains", icon:ICONS.building },
  { num:"843", label:"Exclusive Insights", sub:"From topic experts", icon:ICONS.file },
  { num:"21", label:"Trending Now", sub:"Hot & rising", icon:ICONS.trendUp },
  { num:"168", label:"Expert Topics", sub:"Curated by pros", icon:ICONS.users },
  { num:"12", label:"Category Coverage", sub:"Global reach", icon:ICONS.globe },
];

// ===== DATA: TOPICS =====
const DOMAINS = ["Technology","Finance","Healthcare","Commerce","Sustainability","Society","Industry"];
const TOPIC_TYPES = ["Emerging Tech","Market Trend","Business Model","Industry Sector","Consumer Trend"];

// First 12 are the featured topics shown on page one of the explorer.
const FEATURED_TOPICS = [
  { name:"Artificial Intelligence", desc:"Machine learning, deep learning & neural networks", companies:77, insights:85, icon:TOPIC_ICONS.brainCircuit, domain:"Technology", type:"Emerging Tech", industry:"Technology" },
  { name:"Fintech", desc:"Financial technology, digital payments & blockchain", companies:116, insights:87, icon:TOPIC_ICONS.bankCard, domain:"Finance", type:"Industry Sector", industry:"Finance" },
  { name:"Digital Banking", desc:"Online banking, mobile-first accounts & connected financial tools", companies:20, insights:4, icon:TOPIC_ICONS.bankCard, domain:"Finance", type:"Industry Sector", industry:"Finance", url:"digital-banking/index.html" },
  { name:"E-commerce", desc:"Online retail, marketplaces & digital commerce trends", companies:92, insights:58, icon:TOPIC_ICONS.cartTwo, domain:"Commerce", type:"Market Trend", industry:"Retail & E-commerce" },
  { name:"Healthcare Technology", desc:"Healthtech, telemedicine & digital therapeutics", companies:68, insights:51, icon:TOPIC_ICONS.heartPulse, domain:"Healthcare", type:"Industry Sector", industry:"Healthcare" },
  { name:"SaaS", desc:"Software as a service and enterprise solutions", companies:36, insights:35, icon:TOPIC_ICONS.cloudServer, domain:"Technology", type:"Business Model", industry:"Technology" },
  { name:"Blockchain", desc:"Distributed ledger, crypto & smart contracts", companies:44, insights:42, icon:TOPIC_ICONS.blockchain, domain:"Technology", type:"Emerging Tech", industry:"Technology" },
  { name:"Cybersecurity", desc:"Network security, data protection & cyber threats", companies:73, insights:59, icon:TOPIC_ICONS.shieldLock, domain:"Technology", type:"Industry Sector", industry:"Technology" },
  { name:"Data Analytics", desc:"Big data, BI, analytics and data visualization", companies:49, insights:41, icon:TOPIC_ICONS.dashboard, domain:"Technology", type:"Emerging Tech", industry:"Technology" },
  { name:"Cloud Computing", desc:"Cloud infrastructure, DevOps & cloud services", companies:65, insights:48, icon:TOPIC_ICONS.cloudServer, domain:"Technology", type:"Industry Sector", industry:"Technology" },
  { name:"Internet of Things", desc:"IoT devices, connectivity & smart applications", companies:57, insights:45, icon:TOPIC_ICONS.devicesCluster, domain:"Technology", type:"Emerging Tech", industry:"Telecommunications" },
  { name:"EdTech", desc:"Education technology, e-learning & LMS", companies:39, insights:31, icon:TOPIC_ICONS.graduationCap, domain:"Society", type:"Industry Sector", industry:"Education" },
  { name:"Sustainability", desc:"Green tech, clean energy & ESG solutions", companies:44, insights:39, icon:TOPIC_ICONS.leafTwo, domain:"Sustainability", type:"Consumer Trend", industry:"Energy" },
];

// Additional topics fill the explorer out to 6 pages (12 per page = 72 total).
const MORE_TOPICS = [
  ["Robotics & Automation","Industrial robots, automation & smart machinery",TOPIC_ICONS.rocketTwo,"Technology","Emerging Tech","Manufacturing"],
  ["Augmented & Virtual Reality","AR/VR headsets, immersive experiences & spatial computing",TOPIC_ICONS.devicesCluster,"Technology","Emerging Tech","Technology"],
  ["5G & Next-Gen Networks","High-speed wireless networks & connectivity infrastructure",TOPIC_ICONS.signalTwo,"Technology","Industry Sector","Telecommunications"],
  ["Digital Marketing","SEO, social ads & performance marketing trends",TOPIC_ICONS.dashboard,"Commerce","Market Trend","Retail & E-commerce"],
  ["Supply Chain Technology","Logistics software, tracking & supply chain visibility",TOPIC_ICONS.truckTwo,"Industry","Business Model","Logistics & Transportation"],
  ["Renewable Energy","Solar, wind & clean power generation",TOPIC_ICONS.sunTwo,"Sustainability","Industry Sector","Energy"],
  ["Biotechnology","Genetic engineering, biologics & life sciences research",TOPIC_ICONS.heartPulse,"Healthcare","Emerging Tech","Healthcare"],
  ["Space Technology","Satellites, launch systems & commercial space travel",TOPIC_ICONS.rocketTwo,"Technology","Emerging Tech","Technology"],
  ["Gaming & Esports","Video games, esports leagues & game platforms",TOPIC_ICONS.devicesCluster,"Commerce","Consumer Trend","Technology"],
  ["Social Media Platforms","Social networks, content sharing & creator tools",TOPIC_ICONS.signalTwo,"Society","Consumer Trend","Technology"],
  ["Streaming & Media","Video streaming, OTT platforms & digital media",TOPIC_ICONS.devicesCluster,"Commerce","Consumer Trend","Telecommunications"],
  ["Autonomous Vehicles","Self-driving cars, sensors & mobility software",TOPIC_ICONS.truckTwo,"Technology","Emerging Tech","Manufacturing"],
  ["Quantum Computing","Quantum processors, algorithms & research applications",TOPIC_ICONS.atomTwo,"Technology","Emerging Tech","Technology"],
  ["Genomics & Precision Medicine","DNA sequencing, gene therapy & personalized care",TOPIC_ICONS.heartPulse,"Healthcare","Emerging Tech","Healthcare"],
  ["3D Printing","Additive manufacturing, prototyping & industrial printing",TOPIC_ICONS.packageTwo,"Industry","Emerging Tech","Manufacturing"],
  ["Wearable Technology","Smartwatches, fitness trackers & connected devices",TOPIC_ICONS.devicesCluster,"Technology","Consumer Trend","Technology"],
  ["Smart Cities","Urban IoT, traffic systems & city infrastructure",TOPIC_ICONS.buildingTwo,"Society","Industry Sector","Construction"],
  ["Digital Payments","Mobile wallets, contactless pay & payment rails",TOPIC_ICONS.bankCard,"Finance","Business Model","Finance"],
  ["InsurTech","Digital insurance, claims automation & underwriting tech",TOPIC_ICONS.shieldLock,"Finance","Industry Sector","Finance"],
  ["PropTech","Real estate platforms, property management & listings tech",TOPIC_ICONS.buildingTwo,"Industry","Industry Sector","Construction"],
  ["AgTech","Precision agriculture, farm sensors & crop technology",TOPIC_ICONS.leafTwo,"Sustainability","Emerging Tech","Agriculture"],
  ["CleanTech","Environmental technology, emissions reduction & clean systems",TOPIC_ICONS.leafTwo,"Sustainability","Emerging Tech","Energy"],
  ["FoodTech","Food delivery, alt-protein & culinary innovation",TOPIC_ICONS.cartTwo,"Commerce","Consumer Trend","Retail & E-commerce"],
  ["HR Technology","Recruiting platforms, payroll & workforce management tools",TOPIC_ICONS.devicesCluster,"Technology","Business Model","Technology"],
  ["LegalTech","Contract automation, e-discovery & legal software",TOPIC_ICONS.shieldLock,"Technology","Industry Sector","Technology"],
  ["Web3","Decentralized apps, tokens & blockchain infrastructure",TOPIC_ICONS.blockchain,"Technology","Emerging Tech","Technology"],
  ["Metaverse","Virtual worlds, digital avatars & immersive platforms",TOPIC_ICONS.devicesCluster,"Technology","Emerging Tech","Technology"],
  ["Voice Technology","Voice assistants, speech recognition & audio interfaces",TOPIC_ICONS.signalTwo,"Technology","Emerging Tech","Technology"],
  ["Robotic Process Automation","Workflow bots, RPA tools & process automation",TOPIC_ICONS.gearTwo,"Technology","Business Model","Manufacturing"],
  ["Digital Identity","Identity verification, authentication & digital credentials",TOPIC_ICONS.shieldLock,"Technology","Industry Sector","Technology"],
  ["Green Building","Sustainable construction, LEED design & eco materials",TOPIC_ICONS.buildingTwo,"Sustainability","Industry Sector","Construction"],
  ["Carbon Capture","CO2 capture, storage & emissions offset technology",TOPIC_ICONS.cloudServer,"Sustainability","Emerging Tech","Energy"],
  ["Micromobility","E-scooters, e-bikes & urban shared mobility",TOPIC_ICONS.truckTwo,"Commerce","Consumer Trend","Logistics & Transportation"],
  ["Telehealth","Virtual care, remote consultations & digital clinics",TOPIC_ICONS.heartPulse,"Healthcare","Industry Sector","Healthcare"],
  ["Personalization & AI","AI-driven recommendations & personalized customer experiences",TOPIC_ICONS.brainCircuit,"Technology","Emerging Tech","Technology"],
  ["No-Code / Low-Code","Visual app builders & citizen developer platforms",TOPIC_ICONS.dashboard,"Technology","Business Model","Technology"],
  ["Cross-Border Payments","International remittance, FX & global money transfer",TOPIC_ICONS.bankCard,"Finance","Market Trend","Finance"],
  ["Circular Economy","Recycling, reuse & sustainable resource models",TOPIC_ICONS.leafTwo,"Sustainability","Business Model","Manufacturing"],
  ["Cloud Security","Cloud-native protection, IAM & workload security",TOPIC_ICONS.shieldLock,"Technology","Industry Sector","Technology"],
  ["DevOps & CI/CD","Deployment pipelines, automation & developer tooling",TOPIC_ICONS.gearTwo,"Technology","Business Model","Technology"],
  ["Data Privacy","Compliance, consent management & data protection tech",TOPIC_ICONS.shieldLock,"Technology","Industry Sector","Technology"],
  ["Digital Twins","Virtual simulations of physical assets & systems",TOPIC_ICONS.dashboard,"Industry","Emerging Tech","Manufacturing"],
  ["Synthetic Biology","Engineered organisms, bio-manufacturing & lab-grown materials",TOPIC_ICONS.heartPulse,"Healthcare","Emerging Tech","Healthcare"],
  ["Neurotechnology","Brain-computer interfaces & neural monitoring devices",TOPIC_ICONS.brainCircuit,"Healthcare","Emerging Tech","Healthcare"],
  ["Battery Technology","Energy storage, EV batteries & next-gen cells",TOPIC_ICONS.boltTwo,"Sustainability","Emerging Tech","Energy"],
  ["Hydrogen Energy","Green hydrogen production, fuel cells & storage",TOPIC_ICONS.sunTwo,"Sustainability","Emerging Tech","Energy"],
  ["Vertical Farming","Indoor agriculture, controlled-environment crop production",TOPIC_ICONS.leafTwo,"Sustainability","Emerging Tech","Agriculture"],
  ["Remote Work Tech","Collaboration tools, virtual offices & hybrid work",TOPIC_ICONS.dashboard,"Technology","Consumer Trend","Technology"],
  ["Creator Economy","Influencer platforms, monetization & content creation tools",TOPIC_ICONS.signalTwo,"Society","Consumer Trend","Technology"],
  ["Subscription Economy","Recurring billing, membership models & subscription platforms",TOPIC_ICONS.cartTwo,"Commerce","Business Model","Retail & E-commerce"],
  ["Open Banking","API banking, financial data sharing & fintech rails",TOPIC_ICONS.bankCard,"Finance","Industry Sector","Finance"],
  ["Embedded Finance","Banking-as-a-service & embedded payment experiences",TOPIC_ICONS.bankCard,"Finance","Business Model","Finance"],
  ["Climate Tech","Climate modeling, mitigation & adaptation technology",TOPIC_ICONS.leafTwo,"Sustainability","Emerging Tech","Energy"],
  ["Water Technology","Water treatment, desalination & smart water systems",TOPIC_ICONS.sunTwo,"Sustainability","Industry Sector","Construction"],
  ["Semiconductor Industry","Chip design, fabrication & semiconductor supply chains",TOPIC_ICONS.dashboard,"Technology","Industry Sector","Technology"],
  ["Wireless Charging","Inductive charging, power delivery & wireless energy",TOPIC_ICONS.boltTwo,"Technology","Emerging Tech","Technology"],
  ["Smart Manufacturing","Connected factories, industrial IoT & automation systems",TOPIC_ICONS.gearTwo,"Industry","Industry Sector","Manufacturing"],
  ["Drone Technology","Unmanned aerial vehicles, delivery & aerial imaging",TOPIC_ICONS.truckTwo,"Technology","Emerging Tech","Manufacturing"],
  ["Ocean & Marine Tech","Marine robotics, ocean monitoring & blue economy",TOPIC_ICONS.truckTwo,"Sustainability","Emerging Tech","Agriculture"],
  ["Longevity & Biohacking","Anti-aging science, biohacking & longevity research",TOPIC_ICONS.heartPulse,"Healthcare","Emerging Tech","Healthcare"],
].map(([name,desc,icon,domain,type,industry], i)=>{
  const seed = 12 + i;
  const companies = 20 + (seed*17)%180;
  const insights = 15 + (seed*11)%140;
  return { name, desc, icon, domain, type, industry, companies, insights };
});

const topics = [...FEATURED_TOPICS, ...MORE_TOPICS];

// ===== DATA: TRENDING (2-column list, same layout as the Industries page) =====
const trending = [
  { name:"Generative AI", change:"142%", icon:TOPIC_ICONS.brainCircuit, fg:"var(--blue)", bg:"var(--blue-light)", pts:[3,5,4,7,9,14,22] },
  { name:"Quantum Computing", change:"98%", icon:TOPIC_ICONS.atomTwo, fg:"var(--purple)", bg:"var(--purple-light)", pts:[4,5,5,6,8,11,16] },
  { name:"Green Technology", change:"76%", icon:TOPIC_ICONS.leafTwo, fg:"var(--green)", bg:"var(--green-light)", pts:[5,6,6,8,9,11,14] },
  { name:"Space Exploration", change:"63%", icon:TOPIC_ICONS.rocketTwo, fg:"var(--navy-2)", bg:"var(--bg-soft)", pts:[6,6,7,8,8,10,12] },
  { name:"Cybersecurity", change:"58%", icon:TOPIC_ICONS.shieldLock, fg:"var(--teal)", bg:"var(--teal-light)", pts:[7,8,7,9,10,10,12] },
  { name:"Web3", change:"52%", icon:TOPIC_ICONS.blockchain, fg:"var(--orange)", bg:"var(--orange-light)", pts:[6,7,6,8,9,9,11] },
];

// ===== DATA: TOP COMPANIES BY TOPIC =====
// Keyed by topic domain (matches topics[].domain and the "All Domains" filter)
// so every one of the 72 topics resolves to its domain's curated company list —
// same 1:1 pattern as companiesByTab/topics[0] on the Industries page.
const companiesByTopicTab = {
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

const TOPIC_TAB_ICONS = {
  "Technology": ICONS.cpu,
  "Finance": ICONS.bank,
  "Healthcare": ICONS.heart,
  "Commerce": ICONS.cart,
  "Sustainability": ICONS.leaf,
  "Society": ICONS.graduationCap,
  "Industry": ICONS.gear,
};

// ===== DATA: KEY HIGHLIGHTS (same 4-tile pattern as the Industries page) =====
const highlights = [
  { num:"28,500+", label:"Total Companies", sub:"Global", icon:ICONS.briefcase },
  { num:"5,800+", label:"New Insights (2024)", sub:"+18% vs 2023", icon:ICONS.trendUp, trend:true },
  { num:"10.4%", label:"Avg. Growth Rate", sub:"Last 12 Months", icon:ICONS.clock },
  { num:"AI Services", label:"Top Growing Topic", sub:"+24% growth", icon:ICONS.target, trend:true },
];

// ===== DATA: INSIGHTS =====
const insights = [
  { badge:"Report", title:"AI Industry Report 2024", desc:"Key trends, investment insights, and market outlook for AI.", date:"May 12, 2024", img:"https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?auto=format&fit=crop&w=800&q=70" },
  { badge:"Insight", title:"Fintech in Emerging Markets", desc:"How fintech is driving financial inclusion worldwide.", date:"May 9, 2024", img:"https://images.unsplash.com/photo-1556742521-9713bf272865?auto=format&fit=crop&w=800&q=70" },
  { badge:"Analysis", title:"The Future of SaaS", desc:"SaaS growth, challenges, and opportunities in 2024 and beyond.", date:"May 8, 2024", img:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=70" },
  { badge:"Report", title:"Renewable Energy Outlook", desc:"Market size, key players, and future projections for renewable energy.", date:"May 5, 2024", img:"https://images.unsplash.com/photo-1638068109209-002be3ae4950?auto=format&fit=crop&w=800&q=70" },
];

// ===== DATA: COUNTRIES =====
const countries = [
  { name:"United States", count:"376+", code:"us", url:"../countries/united-states/index.html" },
  { name:"United Kingdom", count:"142+", code:"gb" },
  { name:"Canada", count:"98+", code:"ca" },
  { name:"Germany", count:"88+", code:"de" },
  { name:"Singapore", count:"68+", code:"sg" },
];

// ===== DATA: FAQ =====
const faqs = [
  { q:"What are topics on BizMend?", a:"Topics on BizMend are curated subject areas — like AI, Fintech, or Sustainability — that group companies, founders, and insights around a shared theme or trend." },
  { q:"How often is topic information updated?", a:"Topic pages are refreshed regularly as new companies, insights, and trend data become available, with recent changes reflected across the site." },
  { q:"How is topic data collected and verified?", a:"Our research team aggregates data from public filings, company sites, and trusted news sources, then cross-checks it before publishing." },
  { q:"What kind of insights are available for each topic?", a:"Each topic includes trending metrics, top companies, related reports, and curated analysis from domain experts." },
  { q:"Can I suggest a new topic to be added?", a:"Yes. Use the \"Suggest a Topic\" button on this page to propose a new topic for our team to review." },
  { q:"How can I provide feedback or corrections?", a:"Use the \"Update a Topic\" button to flag outdated or incorrect information on any existing topic profile." },
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

// ===== TOPIC EXPLORER =====
const PAGE_SIZE = 12;
let currentPage = 1;
const topicGrid = document.getElementById("topicGrid");
const pagination = document.getElementById("pagination");
const filterSearch = document.getElementById("filterSearch");
const heroSearch = document.getElementById("heroSearch");
const filterType = document.getElementById("filterType");
const filterIndustry = document.getElementById("filterIndustry");
const sortBy = document.getElementById("sortBy");

function populateSelect(select, values, placeholder){
  select.innerHTML = `<option value="">${placeholder}</option>` +
    values.map(v => `<option value="${v}">${v}</option>`).join("");
}

function initFilters(){
  populateSelect(filterType, [...new Set(topics.map(t=>t.type))].sort(), "By Topics");
  populateSelect(filterIndustry, [...new Set(topics.map(t=>t.industry))].sort(), "By Industries");
}

function getFilteredTopics(){
  const q = (filterSearch.value || heroSearch.value || "").toLowerCase().trim();
  let list = topics.filter(t=>{
    if (q && !(t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q) || t.domain.toLowerCase().includes(q))) return false;
    if (filterType.value && t.type !== filterType.value) return false;
    if (filterIndustry.value && t.industry !== filterIndustry.value) return false;
    return true;
  });
  if (sortBy.value === "az") list = [...list].sort((a,b)=>a.name.localeCompare(b.name));
  else if (sortBy.value === "za") list = [...list].sort((a,b)=>b.name.localeCompare(a.name));
  else if (sortBy.value === "companies") list = [...list].sort((a,b)=>b.companies-a.companies);
  return list;
}

function topicCard(t){
  return `
    <div class="industry-card">
      <div class="ind-card-icon">${t.icon}</div>
      <h3>${t.name}</h3>
      <p class="ind-card-desc">${t.desc}</p>
      <div class="ind-card-stats">
        <div><b>${t.companies}</b> Companies</div>
        <div><b>${t.insights}</b> Insights</div>
      </div>
      <a href="${t.url || '#'}" class="ind-explore-link">Explore Topic ${ICONS.arrow}</a>
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
    btn.addEventListener("click", ()=>{ currentPage = parseInt(btn.dataset.page,10); renderTopics(); document.getElementById("explorer").scrollIntoView({behavior:"smooth"}); });
  });
  const prev = document.getElementById("prevPage");
  const next = document.getElementById("nextPage");
  if (prev) prev.addEventListener("click", ()=>{ if(currentPage>1){currentPage--; renderTopics(); document.getElementById("explorer").scrollIntoView({behavior:"smooth"});} });
  if (next) next.addEventListener("click", ()=>{ if(currentPage<totalPages){currentPage++; renderTopics(); document.getElementById("explorer").scrollIntoView({behavior:"smooth"});} });
}

function renderTopics(){
  const list = getFilteredTopics();
  const start = (currentPage-1)*PAGE_SIZE;
  const pageItems = list.slice(start, start+PAGE_SIZE);

  topicGrid.innerHTML = pageItems.length
    ? pageItems.map(topicCard).join("")
    : `<div style="grid-column:1/-1;text-align:center;color:#94a3b8;padding:40px 0;">No topics match your filters.</div>`;

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

// ===== TOP COMPANIES BY TOPIC =====
const COMPANY_PAGE_SIZE = 10;
let activeTab = "Technology";
let companyPage = 1;

function renderCompanyTabs(){
  const tabs = document.getElementById("companyTabs");
  tabs.innerHTML = Object.keys(companiesByTopicTab).map(name=>`
    <button class="company-tab ${name===activeTab?"active":""}" data-tab="${name}">${TOPIC_TAB_ICONS[name] || ""}${name}</button>
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
  const list = companiesByTopicTab[activeTab] || [];
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

function initTopicSearchFilter(){
  const datalist = document.getElementById("allTopicsList");
  datalist.innerHTML = topics.map(t=>`<option value="${t.name}">`).join("");

  const input = document.getElementById("companyTopicSearch");
  input.addEventListener("input", ()=>{
    const match = topics.find(t=>t.name.toLowerCase() === input.value.trim().toLowerCase());
    if (!match) return;
    const tab = match.domain;
    if (!companiesByTopicTab[tab]) return;
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
      <span class="chip-text"><strong>${ct.name}</strong><span>${ct.count} Topics</span></span>
    </a>
  `).join("");
  const viewAll = `
    <a href="#" class="chip chip-viewall">
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
[filterSearch, filterType, filterIndustry, sortBy].forEach(el=>{
  el.addEventListener("input", ()=>{ currentPage=1; renderTopics(); });
  el.addEventListener("change", ()=>{ currentPage=1; renderTopics(); });
});

document.getElementById("heroSearchBtn").addEventListener("click", ()=>{
  filterSearch.value = heroSearch.value;
  currentPage = 1;
  renderTopics();
  document.getElementById("explorer").scrollIntoView({behavior:"smooth"});
});
heroSearch.addEventListener("keydown", (e)=>{
  if (e.key === "Enter"){
    filterSearch.value = heroSearch.value;
    currentPage = 1;
    renderTopics();
    document.getElementById("explorer").scrollIntoView({behavior:"smooth"});
  }
});

document.getElementById("clearAll").addEventListener("click", ()=>{
  filterSearch.value = "";
  heroSearch.value = "";
  filterType.value = "";
  filterIndustry.value = "";
  sortBy.value = "relevant";
  currentPage = 1;
  renderTopics();
});

// ===== INIT =====
renderSnapshot();
initFilters();
renderTopics();
renderTrending();
renderCompanyTabs();
renderCompanyGrid();
initTopicSearchFilter();
renderHighlights();
renderInsights();
renderCountryChips();
renderFaq();

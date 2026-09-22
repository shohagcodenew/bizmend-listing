// ===== SHARED HELPERS =====
function companyIcon(domain){ return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`; }
function initialsOf(name){ return name.split(" ").filter(Boolean).map(w=>w[0]).slice(0,2).join("").toUpperCase(); }
function flagUrl(code){ return `https://flagcdn.com/w80/${code}.png`; }

const ICONS = {
  arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>',
  trendUp: '<svg viewBox="0 0 24 24"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>',
  building: '<svg viewBox="0 0 24 24"><path d="M3 21h18M6 21V10l6-6 6 6v11M9 21v-6h6v6"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>',
  users: '<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
  globe: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20 15 15 0 010-20z"/></svg>',
  grid: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.2"/><rect x="14" y="3" width="7" height="7" rx="1.2"/><rect x="3" y="14" width="7" height="7" rx="1.2"/><rect x="14" y="14" width="7" height="7" rx="1.2"/></svg>',
  hash: '<svg viewBox="0 0 24 24"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>',
  bank: '<svg viewBox="0 0 24 24"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>',
  shieldCheck: '<svg viewBox="0 0 24 24"><path d="M12 2l8 3v7c0 6-8 10-8 10s-8-4-8-10V5l8-3z"/><path d="M9 12l2 2 4-4"/></svg>',
  target: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  cpu: '<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>',
  headset: '<svg viewBox="0 0 24 24"><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5z"/><path d="M3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z"/></svg>',
  fileBadge: '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><circle cx="12" cy="15" r="2.5"/></svg>',
  card: '<svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>',
  handshake: '<svg viewBox="0 0 24 24"><path d="M11 17H4a2 2 0 01-2-2v-1a2 2 0 012-2h4"/><path d="M14 12l2.5 2.5a2 2 0 002.83 0l1.67-1.67a2 2 0 000-2.83L18 7"/><path d="M8 12l4-4 3 1 3.5-3.5"/><circle cx="17.5" cy="4.5" r="1.5"/></svg>',
  gear: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>',
  clipboard: '<svg viewBox="0 0 24 24"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M9 4H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-3"/><line x1="8" y1="11" x2="16" y2="11"/><line x1="8" y1="15" x2="16" y2="15"/></svg>',
  invoice: '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><line x1="8" y1="13" x2="14" y2="13"/><line x1="8" y1="17" x2="12" y2="17"/></svg>',
  wallet: '<svg viewBox="0 0 24 24"><path d="M3 5v14a2 2 0 002 2h14"/><path d="M7 12a5 5 0 0110 0v3H7z"/><circle cx="12" cy="8" r="2"/></svg>',
  cart: '<svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6"/></svg>',
};

const AVATAR_COLORS = ["#0f9488","#2563eb","#7c3aed","#f97316","#16a34a","#dc2626"];
const NAVY = "#1b2a4a", TEAL = "#0f9488";

// ===== TWO-TONE SERVICE ICONS (navy + teal, same visual system as the Topics page) =====
const SVC_ICONS = {
  buildingTwo: `<svg viewBox="0 0 24 24">
    <path d="M3 21h18M6 21V10l6-6 6 6v11" stroke="${NAVY}"/>
    <rect x="9" y="12.5" width="2.4" height="2.4" fill="${TEAL}"/><rect x="12.6" y="12.5" width="2.4" height="2.4" fill="${TEAL}"/>
    <rect x="10" y="17" width="4" height="4" stroke="${TEAL}"/>
  </svg>`,
  bankCard: `<svg viewBox="0 0 24 24">
    <rect x="2" y="6" width="20" height="14" rx="2" stroke="${NAVY}"/>
    <line x1="2" y1="10.5" x2="22" y2="10.5" stroke="${NAVY}"/>
    <rect x="5" y="14" width="5" height="3" rx="0.6" fill="${TEAL}"/>
  </svg>`,
  dashboard: `<svg viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="${NAVY}"/>
    <circle cx="8.2" cy="12" r="3" stroke="${TEAL}"/><path d="M8.2 9v3l2.2 1.3" stroke="${TEAL}"/>
    <rect x="14" y="13.5" width="1.8" height="3" fill="${TEAL}"/><rect x="16.6" y="10.5" width="1.8" height="6" fill="${TEAL}"/><rect x="19.2" y="8" width="1.8" height="8.5" fill="${TEAL}"/>
  </svg>`,
  cloudServer: `<svg viewBox="0 0 24 24">
    <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" stroke="${NAVY}"/>
    <rect x="9" y="13.2" width="7" height="1.8" rx="0.4" fill="${TEAL}"/>
    <rect x="9" y="15.6" width="7" height="1.8" rx="0.4" fill="${TEAL}"/>
  </svg>`,
  usersTwo: `<svg viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="${NAVY}"/><circle cx="9" cy="7" r="4" stroke="${NAVY}"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="${TEAL}"/><path d="M16 3.13a4 4 0 010 7.75" stroke="${TEAL}"/>
  </svg>`,
  headsetTwo: `<svg viewBox="0 0 24 24">
    <path d="M3 18v-6a9 9 0 0118 0v6" stroke="${NAVY}"/>
    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5z" fill="${TEAL}" stroke="${TEAL}"/>
    <path d="M3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z" stroke="${NAVY}"/>
  </svg>`,
  fileBadgeTwo: `<svg viewBox="0 0 24 24">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="${NAVY}"/><path d="M14 2v6h6" stroke="${NAVY}"/>
    <circle cx="12" cy="15" r="2.5" stroke="${TEAL}"/>
  </svg>`,
  walletTwo: `<svg viewBox="0 0 24 24">
    <path d="M3 5v14a2 2 0 002 2h14" stroke="${NAVY}"/>
    <path d="M7 12a5 5 0 0110 0v3H7z" stroke="${TEAL}"/><circle cx="12" cy="8" r="2" fill="${TEAL}"/>
  </svg>`,
  handshakeTwo: `<svg viewBox="0 0 24 24">
    <path d="M11 17H4a2 2 0 01-2-2v-1a2 2 0 012-2h4" stroke="${NAVY}"/>
    <path d="M14 12l2.5 2.5a2 2 0 002.83 0l1.67-1.67a2 2 0 000-2.83L18 7" stroke="${NAVY}"/>
    <path d="M8 12l4-4 3 1 3.5-3.5" stroke="${TEAL}"/><circle cx="17.5" cy="4.5" r="1.5" fill="${TEAL}"/>
  </svg>`,
  shieldCheckTwo: `<svg viewBox="0 0 24 24">
    <path d="M12 2l8 3v7c0 6-8 10-8 10s-8-4-8-10V5l8-3z" stroke="${NAVY}"/>
    <path d="M9 12l2 2 4-4" stroke="${TEAL}"/>
  </svg>`,
  invoiceTwo: `<svg viewBox="0 0 24 24">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="${NAVY}"/><path d="M14 2v6h6" stroke="${NAVY}"/>
    <line x1="8" y1="13" x2="14" y2="13" stroke="${TEAL}"/><line x1="8" y1="17" x2="12" y2="17" stroke="${TEAL}"/>
  </svg>`,
  layoutTwo: `<svg viewBox="0 0 24 24">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="${NAVY}"/>
    <line x1="2" y1="9" x2="22" y2="9" stroke="${NAVY}"/>
    <rect x="5" y="12" width="6" height="5" rx="1" fill="${TEAL}"/>
    <rect x="13" y="12" width="6" height="2" rx="0.5" fill="${TEAL}"/><rect x="13" y="15" width="6" height="2" rx="0.5" fill="${TEAL}"/>
  </svg>`,
};

// ===== DATA: SNAPSHOT =====
const snapshotStats = [
  { num:"6,248", label:"Total Services", icon:ICONS.briefcase },
  { num:"2,351", label:"Verified Providers", icon:ICONS.building },
  { num:"29", label:"Industries Covered", icon:ICONS.grid },
  { num:"512", label:"Topics Covered", icon:ICONS.hash },
  { num:"142", label:"Countries Covered", icon:ICONS.globe },
];

// ===== DATA: CATEGORIES =====
const CATEGORIES = {
  "Legal & Compliance": { cls:"cat-legal", icon:ICONS.shieldCheck },
  "Finance": { cls:"cat-finance", icon:ICONS.bank },
  "Marketing": { cls:"cat-marketing", icon:ICONS.target },
  "Technology": { cls:"cat-technology", icon:ICONS.cpu },
  "HR": { cls:"cat-hr", icon:ICONS.users },
  "Consulting": { cls:"cat-consulting", icon:ICONS.handshake },
};

// ===== DATA: SERVICES =====
const services = [
  { name:"Company Formation", company:"BizMend", category:"Legal & Compliance", icon:SVC_ICONS.buildingTwo,
    desc:"Register your company seamlessly, locally or globally.",
    price:99, providers:160, industry:"Cross-Industry", topic:"Legal", providerType:"Agency", country:"us" },
  { name:"Business Banking", company:"FinBridge", category:"Finance", icon:SVC_ICONS.bankCard,
    desc:"Open business accounts with leading banks.",
    price:0, providers:85, industry:"Finance", topic:"Banking", providerType:"Enterprise Vendor", country:"us" },
  { name:"Digital Marketing", company:"Growthfy", category:"Marketing", icon:SVC_ICONS.dashboard,
    desc:"Grow your brand with SEO, social and paid campaigns.",
    price:149, providers:210, industry:"Retail & E-commerce", topic:"Marketing", providerType:"Agency", country:"gb" },
  { name:"Software Development", company:"CodeCraft", category:"Technology", icon:SVC_ICONS.cloudServer,
    desc:"Custom software solutions for web, mobile & cloud.",
    price:999, providers:320, industry:"Technology", topic:"Software", providerType:"Agency", country:"us" },
  { name:"Talent Acquisition", company:"HireWave", category:"HR", icon:SVC_ICONS.usersTwo,
    desc:"Find and hire top talent for your organization.",
    price:199, providers:140, industry:"Cross-Industry", topic:"Recruiting", providerType:"Marketplace", country:"us" },
  { name:"IT Support", company:"TechDesk", category:"Technology", icon:SVC_ICONS.headsetTwo,
    desc:"24/7 helpdesk and IT support for growing teams.",
    price:79, providers:95, industry:"Technology", topic:"Support", providerType:"Agency", country:"in" },
  { name:"Trademark Registration", company:"LexAssist", category:"Legal & Compliance", icon:SVC_ICONS.fileBadgeTwo,
    desc:"Protect your brand with trademark filing and search.",
    price:199, providers:60, industry:"Cross-Industry", topic:"IP & Trademarks", providerType:"Agency", country:"gb" },
  { name:"Payment Gateway Setup", company:"PayBridge", category:"Finance", icon:SVC_ICONS.walletTwo,
    desc:"Accept payments online with secure, PCI-ready gateways.",
    price:49, providers:130, industry:"Finance", topic:"Payments", providerType:"Enterprise Vendor", country:"sg" },
  { name:"Business Consulting", company:"ConsultPro", category:"Consulting", icon:SVC_ICONS.handshakeTwo,
    desc:"Expert guidance to plan, scale and optimize your business.",
    price:299, providers:110, industry:"Cross-Industry", topic:"Consulting", providerType:"Agency", country:"de" },
  { name:"Compliance Services", company:"ComplyPro", category:"Legal & Compliance", icon:SVC_ICONS.shieldCheckTwo,
    desc:"Stay compliant with evolving regulations and audits.",
    price:249, providers:90, industry:"Finance", topic:"Compliance", providerType:"Agency", country:"ae" },
  { name:"Accounting & Bookkeeping", company:"LedgerPro", category:"Finance", icon:SVC_ICONS.invoiceTwo,
    desc:"Manage books, taxes and financial reporting with ease.",
    price:129, providers:105, industry:"Finance", topic:"Accounting", providerType:"Agency", country:"us" },
  { name:"Website Design", company:"PixelForge", category:"Technology", icon:SVC_ICONS.layoutTwo,
    desc:"Custom, responsive websites built for conversion.",
    price:349, providers:150, industry:"Technology", topic:"Web Design", providerType:"Agency", country:"gb" },
  { name:"Contract Drafting", company:"LexAssist", category:"Legal & Compliance", icon:SVC_ICONS.fileBadgeTwo,
    desc:"Airtight contracts and agreements drafted by legal experts.",
    price:149, providers:75, industry:"Cross-Industry", topic:"Legal", providerType:"Agency", country:"gb" },
  { name:"Patent Filing", company:"LexAssist", category:"Legal & Compliance", icon:SVC_ICONS.shieldCheckTwo,
    desc:"Secure your inventions with expert patent filing support.",
    price:399, providers:50, industry:"Technology", topic:"IP & Trademarks", providerType:"Agency", country:"us" },
  { name:"Business Licensing", company:"BizMend", category:"Legal & Compliance", icon:SVC_ICONS.buildingTwo,
    desc:"Get the right permits and licenses to operate legally.",
    price:119, providers:85, industry:"Cross-Industry", topic:"Legal", providerType:"Agency", country:"us" },
  { name:"Invoice Financing", company:"PayBridge", category:"Finance", icon:SVC_ICONS.walletTwo,
    desc:"Unlock cash flow by financing your unpaid invoices.",
    price:0, providers:70, industry:"Finance", topic:"Payments", providerType:"Enterprise Vendor", country:"sg" },
  { name:"Tax Filing", company:"LedgerPro", category:"Finance", icon:SVC_ICONS.invoiceTwo,
    desc:"Accurate, on-time business tax filing and advisory.",
    price:159, providers:100, industry:"Finance", topic:"Accounting", providerType:"Agency", country:"us" },
  { name:"Insurance Brokerage", company:"FinBridge", category:"Finance", icon:SVC_ICONS.bankCard,
    desc:"Compare and secure the right business insurance coverage.",
    price:89, providers:65, industry:"Finance", topic:"Banking", providerType:"Enterprise Vendor", country:"gb" },
  { name:"SEO Audit", company:"Growthfy", category:"Marketing", icon:SVC_ICONS.dashboard,
    desc:"In-depth technical and content SEO audit for growth.",
    price:99, providers:120, industry:"Retail & E-commerce", topic:"Marketing", providerType:"Agency", country:"us" },
  { name:"Social Media Management", company:"Growthfy", category:"Marketing", icon:SVC_ICONS.dashboard,
    desc:"Consistent, on-brand social content and community management.",
    price:199, providers:140, industry:"Retail & E-commerce", topic:"Marketing", providerType:"Agency", country:"au" },
  { name:"Content Writing", company:"Growthfy", category:"Marketing", icon:SVC_ICONS.layoutTwo,
    desc:"SEO-optimized content that converts readers into customers.",
    price:79, providers:160, industry:"Retail & E-commerce", topic:"Marketing", providerType:"Marketplace", country:"gb" },
  { name:"Mobile App Development", company:"CodeCraft", category:"Technology", icon:SVC_ICONS.cloudServer,
    desc:"Native and cross-platform mobile apps built to scale.",
    price:1499, providers:180, industry:"Technology", topic:"Software", providerType:"Agency", country:"us" },
  { name:"Cloud Migration", company:"TechDesk", category:"Technology", icon:SVC_ICONS.cloudServer,
    desc:"Move your infrastructure to the cloud with zero downtime.",
    price:599, providers:90, industry:"Technology", topic:"Software", providerType:"Agency", country:"de" },
  { name:"Cybersecurity Audit", company:"TechDesk", category:"Technology", icon:SVC_ICONS.shieldCheckTwo,
    desc:"Find and fix vulnerabilities before attackers do.",
    price:449, providers:70, industry:"Technology", topic:"Support", providerType:"Agency", country:"gb" },
  { name:"UI/UX Design", company:"PixelForge", category:"Technology", icon:SVC_ICONS.layoutTwo,
    desc:"User-centered interface design for web and mobile products.",
    price:299, providers:110, industry:"Technology", topic:"Web Design", providerType:"Agency", country:"ca" },
  { name:"Payroll Outsourcing", company:"HireWave", category:"HR", icon:SVC_ICONS.usersTwo,
    desc:"Accurate, compliant payroll processing, fully managed.",
    price:129, providers:95, industry:"Cross-Industry", topic:"Recruiting", providerType:"Enterprise Vendor", country:"us" },
  { name:"Employee Training", company:"HireWave", category:"HR", icon:SVC_ICONS.usersTwo,
    desc:"Upskill your team with tailored corporate training programs.",
    price:199, providers:60, industry:"Cross-Industry", topic:"Recruiting", providerType:"Agency", country:"gb" },
  { name:"Market Research", company:"ConsultPro", category:"Consulting", icon:SVC_ICONS.handshakeTwo,
    desc:"Data-driven market insights to guide your next move.",
    price:349, providers:80, industry:"Cross-Industry", topic:"Consulting", providerType:"Agency", country:"de" },
  { name:"Business Valuation", company:"ConsultPro", category:"Consulting", icon:SVC_ICONS.invoiceTwo,
    desc:"Independent valuation for fundraising, sale or merger.",
    price:599, providers:45, industry:"Finance", topic:"Consulting", providerType:"Agency", country:"us" },
  { name:"Franchise Consulting", company:"ConsultPro", category:"Consulting", icon:SVC_ICONS.buildingTwo,
    desc:"Expand your brand through a proven franchise strategy.",
    price:499, providers:55, industry:"Cross-Industry", topic:"Consulting", providerType:"Agency", country:"gb" },
  { name:"OpenAI API", company:"OpenAI", category:"Technology", icon:SVC_ICONS.cloudServer,
    desc:"Access OpenAI's models to build intelligent apps and integrate AI into your products.",
    price:0, providers:1, industry:"Technology", topic:"Software", providerType:"Enterprise Vendor", country:"us", link:"openai-api/index.html" },
];

// ===== DATA: TRENDING / POPULAR SERVICES =====
const trending = [
  { name:"Company Formation", change:"74.2%", icon:SVC_ICONS.buildingTwo, fg:"var(--teal)", bg:"var(--teal-light)", pts:[3,5,4,7,9,14,22] },
  { name:"Business Banking", change:"61.8%", icon:SVC_ICONS.bankCard, fg:"var(--blue)", bg:"var(--blue-light)", pts:[4,5,5,6,8,11,16] },
  { name:"Digital Marketing", change:"58.6%", icon:SVC_ICONS.dashboard, fg:"var(--orange)", bg:"var(--orange-light)", pts:[5,6,6,8,9,11,14] },
  { name:"Software Development", change:"49.3%", icon:SVC_ICONS.cloudServer, fg:"var(--purple)", bg:"var(--purple-light)", pts:[6,6,7,8,8,10,12] },
  { name:"Talent Acquisition", change:"46.7%", icon:SVC_ICONS.usersTwo, fg:"var(--navy-2)", bg:"var(--bg-soft)", pts:[7,8,7,9,10,10,12] },
  { name:"IT Support", change:"39.5%", icon:SVC_ICONS.headsetTwo, fg:"var(--teal)", bg:"var(--teal-light)", pts:[6,7,6,8,9,9,11] },
  { name:"Trademark Registration", change:"32.4%", icon:SVC_ICONS.fileBadgeTwo, fg:"var(--red)", bg:"var(--red-light)", pts:[5,6,6,7,8,9,10] },
  { name:"Payment Gateway Setup", change:"29.8%", icon:SVC_ICONS.walletTwo, fg:"var(--blue)", bg:"var(--blue-light)", pts:[5,5,6,7,7,8,9] },
  { name:"Business Consulting", change:"27.6%", icon:SVC_ICONS.handshakeTwo, fg:"var(--green)", bg:"var(--green-light)", pts:[4,5,6,6,7,8,9] },
  { name:"Compliance Services", change:"24.1%", icon:SVC_ICONS.shieldCheckTwo, fg:"var(--navy-2)", bg:"var(--bg-soft)", pts:[4,5,5,6,7,7,8] },
];

// ===== DATA: RECENTLY UPDATED SERVICES =====
const recentlyUpdated = [
  { name:"E-invoicing Setup", company:"TaxTech", date:"May 20, 2025", icon:ICONS.invoice },
  { name:"Payroll Management", company:"PayRollPro", date:"May 19, 2025", icon:ICONS.wallet },
  { name:"Data Protection", company:"SecureComply", date:"May 18, 2025", icon:ICONS.shieldCheck },
  { name:"Legal Documentation", company:"LexAssist", date:"May 17, 2025", icon:ICONS.clipboard },
  { name:"E-commerce Setup", company:"ShopLaunch", date:"May 16, 2025", icon:ICONS.cart },
];

// ===== DATA: SERVICES BY COMPANY / PROVIDER =====
const providers = [
  { name:"BizMend", domain:null, type:"All-in-One Platform", count:"120+ Services" },
  { name:"Deloitte", domain:"deloitte.com", type:"Consulting", count:"85+ Services" },
  { name:"PwC", domain:"pwc.com", type:"Audit & Tax", count:"70+ Services" },
  { name:"KPMG", domain:"kpmg.com", type:"Digital Solutions", count:"65+ Services" },
  { name:"TCS", domain:"tcs.com", type:"IT Services", count:"60+ Services" },
  { name:"Accenture", domain:"accenture.com", type:"IT Services", count:"55+ Services" },
  { name:"Upwork", domain:"upwork.com", type:"Freelance", count:"50+ Services" },
  { name:"Fiverr", domain:"fiverr.com", type:"Freelance", count:"45+ Services" },
];

// ===== DATA: TOP COMPANIES BY SERVICE =====
const topCompaniesByService = [
  { service:"Company Formation", company:"BizMend", rating:4.8, reviews:320 },
  { service:"Business Banking", company:"FinBridge", rating:4.7, reviews:280 },
  { service:"Digital Marketing", company:"Growthfy", rating:4.6, reviews:450 },
  { service:"Software Development", company:"CodeCraft", rating:4.9, reviews:620 },
  { service:"Compliance Services", company:"ComplyPro", rating:4.6, reviews:210 },
];

// ===== DATA: LATEST SERVICE INSIGHTS =====
const insights = [
  { badge:"Guide", title:"How to Choose the Right Business Formation Service", desc:"A complete guide to selecting the best company formation partner.", date:"May 20, 2025", read:"8 min read", img:"https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=70" },
  { badge:"Guide", title:"Global Business Banking Trends 2025", desc:"Key trends shaping business banking worldwide.", date:"May 19, 2025", read:"6 min read", img:"https://images.unsplash.com/photo-1638913662295-9630035ef770?auto=format&fit=crop&w=800&q=70" },
  { badge:"Report", title:"The State of Digital Marketing Services", desc:"Performance benchmarks and spend trends by industry.", date:"May 18, 2025", read:"10 min read", img:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=70" },
  { badge:"Analysis", title:"Outsourcing vs. In-house IT Services", desc:"Cost comparison, benefits, and when to outsource.", date:"May 17, 2025", read:"7 min read", img:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=70" },
  { badge:"News", title:"New Compliance Rules Impacting Businesses", desc:"What businesses need to know about the latest regulations.", date:"May 16, 2025", read:"5 min read", img:"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=70" },
];

// ===== DATA: BROWSE BY =====
const browseIndustry = [
  { name:"Technology", count:"520 Services", icon:ICONS.cpu },
  { name:"Healthcare", count:"410 Services", icon:ICONS.shieldCheck },
  { name:"Finance & Insurance", count:"480 Services", icon:ICONS.bank },
  { name:"Retail & E-commerce", count:"390 Services", icon:ICONS.cart },
  { name:"Manufacturing", count:"360 Services", icon:ICONS.gear },
];
const browseTopic = [
  { name:"Legal", count:"420 Services", icon:ICONS.shieldCheck },
  { name:"Finance", count:"380 Services", icon:ICONS.bank },
  { name:"HR & Employment", count:"350 Services", icon:ICONS.users },
  { name:"IT & Software", count:"600 Services", icon:ICONS.cpu },
  { name:"Operations", count:"320 Services", icon:ICONS.gear },
];
const browseCountry = [
  { name:"United States", count:"2,245 Services", code:"us", link:"../countries/united-states/index.html" },
  { name:"United Kingdom", count:"1,565 Services", code:"gb" },
  { name:"India", count:"1,980 Services", code:"in" },
  { name:"Canada", count:"980 Services", code:"ca" },
  { name:"Australia", count:"865 Services", code:"au" },
];

// ===== DATA: FAQ =====
const faqs = [
  { q:"What types of services can I find on BizMend?", a:"BizMend lists professional services across legal, finance, marketing, technology, HR and more — from formation and banking to software development and compliance." },
  { q:"How do I choose the right service for my business?", a:"Use the Service Explorer filters — category, industry, topic, and country — to compare providers, pricing, and ratings before you decide." },
  { q:"Are the service providers verified?", a:"Many providers carry a Verified badge after our team checks their credentials, reviews, and track record." },
  { q:"Can I compare multiple providers?", a:"Yes. Each service card shows starting price and provider count so you can quickly compare options side by side." },
  { q:"How secure is my data on BizMend?", a:"We use industry-standard encryption and never share your details with a provider until you choose to connect." },
  { q:"Can I ask experts for advice?", a:"Yes. Many topics and services on BizMend include curated analysis and advice from domain experts." },
  { q:"How do I contact a service provider?", a:"Open any service card and select \"View Service\" to see the provider's profile and contact options." },
  { q:"Does BizMend have a return or refund policy?", a:"Refund policies are set by individual providers; check the service listing or contact the provider directly for their terms." },
];

// ===== SNAPSHOT =====
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

// ===== SERVICE EXPLORER =====
const serviceGrid = document.getElementById("serviceGrid");
const filterSearch = document.getElementById("filterSearch");
const heroSearch = document.getElementById("heroSearch");
const filterCategory = document.getElementById("filterCategory");
const filterProviderType = document.getElementById("filterProviderType");
const filterIndustry = document.getElementById("filterIndustry");
const filterTopic = document.getElementById("filterTopic");
const filterCountry = document.getElementById("filterCountry");
const sortBy = document.getElementById("sortBy");

function populateSelect(select, values, placeholder){
  select.innerHTML = `<option value="">${placeholder}</option>` +
    values.map(v => `<option value="${v}">${v}</option>`).join("");
}

function initFilters(){
  populateSelect(filterCategory, Object.keys(CATEGORIES), "Category");
  populateSelect(filterProviderType, [...new Set(services.map(s=>s.providerType))].sort(), "Provider Type");
  populateSelect(filterIndustry, [...new Set(services.map(s=>s.industry))].sort(), "Industry");
  populateSelect(filterTopic, [...new Set(services.map(s=>s.topic))].sort(), "Topic");
  const countryNames = { us:"United States", gb:"United Kingdom", ca:"Canada", sg:"Singapore", au:"Australia", de:"Germany", in:"India", ae:"United Arab Emirates" };
  populateSelect(filterCountry, [...new Set(services.map(s=>s.country))].sort().map(c=>countryNames[c]||c.toUpperCase()), "Country");
}

function countryCodeFromName(name){
  const map = { "United States":"us", "United Kingdom":"gb", "Canada":"ca", "Singapore":"sg", "Australia":"au", "Germany":"de", "India":"in", "United Arab Emirates":"ae" };
  return map[name] || name.toLowerCase();
}

function getFilteredServices(){
  const q = (filterSearch.value || heroSearch.value || "").toLowerCase().trim();
  let list = services.filter(s=>{
    if (q && !(s.name.toLowerCase().includes(q) || s.company.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q) || s.category.toLowerCase().includes(q))) return false;
    if (filterCategory.value && s.category !== filterCategory.value) return false;
    if (filterProviderType.value && s.providerType !== filterProviderType.value) return false;
    if (filterIndustry.value && s.industry !== filterIndustry.value) return false;
    if (filterTopic.value && s.topic !== filterTopic.value) return false;
    if (filterCountry.value && s.country !== countryCodeFromName(filterCountry.value)) return false;
    return true;
  });
  if (sortBy.value === "priceLow") list = [...list].sort((a,b)=>a.price-b.price);
  else if (sortBy.value === "priceHigh") list = [...list].sort((a,b)=>b.price-a.price);
  else if (sortBy.value === "providers") list = [...list].sort((a,b)=>b.providers-a.providers);
  return list;
}

function serviceCard(s){
  const cat = CATEGORIES[s.category];
  return `
    <div class="service-card">
      <span class="cat-tag ${cat.cls}">${cat.icon}${s.category}</span>
      <div class="svc-icon">${s.icon}</div>
      <h3>${s.name}</h3>
      <div class="svc-company">${s.company}</div>
      <p class="svc-desc">${s.desc}</p>
      <div class="svc-stat-row"><span>Providers</span><b>${s.providers}+</b></div>
      <a href="${s.link || '#'}" class="svc-view-link">View Service ${ICONS.arrow}</a>
    </div>
  `;
}

const SERVICE_PAGE_SIZE = 12;
let servicePage = 1;

function renderServicePagination(totalItems){
  const el = document.getElementById("servicePagination");
  const totalPages = Math.max(1, Math.ceil(totalItems / SERVICE_PAGE_SIZE));
  if (servicePage > totalPages) servicePage = totalPages;

  let html = `<button class="page-btn" id="servicePrevPage" ${servicePage===1?"disabled":""}>
    <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
  </button>`;

  const pages = [];
  for (let i=1;i<=totalPages;i++){
    if (i===1 || i===totalPages || Math.abs(i-servicePage)<=1) pages.push(i);
    else if (pages[pages.length-1] !== "...") pages.push("...");
  }
  pages.forEach(p=>{
    if (p==="...") html += `<span class="page-btn dots">...</span>`;
    else html += `<button class="page-btn ${p===servicePage?"active":""}" data-page="${p}">${p}</button>`;
  });

  html += `<button class="page-btn" id="serviceNextPage" ${servicePage===totalPages?"disabled":""}>
    <svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
  </button>`;

  el.innerHTML = html;
  el.querySelectorAll("[data-page]").forEach(btn=>{
    btn.addEventListener("click", ()=>{ servicePage = parseInt(btn.dataset.page,10); renderServices(); document.getElementById("explorer").scrollIntoView({behavior:"smooth"}); });
  });
  const prev = document.getElementById("servicePrevPage");
  const next = document.getElementById("serviceNextPage");
  if (prev) prev.addEventListener("click", ()=>{ if(servicePage>1){servicePage--; renderServices(); document.getElementById("explorer").scrollIntoView({behavior:"smooth"});} });
  if (next) next.addEventListener("click", ()=>{ if(servicePage<totalPages){servicePage++; renderServices(); document.getElementById("explorer").scrollIntoView({behavior:"smooth"});} });
}

function renderServices(){
  const list = getFilteredServices();
  const start = (servicePage-1)*SERVICE_PAGE_SIZE;
  const pageItems = list.slice(start, start+SERVICE_PAGE_SIZE);
  serviceGrid.innerHTML = pageItems.length
    ? pageItems.map(serviceCard).join("")
    : `<div style="grid-column:1/-1;text-align:center;color:#94a3b8;padding:40px 0;">No services match your filters.</div>`;
  renderServicePagination(list.length);
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
  document.getElementById("trendingList").innerHTML = trending.map((t,i)=>`
    <div class="trend-row">
      <div class="trend-num">${i+1}</div>
      <div class="trend-icon" style="background:${t.bg};color:${t.fg};">${t.icon}</div>
      <div class="trend-name">${t.name}</div>
      <div class="trend-change">${ICONS.trendUp} ${t.change}</div>
      ${sparkline(t.pts, t.fg.startsWith("var")? "#0f9488": t.fg)}
    </div>
  `).join("");
}

// ===== RECENTLY UPDATED =====
function renderRecentlyUpdated(){
  document.getElementById("updatedGrid").innerHTML = recentlyUpdated.map(u=>`
    <div class="updated-card">
      <div class="upd-icon">${u.icon}</div>
      <h4>${u.name}</h4>
      <div class="upd-company">${u.company}</div>
      <div class="upd-date">${u.date}</div>
    </div>
  `).join("");
}

// ===== SERVICES BY COMPANY / PROVIDER =====
function renderProviders(){
  document.getElementById("providerRow").innerHTML = providers.map((p,i)=>`
    <div class="provider-card">
      <div class="provider-logo">
        ${p.domain ? `<img src="${companyIcon(p.domain)}" alt="${p.name}" onload="this.style.display='block';this.nextElementSibling.style.display='none';" onerror="this.style.display='none';">` : ""}
        <span class="logo-fallback" style="color:${p.domain ? AVATAR_COLORS[i%AVATAR_COLORS.length] : "#0f9488"};">${p.domain ? initialsOf(p.name) : "B"}</span>
      </div>
      <h4>${p.name}</h4>
      <div class="provider-type">${p.type}</div>
      <div class="provider-count">${p.count}</div>
    </div>
  `).join("");
}

// ===== TOP COMPANIES BY SERVICE =====
function starRating(rating){
  const full = Math.round(rating);
  return "★".repeat(full) + "☆".repeat(5-full);
}
function renderTopCompaniesByService(){
  document.getElementById("topServiceGrid").innerHTML = topCompaniesByService.map((c,i)=>`
    <div class="top-service-card">
      <div class="tsc-logo"><span style="color:${AVATAR_COLORS[i%AVATAR_COLORS.length]};">${initialsOf(c.company)}</span></div>
      <h4>${c.service}</h4>
      <div class="tsc-company">${c.company}</div>
      <div class="tsc-rating"><span class="stars">${starRating(c.rating)}</span> ${c.rating} <span class="count">(${c.reviews})</span></div>
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
        <div class="insight-date">${a.date} &middot; ${a.read}</div>
      </div>
    </div>
  `).join("");
}

// ===== BROWSE BY =====
function viewAllChip(label){
  return `<a href="#" class="chip chip-viewall">
    <span class="chip-icon chip-icon-viewall">${ICONS.arrow}</span>
    <span class="chip-text"><strong>${label}</strong></span>
  </a>`;
}
function renderBrowseIndustry(){
  const cards = browseIndustry.map(b=>`
    <a href="#" class="chip">
      <span class="chip-icon">${b.icon}</span>
      <span class="chip-text"><strong>${b.name}</strong><span>${b.count}</span></span>
    </a>
  `).join("");
  document.getElementById("industryChips").innerHTML = cards + viewAllChip("View All");
}
function renderBrowseTopic(){
  const cards = browseTopic.map(b=>`
    <a href="#" class="chip">
      <span class="chip-icon">${b.icon}</span>
      <span class="chip-text"><strong>${b.name}</strong><span>${b.count}</span></span>
    </a>
  `).join("");
  document.getElementById("topicChips").innerHTML = cards + viewAllChip("View All");
}
function renderBrowseCountry(){
  const cards = browseCountry.map(ct=>`
    <a href="${ct.link || '#'}" class="chip">
      <span class="chip-flag"><img src="${flagUrl(ct.code)}" alt="${ct.name} flag" loading="lazy"></span>
      <span class="chip-text"><strong>${ct.name}</strong><span>${ct.count}</span></span>
    </a>
  `).join("");
  document.getElementById("countryChips").innerHTML = cards + viewAllChip("View All");
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
function renderServicesFromStart(){ servicePage = 1; renderServices(); }

[filterSearch, filterCategory, filterProviderType, filterIndustry, filterTopic, filterCountry, sortBy].forEach(el=>{
  el.addEventListener("input", renderServicesFromStart);
  el.addEventListener("change", renderServicesFromStart);
});

document.getElementById("heroSearchBtn").addEventListener("click", ()=>{
  filterSearch.value = heroSearch.value;
  renderServicesFromStart();
  document.getElementById("explorer").scrollIntoView({behavior:"smooth"});
});
heroSearch.addEventListener("keydown", (e)=>{
  if (e.key === "Enter"){
    filterSearch.value = heroSearch.value;
    renderServicesFromStart();
    document.getElementById("explorer").scrollIntoView({behavior:"smooth"});
  }
});

document.getElementById("clearAll").addEventListener("click", ()=>{
  filterSearch.value = "";
  heroSearch.value = "";
  filterCategory.value = "";
  filterProviderType.value = "";
  filterIndustry.value = "";
  filterTopic.value = "";
  filterCountry.value = "";
  sortBy.value = "popular";
  renderServicesFromStart();
});

// Mobile nav is handled by the shared site header (../shared/bm-chrome.js via #bmHamburgerBtn/#bmMobileNav).

// ===== INIT =====
renderSnapshot();
initFilters();
renderServices();
renderTrending();
renderRecentlyUpdated();
renderProviders();
renderTopCompaniesByService();
renderInsights();
renderBrowseIndustry();
renderBrowseTopic();
renderBrowseCountry();
renderFaq();

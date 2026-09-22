(() => {
  const founders = [
    { name: 'Chris Britt', role: 'Co-founder & CEO, Chime', summary: 'Building a mobile-first banking experience designed to make financial tools more accessible.', tags: ['Consumer Banking', 'Digital Accounts', 'Chime'], image: 'assets/chris-britt.png' },
    { name: 'Anne Boden', role: 'Founder, Starling Bank', summary: 'Pioneered an app-first bank that combines everyday accounts with modern business banking tools.', tags: ['Neobanks', 'Business Banking', 'Starling Bank'], image: 'assets/anne-boden.jpg' },
    { name: 'Immad Akhund', role: 'Co-founder & CEO, Mercury', summary: 'Building banking products, cards and financial operations tools for startups and technology companies.', tags: ['Startup Banking', 'Financial Operations', 'Mercury'], image: 'assets/immad-akhund.jpg' },
    { name: 'Tom Blomfield', role: 'Co-founder, Monzo', summary: 'Helped build one of the best-known app-first banks for everyday money management.', tags: ['Neobanks', 'Consumer Banking', 'Monzo'], initials: 'TB' },
    { name: 'Henrique Dubugras', role: 'Co-founder & CEO, Brex', summary: 'Building cards and financial technology for fast-growing companies.', tags: ['Business Banking', 'Corporate Cards', 'Brex'], initials: 'HD' },
    { name: 'Nikolay Storonsky', role: 'Co-founder & CEO, Revolut', summary: 'Leading a global financial app spanning accounts, cards, payments and currencies.', tags: ['Global Finance', 'Payments', 'Revolut'], initials: 'NS' },
    { name: 'Taavet Hinrikus', role: 'Co-founder, Wise', summary: 'Helped make international money transfers clearer, faster and more affordable.', tags: ['Cross-border Payments', 'Multi-currency', 'Wise'], initials: 'TH' },
    { name: 'David Vélez', role: 'Founder & CEO, Nubank', summary: 'Building digital financial services for millions of customers across Latin America.', tags: ['Digital Bank', 'Consumer Finance', 'Nubank'], initials: 'DV' },
    { name: 'John Collison', role: 'Co-founder & President, Stripe', summary: 'Building payment infrastructure used by businesses around the world.', tags: ['Payments', 'Financial APIs', 'Stripe'], initials: 'JC' },
    { name: 'Patrick Collison', role: 'Co-founder & CEO, Stripe', summary: 'Leading payment and financial infrastructure for internet businesses.', tags: ['Payments', 'Fintech Infrastructure', 'Stripe'], initials: 'PC' },
    { name: 'Jack Dorsey', role: 'Co-founder, Block', summary: 'Built products that connect sellers, consumers and digital financial services.', tags: ['Payments', 'Commerce', 'Block'], initials: 'JD' },
    { name: 'Zach Perret', role: 'Co-founder & CEO, Plaid', summary: 'Helping financial products connect securely to customer-permissioned data.', tags: ['Open Banking', 'Financial Data', 'Plaid'], initials: 'ZP' }
  ];

  const pageSize = 3;
  const list = document.querySelector('.founder-scroll');
  const count = document.querySelector('.founder-list-top > span');
  const previous = document.querySelector('.founder-page-previous');
  const next = document.querySelector('.founder-page-next');
  const pageStatus = document.querySelector('.founder-page-status');
  const toast = document.querySelector('#toast');
  let page = 0;
  let timer;

  const say = (message) => {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(timer);
    timer = setTimeout(() => toast.classList.remove('show'), 2200);
  };
  const portrait = (founder) => founder.image
    ? `<img class="founder-portrait" src="${founder.image}" alt="${founder.name}">`
    : `<div class="founder-portrait founder-fallback" aria-label="${founder.name} initials">${founder.initials}</div>`;
  const row = (founder) => `<article class="founder-row">${portrait(founder)}<div class="founder-profile"><h3>${founder.name}</h3><p class="founder-role">${founder.role}</p><p class="founder-summary">${founder.summary}</p><div class="founder-tags">${founder.tags.map((tag) => `<span>${tag}</span>`).join('')}</div></div><div class="founder-actions"><span class="presence-badge">✿ &nbsp; Verified Presence</span><button class="founder-link" type="button">View Founder <b>→</b></button></div></article>`;

  function render() {
    const start = page * pageSize;
    const shown = founders.slice(start, start + pageSize);
    list.innerHTML = shown.map(row).join('');
    count.textContent = `Showing ${start + 1}–${start + shown.length} of ${founders.length} Digital Banking leaders`;
    pageStatus.textContent = `Page ${page + 1} of ${Math.ceil(founders.length / pageSize)}`;
    previous.disabled = page === 0;
    next.disabled = page === Math.ceil(founders.length / pageSize) - 1;
    list.querySelectorAll('.founder-link').forEach((button) => button.addEventListener('click', () => say('Founder profile will open here.')));
  }

  previous.addEventListener('click', () => { if (page > 0) { page -= 1; render(); } });
  next.addEventListener('click', () => { if (page < Math.ceil(founders.length / pageSize) - 1) { page += 1; render(); } });
  document.querySelector('.founder-all')?.addEventListener('click', () => say('All Digital Banking founders will open here.'));
  document.querySelector('.claim-button')?.addEventListener('click', () => say('Profile claim flow will open here.'));
  render();
})();

(function () {
  const toastEl = document.getElementById('toast');
  let toastTimer = null;

  function showToast(message) {
    toastEl.textContent = message;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2200);
  }

  function toggleButton(btn, onLabel, offLabel) {
    const pressed = btn.getAttribute('aria-pressed') === 'true';
    btn.setAttribute('aria-pressed', String(!pressed));
    const label = btn.querySelector('span');
    if (label) label.textContent = !pressed ? onLabel : offLabel;
    return !pressed;
  }

  document.getElementById('saveBtn').addEventListener('click', function () {
    const nowSaved = toggleButton(this, 'Saved', 'Save');
    showToast(nowSaved ? 'City profile saved' : 'Removed from saved profiles');
  });

  document.getElementById('shareBtn').addEventListener('click', async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: 'New York City — Business Ecosystem', url });
        return;
      } catch (err) {
        /* user cancelled share sheet — fall through to clipboard */
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      showToast('Profile link copied to clipboard');
    } catch (err) {
      showToast('Could not copy link');
    }
  });

  document.getElementById('correctionBtn').addEventListener('click', () => {
    showToast('Correction form coming soon');
  });

  // Generic expand/collapse toggle: button toggles aria-expanded and
  // shows/hides the element referenced by aria-controls.
  function wireToggle(btn, opts) {
    if (!btn) return;
    const target = document.getElementById(btn.getAttribute('aria-controls'));
    const label = btn.querySelector('span');
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      if (target) target.hidden = expanded;
      if (label && opts) {
        label.textContent = expanded ? opts.showLabel : opts.hideLabel;
      }
      if (!expanded && target) target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  wireToggle(document.getElementById('qfToggle'), { showLabel: 'View more facts', hideLabel: 'Show less facts' });
  wireToggle(document.getElementById('ovSeeMore'), { showLabel: 'See more', hideLabel: 'See less' });
  wireToggle(document.getElementById('srcSeeMore'), { showLabel: 'See more sources (8)', hideLabel: 'Show fewer sources' });

  document.querySelectorAll('.ov-toggle').forEach((btn) => {
    const target = document.getElementById(btn.getAttribute('aria-controls'));
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      if (target) target.hidden = expanded;
    });
  });

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach((btn) => {
    const answer = document.getElementById(btn.getAttribute('aria-controls'));
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      if (answer) answer.hidden = expanded;
    });
  });

  // Pill tab rows (visual state only — single-select within each row)
  document.querySelectorAll('.tab-row').forEach((row) => {
    const tabs = Array.from(row.querySelectorAll('.tab-btn'));
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => t.setAttribute('aria-selected', 'false'));
        tab.setAttribute('aria-selected', 'true');
      });
    });
  });

  // Pagination — Companies, Industries, Cities directories.
  // Shows `perPage` items at a time from `listEl`, builds Prev/1..N/Next
  // controls in `navEl`, and hides the whole pagination bar when everything
  // already fits on one page.
  function createPaginator({ listEl, itemSelector, perPage, wrapperEl, captionEl, navEl, noun }) {
    if (!listEl || !wrapperEl) return null;
    let page = 1;
    let items = Array.from(listEl.querySelectorAll(itemSelector));

    function totalPages() {
      return Math.max(1, Math.ceil(items.length / perPage));
    }

    function render() {
      const tp = totalPages();
      if (page > tp) page = tp;
      if (page < 1) page = 1;

      Array.from(listEl.querySelectorAll(itemSelector)).forEach((card) => { card.hidden = true; });
      items.forEach((card, i) => {
        card.hidden = Math.floor(i / perPage) + 1 !== page;
      });

      if (captionEl) {
        if (!items.length) {
          captionEl.textContent = `No ${noun} found`;
        } else {
          const start = (page - 1) * perPage + 1;
          const end = Math.min(page * perPage, items.length);
          captionEl.textContent = `Showing ${start}–${end} of ${items.length} ${noun}`;
        }
      }

      wrapperEl.hidden = items.length === 0;

      if (navEl) {
        navEl.innerHTML = '';
        if (tp > 1) {
          const prev = document.createElement('button');
          prev.type = 'button';
          prev.className = 'page-btn';
          prev.textContent = '‹ Prev';
          prev.disabled = page === 1;
          prev.addEventListener('click', () => goTo(page - 1));
          navEl.appendChild(prev);

          for (let p = 1; p <= tp; p++) {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'page-num' + (p === page ? ' active' : '');
            btn.textContent = String(p);
            btn.addEventListener('click', () => goTo(p));
            navEl.appendChild(btn);
          }

          const next = document.createElement('button');
          next.type = 'button';
          next.className = 'page-btn';
          next.textContent = 'Next ›';
          next.disabled = page === tp;
          next.addEventListener('click', () => goTo(page + 1));
          navEl.appendChild(next);
        }
      }
    }

    function goTo(p) {
      page = p;
      render();
      wrapperEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function setItems(newItems) {
      items = newItems;
      page = 1;
      render();
    }

    render();
    return { setItems, goTo };
  }

  const companyList = document.getElementById('companyList');
  const companyPaginator = createPaginator({
    listEl: companyList,
    itemSelector: '.cf-item',
    perPage: 10,
    wrapperEl: document.getElementById('companyPagination'),
    captionEl: document.getElementById('companyPaginationCaption'),
    navEl: document.getElementById('companyPaginationNav'),
    noun: 'companies'
  });

  createPaginator({
    listEl: document.getElementById('industryList'),
    itemSelector: '.cf-item',
    perPage: 10,
    wrapperEl: document.getElementById('industryPagination'),
    captionEl: document.getElementById('industryPaginationCaption'),
    navEl: document.getElementById('industryPaginationNav'),
    noun: 'industries'
  });

  createPaginator({
    listEl: document.getElementById('cityList'),
    itemSelector: '.cf-item',
    perPage: 10,
    wrapperEl: document.getElementById('cityPagination'),
    captionEl: document.getElementById('cityPaginationCaption'),
    navEl: document.getElementById('cityPaginationNav'),
    noun: 'cities'
  });

  // Live search filters the company list, then re-paginates the matches.
  const companySearch = document.getElementById('companySearch');
  if (companySearch && companyList && companyPaginator) {
    const allCards = Array.from(companyList.querySelectorAll('.cf-item'));
    companySearch.addEventListener('input', () => {
      const q = companySearch.value.trim().toLowerCase();
      const matches = !q ? allCards : allCards.filter((card) => card.textContent.toLowerCase().includes(q));
      companyPaginator.setItems(matches);
    });
  }

  const loadMoreFoundersBtn = document.getElementById('loadMoreFounders');
  if (loadMoreFoundersBtn) {
    loadMoreFoundersBtn.addEventListener('click', () => {
      showToast('More founder profiles coming soon');
    });
  }

  const fcMessages = {
    submitCompanyBtn: 'Opening company submission form…',
    claimProfileBtn: 'Opening profile claim form…',
    updateInfoBtn: 'Opening information update form…'
  };
  Object.keys(fcMessages).forEach((id) => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', () => showToast(fcMessages[id]));
  });

  // Scroll-reveal
  const revealTargets = Array.from(document.querySelectorAll('.reveal'));

  const initiallyVisible = new Set();
  revealTargets.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 1.15) {
      el.classList.add('is-visible');
      initiallyVisible.add(el);
    }
  });

  const remaining = revealTargets.filter((el) => !initiallyVisible.has(el));

  if ('IntersectionObserver' in window && remaining.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    remaining.forEach((el) => revealObserver.observe(el));

    setTimeout(() => {
      remaining.forEach((el) => el.classList.add('is-visible'));
      revealObserver.disconnect();
    }, 4000);
  } else {
    remaining.forEach((el) => el.classList.add('is-visible'));
  }
})();

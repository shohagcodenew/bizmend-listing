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

  // ---- Generic data-toast delegation (covers most repeated buttons/links) ----
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-toast]');
    if (el) showToast(el.getAttribute('data-toast'));
  });

  // ---- Hero: save, share, correction, gallery scroll ----

  document.getElementById('saveBtn').addEventListener('click', function () {
    const nowSaved = toggleButton(this, 'Saved', 'Save');
    showToast(nowSaved ? 'Profile saved' : 'Removed from saved profiles');
  });

  document.getElementById('shareBtn').addEventListener('click', async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: 'OpenAI — Company Profile', url });
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

  document.getElementById('galleryBtn').addEventListener('click', () => {
    document.getElementById('gallerySection').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  document.getElementById('followBtn').addEventListener('click', function () {
    const nowFollowing = toggleButton(this, 'Following', 'Follow Company');
    showToast(nowFollowing ? 'You are now following OpenAI' : 'Unfollowed OpenAI');
  });

  document.getElementById('visitWebsiteBtn').addEventListener('click', () => {
    showToast('Opening openai.com…');
  });

  // ---- Quick Facts toggle ----
  const qfToggle = document.getElementById('qfToggle');
  const qfExtra = document.getElementById('qfExtra');
  const qfLabel = qfToggle.querySelector('span');

  qfToggle.addEventListener('click', () => {
    const expanded = qfToggle.getAttribute('aria-expanded') === 'true';
    qfToggle.setAttribute('aria-expanded', String(!expanded));
    qfExtra.hidden = expanded;
    qfLabel.textContent = expanded ? 'View more facts' : 'Show less facts';
    if (expanded) qfExtra.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  // ---- Company Overview: see-more paragraph + individual insight toggles ----
  const ovSeeMore = document.getElementById('ovSeeMore');
  const ovMore = document.getElementById('ovMore');
  const ovSeeMoreLabel = ovSeeMore.querySelector('span');

  ovSeeMore.addEventListener('click', () => {
    const expanded = ovSeeMore.getAttribute('aria-expanded') === 'true';
    ovSeeMore.setAttribute('aria-expanded', String(!expanded));
    ovMore.hidden = expanded;
    ovSeeMoreLabel.textContent = expanded ? 'See more' : 'See less';
  });

  document.querySelectorAll('.ov-toggle').forEach((btn) => {
    const target = document.getElementById(btn.getAttribute('aria-controls'));
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      target.hidden = expanded;
    });
  });

  // ---- Services modal ----
  const SERVICES = {
    business: {
      title: 'ChatGPT Business',
      desc: 'Team-focused AI workspace for daily business productivity and collaboration.',
      tags: ['Business AI Plan', 'Team Productivity', 'Workplace AI'],
      includes: 'Shared team workspace, admin controls, business-grade ChatGPT access, collaboration support, and workplace AI features.',
      bestFor: 'Small teams, growing companies, departments, agencies, and workplace teams using AI for daily tasks.',
      delivery: 'Subscription-based business plan',
    },
    enterprise: {
      title: 'ChatGPT Enterprise',
      desc: 'Enterprise-grade ChatGPT plan for larger organizations needing stronger admin, privacy, security, and scale controls.',
      tags: ['Enterprise AI Plan', 'Security & Admin', 'Scale Controls'],
      includes: 'Advanced admin controls, SSO/MFA, data controls, usage management, and enterprise-grade security and privacy.',
      bestFor: 'Large companies, enterprise teams, and organizations with advanced governance needs.',
      delivery: 'Subscription-based enterprise plan',
    },
    education: {
      title: 'ChatGPT for Education',
      desc: 'Education-focused ChatGPT offering for students, educators, institutions, learning workflows, and academic support.',
      tags: ['Education AI', 'Learning Support', 'Institutional Plan'],
      includes: 'Classroom-friendly access, learning workflow support, and institutional administration tools.',
      bestFor: 'Universities, schools, educators, students, and academic institutions.',
      delivery: 'Subscription-based education plan',
    },
    api: {
      title: 'API Platform',
      desc: 'Developer platform for building AI-powered applications, agents, automations, assistants, and product workflows.',
      tags: ['Developer Platform', 'API Access', 'Agent Tools'],
      includes: 'Model access, documentation, safety guides, usage dashboards, and platform controls for developers.',
      bestFor: 'Developers, startups, product teams, engineering teams, and AI app builders.',
      delivery: 'Usage-based developer platform',
    },
    openmodels: {
      title: 'Open Models',
      desc: 'OpenAI’s developer-facing model resources for teams working with accessible AI model options.',
      tags: ['Developer Resource', 'Model Access'],
      includes: 'Access to accessible model options and developer resources for building with OpenAI technology.',
      bestFor: 'Developers, researchers, technical teams, and AI product builders.',
      delivery: 'Developer resource, availability varies',
    },
    partner: {
      title: 'Partner Network',
      desc: 'Business partner resource area for organizations looking at OpenAI-related implementation and ecosystem support.',
      tags: ['Business Support', 'Implementation'],
      includes: 'Implementation guidance, ecosystem support, and partner resources for adopting OpenAI technology.',
      bestFor: 'Companies, implementation teams, consultants, and enterprise buyers.',
      delivery: 'Partner-led implementation support',
    },
  };

  const svcModal = document.getElementById('svcModal');
  const svcModalTitle = document.getElementById('svcModalTitle');
  const svcModalDesc = document.getElementById('svcModalDesc');
  const svcModalTags = document.getElementById('svcModalTags');
  const svcModalIncludes = document.getElementById('svcModalIncludes');
  const svcModalFor = document.getElementById('svcModalFor');
  const svcModalDelivery = document.getElementById('svcModalDelivery');
  const svcModalClose = document.getElementById('svcModalClose');
  let lastSvcTrigger = null;

  function openSvcModal(key, trigger) {
    const s = SERVICES[key];
    if (!s) return;
    lastSvcTrigger = trigger;
    svcModalTitle.textContent = s.title;
    svcModalDesc.textContent = s.desc;
    svcModalTags.innerHTML = s.tags.map((t) => `<span class="chip">${t}</span>`).join('');
    svcModalIncludes.textContent = s.includes;
    svcModalFor.textContent = s.bestFor;
    svcModalDelivery.textContent = s.delivery;
    svcModal.classList.add('show');
    svcModal.setAttribute('aria-hidden', 'false');
    svcModalClose.focus();
  }

  function closeSvcModal() {
    svcModal.classList.remove('show');
    svcModal.setAttribute('aria-hidden', 'true');
    if (lastSvcTrigger) lastSvcTrigger.focus();
  }

  document.querySelectorAll('[data-svc]').forEach((btn) => {
    btn.addEventListener('click', () => openSvcModal(btn.getAttribute('data-svc'), btn));
  });
  svcModalClose.addEventListener('click', closeSvcModal);
  svcModal.addEventListener('click', (e) => {
    if (e.target === svcModal) closeSvcModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && svcModal.classList.contains('show')) closeSvcModal();
  });

  // ---- Generic toggle-row helper (See more / See less patterns) ----
  function wireSeeMore(btnId, panelId, showLabel, hideLabel) {
    const btn = document.getElementById(btnId);
    const panel = document.getElementById(panelId);
    if (!btn || !panel) return;
    const label = btn.querySelector('span');
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      panel.hidden = expanded;
      if (label) label.textContent = expanded ? showLabel : hideLabel;
    });
  }

  wireSeeMore('custSeeMore', 'custMore', 'See more customer examples', 'Show fewer customer examples');
  wireSeeMore('partSeeMore', 'partMore', 'See more partners', 'Show fewer partners');
  wireSeeMore('relSeeMore', 'relMore', 'See more related companies', 'Show fewer related companies');
  wireSeeMore('srcSeeMore', 'srcMore', 'See more sources (8)', 'Show fewer sources');
  wireSeeMore('repSeeMore', 'repMore', 'See more insights (3)', 'Show fewer insights');
  wireSeeMore('tlSeeMore', 'tlMore', 'See more milestones (2)', 'Show fewer milestones');

  // ---- Generic tab-filter helper (Gallery, Customers, Related Companies) ----
  function wireTabFilter(tabsRootId, itemsRootId) {
    const tabsRoot = document.getElementById(tabsRootId);
    const itemsRoot = document.getElementById(itemsRootId);
    if (!tabsRoot || !itemsRoot) return;
    const tabs = Array.from(tabsRoot.querySelectorAll('.tab-btn[data-filter]'));
    const items = Array.from(itemsRoot.querySelectorAll('[data-cat]'));

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => t.setAttribute('aria-selected', String(t === tab)));
        const filter = tab.getAttribute('data-filter');
        items.forEach((item) => {
          const cats = (item.getAttribute('data-cat') || '').split(/\s+/);
          item.style.display = filter === 'all' || cats.includes(filter) ? '' : 'none';
        });
      });
    });
  }

  wireTabFilter('galleryTabs', 'galleryGrid');
  wireTabFilter('custTabs', 'custGrid');
  wireTabFilter('relTabs', 'relGrid');

  // ---- FAQ accordion ----
  document.querySelectorAll('.faq-q').forEach((btn) => {
    const answer = document.getElementById(btn.getAttribute('aria-controls'));
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      answer.hidden = expanded;
    });
  });

  // ---- Final CTA ----
  const fcSuggestBtn = document.getElementById('fcSuggestBtn');
  const fcBrowseBtn = document.getElementById('fcBrowseBtn');
  if (fcSuggestBtn) fcSuggestBtn.addEventListener('click', () => showToast('Correction form coming soon'));
  if (fcBrowseBtn) fcBrowseBtn.addEventListener('click', () => showToast('Opening more company profiles…'));

  // ---- Scroll reveal ----
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

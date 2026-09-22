(function () {
  const profileId = 'sam-altman';
  const storage = {
    get(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } },
    set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* Storage may be unavailable in private contexts. */ } }
  };
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
    setButtonLabel(btn, !pressed ? onLabel : offLabel);
    return !pressed;
  }

  function setButtonLabel(btn, value) {
    const label = btn.querySelector('span');
    if (label) { label.textContent = value; return; }
    const textNode = Array.from(btn.childNodes).find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
    if (textNode) textNode.textContent = ` ${value}`;
  }

  function setPressedButton(btn, pressed, onLabel, offLabel) {
    btn.setAttribute('aria-pressed', String(pressed));
    setButtonLabel(btn, pressed ? onLabel : offLabel);
  }

  const followBtn = document.getElementById('followBtn');
  const saveBtn = document.getElementById('saveBtn');
  setPressedButton(followBtn, storage.get(`bizmend:follow:${profileId}`, false), 'Following', 'Follow');
  setPressedButton(saveBtn, storage.get(`bizmend:save:${profileId}`, false), 'Saved', 'Save');

  followBtn.addEventListener('click', function () {
    const nowFollowing = toggleButton(this, 'Following', 'Follow');
    storage.set(`bizmend:follow:${profileId}`, nowFollowing);
    showToast(nowFollowing ? 'You are now following Sam Altman' : 'Unfollowed Sam Altman');
  });

  saveBtn.addEventListener('click', function () {
    const nowSaved = toggleButton(this, 'Saved', 'Save');
    storage.set(`bizmend:save:${profileId}`, nowSaved);
    showToast(nowSaved ? 'Profile saved' : 'Removed from saved profiles');
  });

  document.getElementById('shareBtn').addEventListener('click', async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Sam Altman — Founder Profile', url });
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

  const correctionDialog = document.getElementById('correctionDialog');
  const correctionForm = document.getElementById('correctionForm');
  const correctionError = document.getElementById('correctionError');
  document.getElementById('correctionBtn').addEventListener('click', () => correctionDialog.showModal());
  document.getElementById('correctionClose').addEventListener('click', () => correctionDialog.close());
  document.getElementById('correctionCancel').addEventListener('click', () => correctionDialog.close());
  correctionForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = correctionForm.elements.message.value.trim();
    if (message.length < 10) {
      correctionError.textContent = 'Please enter at least 10 characters so the review team has enough context.';
      correctionError.hidden = false;
      return;
    }
    const suggestions = storage.get('bizmend:corrections', []);
    suggestions.push({ profileId, email: correctionForm.elements.email.value.trim(), message, submittedAt: new Date().toISOString() });
    storage.set('bizmend:corrections', suggestions);
    correctionForm.reset();
    correctionError.hidden = true;
    correctionDialog.close();
    showToast('Suggestion saved for review');
  });

  document.getElementById('viewCompanyBtn').addEventListener('click', () => {
    window.location.assign('../../companies/openai/index.html');
  });

  document.getElementById('galleryBtn').addEventListener('click', () => {
    document.querySelector('[aria-label="Gallery and videos"]').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  const qfToggle = document.getElementById('qfToggle');
  const qfExtra = document.getElementById('qfExtra');
  const qfLabel = qfToggle.querySelector('span');
  const qfMoreCount = document.getElementById('qfMoreCount');
  const qfVisibleCount = document.getElementById('qfVisibleCount');
  const coreCount = document.querySelectorAll('#qfCore .qf-item').length;
  const extraCount = qfExtra.querySelectorAll('.qf-item').length;

  qfToggle.addEventListener('click', () => {
    const expanded = qfToggle.getAttribute('aria-expanded') === 'true';
    qfToggle.setAttribute('aria-expanded', String(!expanded));
    qfExtra.hidden = expanded;
    qfLabel.textContent = expanded ? 'View more facts' : 'Show less facts';
    qfVisibleCount.textContent = expanded ? coreCount : coreCount + extraCount;
    qfMoreCount.textContent = expanded ? extraCount : 0;
    if (expanded) qfExtra.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

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

  const kaSeeMore = document.getElementById('kaSeeMore');
  const kaMore = document.getElementById('kaMore');
  const kaSeeMoreLabel = kaSeeMore.querySelector('span');
  const kaMoreCount = kaMore.querySelectorAll('.ka-row').length;

  kaSeeMore.addEventListener('click', () => {
    const expanded = kaSeeMore.getAttribute('aria-expanded') === 'true';
    kaSeeMore.setAttribute('aria-expanded', String(!expanded));
    kaMore.hidden = expanded;
    kaSeeMoreLabel.textContent = expanded ? `See more achievements (${kaMoreCount})` : 'Show less achievements';
  });

  const bioSeeMore = document.getElementById('bioSeeMore');
  const bioMore = document.getElementById('bioMore');
  const bioSeeMoreLabel = bioSeeMore.querySelector('span');
  const bioMoreCount = bioMore.querySelectorAll('.bio-item').length;

  bioSeeMore.addEventListener('click', () => {
    const expanded = bioSeeMore.getAttribute('aria-expanded') === 'true';
    bioSeeMore.setAttribute('aria-expanded', String(!expanded));
    bioMore.hidden = expanded;
    bioSeeMoreLabel.textContent = expanded ? `See more milestones (${bioMoreCount})` : 'Show less milestones';
  });

  const ctSeeMore = document.getElementById('ctSeeMore');
  const ctMore = document.getElementById('ctMore');
  const ctSeeMoreLabel = ctSeeMore.querySelector('span');
  const ctMoreCount = ctMore.querySelectorAll('.ka-row').length;

  ctSeeMore.addEventListener('click', () => {
    const expanded = ctSeeMore.getAttribute('aria-expanded') === 'true';
    ctSeeMore.setAttribute('aria-expanded', String(!expanded));
    ctMore.hidden = expanded;
    ctSeeMoreLabel.textContent = expanded ? `See more milestones (${ctMoreCount})` : 'Show less milestones';
  });

  const prSeeMore = document.getElementById('prSeeMore');
  const prMore = document.getElementById('prMore');
  const prSeeMoreLabel = prSeeMore.querySelector('span');
  const prMoreCount = prMore.querySelectorAll('.cf-item').length;

  prSeeMore.addEventListener('click', () => {
    const expanded = prSeeMore.getAttribute('aria-expanded') === 'true';
    prSeeMore.setAttribute('aria-expanded', String(!expanded));
    prMore.hidden = expanded;
    prSeeMoreLabel.textContent = expanded ? `View more products (${prMoreCount})` : 'Show less products';
  });

  const ivSeeMore = document.getElementById('ivSeeMore');
  const ivMore = document.getElementById('ivMore');
  const ivSeeMoreLabel = ivSeeMore.querySelector('span');
  const ivMoreCount = ivMore.querySelectorAll('.cf-item').length;

  ivSeeMore.addEventListener('click', () => {
    const expanded = ivSeeMore.getAttribute('aria-expanded') === 'true';
    ivSeeMore.setAttribute('aria-expanded', String(!expanded));
    ivMore.hidden = expanded;
    ivSeeMoreLabel.textContent = expanded ? `View more roles (${ivMoreCount})` : 'Show less roles';
  });

  const exSeeMore = document.getElementById('exSeeMore');
  const exMore = document.getElementById('exMore');
  const exSeeMoreLabel = exSeeMore.querySelector('span');
  const exMoreCount = exMore.querySelectorAll('.cf-item').length;

  exSeeMore.addEventListener('click', () => {
    const expanded = exSeeMore.getAttribute('aria-expanded') === 'true';
    exSeeMore.setAttribute('aria-expanded', String(!expanded));
    exMore.hidden = expanded;
    exSeeMoreLabel.textContent = expanded ? `View more expertise areas (${exMoreCount})` : 'Show less expertise areas';
  });

  const awSeeMore = document.getElementById('awSeeMore');
  const awMore = document.getElementById('awMore');
  const awSeeMoreLabel = awSeeMore.querySelector('span');
  const awMoreCount = awMore.querySelectorAll('.cf-item').length;

  awSeeMore.addEventListener('click', () => {
    const expanded = awSeeMore.getAttribute('aria-expanded') === 'true';
    awSeeMore.setAttribute('aria-expanded', String(!expanded));
    awMore.hidden = expanded;
    awSeeMoreLabel.textContent = expanded ? `View more recognitions (${awMoreCount})` : 'Show less recognitions';
  });

  const mdSeeMore = document.getElementById('mdSeeMore');
  const mdMore = document.getElementById('mdMore');
  const mdSeeMoreLabel = mdSeeMore.querySelector('span');
  const mdMoreCount = mdMore.querySelectorAll('.cf-item').length;

  mdSeeMore.addEventListener('click', () => {
    const expanded = mdSeeMore.getAttribute('aria-expanded') === 'true';
    mdSeeMore.setAttribute('aria-expanded', String(!expanded));
    mdMore.hidden = expanded;
    mdSeeMoreLabel.textContent = expanded ? `View more appearances (${mdMoreCount})` : 'Show less appearances';
  });

  const biSeeMore = document.getElementById('biSeeMore');
  const biMore = document.getElementById('biMore');
  const biSeeMoreLabel = biSeeMore.querySelector('span');
  const biMoreCount = biMore.querySelectorAll('.cf-item').length;

  biSeeMore.addEventListener('click', () => {
    const expanded = biSeeMore.getAttribute('aria-expanded') === 'true';
    biSeeMore.setAttribute('aria-expanded', String(!expanded));
    biMore.hidden = expanded;
    biSeeMoreLabel.textContent = expanded ? `View more impact areas (${biMoreCount})` : 'Show less impact areas';
  });

  const netSeeMore = document.getElementById('netSeeMore');
  const netMore = document.getElementById('netMore');
  const netSeeMoreLabel = netSeeMore.querySelector('span');
  const netMoreCount = netMore.querySelectorAll('.net-item').length;

  netSeeMore.addEventListener('click', () => {
    const expanded = netSeeMore.getAttribute('aria-expanded') === 'true';
    netSeeMore.setAttribute('aria-expanded', String(!expanded));
    netMore.hidden = expanded;
    netSeeMoreLabel.textContent = expanded ? `Show more related people (${netMoreCount})` : 'Show fewer related people';
  });

  const glSeeMore = document.getElementById('glSeeMore');
  const glMore = document.getElementById('glMore');
  const glSeeMoreLabel = glSeeMore.querySelector('span');
  const glMoreCount = glMore.querySelectorAll('.gl-more-item').length;

  glSeeMore.addEventListener('click', () => {
    const expanded = glSeeMore.getAttribute('aria-expanded') === 'true';
    glSeeMore.setAttribute('aria-expanded', String(!expanded));
    glMore.hidden = expanded;
    glSeeMoreLabel.textContent = expanded ? `Show more media (${glMoreCount})` : 'Show fewer media';
  });

  const dsSeeMore = document.getElementById('dsSeeMore');
  const dsMore = document.getElementById('dsMore');
  const dsSeeMoreLabel = dsSeeMore.querySelector('span');
  const dsMoreCount = dsMore.querySelectorAll('.ds-item').length;

  dsSeeMore.addEventListener('click', () => {
    const expanded = dsSeeMore.getAttribute('aria-expanded') === 'true';
    dsSeeMore.setAttribute('aria-expanded', String(!expanded));
    dsMore.hidden = expanded;
    dsSeeMoreLabel.textContent = expanded ? `Show more disclosures (${dsMoreCount})` : 'Show fewer disclosures';
  });

  document.querySelectorAll('.faq-q').forEach((btn) => {
    const answer = document.getElementById(btn.getAttribute('aria-controls'));
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      answer.hidden = expanded;
    });
  });

  const fcBrowse = document.querySelector('.fc-btn-primary');
  const fcSuggest = document.querySelector('.fc-btn-outline');

  fcBrowse.addEventListener('click', () => window.location.assign('../index.html'));
  fcSuggest.addEventListener('click', () => correctionDialog.showModal());

  const srcSeeMore = document.getElementById('srcSeeMore');
  const srcMore = document.getElementById('srcMore');
  const srcSeeMoreLabel = srcSeeMore.querySelector('span');
  const srcMoreCount = srcMore.querySelectorAll('.src-item').length;

  srcSeeMore.addEventListener('click', () => {
    const expanded = srcSeeMore.getAttribute('aria-expanded') === 'true';
    srcSeeMore.setAttribute('aria-expanded', String(!expanded));
    srcMore.hidden = expanded;
    srcSeeMoreLabel.textContent = expanded ? `See more sources (${srcMoreCount})` : 'Show fewer sources';
  });

  const revealTargets = Array.from(document.querySelectorAll('.reveal'));

  // Reveal anything already within (or near) the initial viewport immediately —
  // don't make above-the-fold content depend on an observer callback firing.
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

    // Safety net: if the observer never fires (unusual host/embedding quirks),
    // never leave content permanently invisible.
    setTimeout(() => {
      remaining.forEach((el) => el.classList.add('is-visible'));
      revealObserver.disconnect();
    }, 4000);
  } else {
    remaining.forEach((el) => el.classList.add('is-visible'));
  }
})();

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
    showToast(nowSaved ? 'Service saved' : 'Removed from saved services');
  });

  document.getElementById('shareBtn').addEventListener('click', async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: 'OpenAI API — Service Profile', url });
        return;
      } catch (err) {
        /* user cancelled share sheet — fall through to clipboard */
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      showToast('Service link copied to clipboard');
    } catch (err) {
      showToast('Could not copy link');
    }
  });

  document.getElementById('correctionBtn').addEventListener('click', () => {
    showToast('Correction form coming soon');
  });

  const bottomCorrectionBtn = document.getElementById('bottomCorrectionBtn');
  if (bottomCorrectionBtn) {
    bottomCorrectionBtn.addEventListener('click', () => {
      showToast('Correction form coming soon');
    });
  }

  const followButtons = [
    { el: document.getElementById('followBtn'), onLabel: 'Following', offLabel: 'Follow Service' },
    { el: document.getElementById('followBtnBottom'), onLabel: 'Following', offLabel: 'Follow this Service' }
  ].filter((entry) => entry.el);

  followButtons.forEach(({ el, onLabel, offLabel }) => {
    el.addEventListener('click', function () {
      const nowFollowing = toggleButton(this, onLabel, offLabel);
      followButtons.forEach((other) => {
        if (other.el !== this) {
          other.el.setAttribute('aria-pressed', String(nowFollowing));
          const label = other.el.querySelector('span');
          if (label) label.textContent = nowFollowing ? other.onLabel : other.offLabel;
        }
      });
      showToast(nowFollowing ? 'You are now following OpenAI API' : 'Unfollowed OpenAI API');
    });
  });

  const surfacesBtn = document.getElementById('surfacesBtn');
  if (surfacesBtn) {
    surfacesBtn.addEventListener('click', () => {
      showToast('Available via REST API, Python SDK, Node SDK and the developer dashboard');
    });
  }

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

  const srcToggle = document.getElementById('srcToggle');
  if (srcToggle) {
    const srcExtra = document.getElementById('srcExtra');
    const srcToggleLabel = srcToggle.querySelector('span');
    srcToggle.addEventListener('click', () => {
      const expanded = srcToggle.getAttribute('aria-expanded') === 'true';
      srcToggle.setAttribute('aria-expanded', String(!expanded));
      srcExtra.hidden = expanded;
      srcToggleLabel.textContent = expanded ? 'Show all 8 sources' : 'Show fewer sources';
    });
  }

  document.querySelectorAll('.faq-q').forEach((btn) => {
    const target = document.getElementById(btn.getAttribute('aria-controls'));
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      target.hidden = expanded;
    });
  });
})();

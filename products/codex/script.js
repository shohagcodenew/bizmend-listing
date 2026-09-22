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
    showToast(nowSaved ? 'Product saved' : 'Removed from saved products');
  });

  document.getElementById('shareBtn').addEventListener('click', async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Codex by OpenAI — Product Profile', url });
        return;
      } catch (err) {
        /* user cancelled share sheet — fall through to clipboard */
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      showToast('Product link copied to clipboard');
    } catch (err) {
      showToast('Could not copy link');
    }
  });

  document.getElementById('correctionBtn').addEventListener('click', () => {
    showToast('Correction form coming soon');
  });

  document.getElementById('followBtn').addEventListener('click', function () {
    const nowFollowing = toggleButton(this, 'Following', 'Follow Product');
    showToast(nowFollowing ? 'You are now following Codex' : 'Unfollowed Codex');
  });

  document.getElementById('relatedProductsBtn').addEventListener('click', () => {
    showToast('Opening related products…');
  });

  document.getElementById('surfacesBtn').addEventListener('click', () => {
    showToast('Codex is available on ChatGPT, IDE, CLI and Cloud');
  });

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

  const sourceToggle = document.getElementById('sourceToggle');
  const sourceExtra = document.getElementById('sourceExtra');
  const sourceLabel = sourceToggle.querySelector('span');

  sourceToggle.addEventListener('click', () => {
    const expanded = sourceToggle.getAttribute('aria-expanded') === 'true';
    sourceToggle.setAttribute('aria-expanded', String(!expanded));
    sourceExtra.hidden = expanded;
    sourceLabel.textContent = expanded ? 'Show more sources' : 'Show fewer sources';
    if (expanded) sourceExtra.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
})();

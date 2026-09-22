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
    showToast(nowSaved ? 'Report saved' : 'Removed from saved reports');
  });

  document.getElementById('shareBtn').addEventListener('click', async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: 'OpenAI Market Outlook — BizMend Research', url });
        return;
      } catch (err) {
        /* user cancelled share sheet — fall through to clipboard */
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      showToast('Report link copied to clipboard');
    } catch (err) {
      showToast('Could not copy link');
    }
  });

  function scrollToDownload() {
    const form = document.getElementById('downloadForm');
    if (form) form.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  document.getElementById('downloadTopBtn').addEventListener('click', scrollToDownload);
  document.getElementById('downloadHeroBtn').addEventListener('click', scrollToDownload);

  document.getElementById('downloadForm').addEventListener('submit', function (e) {
    e.preventDefault();
    showToast('Thanks — check your inbox for the full report.');
    this.reset();
  });

  document.querySelectorAll('.ov-toggle').forEach((btn) => {
    const target = document.getElementById(btn.getAttribute('aria-controls'));
    if (!target) return;
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      target.hidden = expanded;
    });
  });
})();

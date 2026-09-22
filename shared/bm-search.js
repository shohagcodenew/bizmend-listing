/* ============================================================
   BizMend premium smart search. Attaches a live, ranked,
   keyboard-navigable results dropdown to any input carrying
   class "bm-smart-search-input" (wrapped in a ".bm-smart-search"
   container). Reads window.BM_SEARCH_INDEX (bm-search-data.js).

   Compound queries work by requiring every query word to appear
   somewhere across an entity's name + type + badge + meta, so
   "Stripe Ireland" finds Patrick Collison (Stripe, Ireland) and
   "Fintech United Kingdom" finds Revolut (Fintech, London, UK) —
   no rigid field-order parsing needed.
   ============================================================ */
(function () {
  "use strict";
  var INDEX = window.BM_SEARCH_INDEX || [];
  if (!INDEX.length) return;

  // ---- resolve site-root prefix from this page's own chrome script tag ----
  var chromeScript = document.querySelector('script[src$="shared/bm-chrome.js"]');
  var ROOT = "";
  if (chromeScript) {
    var src = chromeScript.getAttribute("src");
    ROOT = src.replace(/shared\/bm-chrome\.js$/, "");
  }

  var TYPE_ICONS = {
    Company: "🏢", Founder: "👤", Product: "🧩", Service: "🔧",
    Topic: "🏷️", Industry: "🏭", Country: "🌍", City: "🏙️",
    Report: "📊", Insight: "💡"
  };
  var TYPE_COLORS = {
    Company: "#0d9488", Founder: "#6366f1", Product: "#f59e0b", Service: "#2563eb",
    Topic: "#0d9488", Industry: "#7c3aed", Country: "#16a34a", City: "#16a34a",
    Report: "#2563eb", Insight: "#f97316"
  };

  // ---- precompute searchable text per entry ----
  INDEX.forEach(function (e) {
    e._text = [e.name, e.type, e.badge, e.meta].join(" ").toLowerCase();
    e._nameLower = e.name.toLowerCase();
  });

  function stripTags(s) { return (s || "").replace(/<[^>]+>/g, ""); }

  function search(query) {
    var tokens = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    if (!tokens.length) return [];
    var scored = [];
    INDEX.forEach(function (e) {
      var matchedAll = tokens.every(function (t) { return e._text.indexOf(t) !== -1; });
      if (!matchedAll) return;
      var score = 0;
      if (e._nameLower === query.toLowerCase().trim()) score += 100;
      else if (e._nameLower.indexOf(query.toLowerCase().trim()) === 0) score += 50;
      tokens.forEach(function (t) { if (e._nameLower.indexOf(t) !== -1) score += 10; });
      if (e.verified) score += 3;
      score -= e.name.length * 0.05;
      scored.push({ entry: e, score: score });
    });
    scored.sort(function (a, b) { return b.score - a.score; });
    return scored.map(function (s) { return s.entry; }).slice(0, 8);
  }

  // ---- toast (shared across all search widgets on the page) ----
  var toastEl;
  function showToast(msg) {
    if (!toastEl) {
      toastEl = document.getElementById("toast") || document.createElement("div");
      if (!toastEl.id) {
        toastEl.id = "toast";
        toastEl.style.cssText = "position:fixed;left:50%;bottom:28px;transform:translateX(-50%) translateY(20px);background:#16233f;color:#fff;padding:12px 20px;border-radius:10px;font:600 13.5px 'Inter',sans-serif;box-shadow:0 10px 30px rgba(0,0,0,.25);opacity:0;pointer-events:none;transition:opacity .2s ease, transform .2s ease;z-index:1000;";
        document.body.appendChild(toastEl);
      }
    }
    toastEl.textContent = msg;
    toastEl.style.opacity = "1";
    toastEl.style.transform = "translateX(-50%) translateY(0)";
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(function () {
      toastEl.style.opacity = "0";
      toastEl.style.transform = "translateX(-50%) translateY(20px)";
    }, 2200);
  }

  function resultRow(entry, isActive) {
    var icon = TYPE_ICONS[entry.type] || "•";
    var color = TYPE_COLORS[entry.type] || "#0d9488";
    var tag = entry.url ? "a" : "a";
    var href = entry.url ? ROOT + entry.url : "#";
    var extra = entry.url ? "" : ' data-bm-toast="' + entry.type + ' preview coming soon"';
    return '<a href="' + href + '" class="bm-search-result' + (isActive ? " bm-search-active" : "") + '"' + extra + '>' +
      '<span class="bm-search-type-icon" style="background:' + color + '1a;color:' + color + ';">' + icon + '</span>' +
      '<span class="bm-search-result-text">' +
        '<span class="bm-search-result-name">' + entry.name + (entry.verified ? '<span class="bm-search-verified">✓</span>' : '') + '</span>' +
        '<span class="bm-search-result-meta">' + stripTags(entry.badge) + (entry.meta ? " · " + entry.meta : "") + '</span>' +
      '</span>' +
      '<span class="bm-search-result-type">' + entry.type + '</span>' +
    '</a>';
  }

  function initWidget(input) {
    var wrap = input.closest(".bm-smart-search");
    if (!wrap) return;
    var panel = document.createElement("div");
    panel.className = "bm-search-panel";
    wrap.appendChild(panel);

    var activeIndex = -1;
    var currentResults = [];

    function render(results) {
      currentResults = results;
      activeIndex = -1;
      if (!results.length) {
        panel.innerHTML = '<div class="bm-search-empty">No matches yet — try a company, founder, industry or country.</div>';
      } else {
        panel.innerHTML =
          '<div class="bm-search-hint">' + results.length + (results.length === 8 ? "+" : "") + ' Result' + (results.length === 1 ? "" : "s") + '</div>' +
          results.map(function (e) { return resultRow(e, false); }).join("") +
          '<div class="bm-search-footer"><span><kbd>↑</kbd><kbd>↓</kbd> to navigate</span><span><kbd>Enter</kbd> to select</span></div>';
      }
    }

    function open() { wrap.classList.add("bm-search-open"); }
    function close() { wrap.classList.remove("bm-search-open"); activeIndex = -1; }

    function setActive(i) {
      var rows = panel.querySelectorAll(".bm-search-result");
      rows.forEach(function (r) { r.classList.remove("bm-search-active"); });
      if (i >= 0 && i < rows.length) {
        rows[i].classList.add("bm-search-active");
        rows[i].scrollIntoView({ block: "nearest" });
      }
      activeIndex = i;
    }

    input.addEventListener("input", function () {
      var q = input.value.trim();
      if (!q) { close(); return; }
      render(search(q));
      open();
    });

    input.addEventListener("focus", function () {
      if (input.value.trim()) { render(search(input.value.trim())); open(); }
    });

    input.addEventListener("keydown", function (e) {
      var rows = panel.querySelectorAll(".bm-search-result");
      if (e.key === "ArrowDown") { e.preventDefault(); if (rows.length) setActive((activeIndex + 1) % rows.length); }
      else if (e.key === "ArrowUp") { e.preventDefault(); if (rows.length) setActive((activeIndex - 1 + rows.length) % rows.length); }
      else if (e.key === "Enter") {
        if (activeIndex >= 0 && rows[activeIndex]) { e.preventDefault(); rows[activeIndex].click(); }
        else if (currentResults[0]) { e.preventDefault(); rows[0] && rows[0].click(); }
      } else if (e.key === "Escape") { close(); input.blur(); }
    });

    panel.addEventListener("click", function (e) {
      var trigger = e.target.closest("[data-bm-toast]");
      if (trigger) { e.preventDefault(); showToast(trigger.getAttribute("data-bm-toast")); }
    });

    document.addEventListener("click", function (e) {
      if (!wrap.contains(e.target)) close();
    });
  }

  document.querySelectorAll(".bm-smart-search-input").forEach(initWidget);
})();

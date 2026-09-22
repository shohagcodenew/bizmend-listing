/* ============================================================
   BizMend premium multi-field search. Wires three faceted inputs
   inside a ".bm-ms" container — each carrying data-bm-types
   (comma-separated BM_SEARCH_INDEX types it should suggest from)
   — into one combined, live-updating result set. Reads
   window.BM_SEARCH_INDEX (bm-search-data.js). Independent of and
   coexists with bm-search.js (the single-field widget).
   ============================================================ */
(function () {
  "use strict";
  var INDEX = window.BM_SEARCH_INDEX || [];
  if (!INDEX.length) return;

  var chromeScript = document.querySelector('script[src$="shared/bm-chrome.js"]');
  var ROOT = "";
  if (chromeScript) ROOT = chromeScript.getAttribute("src").replace(/shared\/bm-chrome\.js$/, "");

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

  INDEX.forEach(function (e) {
    e._text = [e.name, e.type, e.badge, e.meta].join(" ").toLowerCase();
    e._nameLower = e.name.toLowerCase();
  });

  function stripTags(s) { return (s || "").replace(/<[^>]+>/g, ""); }

  function combinedSearch(query) {
    var tokens = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    if (!tokens.length) return [];
    var scored = [];
    INDEX.forEach(function (e) {
      if (!tokens.every(function (t) { return e._text.indexOf(t) !== -1; })) return;
      var score = 0;
      tokens.forEach(function (t) { if (e._nameLower.indexOf(t) !== -1) score += 10; });
      if (e.verified) score += 3;
      score -= e.name.length * 0.05;
      scored.push({ entry: e, score: score });
    });
    scored.sort(function (a, b) { return b.score - a.score; });
    return scored.map(function (s) { return s.entry; }).slice(0, 8);
  }

  function fieldSuggestions(text, types) {
    var q = text.toLowerCase().trim();
    var pool = INDEX.filter(function (e) { return types.indexOf(e.type) !== -1; });
    if (!q) return pool.filter(function (e) { return e.verified; }).slice(0, 6);
    var scored = pool.filter(function (e) { return e._text.indexOf(q) !== -1; }).map(function (e) {
      var score = e._nameLower.indexOf(q) === 0 ? 20 : 5;
      if (e.verified) score += 3;
      return { entry: e, score: score };
    });
    scored.sort(function (a, b) { return b.score - a.score; });
    return scored.map(function (s) { return s.entry; }).slice(0, 6);
  }

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
    toastEl._t = setTimeout(function () { toastEl.style.opacity = "0"; toastEl.style.transform = "translateX(-50%) translateY(20px)"; }, 2200);
  }

  function resultRow(entry) {
    var icon = TYPE_ICONS[entry.type] || "•";
    var color = TYPE_COLORS[entry.type] || "#0d9488";
    var href = entry.url ? ROOT + entry.url : "#";
    var extra = entry.url ? "" : ' data-bm-toast="' + entry.type + ' preview coming soon"';
    return '<a href="' + href + '" class="bm-search-result"' + extra + '>' +
      '<span class="bm-search-type-icon" style="background:' + color + '1a;color:' + color + ';">' + icon + '</span>' +
      '<span class="bm-search-result-text">' +
        '<span class="bm-search-result-name">' + entry.name + (entry.verified ? '<span class="bm-search-verified">✓</span>' : '') + '</span>' +
        '<span class="bm-search-result-meta">' + stripTags(entry.badge) + (entry.meta ? " · " + entry.meta : "") + '</span>' +
      '</span>' +
      '<span class="bm-search-result-type">' + entry.type + '</span>' +
    '</a>';
  }

  function initBar(bar) {
    var fields = Array.prototype.slice.call(bar.querySelectorAll(".bm-ms-field"));
    var resultsPanel = bar.querySelector(".bm-ms-results");

    function combinedValue() {
      return fields.map(function (f) { return f.querySelector("input").value.trim(); }).filter(Boolean).join(" ");
    }

    function updateCombined() {
      var q = combinedValue();
      if (!q) { bar.classList.remove("bm-ms-results-open"); resultsPanel.innerHTML = ""; return; }
      var results = combinedSearch(q);
      if (!results.length) {
        resultsPanel.innerHTML = '<div class="bm-search-empty">No matches for "' + q + '" — try fewer filters.</div>';
      } else {
        resultsPanel.innerHTML =
          '<div class="bm-search-hint">' + results.length + (results.length === 8 ? "+" : "") + ' Result' + (results.length === 1 ? "" : "s") + '</div>' +
          results.map(resultRow).join("");
      }
      bar.classList.add("bm-ms-results-open");
    }

    fields.forEach(function (field) {
      var input = field.querySelector("input");
      var suggestBox = field.querySelector(".bm-ms-suggest");
      var clearBtn = field.querySelector(".bm-ms-clear");
      var types = (field.getAttribute("data-bm-types") || "").split(",").map(function (s) { return s.trim(); });

      function renderSuggest() {
        var items = fieldSuggestions(input.value, types);
        if (!items.length) { field.classList.remove("bm-ms-suggest-open"); return; }
        suggestBox.innerHTML = items.map(function (e) {
          var icon = TYPE_ICONS[e.type] || "•";
          return '<div class="bm-ms-suggest-row" data-name="' + e.name.replace(/"/g, "&quot;") + '">' +
            '<span class="bm-ms-suggest-icon">' + icon + '</span>' +
            '<span class="bm-ms-suggest-name">' + e.name + '</span>' +
            '<span class="bm-ms-suggest-meta">' + e.type + '</span>' +
          '</div>';
        }).join("");
        field.classList.add("bm-ms-suggest-open");
      }

      input.addEventListener("input", function () {
        field.classList.toggle("bm-ms-filled", !!input.value.trim());
        renderSuggest();
        updateCombined();
      });
      input.addEventListener("focus", function () { renderSuggest(); if (combinedValue()) updateCombined(); });
      input.addEventListener("keydown", function (e) {
        if (e.key === "Escape") { field.classList.remove("bm-ms-suggest-open"); bar.classList.remove("bm-ms-results-open"); input.blur(); }
      });

      suggestBox.addEventListener("click", function (e) {
        var row = e.target.closest(".bm-ms-suggest-row");
        if (!row) return;
        input.value = row.getAttribute("data-name");
        field.classList.add("bm-ms-filled");
        field.classList.remove("bm-ms-suggest-open");
        updateCombined();
      });

      clearBtn.addEventListener("click", function () {
        input.value = "";
        field.classList.remove("bm-ms-filled");
        field.classList.remove("bm-ms-suggest-open");
        updateCombined();
        input.focus();
      });
    });

    var submitBtn = bar.querySelector(".bm-ms-submit");
    if (submitBtn) {
      submitBtn.addEventListener("click", function (e) {
        e.preventDefault();
        updateCombined();
        var first = resultsPanel.querySelector(".bm-search-result");
        if (first) { first.scrollIntoView({ behavior: "smooth", block: "center" }); }
        else if (!combinedValue()) { showToast("Type a company, industry or location to search"); }
      });
    }

    resultsPanel.addEventListener("click", function (e) {
      var trigger = e.target.closest("[data-bm-toast]");
      if (trigger) { e.preventDefault(); showToast(trigger.getAttribute("data-bm-toast")); }
    });

    document.addEventListener("click", function (e) {
      if (!bar.contains(e.target)) {
        fields.forEach(function (f) { f.classList.remove("bm-ms-suggest-open"); });
        bar.classList.remove("bm-ms-results-open");
      }
    });
  }

  document.querySelectorAll(".bm-ms").forEach(initBar);
})();

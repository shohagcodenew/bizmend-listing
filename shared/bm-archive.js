/* ============================================================
   BizMend shared "rich archive" engine. Reads a page-defined
   `window.ARCHIVE_DATA` config and renders: stats, explorer
   (search/filter/sort/view-toggle), paginated card grid,
   recently-updated table, browse-by chips, and FAQ accordion.
   Pairs with bm-archive.css. Include after defining ARCHIVE_DATA.
   ============================================================ */
(function () {
  "use strict";
  var D = window.ARCHIVE_DATA;
  if (!D) return;

  var ICONS = {
    pin: '<svg viewBox="0 0 24 24"><path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    check: '<svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>',
    arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>',
    prev: '<svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>',
    next: '<svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>',
    chev: '<svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>',
    clear: '<svg viewBox="0 0 24 24"><path d="M1 4v6h6M23 20v-6h-6"/><path d="M20.49 9A9 9 0 105.64 18.36L1 20M23 4l-4.64 4.64"/></svg>',
    grid: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>',
    list: '<svg viewBox="0 0 24 24"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>'
  };

  // ---- toast (self-contained, in case the page has none of its own) ----
  var toastEl = document.getElementById("toast");
  if (!toastEl) {
    toastEl = document.createElement("div");
    toastEl.id = "toast";
    toastEl.style.cssText = "position:fixed;left:50%;bottom:28px;transform:translateX(-50%) translateY(20px);background:#16233f;color:#fff;padding:12px 20px;border-radius:10px;font:600 13.5px 'Inter',sans-serif;box-shadow:0 10px 30px rgba(0,0,0,.25);opacity:0;pointer-events:none;transition:opacity .2s ease, transform .2s ease;z-index:1000;";
    document.body.appendChild(toastEl);
  }
  var toastTimer;
  function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.style.opacity = "1";
    toastEl.style.transform = "translateX(-50%) translateY(0)";
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.style.opacity = "0";
      toastEl.style.transform = "translateX(-50%) translateY(20px)";
    }, 2200);
  }

  var items = D.items || [];
  var PAGE_SIZE = D.pageSize || 12;
  var currentPage = 1;
  var currentView = "grid";

  var grid = document.getElementById("arcGrid");
  var pagination = document.getElementById("arcPagination");
  var filterSearch = document.getElementById("arcFilterSearch");
  var heroSearch = document.getElementById("arcHeroSearch");
  var filter1 = document.getElementById("arcFilter1");
  var filter2 = document.getElementById("arcFilter2");
  var sortBy = document.getElementById("arcSort");

  function populateSelect(select, values, placeholder) {
    if (!select) return;
    select.innerHTML = '<option value="">' + placeholder + '</option>' +
      values.map(function (v) { return '<option value="' + v + '">' + v + '</option>'; }).join("");
  }

  function initFilters() {
    if (filter1 && D.filter1Field) {
      var v1 = Array.from(new Set(items.map(function (c) { return c[D.filter1Field]; }).filter(Boolean))).sort();
      populateSelect(filter1, v1, D.filter1Label || "Category");
    }
    if (filter2 && D.filter2Field) {
      var v2 = Array.from(new Set(items.map(function (c) { return c[D.filter2Field]; }).filter(Boolean))).sort();
      populateSelect(filter2, v2, D.filter2Label || "Type");
    }
  }

  function getFiltered() {
    var q = ((filterSearch && filterSearch.value) || (heroSearch && heroSearch.value) || "").toLowerCase().trim();
    var f1 = filter1 ? filter1.value : "";
    var f2 = filter2 ? filter2.value : "";
    var fields = D.searchFields || ["name", "desc"];

    var list = items.filter(function (c) {
      if (q && !fields.some(function (f) { return (c[f] || "").toLowerCase().includes(q); })) return false;
      if (f1 && D.filter1Field && c[D.filter1Field] !== f1) return false;
      if (f2 && D.filter2Field && c[D.filter2Field] !== f2) return false;
      return true;
    });

    var sortVal = sortBy ? sortBy.value : "recent";
    if (sortVal === "az") list = list.slice().sort(function (a, b) { return a.name.localeCompare(b.name); });
    else if (sortVal === "za") list = list.slice().sort(function (a, b) { return b.name.localeCompare(a.name); });

    return list;
  }

  function avatarStyle(c) { return 'background:' + (c.color || "#0d9488") + ';'; }

  function cardTemplate(c) {
    var metaHtml = (c.meta || []).map(function (m) {
      return '<div class="arc-card-meta">' + ICONS.pin + ' ' + m + '</div>';
    }).join("");
    var tagsHtml = (c.tags || []).map(function (t) { return '<span class="arc-tag">' + t + '</span>'; }).join("");
    var href = c.profileUrl || "#";
    var attrs = c.profileUrl ? "" : ' data-toast="' + (D.entitySingular || "Profile") + ' page coming soon"';
    return '\
    <div class="arc-card">\
      <div class="arc-card-top">\
        <div class="arc-card-avatar" style="' + avatarStyle(c) + '">' + (c.initials || "?") + '</div>\
        <div class="arc-card-heading">\
          <div class="arc-card-name-row">\
            <span class="arc-card-name">' + c.name + '</span>\
            ' + (c.verified ? '<span class="arc-badge-verified">' + ICONS.check + ' Verified</span>' : '') + '\
          </div>\
          ' + metaHtml + '\
        </div>\
      </div>\
      <div class="arc-card-desc">' + (c.desc || "") + '</div>\
      <div class="arc-card-tags">' + tagsHtml + '</div>\
      <div class="arc-card-bottom">\
        <span class="arc-card-updated">Updated ' + (c.updated || "recently") + '</span>\
        <a href="' + href + '" class="arc-card-view"' + attrs + '>View ' + (D.entitySingular || "Profile") + ' ' + ICONS.arrow + '</a>\
      </div>\
    </div>';
  }

  function renderPagination(totalItems) {
    if (!pagination) return;
    var totalPages = Math.max(1, Math.ceil(totalItems / PAGE_SIZE));
    if (currentPage > totalPages) currentPage = totalPages;

    var html = '<button class="arc-page-btn" id="arcPrevPage" ' + (currentPage === 1 ? "disabled" : "") + '>' + ICONS.prev + '</button>';
    var pages = [];
    for (var i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 1) pages.push(i);
      else if (pages[pages.length - 1] !== "...") pages.push("...");
    }
    pages.forEach(function (p) {
      html += p === "..." ? '<span class="arc-page-btn dots">...</span>' :
        '<button class="arc-page-btn ' + (p === currentPage ? "active" : "") + '" data-page="' + p + '">' + p + '</button>';
    });
    html += '<button class="arc-page-btn" id="arcNextPage" ' + (currentPage === totalPages ? "disabled" : "") + '>' + ICONS.next + '</button>';
    pagination.innerHTML = html;

    pagination.querySelectorAll("[data-page]").forEach(function (btn) {
      btn.addEventListener("click", function () { currentPage = parseInt(btn.dataset.page, 10); render(); });
    });
    var prev = document.getElementById("arcPrevPage");
    var next = document.getElementById("arcNextPage");
    if (prev) prev.addEventListener("click", function () { if (currentPage > 1) { currentPage--; render(); } });
    if (next) next.addEventListener("click", function () { if (currentPage < totalPages) { currentPage++; render(); } });
  }

  function render() {
    if (!grid) return;
    var filtered = getFiltered();
    var start = (currentPage - 1) * PAGE_SIZE;
    var pageItems = filtered.slice(start, start + PAGE_SIZE);

    grid.className = "arc-grid" + (currentView === "list" ? " list-view" : "");
    grid.innerHTML = pageItems.length
      ? pageItems.map(cardTemplate).join("")
      : '<div style="grid-column:1/-1;text-align:center;color:#94a3b8;padding:40px 0;">No ' + (D.entityPlural || "results").toLowerCase() + ' match your filters.</div>';

    renderPagination(filtered.length);
  }

  function renderRecent() {
    var list = document.getElementById("arcRecentList");
    if (!list || !D.recentUpdates) return;
    list.innerHTML = D.recentUpdates.map(function (r) {
      return '\
      <div class="arc-recent-row">\
        <div class="arc-col-name">\
          <div class="arc-mini-avatar" style="' + avatarStyle(r) + '">' + (r.initials || "?") + '</div>\
          <div>\
            <div class="arc-mini-name">' + r.name + '</div>\
            <div class="arc-mini-meta">' + (r.meta || "") + '</div>\
          </div>\
        </div>\
        <div class="arc-col-update">' + (r.update || "") + '</div>\
        <div class="arc-col-when">' + (r.when || "") + '</div>\
        <div class="arc-col-action"><a href="' + (r.profileUrl || "#") + '" class="arc-view-profile-btn"' + (r.profileUrl ? "" : ' data-toast="Profile coming soon"') + '>View Profile</a></div>\
      </div>';
    }).join("");
  }

  function renderChips() {
    (D.chipGroups || []).forEach(function (group) {
      var el = document.getElementById(group.elId);
      if (!el) return;
      var viewAll = '<a href="' + (group.viewAllUrl || "#") + '" class="arc-chip arc-chip-viewall"' + (group.viewAllUrl ? "" : ' data-toast="Full directory coming soon"') + '><span class="arc-chip-icon arc-chip-icon-viewall">' + ICONS.arrow + '</span><span class="arc-chip-text"><strong>' + (group.viewAllLabel || "View All") + '</strong></span></a>';
      el.innerHTML = group.items.map(function (it) {
        return '<a href="' + (it.url || "#") + '" class="arc-chip"' + (it.url ? "" : ' data-toast="Coming soon"') + '><span class="arc-chip-icon" style="background:' + (it.iconBg || "#e6f5f3") + ';">' + (it.icon || "•") + '</span><span class="arc-chip-text"><strong>' + it.label + '</strong><span>' + it.count + '</span></span></a>';
      }).join("") + viewAll;
    });
  }

  function renderFaq() {
    var list = document.getElementById("arcFaqList");
    if (!list || !D.faqs) return;
    list.innerHTML = D.faqs.map(function (f, i) {
      return '\
      <div class="arc-faq-item">\
        <button class="arc-faq-question" type="button">\
          <span class="arc-faq-number">' + (i + 1) + '</span>\
          <span class="arc-faq-q-text">' + f.q + '</span>\
          <span class="arc-faq-chevron">' + ICONS.chev + '</span>\
        </button>\
        <div class="arc-faq-answer"><p>' + f.a + '</p></div>\
      </div>';
    }).join("");
    list.querySelectorAll(".arc-faq-item").forEach(function (item) {
      item.querySelector(".arc-faq-question").addEventListener("click", function () { item.classList.toggle("open"); });
    });
  }

  // ---- events ----
  [filterSearch, heroSearch, filter1, filter2, sortBy].forEach(function (el) {
    if (!el) return;
    el.addEventListener("input", function () { currentPage = 1; render(); });
    el.addEventListener("change", function () { currentPage = 1; render(); });
  });
  if (heroSearch && filterSearch) {
    heroSearch.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        filterSearch.value = heroSearch.value;
        currentPage = 1;
        render();
        var exp = document.getElementById("explorer");
        if (exp) exp.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
  var clearAllBtn = document.getElementById("arcClearAll");
  if (clearAllBtn) {
    clearAllBtn.addEventListener("click", function () {
      if (filterSearch) filterSearch.value = "";
      if (heroSearch) heroSearch.value = "";
      if (filter1) filter1.value = "";
      if (filter2) filter2.value = "";
      if (sortBy) sortBy.value = "recent";
      currentPage = 1;
      render();
    });
  }
  var gridBtn = document.getElementById("arcGridViewBtn");
  var listBtn = document.getElementById("arcListViewBtn");
  if (gridBtn && listBtn) {
    gridBtn.addEventListener("click", function () { currentView = "grid"; gridBtn.classList.add("active"); listBtn.classList.remove("active"); render(); });
    listBtn.addEventListener("click", function () { currentView = "list"; listBtn.classList.add("active"); gridBtn.classList.remove("active"); render(); });
  }

  document.addEventListener("click", function (e) {
    var trigger = e.target.closest("[data-toast]");
    if (trigger) { e.preventDefault(); showToast(trigger.getAttribute("data-toast")); }
  });

  var yearEl = document.getElementById("bmFooterYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- init ----
  initFilters();
  renderRecent();
  renderChips();
  renderFaq();
  render();
})();

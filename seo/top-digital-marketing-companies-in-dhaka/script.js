document.addEventListener("DOMContentLoaded", function () {
  const viewMoreBtn = document.getElementById("viewMoreBtn");
  const viewMoreLabel = document.getElementById("viewMoreLabel");
  const heroDesc = document.getElementById("heroDesc");

  viewMoreBtn.addEventListener("click", function () {
    const isExpanded = heroDesc.classList.toggle("expanded");
    viewMoreBtn.classList.toggle("expanded", isExpanded);
    viewMoreLabel.textContent = isExpanded ? "View less" : "View more";
  });

  /* ---- Toast helper ---- */
  const toast = document.getElementById("toast");
  let toastTimer;
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove("show");
    }, 1800);
  }

  /* ---- Dropdown fields (Industry / Reviews / Sort by) ---- */
  const dropdownFields = document.querySelectorAll(".dropdown-field");
  dropdownFields.forEach(function (field) {
    field.addEventListener("click", function () {
      const wasOpen = field.classList.contains("open");
      dropdownFields.forEach(function (f) { f.classList.remove("open"); });
      if (!wasOpen) field.classList.add("open");
    });
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown-field")) {
      dropdownFields.forEach(function (f) { f.classList.remove("open"); });
    }
  });

  /* ---- All Filters button ---- */
  const allFiltersBtn = document.getElementById("allFiltersBtn");
  if (allFiltersBtn) {
    allFiltersBtn.addEventListener("click", function () {
      allFiltersBtn.classList.toggle("open");
    });
  }

  /* ---- Active filter chips ---- */
  const activeFilters = document.getElementById("activeFilters");
  const clearAllBtn = document.getElementById("clearAllBtn");

  function removeChip(chip) {
    chip.remove();
    if (!activeFilters.querySelector(".chip")) {
      clearAllBtn.style.display = "none";
    }
  }

  if (activeFilters) {
    activeFilters.addEventListener("click", function (e) {
      const removeBtn = e.target.closest(".chip-remove");
      if (removeBtn) {
        removeChip(removeBtn.closest(".chip"));
      }
    });
  }

  if (clearAllBtn) {
    clearAllBtn.addEventListener("click", function () {
      activeFilters.querySelectorAll(".chip").forEach(removeChip);
    });
  }

  /* ---- Reset filters ---- */
  const resetFiltersBtn = document.getElementById("resetFiltersBtn");
  const resetChipsHTML = activeFilters ? activeFilters.innerHTML : "";
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener("click", function () {
      activeFilters.innerHTML = resetChipsHTML;
      clearAllBtn.style.display = "";
      showToast("Filters reset");
    });
  }

  /* ---- Pagination ---- */
  const pageButtons = document.querySelectorAll(".page-btn[data-page]");
  const prevPage = document.getElementById("prevPage");
  const nextPage = document.getElementById("nextPage");
  const showingText = document.getElementById("showingText");

  function setActivePage(btn) {
    pageButtons.forEach(function (b) { b.classList.remove("active"); });
    btn.classList.add("active");
    const page = parseInt(btn.dataset.page, 10);
    const start = (page - 1) * 10 + 1;
    const end = Math.min(page * 10, 831);
    if (showingText) {
      showingText.textContent = "Showing " + start + " to " + end + " of 831 companies";
    }
    document.getElementById("companyList").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  pageButtons.forEach(function (btn) {
    btn.addEventListener("click", function () { setActivePage(btn); });
  });

  if (prevPage) {
    prevPage.addEventListener("click", function () {
      const active = document.querySelector(".page-btn.active");
      const idx = Array.prototype.indexOf.call(pageButtons, active);
      if (idx > 0) setActivePage(pageButtons[idx - 1]);
    });
  }

  if (nextPage) {
    nextPage.addEventListener("click", function () {
      const active = document.querySelector(".page-btn.active");
      const idx = Array.prototype.indexOf.call(pageButtons, active);
      if (idx < pageButtons.length - 1) setActivePage(pageButtons[idx + 1]);
    });
  }

  /* ---- View Profile / Share Profile ---- */
  document.querySelectorAll(".view-profile-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const name = btn.closest(".company-card").querySelector(".company-name").firstChild.textContent.trim();
      showToast("Opening " + name + "'s profile…");
    });
  });

  document.querySelectorAll(".share-profile-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const name = btn.closest(".company-card").querySelector(".company-name").firstChild.textContent.trim();
      showToast(name + " profile link copied");
    });
  });

  /* ---- FAQ accordion ---- */
  document.querySelectorAll(".faq-header-row").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const item = btn.closest(".faq-item");
      const isOpen = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      btn.querySelector(".faq-toggle").textContent = isOpen ? "−" : "+";
    });
  });
});

(function () {
  "use strict";

  var header = document.getElementById("bm-header");
  if (header) {
    window.addEventListener("scroll", function () {
      header.classList.toggle("bm-scrolled", window.scrollY > 8);
    }, { passive: true });
  }

  var hamburger = document.getElementById("bmHamburgerBtn");
  var mobileNav = document.getElementById("bmMobileNav");
  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", function () {
      var open = mobileNav.classList.toggle("bm-open");
      hamburger.classList.toggle("bm-open", open);
      hamburger.setAttribute("aria-expanded", String(open));
    });
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("bm-open");
        hamburger.classList.remove("bm-open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  var yearEl = document.getElementById("bmFooterYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

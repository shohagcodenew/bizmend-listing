(function () {
  "use strict";

  var toast = document.getElementById("toast");
  var toastTimer;
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove("show");
    }, 2200);
  }

  document.addEventListener("click", function (e) {
    var trigger = e.target.closest("[data-toast]");
    if (trigger) {
      e.preventDefault();
      showToast(trigger.getAttribute("data-toast"));
    }
  });

  var header = document.getElementById("siteHeader");
  if (header) {
    window.addEventListener("scroll", function () {
      header.classList.toggle("scrolled", window.scrollY > 8);
    }, { passive: true });
  }

  var hamburger = document.getElementById("hamburgerBtn");
  var mobileNav = document.getElementById("mobileNav");
  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", function () {
      var open = mobileNav.classList.toggle("open");
      mobileNav.hidden = !open;
      hamburger.setAttribute("aria-expanded", String(open));
    });
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("open");
        mobileNav.hidden = true;
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll(".chip-btn[data-query]").forEach(function (chip) {
    chip.addEventListener("click", function () {
      var query = chip.getAttribute("data-query");
      var fieldId = chip.getAttribute("data-bm-field");
      var target = fieldId ? document.getElementById(fieldId) : null;
      if (target) {
        target.value = query;
        target.dispatchEvent(new Event("input", { bubbles: true }));
        target.focus();
      } else {
        showToast('Searching "' + query + '"...');
      }
    });
  });

  var counted = false;
  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    var suffix = el.getAttribute("data-suffix") || "";
    var duration = 1400;
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = Math.round(target * eased);
      el.textContent = value.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var revealEls = document.querySelectorAll(".reveal");
  var statEls = document.querySelectorAll(".stat-item strong[data-count]");

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          if (entry.target.classList.contains("stats") && !counted) {
            counted = true;
            statEls.forEach(animateCount);
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

    revealEls.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 1.1) {
        el.classList.add("is-visible");
        if (el.classList.contains("stats") && !counted) {
          counted = true;
          statEls.forEach(animateCount);
        }
      } else {
        observer.observe(el);
      }
    });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    statEls.forEach(animateCount);
  }

  setTimeout(function () {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    if (!counted) {
      counted = true;
      statEls.forEach(animateCount);
    }
  }, 4000);

  var yearEl = document.getElementById("footerYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

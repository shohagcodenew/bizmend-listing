(function () {
  "use strict";

  /* ---------- Mobile nav toggle ---------- */
  var header = document.querySelector(".site-header");
  var navToggle = document.getElementById("navToggle");
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      var open = header.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.querySelectorAll(".main-nav a").forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var btn = item.querySelector(".faq-q");
    var panel = item.querySelector(".faq-a");
    btn.addEventListener("click", function () {
      var isOpen = btn.getAttribute("aria-expanded") === "true";
      // close all
      document.querySelectorAll(".faq-q").forEach(function (b) {
        b.setAttribute("aria-expanded", "false");
        b.parentElement.querySelector(".faq-a").style.maxHeight = null;
      });
      if (!isOpen) {
        btn.setAttribute("aria-expanded", "true");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });

  /* ---------- Machine-readable data toggle ---------- */
  var machineToggle = document.getElementById("machineToggle");
  var machinePanel = document.getElementById("machinePanel");
  if (machineToggle && machinePanel) {
    machineToggle.addEventListener("click", function () {
      var isOpen = machineToggle.getAttribute("aria-expanded") === "true";
      machineToggle.setAttribute("aria-expanded", isOpen ? "false" : "true");
      machinePanel.hidden = isOpen;
    });
  }

  /* ---------- Newsletter form ---------- */
  var newsletterForm = document.getElementById("newsletterForm");
  var newsletterMsg = document.getElementById("newsletterMsg");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = document.getElementById("newsletterEmail").value.trim();
      if (!email) return;
      newsletterMsg.hidden = false;
      newsletterMsg.textContent = "Thanks — you're subscribed to The BizMend Brief.";
      newsletterForm.reset();
    });
  }

  /* ---------- Feedback (helpful / not really) ---------- */
  var feedbackActions = document.getElementById("feedbackActions");
  var feedbackThanks = document.getElementById("feedbackThanks");
  if (feedbackActions) {
    feedbackActions.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-feedback]");
      if (!btn) return;
      feedbackActions.hidden = true;
      feedbackThanks.hidden = false;
    });
  }

  /* ---------- In This Article smooth scroll ---------- */
  document.querySelectorAll(".toc-list a[href^='#']").forEach(function (link) {
    link.addEventListener("click", function (e) {
      var target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      var headerH = document.querySelector(".site-header").offsetHeight;
      var top = target.getBoundingClientRect().top + window.pageYOffset - headerH - 16;
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });

  /* ---------- Back to top ---------- */
  var backToTop = document.getElementById("backToTop");
  if (backToTop) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 600) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    });
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();

(function () {
  "use strict";

  var nav = document.getElementById("mainNav");
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  var navAnchors = document.querySelectorAll(".nav__link");
  var sections = document.querySelectorAll("section, header.hero");
  var reveals = document.querySelectorAll(".reveal");

  document.getElementById("year").textContent = new Date().getFullYear();

  toggle.addEventListener("click", function () {
    var open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    links.classList.toggle("nav__links--open");
  });

  navAnchors.forEach(function (anchor) {
    anchor.addEventListener("click", function () {
      toggle.setAttribute("aria-expanded", "false");
      links.classList.remove("nav__links--open");
    });
  });

  window.addEventListener("scroll", function () {
    nav.classList.toggle("nav--scrolled", window.scrollY > 40);

    var current = "";
    sections.forEach(function (section) {
      if (window.scrollY >= section.offsetTop - 120) {
        current = section.id;
      }
    });

    navAnchors.forEach(function (link) {
      link.classList.toggle("active", link.getAttribute("href") === "#" + current);
    });
  });

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("visible");
    });
  }
})();

/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function () {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector(".header-toggle");
  function headerToggle() {
    const header = document.querySelector("#header");
    if (!header || !headerToggleBtn) return;
    header.classList.toggle("header-show");
    headerToggleBtn.classList.toggle("bi-list");
    headerToggleBtn.classList.toggle("bi-x");
  }
  if (headerToggleBtn) {
    headerToggleBtn.addEventListener("click", headerToggle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".header-show")) {
        headerToggle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
    navmenu.addEventListener("click", function (e) {
      e.preventDefault();
      if (!this.parentNode) return;
      this.parentNode.classList.toggle("active");
      if (this.parentNode.nextElementSibling) {
        this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      }
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector(".scroll-top");
  function toggleScrollTop() {
    if (!scrollTop) return;
    window.scrollY > 100
      ? scrollTop.classList.add("active")
      : scrollTop.classList.remove("active");
  }
  if (scrollTop) {
    scrollTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    if (!window.AOS) return;
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector(".typed");
  if (selectTyped && window.Typed) {
    let typed_strings = selectTyped.getAttribute("data-typed-items");
    if (typed_strings) {
      typed_strings = typed_strings.split(",");
      new Typed(".typed", {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
      });
    }
  }

  /**
   * Initiate Pure Counter
   */
  if (window.PureCounter) new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  document.querySelectorAll(".skills-animation").forEach((item) => {
    if (!window.Waypoint) return;
    new Waypoint({
      element: item,
      offset: "80%",
      handler: function () {
        item.querySelectorAll(".progress .progress-bar").forEach((el) => {
          el.style.width = (el.getAttribute("aria-valuenow") || 0) + "%";
        });
      },
    });
  });

  /**
   * Initiate glightbox
   */
  if (window.GLightbox) {
    GLightbox({ selector: ".glightbox" });
  }

  /**
   * Init isotope layout and filters
   * (Aman walau markup isotope tidak ada)
   */
  document.querySelectorAll(".isotope-layout").forEach(function (isotopeItem) {
    if (!window.Isotope || !window.imagesLoaded) return;

    const layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
    const filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
    const sort = isotopeItem.getAttribute("data-sort") ?? "original-order";

    let initIsotope;
    const container = isotopeItem.querySelector(".isotope-container");
    if (!container) return;

    imagesLoaded(container, function () {
      initIsotope = new Isotope(container, {
        itemSelector: ".isotope-item",
        layoutMode: layout,
        filter: filter,
        sortBy: sort,
      });
    });

    isotopeItem
      .querySelectorAll(".isotope-filters li")
      .forEach(function (filters) {
        filters.addEventListener(
          "click",
          function () {
            const active = isotopeItem.querySelector(
              ".isotope-filters .filter-active"
            );
            if (active) active.classList.remove("filter-active");
            this.classList.add("filter-active");
            if (initIsotope) {
              initIsotope.arrange({ filter: this.getAttribute("data-filter") });
            }
            if (typeof aosInit === "function") aosInit();
          },
          false
        );
      });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    if (!window.Swiper) return;
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      const cfgEl = swiperElement.querySelector(".swiper-config");
      if (!cfgEl) return;

      let config = {};
      try {
        config = JSON.parse(cfgEl.innerHTML.trim());
      } catch (e) {
        console.warn("Invalid swiper config JSON", e);
        return;
      }

      if (
        swiperElement.classList.contains("swiper-tab") &&
        typeof window.initSwiperWithCustomPagination === "function"
      ) {
        window.initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }
  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener("load", function () {
    if (window.location.hash) {
      const section = document.querySelector(window.location.hash);
      if (section) {
        setTimeout(() => {
          const scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop || "0", 10),
            behavior: "smooth",
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  const navmenulinks = document.querySelectorAll(".navmenu a");
  function navmenuScrollspy() {
    const position = window.scrollY + 200;
    navmenulinks.forEach((navmenulink) => {
      if (!navmenulink.hash) return;
      const section = document.querySelector(navmenulink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        document
          .querySelectorAll(".navmenu a.active")
          .forEach((link) => link.classList.remove("active"));
        navmenulink.classList.add("active");
      } else {
        navmenulink.classList.remove("active");
      }
    });
  }
  window.addEventListener("load", navmenuScrollspy);
  document.addEventListener("scroll", navmenuScrollspy);

  // === SINGLE PAGE PORTFOLIO (Card + Modal) ===
  (async function renderPortfolio() {
    const grid = document.getElementById("portfolio-grid");
    if (!grid) return;

    // ——> Ikon link dihapus, tombol diganti "View Project ✨"
    const card = (item) => `
      <div class="col-lg-4 col-md-6">
        <div class="portfolio-item h-100">
          <div class="portfolio-wrap">
            <img src="${item.image}" class="img-fluid" alt="${item.title}" loading="lazy">
            <div class="portfolio-info">
              <h4>${item.title}</h4>
              <p>${item.subtitle ?? ""}</p>
              <div class="mt-2">
                <a class="btn btn-outline-primary btn-sm rounded-pill js-readmore"
                   href="#project=${encodeURIComponent(item.slug)}"
                   data-slug="${item.slug}">
                   View Project ✨
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    let portfolioData = [];
    try {
      const res = await fetch("assets/data/portfolio.json", { cache: "no-store" });
      portfolioData = await res.json();

      grid.innerHTML = Array.isArray(portfolioData) && portfolioData.length
        ? portfolioData.map(card).join("")
        : `<div class="col-12 text-center text-muted">No projects yet.</div>`;

      if (window.AOS?.refresh) AOS.refresh();
    } catch (err) {
      console.error("Portfolio load error:", err);
      grid.innerHTML = `<div class="col-12 text-center"><div class="alert alert-warning">Failed to load portfolio data.</div></div>`;
      return;
    }

    // --- Modal helpers ---
    const modalEl = document.getElementById('projectModal');
    const bsModal = modalEl ? new bootstrap.Modal(modalEl) : null;

    async function openProject(slug) {
      if (!bsModal) return;

      const item = portfolioData.find(x => x.slug === slug);
      if (!item) return;

      // isi konten
      document.getElementById('pm-title').textContent = item.title;
      document.getElementById('pm-subtitle').textContent = item.subtitle ?? '';
      const heroSrc = (item.gallery && item.gallery[0]) || item.image;
      document.getElementById('pm-hero').innerHTML = heroSrc ? `<img src="${heroSrc}" alt="${item.title}" class="img-fluid">` : '';
      document.getElementById('pm-skills').innerHTML = (item.skills || []).map(s=>`<span class="tag">${s}</span>`).join('');
      const links = [];
      if (item.link)   links.push(`<a class="btn btn-outline-primary btn-sm" href="${item.link}" target="_blank" rel="noopener"><i class="bi bi-link-45deg"></i> Link</a>`);
      if (item.github) links.push(`<a class="btn btn-outline-dark btn-sm" href="${item.github}" target="_blank" rel="noopener"><i class="bi bi-github"></i> GitHub</a>`);
      document.getElementById('pm-links').innerHTML = links.join(' ');
      document.getElementById('pm-about').textContent = item.about ?? '';

      // tampilkan
      bsModal.show();
    }

    // klik tombol (event delegation)
    grid.addEventListener('click', (e) => {
      const a = e.target.closest('.js-readmore');
      if (!a) return;
      e.preventDefault();
      const slug = a.getAttribute('data-slug');
      history.pushState(null, '', `#project=${encodeURIComponent(slug)}`);
      openProject(slug);
    });

    // dukung buka langsung via hash
    function checkHash() {
      const m = location.hash.match(/^#project=(.+)$/);
      if (m && m[1]) {
        const slug = decodeURIComponent(m[1]);
        openProject(slug);
      }
    }
    window.addEventListener('hashchange', checkHash);
    checkHash();

    // hapus hash saat modal ditutup
    modalEl?.addEventListener('hidden.bs.modal', () => {
      if (location.hash.startsWith('#project=')) {
        history.pushState("", document.title, window.location.pathname + window.location.search);
      }
    });
  })();

})();

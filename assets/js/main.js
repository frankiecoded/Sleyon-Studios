/**
* Template Name: Squadfree
* Template URL: https://bootstrapmade.com/squadfree-free-bootstrap-template-creative/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();

// Main.js Code
(function() {
  "use strict";

  // Your main.js code here
  function toggleScrolled() { /* Main.js code */ }
  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  // Add other main.js functions here as needed

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    });
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();

// Second.js Code (Carousel script)
(function() {
  // Scoped to avoid conflict with main.js
  let activeIndex = 0;
  let limit = 0;
  let disabled = false;
  let $stage;
  let $controls;
  let canvas = false;

  const SPIN_FORWARD_CLASS = 'js-spin-fwd';
  const SPIN_BACKWARD_CLASS = 'js-spin-bwd';
  const DISABLE_TRANSITIONS_CLASS = 'js-transitions-disabled';
  const SPIN_DUR = 1000;

  const appendControls = () => {
    for (let i = 0; i < limit; i++) {
      $('.carousel__control').append(`<a href="#" data-index="${i}"></a>`);
    }
    let height = $('.carousel__control').children().last().outerHeight();

    $('.carousel__control').css('height', 30 + limit * height);
    $controls = $('.carousel__control').children();
    $controls.eq(activeIndex).addClass('active');
  };

  const setIndexes = () => {
    $('.spinner').children().each((i, el) => {
      $(el).attr('data-index', i);
      limit++;
    });
  };

  const duplicateSpinner = () => {
    const $el = $('.spinner').parent();
    const html = $('.spinner').parent().html();
    $el.append(html);
    $('.spinner').last().addClass('spinner--right');
    $('.spinner--right').removeClass('spinner--left');
  };

  const paintFaces = () => {
    $('.spinner__face').each((i, el) => {
      const $el = $(el);
      let color = $(el).attr('data-bg');
      $el.children().css('backgroundImage', `url(${getBase64PixelByColor(color)})`);
    });
  };

  const getBase64PixelByColor = hex => {
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.height = 1;
      canvas.width = 1;
    }
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = hex;
      ctx.fillRect(0, 0, 1, 1);
      return canvas.toDataURL();
    }
    return false;
  };

  const prepareDom = () => {
    setIndexes();
    paintFaces();
    duplicateSpinner();
    appendControls();
  };

  const spin = (inc = 1) => {
    if (disabled) return;
    if (!inc) return;
    activeIndex += inc;
    disabled = true;

    if (activeIndex >= limit) {
      activeIndex = 0;
    }

    if (activeIndex < 0) {
      activeIndex = limit - 1;
    }

    const $activeEls = $('.spinner__face.js-active');
    const $nextEls = $(`.spinner__face[data-index=${activeIndex}]`);
    $nextEls.addClass('js-next');

    if (inc > 0) {
      $stage.addClass(SPIN_FORWARD_CLASS);
    } else {
      $stage.addClass(SPIN_BACKWARD_CLASS);
    }

    $controls.removeClass('active');
    $controls.eq(activeIndex).addClass('active');

    setTimeout(() => {
      spinCallback(inc);
    }, SPIN_DUR, inc);
  };

  const spinCallback = inc => {

    $('.js-active').removeClass('js-active');
    $('.js-next').removeClass('js-next').addClass('js-active');
    $stage
      .addClass(DISABLE_TRANSITIONS_CLASS)
      .removeClass(SPIN_FORWARD_CLASS)
      .removeClass(SPIN_BACKWARD_CLASS);

    $('.js-active').each((i, el) => {
      const $el = $(el);
      $el.prependTo($el.parent());
    });
    setTimeout(() => {
      $stage.removeClass(DISABLE_TRANSITIONS_CLASS);
      disabled = false;
    }, 100);
  };

  const attachListeners = () => {
    document.onkeyup = e => {
      switch (e.keyCode) {
        case 38:
          spin(-1);
          break;
        case 40:
          spin(1);
          break;
      }
    };

    $controls.on('click', e => {
      e.preventDefault();
      if (disabled) return;
      const $el = $(e.target);
      const toIndex = parseInt($el.attr('data-index'), 10);
      spin(toIndex - activeIndex);
    });
  };

  const assignEls = () => {
    $stage = $('.carousel__stage');
  };

  const init = () => {
    assignEls();
    prepareDom();
    attachListeners();
  };

  $(document).ready(() => {
    init();
  });

})();

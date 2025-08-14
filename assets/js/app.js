"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
(function ($) {
  "use strict";

  /*--------------------------------------------------------------
   [Table of contents]
  
  azzle PRELOADER JS INIT
  azzle HEADER TRIGER JS INIT
  azzle HEADER STICKY MENU JS INIT
  azzle MENU SIDEBAR JS INIT
  azzle PROGRES CIRCLE JS INIT
  azzle TSTIMONIAL SLIDER INIT
  azzle PORTFOLIO MASONAY FILTER JS
  azzle TAB CONTENT JS
  azzle TOGGLE PASSOWRD JS INIT
  
  -------------------------------------------------------------------*/

  /*--------------------------------------------------------------
  CUSTOM PRE DEFINE FUNCTION
  ------------------------------------------------------------*/
  /* is_exist() */
  jQuery.fn.is_exist = function () {
    return this.length;
  };
  /*--------------------------------------------------------------
  azzle HEADER TRIGER JS INIT
  --------------------------------------------------------------*/
  $(".azzle-header-triger").on("click", function (e) {
    $(".azzle-sidemenu-column, .offcanvas-overlay").addClass("active");
    event.preventDefault(e);
  });
  $(".azzle-sidemenu-close, .offcanvas-overlay").on("click", function () {
    $(".azzle-sidemenu-column, .offcanvas-overlay").removeClass("active");
  });

  /*--------------------------------------------------------------
    azzle STICKY MENU JS INIT
  --------------------------------------------------------------*/

  var lastScroll = 0;
  function sticky_header() {
    var header_hegith = $('header').innerHeight();
    var scroll = $(window).scrollTop();
    if (scroll > header_hegith && scroll > lastScroll) {
      $('header').addClass('hide-header');
    } else if (scroll < lastScroll) {
      $('header').removeClass('hide-header');
    }
    lastScroll = scroll;
  }
  $(function () {
    sticky_header();
  });
  window.onload = function () {
    sticky_header();
  };
  window.onscroll = function () {
    sticky_header();
  };
  window.onresize = function (event) {
    sticky_header();
  };
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 20) {
      $('#sticky-menu').addClass('sticky-menu');
    } else {
      $('#sticky-menu').removeClass('sticky-menu');
    }
  });

  /*--------------------------------------------------------------
  azzle PROGRES CIRCLE JS INIT
  --------------------------------------------------------------*/

  var progressPath = document.querySelector('.progress-wrap path');
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
  progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
  var updateProgress = function updateProgress() {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - scroll * pathLength / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 50;
  var duration = 550;
  jQuery(window).on('scroll', function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.progress-wrap').addClass('active-progress');
    } else {
      jQuery('.progress-wrap').removeClass('active-progress');
    }
  });
  jQuery('.progress-wrap').on('click', function (event) {
    event.preventDefault();
    jQuery('html, body').animate({
      scrollTop: 0
    }, duration);
    return false;
  });

  /*--------------------------------------------------------------
  AZZLE BRAND SLIDER JS INIT
  --------------------------------------------------------------*/
  var brand_slider = $('.azzle-brand-slider');
  if (brand_slider.is_exist()) {
    brand_slider.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 5000,
      arrows: false,
      pauseOnHover: false,
      cssEase: 'linear',
      responsive: [{
        breakpoint: 1199,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }]
    });
  }

  /*--------------------------------------------------------------
  AZZLE MAGNIFIC PUPOP JS INIT
  --------------------------------------------------------------*/
  var popup_youtube = $('.video-init');
  if (popup_youtube.is_exist()) {
    popup_youtube.magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade'
    });
  }

  /*--------------------------------------------------------------
  AZZLE COUNTER JS INIT
  --------------------------------------------------------------*/

  var stats = document.querySelectorAll(".azzle-counter-data");
  stats.forEach(function (stat) {
    // pattern used to seperate input number from html into an array of numbers and non numbers. EX $65.3M -> ["$65.3M", "$", "65", ".", "3", "M"]
    var patt = /(\D+)?(\d+)(\D+)?(\d+)?(\D+)?/;
    var time = 1000;
    var result = _toConsumableArray(patt.exec(stat.textContent));
    var fresh = true;
    var ticks;

    // Remove first full match from result array (we dont need the full match, just the individual match groups).
    result.shift();
    // Remove undefined values from result array where they didnt have a match in one of the optional regex groups
    result = result.filter(function (res) {
      return res != null;
    });
    while (stat.firstChild) {
      stat.removeChild(stat.firstChild);
    }
    var _iterator = _createForOfIteratorHelper(result),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var res = _step.value;
        if (isNaN(res)) {
          stat.insertAdjacentHTML("beforeend", "<span>".concat(res, "</span>"));
        } else {
          for (var i = 0; i < res.length; i++) {
            stat.insertAdjacentHTML("beforeend", "<span data-value=\"".concat(res[i], "\">\n              <span>&ndash;</span>\n              ").concat(Array(parseInt(res[i]) + 1).join(0).split(0).map(function (x, j) {
              return "\n                <span>".concat(j, "</span>\n              ");
            }).join(""), "\n            </span>"));
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    ticks = _toConsumableArray(stat.querySelectorAll("span[data-value]"));
    var activate = function activate() {
      var top = stat.getBoundingClientRect().top;
      var offset = window.innerHeight * 0.8;
      setTimeout(function () {
        fresh = false;
      }, time);
      if (top < offset) {
        setTimeout(function () {
          var _iterator2 = _createForOfIteratorHelper(ticks),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var tick = _step2.value;
              var dist = parseInt(tick.getAttribute("data-value")) + 1;
              tick.style.transform = "translateY(-".concat(dist * 100, "%)");
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }, fresh ? time : 0);
        window.removeEventListener("scroll", activate);
      }
    };
    window.addEventListener("scroll", activate);
    activate();
  });

  /*--------------------------------------------------------------
  AZZLE TOOGLE PRICING BUTTON JS INIT
  --------------------------------------------------------------*/

  $(document).ready(function () {
    $(".toggle-button").change(function () {
      toggle(this.checked);
    });

    // Uncomment this to disaplay monthly on page load
    toggle(false);
    function toggle(checked) {
      $(".toggle-button").prop('checked', checked);
      if (checked) {
        $('.coreMonthlyPrice, .proMonthlyPrice').show();
        $('.coreAnnuallyText, .coreAnnuallyPrice, .proAnnuallyPrice').hide();
      } else {
        $('.coreMonthlyPrice,.proMonthlyPrice').hide();
        $('.coreAnnuallyText,.coreAnnuallyPrice, .proAnnuallyPrice').show();
      }
    }
  });

  /*--------------------------------------------------------------
   AZZLE CTA SLIDER JS INIT
   --------------------------------------------------------------*/
  var cta_slider = $('.azzle-cta-slider-init');
  if (cta_slider.is_exist()) {
    cta_slider.slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 8000,
      arrows: false,
      pauseOnHover: false,
      cssEase: 'linear'
    });
  }

  /*--------------------------------------------------------------
  AZZLE INTEGRATION SLIDER JS INIT
  --------------------------------------------------------------*/
  var int_slider = $('.azzle-int-slider-init');
  if (int_slider.is_exist()) {
    int_slider.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 2000,
      arrows: false,
      pauseOnHover: false,
      cssEase: 'linear'
    });
  }

  /*--------------------------------------------------------------
  AZZLE INTEGRATION SLIDER JS INIT
  --------------------------------------------------------------*/
  var int_slider = $('.azzle-int-slider-init2');
  if (int_slider.is_exist()) {
    int_slider.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 2000,
      rtl: true,
      arrows: false,
      pauseOnHover: false,
      cssEase: 'linear'
    });
  }

  /*--------------------------------------------------------------
  AZZLE TESTIMONIAL SLIDER INIT
  --------------------------------------------------------------*/
  var T_slider = $('.azzle-t-slider-init');
  if (T_slider.is_exist()) {
    T_slider.slick(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: true
    }, "slidesToScroll", 1), "infinite", true), "speed", 1500), "lazyLoad", 'progressive'), "prevArrow", '<button class="slide-arrow azzle-t-slider-next"></button>'), "nextArrow", '<button class="slide-arrow azzle-t-slider-prev"></button>'));
  }
  $(function () {}); /*End document ready*/

  $(window).on("resize", function () {}); // end window resize

  /*===========================================
      =    On Load Function      =
  =============================================*/
  $(window).on("load", function () {
    preloader();
  });

  /*===========================================
      =    Preloader      =
  =============================================*/
  function preloader() {
    $('.preloader').delay(0).fadeOut();
  }
  ;
})(jQuery);
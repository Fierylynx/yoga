window.$ = window.jQuery = require("jquery");



$(window).on("scroll", function() {
  var scrollPos = $(window).scrollTop();
  if (scrollPos <= 0) {
      $('.header').removeClass('header--scroll');
  } else {
      $('.header').addClass('header--scroll');
  }
});
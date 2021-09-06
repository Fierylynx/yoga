window.$ = window.jQuery = require("jquery");



$(window).on("scroll", function() {
  var scrollPos = $(window).scrollTop();
  if (scrollPos <= 0) {
      $('.header').removeClass('header--scroll');
  } else {
      $('.header').addClass('header--scroll');
  }
});


const swiper = new Swiper('.team__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.team__pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.team__button-next',
    prevEl: '.team__button-prev',
  },
});

const swiperReviews = new Swiper('.reviews__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: '.reviews__pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },
});

$('.menu__burger').on('click', function() {
  $('.menu__list').toggleClass('menu__list--active');
});
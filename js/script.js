//Initialize Client Swiper
var swiper1 = new Swiper('.client-swiper', {
  slidesPerView: 3,
  paginationClickable: true,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  spaceBetween: 60,
  // Responsive breakpoints
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: '.swiper-pagination'
    },
    // when window width is <= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is <= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 30
    }
  }
});
// Initialize Testimonial Swiper
var swiper2 = new Swiper('.testimonial-swiper', {
  slidesPerView: 3,
  pagination: '.swiper-pagination',
  paginationClickable: true,
  spaceBetween: 30,
  grabCursor: true,
  freeMode: true,
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is <= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is <= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  }
});

// Counterup
$('.counter').counterUp({
  time: 1000
});

// Main Navigation
$('#menu-toggle').click(function() {
  $(this).toggleClass('open'), $('.main-nav').toggleClass('show-it');
});

// Google Analytics - You should remove this
(function(i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  (i[r] =
    i[r] ||
    function() {
      (i[r].q = i[r].q || []).push(arguments);
    }),
    (i[r].l = 1 * new Date());
  (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m);
})(
  window,
  document,
  'script',
  'https://www.google-analytics.com/analytics.js',
  'ga'
);

ga('create', 'UA-29231762-2', 'auto');
ga('send', 'pageview');

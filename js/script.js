const hotelSwiper = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider-button__next',
    prevEl: '.hotel-slider-button__prev',
  },

  // effect: 'cards',
  // keyboard: {
  //   enabled: true,
  // },
  effect: 'fade',
});

const reviewsSwiper = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

  // effect: 'cards',
  keyboard: {
    enabled: true,
  },
  // effect: 'fade',
});

$('.parallax-window').parallax({
  imageSrc: '../img/newsletter-bg.jpeg',
  position: '-400px -400px',
});

const menuButton = document.querySelector('.menu-button');
const navbarBottom = document.querySelector('.navbar-bottom');
menuButton.addEventListener('click', function (e) {
  navbarBottom.classList.toggle('navbar-bottom--active');
});

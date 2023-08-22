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

// const slides = document.querySelectorAll('.reviews-slider__item');
// const btnLeft = document.querySelector('.reviews-slider__button--prev');
// const btnRight = document.querySelector('.reviews-slider__button--next');

// console.log(slides);
// currentSlide = 0;
// const slidesNumber = slides.length - 1;

// const moveToSlide = function (slide) {
//   slides.forEach(
//     (s, index) => (s.style.transform = `translateX(${(index - slide) * 100}%)`)
//     //1 - -100%, 2 - 0%, 3 - 100%, 4 - 200%
//   );
// };

// moveToSlide(0);

// const nextSlide = function () {
//   currentSlide == slidesNumber ? (currentSlide = 0) : currentSlide++;

//   moveToSlide(currentSlide);
//   // activateCurrentDot(currentSlide);
// };
// btnRight.addEventListener('click', function (e) {
//   nextSlide();
// });

// const previousSlide = function () {
//   currentSlide === 0 ? (currentSlide = slidesNumber) : currentSlide--;

//   moveToSlide(currentSlide);
//   // activateCurrentDot(currentSlide);
// };

// btnLeft.addEventListener('click', function (e) {
//   previousSlide();
// });

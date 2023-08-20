const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button__next',
    prevEl: '.slider-button__prev',
  },

  // effect: 'cards',
  keyboard: {
    enabled: true,
  },
  effect: 'fade',
  // croosFade
});

addEventListener('keydown', function (e) {
  console.log(e);
});

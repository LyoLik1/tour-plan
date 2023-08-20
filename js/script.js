// const map = document.querySelector('.map');

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
});

navigator.geolocation.getCurrentPosition(
  function (position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    const coords = [latitude, longitude];
    let map = L.map('map').setView([7.890980720197144, 98.294699280161189], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution:
        '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([7.890980720197144, 98.294699280161189])
      .addTo(map)
      .bindPopup('DoubleTree by Hilton Phuket Banthai Resort')
      .openPopup();
  },
  function () {
    console.log('Impossible to get your location');
  }
);
$(document).ready(function () {
  // Задаем скорость параллакса
  var parallaxSpeed = 0.3; // Экспериментируйте с этим значением

  // Получаем высоту окна браузера
  var windowHeight = $(window).height();

  // Получаем высоту изображения
  var imageHeight = $('.parallax-bg').height();

  // Получаем начальное значение прокрутки (снизу страницы)
  var initialScroll = imageHeight - windowHeight;

  // При прокрутке страницы
  $(window).scroll(function () {
    // Получаем значение прокрутки
    var scrollTop = initialScroll - $(this).scrollTop();

    // Рассчитываем позицию фона
    var bgPosition = 'center ' + scrollTop * parallaxSpeed + 'px';

    // Применяем позицию фона к элементу .parallax-bg
    $('.parallax-bg').css('background-position', bgPosition);
  });
});

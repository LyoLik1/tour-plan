const menuButton = document.querySelector('.menu-button');
const navbarBottom = document.querySelector('.navbar-bottom');
const bookingButton = document.querySelector('.booking__button');
const overlay = document.querySelector('.modal__overlay');
const modalWindow = document.querySelector('.modal__dialog');
const closeModalButton = document.querySelector('.modal__close');
const packagesSection = document.querySelector('.packages-wrapper');
const activitiesSection = document.querySelector('.activities-wrapper');
const phoneInput = document.querySelectorAll('.input__phone');
// const phoneValidatorMessage = document.querySelectorAll('.phone__validator');
const hotelSwiper = new Swiper('.hotel-slider', {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider-button__next',
    prevEl: '.hotel-slider-button__prev',
  },
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
// $('.parallax-window').parallax({
//   imageSrc: '../img/newsletter-bg.jpeg',
//   position: '-400px -400px',
// });

menuButton.addEventListener('click', function (e) {
  navbarBottom.classList.toggle('navbar-bottom--active');
});

bookingButton.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(111);
  modalWindow.classList.remove('modal__dialog--disable');
  overlay.classList.remove('modal__overlay--disable');
});
// Close Modal Window
closeModalButton.addEventListener('click', function (e) {
  e.preventDefault();
  modalWindow.classList.add('modal__dialog--disable');
  overlay.classList.add('modal__overlay--disable');
});
overlay.addEventListener('click', function (e) {
  e.preventDefault();
  modalWindow.classList.add('modal__dialog--disable');
  overlay.classList.add('modal__overlay--disable');
});

document.addEventListener('keydown', function (e) {
  if (overlay.classList.contains('modal__overlay--disable')) {
    return;
  }
  if (e.key === 'Escape') {
    modalWindow.classList.add('modal__dialog--disable');
    overlay.classList.add('modal__overlay--disable');
  }
});

packagesSection.addEventListener('click', function (e) {
  if (e.target.classList.contains('proposition__button')) {
    modalWindow.classList.remove('modal__dialog--disable');
    overlay.classList.remove('modal__overlay--disable');
  } else {
    return;
  }
});

activitiesSection.addEventListener('click', function (e) {
  if (e.target.classList.contains('card__button')) {
    modalWindow.classList.remove('modal__dialog--disable');
    overlay.classList.remove('modal__overlay--disable');
  } else {
    return;
  }
});

phoneInput.forEach((input) => {
  const phoneValidatorMessage = input.nextElementSibling; // Получаем следующий элемент после инпута

  input.addEventListener('blur', function (e) {
    const inputValue = Number(this.value.length);
    if (inputValue !== 9) {
      input.style.border = '3px solid red';
      input.style.marginBottom = '0px';
      phoneValidatorMessage.classList.remove('phone__validator--disable');
    } else {
      phoneValidatorMessage.classList.add('phone__validator--disable');
      input.style.border = 'none';
      input.style.marginBottom = '15px';
    }
  });
});

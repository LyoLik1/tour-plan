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

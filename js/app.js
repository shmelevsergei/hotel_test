const swiperPhoto = new Swiper('.slider-photo', {
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
});

const swiperNumber = new Swiper('.slider-number', {
  navigation: {
    nextEl: '.number-slider__next',
    prevEl: '.number-slider__prev',
  },
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
  loop: true,
});

const swiperNumberFooter = new Swiper('.footer-number-slider', {
  navigation: {
    nextEl: '.footer-number-button-next',
    prevEl: '.footer-number-button-prev',
  },
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
});

const swiperEntertainment = new Swiper('.entertainment-slider', {
  navigation: {
    nextEl: '.entertainment-slide-button-next',
    prevEl: '.entertainment-slide-button-prev',
  },
  slidesPerView: 2.1,
  loop: true,
  centeredSlides: true,
  spaceBetween: 30,
});

const swiperTerr = new Swiper('.terr-swiper', {
  navigation: {
    nextEl: '.terr-slider-button-next',
    prevEl: '.terr-slider-button-prev',
  },
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
});

const swiperInclude = new Swiper('.include-slider', {
  navigation: {
    nextEl: '.include-slider-button-next',
    prevEl: '.include-slider-button-prev',
  },
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
});

const swiperSpa = new Swiper('.spa-slider', {
  navigation: {
    nextEl: '.spa-slider-button-next',
    prevEl: '.spa-slider-button-prev',
  },
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
});

const swiperSport = new Swiper('.sport-slider', {
  navigation: {
    nextEl: '.sport-slide-button-next',
    prevEl: '.sport-slide-button-prev',
  },
  slidesPerView: 2.1,
  loop: true,
  centeredSlides: true,
  spaceBetween: 30,
});
const swiperPhoto = new Swiper('.photo__slider', {
  navigation: {
    nextEl: '.photo__slider-btn--next',
    prevEl: '.photo__slider-btn--prev',
  },
  slidesPerView: 2.38,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.25,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.75,
      spaceBetween: 10
    },
    // when window width is >= 640px
    767: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1430: {
      slidesPerView: 2.38,
      spaceBetween: 30
    }
  }
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
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
      spaceBetween: 10,
      centeredSlides: true
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false
    },
    // when window width is >= 640px
    767: {
      slidesPerView: 2.5,
      spaceBetween: 10
    },
    992: {
      slidesPerView: 3.5,
      spaceBetween: 20
    },
    1430: {
      slidesPerView: 4,
      spaceBetween: 20,
      
    },
    1920: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});

const swiperEntertainment = new Swiper('.entertainment-slider', {
  navigation: {
    nextEl: '.entertainment-slide-button-next',
    prevEl: '.entertainment-slide-button-prev',
  },
  
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.1,
      spaceBetween: 10,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 20,
      centeredSlides: false,
    },

    992: {
      slidesPerView: 2.1,
      centeredSlides: true,
      spaceBetween: 30,
    }
  }
});

const swiperTerr = new Swiper('.terr-swiper', {
  navigation: {
    nextEl: '.terr-slider-button-next',
    prevEl: '.terr-slider-button-prev',
  },
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
      },
    },
  }
});

const swiperRestor = new Swiper('.restor-swiper', {
  navigation: {
    nextEl: '.restor-slider-button-next',
    prevEl: '.restor-slider-button-prev',
  },
  loop: true,
  
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    524: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    1430: {
      slidesPerView: 4,
    },
  }
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

const swiperImage = new Swiper('.image-swiper', {
  navigation: {
    nextEl: '.image-slider-button-next',
    prevEl: '.image-slider-button-prev',
  },
  slidesPerView: 1,
  loop: true,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
  },
});

const swiperSport = new Swiper('.sport-slider', {
  navigation: {
    nextEl: '.sport-slide-button-next',
    prevEl: '.sport-slide-button-prev',
  },
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.1,
      spaceBetween: 10,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 20,
      centeredSlides: false,
    },

    992: {
      slidesPerView: 2.1,
      centeredSlides: true,
      spaceBetween: 30,
    }
  }
});




document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.header__menu')
  const buttonMenu = document.querySelector('.menu__burger')
  const bodyMenu = document.querySelector('.body')
  const menuMobile = document.querySelector('.menu__mobile')

  buttonMenu.addEventListener('click', () => {
    menu.classList.toggle('open'),
    bodyMenu.classList.toggle('open'),
    menuMobile.classList.toggle('active')
  })
})
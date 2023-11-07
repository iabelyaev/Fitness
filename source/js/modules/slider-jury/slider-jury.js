import Swiper from '../../../js/vendor/swiper.js';

export const initSwiperSlider = () => {
  const swiperElement = document.querySelector('[data-swiper]');
  const swiperSlider = new Swiper(swiperElement, {
    loop: true,
    effect: 'tabsss',
    slidesPerView: 4,
    direction: 'horizontal',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
      },

      1120: {
        slidesPerView: 3,
        spaceBetween: 70,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 32,
      },
    },
  });
};

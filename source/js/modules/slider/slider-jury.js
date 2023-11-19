const swiperJury = document.querySelector('[data-swiper="jury"]');
const swiperButtonPrev = document.querySelector('[data-swiper-button-prev="jury"]');
const swiperButtonNext = document.querySelector('[data-swiper-button-next="jury"]');

const setSliderJury = () => {
  const swiperSliderJury = new window.Swiper(swiperJury, {
    loop: true,
    slidesPerView: 4,
    direction: 'horizontal',
    navigation: {
      nextEl: swiperButtonNext,
      prevEl: swiperButtonPrev,
    },
    breakpoints: {
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
        initialSlide: 6,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 32,
        initialSlide: 0,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 32,
        initialSlide: 0,
      },
    },
  });

  return swiperSliderJury;
};

export const initSliderJury = () => {
  if (document.body.contains(swiperJury)) {
    setSliderJury();
  }
};

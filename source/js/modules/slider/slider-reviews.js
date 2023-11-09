const swiperReviews = document.querySelector('[data-swiper="reviews"]');
const swiperButtonPrev = document.querySelector('[data-swiper-button-prev="reviews"]');
const swiperButtonNext = document.querySelector('[data-swiper-button-next="reviews"]');

const setSliderReviews = () => {
  return new window.Swiper(swiperReviews, {
    loop: false,
    slidesPerView: 1,
    navigation: {
      nextEl: swiperButtonNext,
      prevEl: swiperButtonPrev,
    },
  });
};

export const initSliderReviews = () => {
  if (document.body.contains(swiperReviews)) {
    setSliderReviews();
  }
};

const swiperReviews = document.querySelector('[data-swiper="reviews"]');
const swiperButtonPrev = document.querySelector('[data-swiper-button-prev="reviews"]');
const swiperButtonNext = document.querySelector('[data-swiper-button-next="reviews"]');

const setSliderReviews = () => {
  const swiperSlierReviews = new window.Swiper(swiperReviews, {
    loop: false,
    slidesPerView: 1,
    navigation: {
      nextEl: swiperButtonNext,
      prevEl: swiperButtonPrev,
    },
  });

  return swiperSlierReviews;
};

export const initSliderReviews = () => {
  if (document.body.contains(swiperReviews)) {
    setSliderReviews();
  }
};

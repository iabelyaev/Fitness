const controls = document.querySelectorAll('[data-tab]');
const price = document.querySelectorAll('.subscription__item-price');

const PRICES = {
  sixMonth: {
    1: '30000',
    2: '10200',
    3: '16200',
  },
  twelveMonth: {
    1: '60000',
    2: '20400',
    3: '32400',
  },
  oneMonth: {
    1: '5000',
    2: '1700',
    3: '2700',
  },
};

const setPrice = (mont) => {
  const priceData = Object.values(PRICES[mont]);
  price.forEach((item, index) => {
    const currentPrice = priceData[index];
    item.setAttribute('data-price', currentPrice);
    item.querySelector('b').textContent = currentPrice;
  });
};

const priceChange = (tab) => {
  const tabName = tab.dataset.tab;

  switch (tabName) {
    case '6':
      setPrice('sixMonth');
      break;
    case '12':
      setPrice('twelveMonth');
      break;
    default:
      setPrice('oneMonth');
  }
};

const handlerButtonClick = (evt) => {
  const currentActive = document.querySelector('[data-tab].is-active');
  currentActive.classList.remove('is-active');
  evt.target.classList.add('is-active');
  priceChange(evt.target);
};

export const initPrice = () => {
  setPrice('oneMonth');

  controls.forEach((item) => {
    item.addEventListener('click', handlerButtonClick);
  });
};

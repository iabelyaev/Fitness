export const initTabs = () => {
  const container = document.querySelector('.subscription__controls');
  const controls = container.querySelectorAll('[data-tab]');
  const price = document.querySelectorAll('.subscription__item-price');

  const priceObj = {
    sixMonth: {
      1: '30 000',
      2: '10 200',
      3: '16 200',
    },
    twelveMonth: {
      1: '60 000',
      2: '20 400',
      3: '32 400',
    },
    oneMonth: {
      1: '5000',
      2: '1700',
      3: '2700',
    },
  };
  const setPrice = (mont) => {
    const priceData = Object.values(priceObj[mont]);
    price.forEach((item, index) => {
      const currentPrice = priceData[index];
      item.setAttribute('data-price', currentPrice);

      const priceNumber = document.createElement('b');
      const elementSpan = document.createElement('span');
      priceNumber.textContent = currentPrice;
      elementSpan.textContent = '₽';
      priceNumber.append(elementSpan);
      item.appendChild(priceNumber);
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
  setPrice('oneMonth');

  controls.forEach((item) => {
    item.addEventListener('click', handlerButtonClick);
  });
};

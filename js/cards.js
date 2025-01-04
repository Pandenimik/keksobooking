import { createMoсkData } from './mock-data.js';
import { numWord } from './util.js';

const rendercards = () => {
  const typesMap = {
    flat: 'Квартира',
    bungalow: 'Бунгало',
    house: 'Дом',
    palace: 'Дворец',
    hotel: 'Отель',
  };
  const popupTemplate = document.querySelector('#card').content.querySelector('.popup');
  const mapCanvas = document.querySelector('#map-canvas');
  const cards = createMoсkData();
  const cardsFragment = document.createDocumentFragment();

  cards.forEach(({author: {avatar}, offer: {title, address, price, type, rooms, guests, checkin, checkout, features,   description, photos}}) => {
    const cardElement = popupTemplate.cloneNode(true);
    const photosElement = cardElement.querySelector('.popup__photos');
    const featuresList = cardElement.querySelectorAll('.popup__feature');
    const photosFragment = document.createDocumentFragment();

    cardElement.querySelector('.popup__title').textContent = title;
    cardElement.querySelector('.popup__text--address').textContent = address;
    cardElement.querySelector('.popup__text--price').textContent = `${price} ₽/ночь`;
    cardElement.querySelector('.popup__type').textContent = typesMap[type];
    cardElement.querySelector('.popup__text--capacity').textContent = `${rooms} ${numWord(rooms, ['комната', 'комнаты', 'комнат'])} для ${guests} ${numWord(guests, ['гостя', 'гостей', 'гостей'])}`;
    cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
    cardElement.querySelector('.popup__description').textContent = description;
    cardElement.querySelector('.popup__avatar').src = avatar;

    // Заполняет раздел features объявления.
    featuresList.forEach((featuresListItem) => {
      const isNecessary = features.some(
        (feature) => featuresListItem.classList.contains(`popup__feature--${feature}`),
      );

      if (!isNecessary) {
        featuresListItem.remove();
      }
    });

    // Наполняет галерею объявления.
    photos.forEach((photoSrc) => {
      const photoElement = cardElement.querySelector('.popup__photo').cloneNode(true);
      photoElement.src = photoSrc;
      photosFragment.append(photoElement);
    });
    // Удаляет первное фото из шаблона после наполнения галереи объявления.
    cardElement.querySelector('.popup__photo').remove();
    photosElement.append(photosFragment);

    cardsFragment.append(cardElement);
  });

  return mapCanvas.append(cardsFragment.querySelectorAll('.popup')[0]);
};

export {rendercards};

import {
  getRandomPositiveInteger,
  getRandomPositiveFloat,
  getRandomLengthArrayOfUniqueValues,
  makeCounter
} from './util.js';

const HOUSING_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const HOUSING_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const HOUSING_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const CHECKIN_CHECKOUT_TIMES = [
  '12:00',
  '13:00',
  '14:00'
];

const NUMBER_OF_ADS = 10;
const LAT_FROM = 35.65000;
const LAT_BEFORE = 35.70000;
const LNG_FROM = 139.70000;
const LNG_BEFORE = 139.80000;

// Начинаем собирать временные данные.
const adsCounter = makeCounter(1);

const getAd = () => {
  const chekinChekoutTime = CHECKIN_CHECKOUT_TIMES[getRandomPositiveInteger(0, CHECKIN_CHECKOUT_TIMES.length - 1)];
  const currentLatitude = getRandomPositiveFloat(LAT_FROM, LAT_BEFORE, 5);
  const currentLongitude = getRandomPositiveFloat(LNG_FROM, LNG_BEFORE, 5);
  const adsCurrentCounter = adsCounter();

  return {
    author: {
      avatar: `img/avatars/user${adsCurrentCounter.toString().padStart(2, '0')}.png`,
    },
    offer: {
      title: `Объявление № ${adsCurrentCounter}`,
      address: `${currentLatitude}, ${currentLongitude}`,
      price: getRandomPositiveInteger(0, 100000),
      type: HOUSING_TYPES[getRandomPositiveInteger(0, HOUSING_TYPES.length - 1)],
      rooms: getRandomPositiveInteger(1, 10),
      guests: getRandomPositiveInteger(1, 10),
      checkin: chekinChekoutTime,
      checkout: chekinChekoutTime,
      features: getRandomLengthArrayOfUniqueValues(HOUSING_FEATURES),
      description: `Описание объявления № ${adsCurrentCounter}`,
      photos: getRandomLengthArrayOfUniqueValues(HOUSING_PHOTOS),
    },
    location: {
      lat: currentLatitude,
      lng: currentLongitude,
    },
  };
};

const createMoсkData = () => Array.from({length: NUMBER_OF_ADS}, getAd);

export {createMoсkData};

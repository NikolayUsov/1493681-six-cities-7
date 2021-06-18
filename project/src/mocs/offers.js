import {
  getRandomFloat,
  getRandomInteger,
  getRandomText,
  createId,
  shuffleArray,
  getRandomElement,
} from './mock-utils';

const AVATAR_URL = 'https://i.pravatar.cc/';
const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

const NAMES = ['Fedor', 'Angelina', 'Gena', 'Slava'];
const GOODS = ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'];

export const Types = {
  apartment: 'Apartment',
  room: 'Private Room',
  house: 'House',
  hotel: 'Hotel',
};

const getHostId = createId(0);
const getOffersId = createId(0);

const generateOfferItemMock = () => {
  const photos = new Array(getRandomInteger(1, 6))
    .fill('')
    .map(() => `img/apartment-0${getRandomInteger(1, 3)}.jpg`);
  return {
    bedrooms: getRandomInteger(1, 4),
    city: {
      location: {
        lat: Number(getRandomFloat(52, 53, 7)),
        lng: Number(getRandomFloat(4, 52, 7)),
        zoom: 18,
      },
      name: getRandomElement(CITIES),
    },
    description: getRandomText(),
    goods: shuffleArray(GOODS),
    host: {
      avatarUrl: `${AVATAR_URL}${getRandomInteger(1, 50)}`,
      id: getHostId(),
      isPro: Boolean(getRandomInteger(0, 1)),
      name: getRandomElement(NAMES),
    },
    id: getOffersId(),
    images: photos,
    isFavorite: Boolean(getRandomInteger(0, 1)),
    isPremium: Boolean(getRandomInteger(0, 1)),
    location: {
      lat: getRandomFloat(52, 53, 7),
      lng: getRandomFloat(4, 5, 7),
      zoom: getRandomInteger(1, 10),
    },
    maxAdults: getRandomInteger(1, 6),
    previewImage: photos[0],
    price: getRandomInteger(69, 140),
    rating: getRandomFloat(0, 5),
    title: getRandomText().slice(0, 16),
    type: getRandomElement(Object.keys(Types)),
  };
};

const offers = new Array(10).fill('').map(generateOfferItemMock);

export { offers };

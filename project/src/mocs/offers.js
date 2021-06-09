
import { getRandomFloat, getRandomInteger, getRandomText, createId} from './mock-utils.js';
const AVATAR_URL = 'https://i.pravatar.cc/';
const CITYES= [
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
  const photos = new Array(getRandomInteger(1,6))
    .fill('')
    .map((elem) => `img/apartment-0${getRandomInteger(1, 3)}.jpg`);

  return {
    bedrooms: getRandomInteger(1, 4),
    city:{
      location: {
        latitude: Number(getRandomFloat(52, 53, 7)),
        longitude: (getRandomFloat(4, 52, 7)),
        zoom: getRandomInteger(1, 10),
      },
      name: CITYES.randomElement(),
    },
    description: getRandomText(),
    goods: GOODS.shuffle(),
    host: {
      avatarUrl: `${AVATAR_URL}${getRandomInteger(1, 50)}`,
      id: getHostId(),
      isPro: Boolean(getRandomInteger(0, 1)),
      name: NAMES.randomElement(),
    },
    id: getOffersId(),
    images: photos,
    isFavorite:Boolean(getRandomInteger(0, 1)),
    isPremium: Boolean(getRandomInteger(0, 1)),
    location: {
      latitude: getRandomFloat(52, 53, 7),
      longitude: getRandomFloat(4, 5, 7),
      zoom: getRandomInteger(1, 10),
    },
    maxAdults: getRandomInteger(1, 6),
    previewImage: photos[0],
    price: getRandomInteger(69, 140),
    rating: getRandomFloat(0, 5),
    title: getRandomText().slice(0, 16),
    type: Object.keys(Types).randomElement(),
  };
};

const offers = new Array(10).fill('').map(generateOfferItemMock);

export { offers };

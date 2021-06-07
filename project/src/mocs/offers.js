
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

const Types = {
  apartment: 'Apartment',
  room: 'Private Room',
  house: 'House',
  hotel: 'Hotel',
};

const getHostId = createId(1);
const getOffersId = createId(1);

const generateOfferItemMock = () => {
  const photos = new Array(getRandomInteger(0,6))
    .fill('')
    .map((elem) => `img/${getRandomInteger(1, 3)}.png`);

  return {
    bedrooms: getRandomInteger(1, 4),
    city:{
      location: {
        latitude: getRandomFloat(52, 53),
        longitude: getRandomFloat(4, 5),
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
      latitude: getRandomFloat(52, 53),
      longitude: getRandomFloat(4, 5),
      zoom: getRandomInteger(1, 10),
    },
    maxAdults: getRandomInteger(1, 6),
    previewImage: photos.randomElement(),
    price: getRandomInteger(69, 140),
    rating: Number(getRandomFloat(0, 5)),
    title: getRandomText().slice(0, 16),
    type: Object.keys(Types).randomElement(),
  };
};

const offers = new Array(10).fill('').map(generateOfferItemMock);

export { offers };

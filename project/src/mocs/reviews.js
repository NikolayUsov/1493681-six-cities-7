import dayjs from 'dayjs';
import {
  getRandomText,
  getRandomInteger,
  createId,
  getRandomFloat,
  getRandomElement,
} from './mock-utils';

const AVATAR_URL = 'https://i.pravatar.cc/';
const commentId = createId();
const NAMES = ['Fedor', 'Angelina', 'Gena', 'Slava', 'Pedro', 'Roma'];

const review = () => ({
  comment: getRandomText(),
  date: dayjs().subtract(getRandomInteger(1, 25), 'year'),
  id: commentId(),
  rating: getRandomFloat(0, 5),
  user: {
    avatarUrl: `${AVATAR_URL}${getRandomInteger(1, 50)}`,
    isPro: Boolean(getRandomInteger(0, 1)),
    name: getRandomElement(NAMES),
    id: getRandomInteger(100, 900),
  },
});

// eslint-disable-next-line import/prefer-default-export
export const createRandomReviews = () => new Array(getRandomInteger(1, 10)).fill().map(review);

import { createSelector } from 'reselect';
import { SortFunctions } from '../../const';

// eslint-disable-next-line no-unused-vars
const getCurrentOffers = (arr, city, sortType) => arr
  .filter((elem) => elem.city.name === city)
  .sort(SortFunctions[sortType]);

const getCurrentSortType = (state) => state.currentSortType.currentSortType;
const getCurrentCity = (state) => state.currentCity.currentCity;
const getOffers = (state) => state.mainOffers.offers;

const currentOffers = createSelector(
  [getOffers, getCurrentCity, getCurrentSortType],
  (offers, currentCity, currentSortType) => {
    offers
      .filter((elem) => elem.city.name === currentCity)
      .sort(SortFunctions[currentSortType]);
  },
);

export default currentOffers;

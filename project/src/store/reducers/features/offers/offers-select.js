import { createSelector } from 'reselect';
import { SortFunctions } from '../../../../const';
import NameSpace from '../../name-space';
import { selectCurrentCity, selectSortType } from '../app/app-slice';

const selectOffers = (state) => state[NameSpace.OFFERS].offers;
const selectIsLoading = (state) => state[NameSpace.OFFERS].isLoading;
const selectIsError = (state) => state[NameSpace.OFFERS].isError;

const selectCurrentOffers = createSelector(
  [selectOffers, selectCurrentCity, selectSortType],

  (offers, currentCity, currentSortType) => offers
    .filter((elem) => elem.city.name === currentCity)
    .sort(SortFunctions[currentSortType]),
);

export {
  selectCurrentOffers,
  selectOffers,
  selectIsLoading,
  selectIsError,
};

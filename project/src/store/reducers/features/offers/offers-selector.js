import { createSelector } from 'reselect';
import { SortFunctions } from '../../../../const';
import NameSpace from '../../name-space';
import { selectCurrentCity, selectSortType } from '../app/app-slice';

const selectOffers = (state) => state[NameSpace.OFFERS].offers;
const selectIsLoading = (state) => state[NameSpace.OFFERS].isLoading;
const selectIsError = (state) => state[NameSpace.OFFERS].isError;
const selectOfferDetails = (state) => state[NameSpace.OFFERS].offerDetails;
const selectOffersDetailsFetchStatus = (state) => state[NameSpace.OFFERS].offerDetailsFetchStatus;
const selectOffersNearby = (state) => state[NameSpace.OFFERS].offersNearby;
const selectOffersNearbyFetchStatus = (state) => state[NameSpace.OFFERS].offersNearbyFetchStatus;

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
  selectOfferDetails,
  selectOffersDetailsFetchStatus,
  selectOffersNearby,
  selectOffersNearbyFetchStatus,
};

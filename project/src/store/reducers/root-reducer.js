import { combineReducers } from 'redux';
import mainOffersSlice from './main-offers';
import curentCitySlice from './curent-city';
import currentSortTypeSlice from './current-sort-type';
import authorizationSlice from './authorization';

const rootReducer = combineReducers({
  mainOffers: mainOffersSlice,
  curentCity: curentCitySlice,
  currentSortType: currentSortTypeSlice,
  authorization: authorizationSlice,
});

export default { rootReducer };

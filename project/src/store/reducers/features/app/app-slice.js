import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { CITIES } from '../../../../const';
import NameSpace from '../../name-space';

const SORT_TYPE_DEFAULT = 'Popular';

const initialState = {
  currentCity: CITIES[0],
  currentSortType: SORT_TYPE_DEFAULT,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeSortType: (state, action) => {
      state.currentSortType = action.payload;
    },
    changeCity: (state, action) => {
      state.currentCity = action.payload;
    },
  },

});

const selectCurrentCity = (state) => state[NameSpace.APP].currentCity;
const selectSortType = (state) => state[NameSpace.APP].currentSortType;
const selectOffers = (state) => state[NameSpace.OFFERS].offers;

const selectCityLocations = createSelector(
  [selectOffers],
  (offers) => offers.reduce((acc, offer) => {
    acc[offer.city.name] = offer.city.location;
    return acc;
  }, {}),
);
export { selectCurrentCity, selectSortType, selectCityLocations };
export const { changeSortType, changeCity } = appSlice.actions;
export default appSlice.reducer;

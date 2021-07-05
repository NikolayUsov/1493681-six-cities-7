/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
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
export { selectCurrentCity, selectSortType };
export const { changeSortType, changeCity } = appSlice.actions;
export default appSlice.reducer;

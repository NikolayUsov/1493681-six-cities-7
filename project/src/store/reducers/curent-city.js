/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { CITIES } from '../../const';

const initialState = {
  currentCity: CITIES[0],
};

const currentCity = createSlice({
  name: 'currentCity',
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.currentCity = action.payload;
    },
  },
});

export const { changeCity } = currentCity.actions;
export default currentCity.reducer;

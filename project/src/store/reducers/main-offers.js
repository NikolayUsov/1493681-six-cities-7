/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  offers: [],
  isError: false,
  isLoading: false,
  isSuccess: false,

};

const offersMain = createSlice({
  name: 'main-offers',
  initialState,
  reducers: {
    fetchOffersRequest: (state) => {
      state.isLoading = true;
    },
    fetchOffersSuccess: (state, action) => {
      state.isLoading = false;
      state.offers = action.payload;
    },
  },
});

export const { fetchOffersRequest, fetchOffersSuccess } = offersMain.actions;
export default offersMain.reducer;

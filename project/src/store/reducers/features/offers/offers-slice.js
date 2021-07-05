/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { fetchHostels } from '../../../api-action';

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
  extraReducers: {
    [fetchHostels.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchHostels.fulfilled]: (state, action) => {
      state.offers = action.payload;
      state.isLoading = false;
    },
    [fetchHostels.rejected]: (state) => {
      state.isError = true;
    },
  },
});

export { fetchHostels };
export const { fetchOffersRequest, fetchOffersSuccess } = offersMain.actions;
export default offersMain.reducer;

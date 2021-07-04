/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const SORT_TYPE_DEFAULT = 'Popular';
const initialState = {
  sortType: SORT_TYPE_DEFAULT,
};

const currentSortType = createSlice({
  name: 'currentCity',
  initialState,
  reducers: {
    changeSortType: (state, action) => {
      state.currentSortType = action.payload;
    },
  },
});

export const { changeSortType } = currentSortType.actions;
export default currentSortType.reducer;

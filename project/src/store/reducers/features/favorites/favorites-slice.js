/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoutes } from '../../../../const';
import adaptedToClient from '../../../../utils/adapte-to-client';

const fetchFavorites = createAsyncThunk(
  'favorites/fetch',
  async (_, { extra: apiInstance }) => {
    try {
      const { data } = await apiInstance.get(ApiRoutes.FAVORITES);
      return data;
    } catch (err) {
      throw new Error(err);
    }
  },
);

const fetchChangeFavorites = createAsyncThunk(
  'favorites/changeStatus',
  async ({ id, status }, { extra: apiInstance }) => {
    const { data } = await apiInstance.post(`${ApiRoutes.FAVORITES}/${id}/${status}`);
    console.log(data);
    return adaptedToClient(data);
  },
);

const initialState = {
  favorites: [],
  favoritesLoadState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
  },
};

const favorites = createSlice({
  name: 'favorites',
  initialState,
  extraReducers: {
    [fetchFavorites.pending]: (state) => {
      state.favoritesLoadState.isLoading = true;
    },
    [fetchFavorites.fulfilled]: (state, action) => {
      state.favoritesLoadState.isLoading = false;
      state.favorites = action.payload;
    },
    [fetchFavorites.rejected]: (state) => {
      state.favoritesLoadState.isError = true;
    },

    [fetchChangeFavorites.pending]: (state) => {
      state.favoritesLoadState.isLoading = true;
    },
    [fetchChangeFavorites.fulfilled]: (state, action) => {
      state.favoritesLoadState.isLoading = false;
      console.log(action);
      state.favorites = state.favorites.push(action.payload).filter((offer) => offer.isFavorite);
    },
    [fetchChangeFavorites.rejected]: (state) => {
      state.favoritesLoadState.isError = true;
    },
  },
});

export { fetchFavorites, fetchChangeFavorites };
export default favorites.reducer;

/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoutes } from '../../../../const';
import adaptedToClient from '../../../../utils/adapte-to-client';
import { updateOffers } from '../offers/offers-slice';

const fetchFavorites = createAsyncThunk(
  'favorites/fetch',
  async (_, { extra: apiInstance }) => {
    try {
      const { data } = await apiInstance.get(ApiRoutes.FAVORITES);
      return data.map(adaptedToClient);
    } catch (err) {
      throw new Error(err);
    }
  },
);

const fetchChangeFavorites = createAsyncThunk(
  'favorites/changeStatus',
  async ({ id, status }, { dispatch, extra: apiInstance }) => {
    const { data } = await apiInstance.post(`${ApiRoutes.FAVORITES}/${id}/${status}`);
    const offer = adaptedToClient(data);
    dispatch(updateOffers(offer));
    return offer;
  },
);

const initialState = {
  favorites: [],
  favoritesLoadStatus: {
    isLoading: true,
    isSuccess: false,
    isError: false,
  },
};

const favorites = createSlice({
  name: 'favorites',
  initialState,
  extraReducers: {
    [fetchFavorites.pending]: (state) => {
      state.favoritesLoadStatus.isLoading = true;
    },
    [fetchFavorites.fulfilled]: (state, action) => {
      state.favoritesLoadStatus.isLoading = false;
      state.favorites = action.payload;
    },
    [fetchFavorites.rejected]: (state) => {
      state.favoritesLoadStatus.isError = true;
    },

    [fetchChangeFavorites.pending]: (state) => {
      state.favoritesLoadStatus.isLoading = true;
    },
    [fetchChangeFavorites.fulfilled]: (state, action) => {
      state.favoritesLoadStatus.isLoading = false;
      state.favorites = state.favorites.map((offer) => {
        if (action.payload.id === offer.id) {
          offer.isFavorite = !offer.isFavorite;
          return offer;
        }
        return offer;
      });
    },
    [fetchChangeFavorites.rejected]: (state) => {
      state.favoritesLoadStatus.isError = true;
    },
  },
});

export { fetchFavorites, fetchChangeFavorites };
export default favorites.reducer;
export const { updateFavorites } = favorites.actions;

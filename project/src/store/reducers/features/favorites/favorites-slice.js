import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoutes } from '../../../../const';
import adaptedToClient from '../../../../utils/adapte-to-client';

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
  async ({ id, status }, { extra: apiInstance }) => {
    const { data } = await apiInstance.post(`${ApiRoutes.FAVORITES}/${id}/${status}`);
    const offer = adaptedToClient(data);
    return offer;
  },
);

const initialState = {
  favorites: [],
  favoritesLoadStatus: {
    isLoading: false,
    isSuccess: false,
    isError: false,
  },
  favoritesPostStatus: {
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
      state.favoritesPostStatus.isLoading = true;
    },
    [fetchChangeFavorites.fulfilled]: (state, action) => {
      state.favoritesPostStatus.isLoading = false;
      state.favorites = state.favorites.filter((offer) => offer.id !== action.payload.id);
    },
    [fetchChangeFavorites.rejected]: (state) => {
      state.favoritesLoadStatus.isError = true;
    },
  },
});

export { fetchFavorites, fetchChangeFavorites };
export default favorites.reducer;

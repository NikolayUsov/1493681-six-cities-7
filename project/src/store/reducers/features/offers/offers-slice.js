/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import adaptedToClient from '../../../../utils/adapte-to-client';
import { redirectToRoute } from '../../../middlewars/redirect';

const ApiRoutes = {
  HOSTELS: '/hotels',
  LOGIN: '/login',
  LOGOUT: '/logout',
  NEARBY: '/nearby',
  COMMENTS: '/comments',
};

const fetchOffers = createAsyncThunk('offers/fetchOffers',
  async (_, { extra: apiInstance }) => {
    try {
      const { data } = await apiInstance.get(ApiRoutes.HOSTELS);
      return data.map(adaptedToClient);
    } catch (err) {
      throw new Error(err);
    }
  });

const fetchOfferDetails = createAsyncThunk(
  'offers/fetchOfferDetails',
  async (id, { dispatch, extra: apiInstance }) => {
    try {
      const { data } = await apiInstance.get(`${ApiRoutes.HOSTELS}/${id}`);
      return adaptedToClient(data);
    } catch (err) {
      dispatch(redirectToRoute(ApiRoutes.NOT_FOUND));
      throw new Error(err);
    }
  },
);

const fetchOffersNearby = createAsyncThunk(
  'offers/fetchOfferNearby',
  async (id, { extra: apiInstance }) => {
    try {
      const { data } = await apiInstance.get(`${ApiRoutes.HOSTELS}/${id}${ApiRoutes.NEARBY}`);
      return data.map(adaptedToClient);
    } catch (err) {
      throw new Error(err);
    }
  },
);
const initialState = {
  offers: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  offerDetails: {},
  offerDetailsFetchStatus: {
    isLoading: true,
    isSuccess: false,
  },
  offersNearby: [],
  offersNearbyFetchStatus: {
    isLoading: true,
    isSuccess: false,
  },

};

const offersMain = createSlice({
  name: 'main-offers',
  initialState,
  extraReducers: {
    [fetchOffers.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchOffers.fulfilled]: (state, action) => {
      state.offers = action.payload;
      state.isLoading = false;
    },
    [fetchOffers.rejected]: (state) => {
      state.isError = true;
    },

    [fetchOfferDetails.pending]: (state) => {
      state.offerDetailsFetchStatus.isLoading = true;
    },
    [fetchOfferDetails.fulfilled]: (state, action) => {
      state.offerDetails = action.payload;
      state.offerDetailsFetchStatus.isLoading = false;
    },
    [fetchOfferDetails.rejected]: (state) => {
      state.offerDetailsFetchStatus.isError = true;
    },

    [fetchOffersNearby.pending]: (state) => {
      state.offersNearbyFetchStatus.isLoading = true;
    },
    [fetchOffersNearby.fulfilled]: (state, action) => {
      state.offersNearby = action.payload;
      state.offersNearbyFetchStatus.isLoading = false;
    },
    [fetchOffersNearby.rejected]: (state) => {
      state.offersNearbyFetchStatus.isError = true;
    },
  },
});

export { fetchOffers, fetchOfferDetails, fetchOffersNearby };
export default offersMain.reducer;

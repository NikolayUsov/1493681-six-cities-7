/* eslint-disable no-unused-vars */
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import axios from 'axios';
import { createStore } from 'redux';
import reducer, { fetchOffers, fetchOfferDetails, fetchOffersNearby } from './offers-slice';
import { ApiRoutes } from '../../../../const';

const api = null;
let mockStore;
let thunkActionCreator;
let initialState;
const fakeOffer = {
  id: 3,
  name: 'test',
};

describe('Test offers-slice', () => {
  describe('Test extra-reducers', () => {
    beforeEach(() => {
      initialState = {
        offers: [],
        isError: false,
        isLoading: false,
        isSuccess: false,
        offerDetails: {},
        offerDetailsFetchStatus: {
          isLoading: true,
          isSuccess: false,
          isError: false,
        },
        offersNearby: [],
        offersNearbyFetchStatus: {
          isLoading: true,
          isSuccess: false,
          isError: false,
        },

      };
    });

    it('Test fetch offers pending', () => {
      const action = { type: fetchOffers.pending.type };
      const state = reducer(initialState, action);
      expect(state).toEqual({ ...initialState, isLoading: true });
    });

    it('Test fetch offers fulfilled', () => {
      const action = { type: fetchOffers.fulfilled.type, payload: fakeOffer };
      const state = reducer(initialState, action);
      expect(state).toEqual({ ...initialState, offers: fakeOffer });
    });

    it('Test fetch offers rejected', () => {
      const action = { type: fetchOffers.rejected.type };
      const state = reducer(initialState, action);
      expect(state).toEqual({ ...initialState, isError: true });
    });

    it('Test fetch offers details pending', () => {
      const action = { type: fetchOfferDetails.pending.type };
      const state = reducer(initialState, action);
      expect(state).toEqual({
        ...initialState,
        offerDetailsFetchStatus: { ...initialState.offerDetailsFetchStatus, isLoading: true },
      });
    });

    it('Test fetch offers details fulfilled', () => {
      const action = { type: fetchOfferDetails.fulfilled.type, payload: fakeOffer };
      const state = reducer(initialState, action);
      expect(state).toEqual({
        ...initialState,
        offerDetails: fakeOffer,
        offerDetailsFetchStatus: { ...initialState.offerDetailsFetchStatus, isLoading: false },
      });
    });

    it('Test fetch offers details rejected', () => {
      const action = { type: fetchOfferDetails.rejected.type };
      const state = reducer(initialState, action);
      expect(state).toEqual({
        ...initialState,
        offerDetailsFetchStatus: { ...initialState.offerDetailsFetchStatus, isError: true },
      });
    });

    it('Test fetch offers nearby pending', () => {
      const action = { type: fetchOffersNearby.pending.type };
      const state = reducer(initialState, action);
      expect(state).toEqual({
        ...initialState,
        offersNearbyFetchStatus: { ...initialState.offersNearbyFetchStatus, isLoading: true },
      });
    });

    it('Test fetch offers nearby fulfilled', () => {
      const action = { type: fetchOffersNearby.fulfilled.type, payload: fakeOffer };
      const state = reducer(initialState, action);
      expect(state).toEqual({
        ...initialState,
        offersNearby: fakeOffer,
        offersNearbyFetchStatus: { ...initialState.offersNearbyFetchStatus, isLoading: false },
      });
    });

    it('Test fetch offers nearby rejected', () => {
      const action = { type: fetchOffersNearby.rejected.type };
      const state = reducer(initialState, action);
      expect(state).toEqual({
        ...initialState,
        offersNearbyFetchStatus: { ...initialState.offersNearbyFetchStatus, isError: true },
      });
    });
  });

  describe('Test offers async thync', () => {
    const dispatch = jest.fn;
    const getSpy = jest.spyOn(axios, 'get');
    const store = createStore(reducer, initialState);
    it('Test fetch offers', async () => {
      await store.dispatch(fetchOffers());
      expect(getSpy).toBeCalledWith(ApiRoutes.HOSTELS);
    });
  });
});

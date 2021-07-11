/* eslint-disable no-unused-vars */
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import createAPI from '../../../../services/api';
import { fetchOffers } from './offers-slice';
import { ApiRoutes } from '../../../../const';

let api = null;
let mockStore;
let thunkActionCreator;
describe('Test offers-slice', () => {
  beforeAll(() => {
    api = createAPI(() => {});
    const dispatch = jest.fn();
    thunkActionCreator = createAsyncThunk('testType', async () => 42);
    mockStore = configureStore({});
  });

  it('should make a correct API call to GET /offers', () => {
    const apiMock = new MockAdapter(api);
    const offersLoader = fetchOffers();
    const fakeData = [{ fake: true }];

    apiMock
      .onGet(ApiRoutes.HOSTELS)
      .reply(200, fakeData);

    return offersLoader()
      .then(() => {
        expect(thunkActionCreator.fulfilled.type).toBe('testType/fulfilled');
      });
  });
});

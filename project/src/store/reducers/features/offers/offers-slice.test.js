/* eslint-disable no-unused-vars */
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import createAPI from '../../../../services/api';
import { fetchOffers } from './offers-slice';
import { ApiRoutes } from '../../../../const';

let api = null;
let mockStore;
let thunkActionCreator;

const dispatch = jest.fn();
describe('Test offers-slice', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it('should make a correct API call to GET /offers', async () => {
    const apiMock = new MockAdapter(api);
    const thunkApi = {
      dispatch,
      getState: () => {},
      extra: api,
    };
    const offersLoader = fetchOffers(null, thunkApi);
    const fakeData = [{ fake: true }];

    apiMock
      .onGet(ApiRoutes.HOSTELS)
      .reply(200, fakeData);

    const { data } = await offersLoader();
    expect(data).toEqual(fakeData);
  });
});

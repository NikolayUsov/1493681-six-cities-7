import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { OffersBoard } from './offers-board';
import '../map/map';
import '../offer-card/offer-card';
import '../offer-card-list/offer-card-list';
import { offers } from '../../mocs/mock-offer';
import NameSpace from '../../store/reducers/name-space';

jest.mock('../map/map', () => function fakeMap() {
  return (
    <div data-testid="fakeMap" />
  );
});

jest.mock('../offer-card-list/offer-card-list', () => function fakeOfferCardList() {
  return (
    <div data-testid="fakeOfferCardList" />
  );
});

jest.mock('../offer-card/offer-card', () => function fakeOfferCard() {
  return (
    <div data-testid="fakeOfferCard" />
  );
});

let mockStore;
let store;

describe('Test offers-board', () => {
  beforeAll(() => {
    mockStore = configureStore({});
  });

  beforeEach(() => {
    store = mockStore({
      app: {
        currentCite: 'FakeCity',
      },
      [NameSpace.OFFERS]: {
        offers,
        isError: false,
        isLoading: false,
        isSuccess: false,
      },
    });

    render(
      <Provider store={store}>
        <OffersBoard />
      </Provider>,
    );
  });

  afterEach(() => {
    console.log('after', store.getState());
  });
  it('Should render correctly', () => {
    console.log(store.getState());
    expect(screen.getByText('Places')).toBeInTheDocument();
  });
});

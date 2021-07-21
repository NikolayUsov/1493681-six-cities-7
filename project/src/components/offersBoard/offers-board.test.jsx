import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { OffersBoard } from './offers-board';
import '../map/map';
import '../offer-card/offer-card';
import '../offer-card-list/offer-card-list';
import { offersStab } from '../../mocs/stab-offers';
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
        currentCity: 'Paris',
        currentSortType: 'Popular',
      },
      [NameSpace.OFFERS]: {
        offers: offersStab,
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

  it('Should render correctly', () => {
    expect(screen.getByText('Places')).toBeInTheDocument();
    expect(screen.getByTestId('fakeMap')).toBeInTheDocument();
    expect(screen.getByTestId('fakeOfferCardList')).toBeInTheDocument();
  });
});

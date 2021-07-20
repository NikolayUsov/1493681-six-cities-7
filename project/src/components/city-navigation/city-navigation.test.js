import React from 'react';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import CityNavigation from './city-navigation';
import { CITIES } from '../../const';
import NameSpace from '../../store/reducers/name-space';

let store;
let mockStore;

describe('Testing city navigation menu', () => {
  beforeAll(() => {
    mockStore = configureStore({});
  });

  beforeEach(() => {
    store = mockStore({
      [NameSpace.APP]: {
        currentCity: CITIES[0],
      },
    });
    render(
      <Provider store={store}>
        <CityNavigation />
      </Provider>,
    );
  });

  it('Should render correctly', () => {
    expect(CITIES.every((city) => screen.getByText(city))).toBeTruthy();
  });

  it('Should has active class', () => {
    const sate = store.getState();
    const current = screen.getByText(sate[NameSpace.APP].currentCity).closest('a');
    expect(current.classList.contains('tabs__item--active')).toBeTruthy();
  });
});

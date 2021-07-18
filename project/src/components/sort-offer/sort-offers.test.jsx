import React from 'react';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { SortOffers } from './sort-offers';
import { SortFunctions } from '../../const';

let store;
let mockStore;
describe('Test sortComponent', () => {
  test('Render correctly', () => {
    mockStore = configureStore({});
    store = mockStore({
      app: {
        currentSortType: 'Popular',
      },
    });
    render(
      <Provider store={store}>
        <SortOffers />
      </Provider>,
    );
    expect(Object.keys(SortFunctions).every((elem) => screen.getAllByText(elem))).toBeTruthy();
  });
});

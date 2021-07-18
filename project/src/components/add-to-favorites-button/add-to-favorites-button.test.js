/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router';
import AddToFavorites from './add-to-favorites-button';
import NameSpace from '../../store/reducers/name-space';
import { AuthorizationStatus } from '../../const';

let mockStore;
let store;

describe('Test add-to-favorites component', () => {
  beforeAll(() => {
    mockStore = configureStore({});
  });

  it('Should render correctly render no active button', () => {
    store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      },
    });

    const id = 5;
    const isFavorite = false;
    render(
      <Provider store={store}>
        <MemoryRouter>
          <AddToFavorites id={id} isFavorite={isFavorite} />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')
      .classList.contains('place-card__bookmark-button--active')).toBe(false);
  });

  it('Should render correctly render active button', () => {
    store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
    });

    const id = 5;
    const isFavorite = true;
    render(
      <Provider store={store}>
        <MemoryRouter>
          <AddToFavorites id={id} isFavorite={isFavorite} />
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')
      .classList
      .contains('place-card__bookmark-button--active')).toBe(true);
  });
});

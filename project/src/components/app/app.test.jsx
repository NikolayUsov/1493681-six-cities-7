import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { App } from './app';
import { AppRoutes, AuthorizationStatus } from '../../const';
import NameSpace from '../../store/reducers/name-space';

let store;
let mockStore;

describe('Test routes of app', () => {
  beforeAll(() => {
    mockStore = configureStore({});
  });
  it('Should render 404 page', () => {
    store = mockStore({
      [NameSpace.USER]:
        {
          authorizationStatus: AuthorizationStatus.NO_AUTH,
          userInfo: {},
          loginStatus: {
            isError: false,
            isLoading: false,
            isSuccess: false,
          },
          logoutStatus: {
            isError: false,
            isLoading: false,
            isSuccess: false,
          },
        },
      [NameSpace.OFFERS]: {
        offers: [],
      },
      [NameSpace.APP]: { currentCity: 'Paris', currentSortType: 'Popular' },
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[AppRoutes.NOT_FOUND]}>
          <App />
        </MemoryRouter>
      </Provider>,
    );

    screen.debug();
    const headerElement = screen.getByText('Что то ты свернул не туда, может найдем другое');
    const linkElement = screen.getByText('Место');
    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});

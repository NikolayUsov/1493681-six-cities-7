import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import configureStore from 'redux-mock-store';
import Header from './header';
import '../logo/logo';
import '../user-navigation/user-navigation';
import NameSpace from '../../store/reducers/name-space';
import { AuthorizationStatus } from '../../const';

jest.mock('../logo/logo', () => function fakeLogo() {
  return (
    <div data-testid="logo" />
  );
});

jest.mock('../user-navigation/user-navigation', () => function fakeUserNavigation() {
  return (
    <div data-testid="userNavigation" />
  );
});

let store;
let mockStore;
describe('Test header', () => {
  beforeAll(() => {
    mockStore = configureStore({});
  });

  beforeEach(() => {
    store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
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
    });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>,
    );
  });

  it('Header should has Logo', () => {
    expect(screen.queryByTestId('logo')).toBeInTheDocument();
  });

  it('Header should has userNavigation', () => {
    expect(screen.queryByTestId('userNavigation')).toBeInTheDocument();
  });
});

import React from 'react';
import { screen, render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { UserNavigation } from './user-navigation';
import { AuthorizationStatus } from '../../const';
import NameSpace from '../../store/reducers/name-space';

let store;
let mockStore;

const initialStateFake = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
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
};

const fakeUserInfo = {
  avatarUrl: 'img/1.png',
  email: 'Oliver.conner@gmail.com',
  id: 1,
  isPro: false,
  name: 'Oliver.conner',
};
const renderUserNavigation = (fakeStore) => (
  <Provider store={fakeStore}>
    <MemoryRouter>
      <UserNavigation />
    </MemoryRouter>
  </Provider>
);

describe('Test user-navigation', () => {
  beforeAll(() => {
    mockStore = configureStore({});
  });

  it('Should render correctly non auth user', () => {
    store = mockStore({
      [NameSpace.USER]: {
        ...initialStateFake,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      },
    });

    render(renderUserNavigation(store));
    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });

  it('Should render correctly auth user', () => {
    store = mockStore({
      [NameSpace.USER]: {
        ...initialStateFake,
        authorizationStatus: AuthorizationStatus.AUTH,
        userInfo: fakeUserInfo,
      },
    });

    render(renderUserNavigation(store));
    const fakeStore = store.getState();
    expect(screen.getByText('Sign out')).toBeInTheDocument();
    expect(screen.getByText(fakeStore[NameSpace.USER].userInfo.email)).toBeInTheDocument();
  });
});

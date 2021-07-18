/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import userEvent from '@testing-library/user-event';
// eslint-disable-next-line import/no-named-as-default
import LoginForm from './login-form';
import NameSpace from '../../store/reducers/name-space';
import { AuthorizationStatus } from '../../const';

let store;
let history;
let mockStore;

describe('Test Form-login component', () => {
  beforeAll(() => {
    mockStore = configureStore({});
  });

  it('Should render correctly', () => {
    store = mockStore({
      [NameSpace.USER]: {
        loginStatus: {
          isError: false,
          isLoading: false,
          isSuccess: false,
        },
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.queryByTestId('error')).not.toBeInTheDocument();
    expect(screen.getByTestId('button')).toBeDisabled();
  });
});

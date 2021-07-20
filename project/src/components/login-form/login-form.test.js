
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import LoginForm from './login-form';
import NameSpace from '../../store/reducers/name-space';

let store;
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

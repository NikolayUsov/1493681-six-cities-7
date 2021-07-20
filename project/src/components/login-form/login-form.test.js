
import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import LoginForm from './login-form';
import NameSpace from '../../store/reducers/name-space';
import userEvent from '@testing-library/user-event';
import thunk from 'redux-thunk';
import * as Redux from 'react-redux';

let store;
let mockStore;

const handleFormSubmit = jest.fn();

describe('Test Form-login component', () => {
  beforeAll(() => {
    const middleware = [thunk];
    mockStore = configureStore(middleware);
  });

  beforeEach(() => {
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
  });

  it('Should render correctly', () => {
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.queryByTestId('error')).not.toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('Should show invalid text', () => {
    userEvent.type(screen.getByTestId(/email/i), 'invalid email');
    userEvent.type(screen.getByTestId(/password/i), '55');
    expect(screen.queryByTestId('error')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('Should show no disabled button', () => {
    userEvent.type(screen.getByTestId(/email/i), 'fake@mail.ru');
    userEvent.type(screen.getByTestId(/password/i), 'valid password');
    expect(screen.getByTestId('login-form')).toHaveFormValues({
      email: 'fake@mail.ru',
      password: 'valid password',
    });
    expect(screen.getByRole('button')).toBeEnabled();
  });

  it('Should send login data', () => {
    const dispatch = jest.fn();
    const fetchLogin = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');

    useDispatch.mockReturnValue(dispatch);
    userEvent.type(screen.getByTestId(/email/i), 'fake@mail.ru');
    userEvent.type(screen.getByTestId(/password/i), 'valid password');
    fireEvent.click(screen.getByRole('button'));
    expect(fetchLogin).toHaveBeenCalledWith({
      email: 'fake@mail.ru',
      password: 'valid password',
    });
  });
});

/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import userEvent from '@testing-library/user-event';
// eslint-disable-next-line import/no-named-as-default
import LoginForm from './login-form';

const mockStore = configureStore({});

describe('Test Form-login component', () => {
  it('Should render correctly', () => {
    const history = createMemoryHistory();
    history.push('/login');

    render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <LoginForm />
        </Router>
      </Provider>,
    );

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByText(/'Sign in'/i)).closest('button').toBeDisabled();
  });
});

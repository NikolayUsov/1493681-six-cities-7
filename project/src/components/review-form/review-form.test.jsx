import React from 'react';
import { screen, render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { ReviewForm } from './review-form';
import NameSpace from '../../store/reducers/name-space';
import { AuthorizationStatus } from '../../const';

let store;
let mockStore;

const renderTestComponent = (fakeStore) => (
  <Provider store={fakeStore}>
    <ReviewForm id={1} />
  </Provider>
);

describe('Test review form', () => {
  beforeAll(() => {
    mockStore = configureStore({});
  });

  it('Should return null if user did not auth', () => {
    store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      },
      [NameSpace.COMMENT]: {
        commentsLoadStatus: {
          isLoading: false,
          isSuccess: false,
          isError: false,
        },
      },
    });

    render(renderTestComponent(store));
    expect(screen.queryByLabelText('Your review')).not.toBeInTheDocument();
    expect(screen.queryByPlaceholderText('Tell how was your stay, what you like and what can be improved')).not.toBeInTheDocument();
  });

  it('Should return form if use auth', () => {
    store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
      [NameSpace.COMMENT]: {
        commentsLoadStatus: {
          isLoading: false,
          isSuccess: false,
          isError: false,
        },
      },
    });

    render(renderTestComponent(store));
    expect(screen.queryByLabelText('Your review')).toBeInTheDocument();
    expect(screen.queryByPlaceholderText('Tell how was your stay, what you like and what can be improved')).toBeInTheDocument();
    expect(screen.getByTestId('submit')).toBeDisabled();

    userEvent.type(screen.getByTestId('textComment'), 'hh');
    expect(screen.getByDisplayValue(/hh/i)).toBeInTheDocument();
    expect(screen.getByTestId('submit')).toBeDisabled();
    userEvent.type(screen.getByTestId('textComment'), `${new Array(51).fill('a').join('')}`);
    userEvent.click(screen.getByTestId('3-testid'));
    expect(screen.getByTestId('submit')).not.toBeDisabled();
  });
});

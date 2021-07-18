import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ReviewList from './review-list';
import '../review-item/review-item';
import NameSpace from '../../store/reducers/name-space';
import { review } from '../../mocs/reviews';

jest.mock('../review-item/review-item', () => function fakeReviewItem() {
  return (
    <div data-testid="fakeReviewItem" />
  );
});

const testComponent = (fakeStore) => (
  <Provider store={fakeStore}>
    <ReviewList />
  </Provider>
);

let store;
let mockStore;
describe('Test reviews-list', () => {
  beforeAll(() => {
    mockStore = configureStore({});
  });

  it('Should render correctly reviews-length', () => {
    const TEST_COUNT = 10;
    store = mockStore({
      [NameSpace.COMMENT]: {
        comments: new Array(TEST_COUNT).fill().map(review),
        commentsLoadStatus: {
          isLoading: false,
          isSuccess: false,
          isError: false,
        },
      },
    });

    render(testComponent(store));
    expect(screen.getAllByTestId('fakeReviewItem').length).toBe(TEST_COUNT);
  });
});

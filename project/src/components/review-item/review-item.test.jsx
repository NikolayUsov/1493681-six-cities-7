import React from 'react';
import { render, screen } from '@testing-library/react';
import ReviewItem from './review-item';

const fakeReview = {
  id: 5,
  comment: 'classsssss',
  rating: 3,
  user: {
    avatarUrl: 'url',
    isPro: true,
    name: 'mily',
    id: 4,
  },
  date: '10.10.10',
};

describe('Test review component', () => {
  it('Should render corectly', () => {
    render(
      <ReviewItem review={fakeReview} />,
    );

    expect(screen.getByText(fakeReview.user.name)).toBeInTheDocument();
    expect(screen.getByTestId(`${fakeReview.user.name}${fakeReview.user.id}`)).toBeInTheDocument();
  });
});

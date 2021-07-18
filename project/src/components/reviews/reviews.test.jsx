import React from 'react';
import { render, screen } from '@testing-library/react';
import '../review-form/review-form';
import '../review-list/review-list';
import { Reviews } from './reviews';

jest.mock('../review-form/review-form', () => function fakeForm() {
  return (<div data-testid="fakeForm" />);
});

jest.mock('../review-list/review-list', () => function fakeReviewList() {
  return (<div data-testid="fakeReviewList" />);
});

describe('Test review container', () => {
  render(<Reviews id={1} />);

  it('Should has form and reviews list', () => {
    expect(screen.getByTestId('fakeForm')).toBeInTheDocument();
    expect(screen.getByTestId('fakeReviewList')).toBeInTheDocument();
  });
});

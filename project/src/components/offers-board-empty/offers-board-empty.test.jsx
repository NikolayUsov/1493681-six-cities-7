import React from 'react';
import { render, screen } from '@testing-library/react';
import OffersBoardEmpty from './offers-board-empty';

const fakeCity = 'SomeTestCity';
let error = false;
describe('Test offer-board empty', () => {
  it('Should render empty board correctly', () => {
    render(<OffersBoardEmpty currentCity={fakeCity} isError={error} />);
    expect(screen.getByText('No places to stay available')).toBeInTheDocument();
    expect(screen.getByText(/SomeTestCity/i)).toBeInTheDocument();
  });

  it('Should render error board correctly', () => {
    error = true;
    render(<OffersBoardEmpty currentCity={fakeCity} isError={error} />);
    expect(screen.getByText('Error on load data')).toBeInTheDocument();
  });
});

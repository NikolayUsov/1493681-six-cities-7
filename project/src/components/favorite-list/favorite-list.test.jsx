import React from 'react';
import { render, screen } from '@testing-library/react';
import FavoriteList from './favorite-list';
import { offers } from '../../mocs/mock-offer';
import '../offer-card/offer-card';

jest.mock('../offer-card/offer-card', () => function OfferCardFake() {
  return (
    <div data-testid="offerCard" />
  );
});

describe('Test Favorite-list component', () => {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  render(
    <FavoriteList offers={favoriteOffers} />,
  );

  it('Should render correctly', () => {
    expect(screen.getByText('Saved listing')).toBeInTheDocument();
    expect(screen.getAllByTestId('offerCard').length).toBe(favoriteOffers.length);
  });
});

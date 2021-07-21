import React from 'react';
import { render, screen } from '@testing-library/react';
import FavoriteList from './favorite-list';
import { offersStab } from '../../mocs/stab-offers';
import '../offer-card/offer-card';

jest.mock('../offer-card/offer-card', () => function fakeOfferCard() {
  return (
    <div data-testid="OfferCardFake" />
  );
});


describe('Test Favorite-list component', () => {
  const favoriteOffers = offersStab.filter((offer) => offer.isFavorite);
  render(
    <FavoriteList offers={favoriteOffers} />,
  );

  it('Should render correctly', () => {
    expect(screen.getByText('Saved listing')).toBeInTheDocument();
    expect(screen.getAllByTestId('OfferCardFake').length).toBe(favoriteOffers.length);
  });
});

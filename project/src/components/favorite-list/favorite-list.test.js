/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import FavoriteList from './favorite-list';
import { offers } from '../../mocs/mock-offer';
import OfferCard from './../offer-card/offer-card';

describe('Test Favorite-list component', () => {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  render(
    <FavoriteList offers={favoriteOffers} />,
  );

  it('Should render correctly', () => {
    expect(screen.getByText('Saved listing')).toBeInTheDocument();
    expect(screen.querySelectorAll('favorites__places').length).toBe(favoriteOffers.length);
  });
});

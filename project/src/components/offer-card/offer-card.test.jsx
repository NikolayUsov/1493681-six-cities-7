/* eslint-disable prefer-destructuring */
import React from 'react';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import '../add-to-favorites-button/add-to-favorites-button';
import { MemoryRouter } from 'react-router';
import { offers } from '../../mocs/mock-offer';
import { OfferCard } from './offer-card';

jest.mock('../add-to-favorites-button/add-to-favorites-button', () => function fakeAddToFavoritesButton() {
  return (
    <div data-testid="addToFavorite" />
  );
});

const fakeHandleActiveCard = jest.fn();
let fakeOffer;

describe('Test offer-card', () => {
  beforeEach(() => {
    fakeOffer = offers[0];
  });

  it('Should render-correctly', () => {
    render(
      <MemoryRouter>
        <OfferCard handleActiveOfferCard={fakeHandleActiveCard} offer={fakeOffer} />
      </MemoryRouter>,
    );
    expect(screen.queryByAltText('Place pic')).toBeInTheDocument();
    expect(screen.getByTestId('price')).toBeInTheDocument();
  });

  it('Should render-correctly isPremium', () => {
    render(
      <MemoryRouter>
        <OfferCard
          handleActiveOfferCard={fakeHandleActiveCard}
          offer={{ ...fakeOffer, isPremium: true }}
        />
      </MemoryRouter>,
    );
    expect(screen.getByText('Premium')).toBeInTheDocument();
  });
});

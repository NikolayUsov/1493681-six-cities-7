import React from 'react';
import { render, screen } from '@testing-library/react';
import OfferCardList from './offer-card-list';
import '../offer-card/offer-card';

const FAKE_COUNT = 10;
jest.mock('../offer-card/offer-card', () => function OfferCardFake() {
  return (
    <div data-testid="offerCard" />
  );
});

const fakeHandleActive = jest.fn();
describe('Test offer card list', () => {
  beforeAll(() => {
    render(
      <OfferCardList offers={new Array(FAKE_COUNT).fill('')} handleActiveOfferCard={fakeHandleActive} />,
    );
  });

  it('Test length of offer card', () => {
    expect(screen.getAllByTestId('offerCard').length).toBe(FAKE_COUNT);
  });
});

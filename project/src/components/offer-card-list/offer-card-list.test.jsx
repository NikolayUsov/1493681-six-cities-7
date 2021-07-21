import React from 'react';
import { render, screen } from '@testing-library/react';
import OfferCardList from './offer-card-list';
import '../offer-card/offer-card';

const FAKE_COUNT = 10;
jest.mock('../offer-card/offer-card', () => function fakeOfferCard() {
  return (
    <div data-testid="OfferCardFake" />
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
    expect(screen.getAllByTestId('OfferCardFake').length).toBe(FAKE_COUNT);
  });
});

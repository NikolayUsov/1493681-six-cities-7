import React from 'react';
import PropTypes from 'prop-types';
import SortOffers from '../sort-offer/sort-offers';
import OfferCardList from '../offer-card-list/offer-card-list';
import offerCardProp from '../offer-card/offer-card.prop';
import { OfferCardListParent } from '../../const';
import OffersMap from '../offers-map/offers-map';

export default function OffersBoard({ offers, currentCity }) {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{`312 places to stay in ${currentCity}`}</b>
          <SortOffers />
          <div className="cities__places-list places__list tabs__content">
            <OfferCardList offers={offers} container={OfferCardListParent.MAIN} />
          </div>
        </section>
        <div className="cities__right-section">
          <OffersMap />
        </div>
      </div>
    </div>
  );
}

OffersBoard.propTypes = {
  offers: PropTypes.arrayOf(offerCardProp).isRequired,
  currentCity: PropTypes.string.isRequired,
};

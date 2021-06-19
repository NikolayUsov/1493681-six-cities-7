/* eslint-disable import/no-named-as-default */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SortOffers from '../sort-offer/sort-offers';
import OfferCardList from '../offer-card-list/offer-card-list';
import offerCardProp from '../offer-card/offer-card.prop';
import Map from '../map/map';
import OffersBoardEmpty from '../offers-board-empty/offers-board-empty';

const createCityLocation = (offers) => offers.reduce((acc, offer) => {
  acc[offer.city.name] = offer.city.location;
  return acc;
}, {});

export function OffersBoard({ offers, currentCity, allOffers }) {
  const [activeOffer, setActiveCard] = useState(null);
  const sortComponent = offers.length > 1 ? <SortOffers /> : null;
  const citiesLocation = createCityLocation(allOffers);// возможно от этого надо избавиться to-do

  const handleActiveOfferCard = (offerCard) => {
    setActiveCard(offerCard);
  };

  return (
    <div className="cities">
      {!offers.length ? <OffersBoardEmpty currentCity={currentCity} /> : (
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{`${offers.length} ${offers.length > 1 ? 'places' : 'place'} to stay in ${currentCity}`}</b>
            {sortComponent}
            <div className="cities__places-list places__list tabs__content">
              <OfferCardList
                offers={offers}
                handleActiveOfferCard={handleActiveOfferCard}
              />
            </div>
          </section>
          <div className="cities__right-section">
            <Map
              city={citiesLocation[currentCity]}
              offers={offers}
              activeOffer={activeOffer}
            />
          </div>

        </div>
      )}

    </div>
  );
}

OffersBoard.propTypes = {
  offers: PropTypes.arrayOf(offerCardProp).isRequired,
  allOffers: PropTypes.arrayOf(offerCardProp).isRequired,
  currentCity: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.currentOffers,
  allOffers: state.offers,
  currentCity: state.currentCity,
});

export default connect(mapStateToProps)(OffersBoard);

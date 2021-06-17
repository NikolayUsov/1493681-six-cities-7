import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SortOffers from '../sort-offer/sort-offers';
import OfferCardList from '../offer-card-list/offer-card-list';
import offerCardProp from '../offer-card/offer-card.prop';
import Map from '../map/map';
import OffersBoardEmpty from '../offers-board-empty/offers-board-empty';

const createCityLocation = (offers) => offers.reduce((acc, offer) => {
  acc[offer.city.name] = offer.city.location;
  return acc;
}, {});

export default function OffersBoard({ offers, currentCity }) {
  const [activeOffer, setActiveCard] = useState({});

  const currentCityOffer = offers.filter((offer) => offer.city.name === currentCity);
  const sortComponent = currentCityOffer.length === 1 ? false : <SortOffers />;
  const citiesLocation = createCityLocation(offers);// возможно от этого надо избавиться to-do

  const handleActiveOfferCard = (offerCard) => {
    setActiveCard(offerCard);
  };

  return (
    <div className="cities">
      {!currentCityOffer.length ? <OffersBoardEmpty currentCity={currentCity} /> : (
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{`${currentCityOffer.length} ${currentCityOffer.length === 1 ? 'place' : 'places'} to stay in ${currentCity}`}</b>
            {sortComponent}
            <div className="cities__places-list places__list tabs__content">
              <OfferCardList
                offers={currentCityOffer}
                handleActiveOfferCard={handleActiveOfferCard}
              />
            </div>
          </section>
          <div className="cities__right-section">
            <Map
              city={citiesLocation[currentCity]}
              offers={currentCityOffer}
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
  currentCity: PropTypes.string.isRequired,
};

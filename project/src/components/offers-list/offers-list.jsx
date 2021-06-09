import React, { useState } from 'react';
import OfferCard  from '../offer-card/offer-card.jsx';
import PropTypes from 'prop-types';
import OfferPropType from '../offer-card/offer-card.prop.js';

export default function OfferCardList({offers, page}) {
  const [, setHoverCard] = useState({});

  return (
    offers.map((offer) => <OfferCard key={offer.id} offer={offer} page={page} setHoverCard={setHoverCard}/>)
  );
}

OfferCardList.PropTypes = {
  offers: PropTypes.arrayOf(OfferPropType),
  page: PropTypes.string,
};

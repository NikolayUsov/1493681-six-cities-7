import React, { useState } from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';
import OfferPropType from '../offer-card/offer-card.prop';

export default function OfferCardList({ offers, container, slice = 0 }) {
  const [, setHoverCard] = useState({});

  const renderedCard = slice ? offers.slice(0, slice) : offers.slice();
  return (
    renderedCard.map((offer) => (
      <OfferCard
        key={offer.id}
        offer={offer}
        container={container}
        setHoverCard={setHoverCard}
      />
    ))
  );
}

OfferCardList.PropTypes = {
  offers: PropTypes.arrayOf(OfferPropType),
  page: PropTypes.string,
  slice: PropTypes.number,
};

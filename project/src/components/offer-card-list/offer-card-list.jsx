import React, { useState } from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';
import OfferPropType from '../offer-card/offer-card.prop';

export default function OfferCardList({ offers, slice = 0 }) {
  const [, setHoverCard] = useState({});

  const handlerOnMouseEnter = (offer) => {
    setHoverCard(offer);
  };

  const renderedCard = slice ? offers.slice(0, slice) : offers.slice();
  return (
    renderedCard.map((offer) => (
      <OfferCard
        key={offer.id}
        offer={offer}
        handlerOnMouseEnter={handlerOnMouseEnter}
      />
    ))
  );
}

OfferCardList.propTypes = {
  offers: PropTypes.arrayOf(OfferPropType),
  slice: PropTypes.number,
};

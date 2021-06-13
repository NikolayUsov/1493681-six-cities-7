import React, { useState } from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';
import OfferPropType from '../offer-card/offer-card.prop';

export default function OfferCardList({ offers }) {
  const [, setHoverCard] = useState({});

  const handleMouseEnter = (offer) => {
    setHoverCard(offer);
  };

  return (
    offers.map((offer) => (
      <OfferCard
        key={offer.id}
        offer={offer}
        handleMouseEnter={handleMouseEnter}
      />
    ))
  );
}

OfferCardList.propTypes = {
  offers: PropTypes.arrayOf(OfferPropType),
  slice: PropTypes.number,
};

import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';
import OfferPropType from '../offer-card/offer-card.prop';

export function OfferCardList({ offers, handleActiveOfferCard }) {
  return (
    offers.map((offer) => (
      <OfferCard
        key={offer.id}
        offer={offer}
        handleActiveOfferCard={handleActiveOfferCard}
      />
    ))
  );
}

OfferCardList.propTypes = {
  offers: PropTypes.arrayOf(OfferPropType),
  slice: PropTypes.number,
  handleActiveOfferCard: PropTypes.func.isRequired,
};

export default React.memo(OfferCardList);

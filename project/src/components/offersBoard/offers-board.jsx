import React from 'react';
import SortOffers from '../sort-offer/sort-offers';
import PropTypes from 'prop-types';

export default function OffersBoard ({children, currentCity}) {

  return(
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{`312 places to stay in ${currentCity}`}</b>
      <SortOffers />
      <div className="cities__places-list places__list tabs__content">
        {children}
      </div>
    </section>
  );
}

OffersBoard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  currentCity: PropTypes.string,
};

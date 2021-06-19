import React from 'react';
import PropTypes from 'prop-types';

function OffersBoardEmpty({ currentCity, isError }) {
  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">
            {isError
              ? 'Error on load data'
              : 'No places to stay available'}
          </b>
          <p className="cities__status-description">
            {isError
              ? 'We could not load data, try again'
              : `We could not find any property available at the moment in ${currentCity}`}
          </p>
        </div>
      </section>
      {isError || <div className="cities__right-section" />}
    </div>

  );
}

OffersBoardEmpty.propTypes = {
  currentCity: PropTypes.string,
  isError: PropTypes.bool,
};

OffersBoardEmpty.defaultProps = {
  isError: PropTypes.bool,
  currentCity: PropTypes.string,
};
export default OffersBoardEmpty;

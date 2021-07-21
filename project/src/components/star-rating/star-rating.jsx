import React from 'react';
import PropTypes from 'prop-types';
import StarItem from '../star-item/star-item';

export const StarTitles = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect',
};


export default function StarRating({ currentValue, handleChangeRating }) {
  return (
    <div className="reviews__rating-form form__rating">
      { Object.entries(StarTitles)
        .map(([star, title]) => (
          <StarItem
            key={title}
            value={star}
            title={title}
            currentValue={currentValue}
            handleChangeRating={handleChangeRating}
          />
        ))
        .reverse()}
    </div>
  );
}


StarRating.propTypes = {
  handleChangeRating: PropTypes.func.isRequired,
  currentValue: PropTypes.number.isRequired,
};

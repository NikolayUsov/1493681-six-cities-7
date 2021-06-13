/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

const StarTitles = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect',
};

function StarItem({
  value, title, handleChangeRating, currentValue,
}) {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-stars`}
        type="radio"
        checked={currentValue === +value}
        onChange={() => handleChangeRating(value)}
      />
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>

  );
}

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

StarItem.propTypes = {
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  currentValue: PropTypes.number.isRequired,
  handleChangeRating: PropTypes.func.isRequired,
};

StarRating.propTypes = {
  handleChangeRating: PropTypes.func.isRequired,
  currentValue: PropTypes.number.isRequired,
};

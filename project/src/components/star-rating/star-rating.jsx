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

function StarItem({ value, title, handleChangeRating }) {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-stars`}
        type="radio"
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

export default function StarRating({ handleChangeRating }) {
  return (
    <div className="reviews__rating-form form__rating">
      { Object.entries(StarTitles)
        .map(([star, title]) => (
          <StarItem
            value={star}
            title={title}
            setRating={handleChangeRating}
          />
        ))
        .reverse()}
    </div>
  );
}

StarItem.propTypes = {
  value: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  handleChangeRating: PropTypes.func.isRequired,
};

StarRating.propTypes = {
  handleChangeRating: PropTypes.func.isRequired,
};

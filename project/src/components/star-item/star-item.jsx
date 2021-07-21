import React from 'react';
import PropTypes from 'prop-types';

export default function StarItem({
  value, title, handleChangeRating, currentValue,
}) {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-stars`}
        data-testid={`${value}-testid`}
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

StarItem.propTypes = {
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  currentValue: PropTypes.number.isRequired,
  handleChangeRating: PropTypes.func.isRequired,
};

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

function StarItem({ value, title }) {
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" defaultValue={value} id={`${value}-stars`} type="radio" />
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>

  );
}

// eslint-disable-next-line no-unused-vars
export default function StarRating({ setRating }) {
  return (
    <div className="reviews__rating-form form__rating" onChange={(evt) => setRating(evt.target.value)}>
      { Object.entries(StarTitles)
        .map(([star, title]) => <StarItem value={star} title={title} />)
        .reverse()}
    </div>
  );
}

StarItem.propTypes = {
  value: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

StarRating.propTypes = {
  setRating: PropTypes.func.isRequired,
};

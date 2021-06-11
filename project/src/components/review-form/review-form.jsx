/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import StarRating from '../star-rating/star-rating';

const MIN_LENGTH_COMMENT = 50;

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [textComment, setTextComment] = useState('');
  const isValid = rating && textComment.length > MIN_LENGTH_COMMENT;

  const handleChangeRating = (value) => {
    setRating(value);
  };

  const handleChangeTextComment = (evt) => {
    setTextComment(evt.target.value);
  };

  return (
    <>
      <form className="reviews__form form" action="/#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <StarRating handleChangeRating={handleChangeRating} />
        <textarea
          onChange={handleChangeTextComment}
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          value={textComment}
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set
            {' '}
            <span className="reviews__star">rating</span>
            {' '}
            and describe your stay with at least
            {' '}
            <b className="reviews__text-amount">50 characters</b>
            .
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={!isValid}>Submit</button>
        </div>
      </form>
    </>
  );
}

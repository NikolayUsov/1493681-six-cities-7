/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import StarRating from '../star-rating/star-rating';

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [textComment, setTextComment] = useState('');
  const isValidation = rating && textComment.length > 50;
  return (
    <>
      <form className="reviews__form form" action="/#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <StarRating setRating={setRating} />
        <textarea onChange={(evt) => setTextComment(evt.target.value)} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" defaultValue={textComment} />
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
          <button className="reviews__submit form__submit button" type="submit" disabled={!isValidation}>Submit</button>
        </div>
      </form>
    </>
  );
}

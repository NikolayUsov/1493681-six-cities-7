/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StarRating from '../star-rating/star-rating';
import { postNewReview } from '../../store/api-action';
import { AuthorizationStatus } from '../../const';

const MIN_LENGTH_COMMENT = 50;

export function ReviewForm({ authorizationStatus, addReview, id }) {
  const [rating, setRating] = useState(0);
  const [textComment, setTextComment] = useState('');
  const isValid = rating && textComment.length > MIN_LENGTH_COMMENT;
  if (authorizationStatus !== AuthorizationStatus.AUTH) {
    return (null);
  }
  const createNewComment = (value, text) => ({
    comment: text,
    rating: value,
  });

  const handleChangeRating = (value) => {
    setRating(Number(value));
  };

  const handleChangeTextComment = (evt) => {
    setTextComment(evt.target.value);
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    addReview(id, createNewComment(rating, textComment));
    setRating(0);
    setTextComment('');
  };

  return (
    <>
      <form
        className="reviews__form form"
        action="/#"
        method="post"
        onSubmit={onFormSubmit}
      >
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <StarRating currentValue={rating} handleChangeRating={handleChangeRating} />
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

ReviewForm.propTypes = {
  addReview: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  addReview(id, review) {
    dispatch(postNewReview(id, review));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);

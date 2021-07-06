/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import StarRating from '../star-rating/star-rating';
import { AuthorizationStatus } from '../../const';
import { selectAuthorizationStatus } from '../../store/reducers/features/user/user-selector';
import { selectLoadCommentsStatus } from '../../store/reducers/features/comments/comment-selector';
import { postNewComment } from '../../store/reducers/features/comments/comment-slice';

const MIN_LENGTH_COMMENT = 50;

export function ReviewForm({ id }) {
  const [rating, setRating] = useState(0);
  const [textComment, setTextComment] = useState('');
  const isValid = rating && textComment.length > MIN_LENGTH_COMMENT;
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectLoadCommentsStatus);
  const authorizationStatus = useSelector(selectAuthorizationStatus);
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
    dispatch(postNewComment({ id, newCommentData: createNewComment(rating, textComment) }));
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
          disabled={isLoading}
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
          <button className="reviews__submit form__submit button" type="submit" disabled={!isValid || isLoading}>Submit</button>
        </div>
      </form>
    </>
  );
}

ReviewForm.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ReviewForm;

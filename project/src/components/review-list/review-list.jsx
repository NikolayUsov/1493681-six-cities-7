import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ReviewItem from '../review-item/review-item';
import { fetchComments } from '../../store/reducers/features/comments/comment-slice';
import { selectComments } from '../../store/reducers/features/comments/comment-selector';

export default function ReviewList({ id }) {
  const dispatch = useDispatch();
  const reviews = useSelector(selectComments);
  useEffect(() => {
    dispatch((fetchComments(id)));
  }, [id]);
  return (
    <>
      <h2 className="reviews__title">
        Reviews ·
        <span data-testid="reviews-length" className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (<ReviewItem key={review.id} review={review} />))}
      </ul>
    </>
  );
}

ReviewList.propTypes = {
  id: PropTypes.number.isRequired,
};

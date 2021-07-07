/* eslint-disable import/no-named-as-default */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ReviewForm from '../review-form/review-form';
import ReviewList from '../review-list/review-list';
import { fetchComments } from '../../store/reducers/features/comments/comment-slice';
import { selectComments } from '../../store/reducers/features/comments/comment-selector';

export function Reviews({ id }) {
  const dispatch = useDispatch();
  const reviews = useSelector(selectComments);
  useEffect(() => {
    dispatch((fetchComments(id)));
  }, [id]);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews ·
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ReviewList reviews={reviews} />
      <ReviewForm id={id} />
    </section>
  );
}

Reviews.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Reviews;

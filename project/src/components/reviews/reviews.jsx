import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReviewForm from '../review-form/review-form';
import ReviewList from '../review-list/review-list';
import { review } from '../review-list/review.prop';

export default function Reviews({ reviews }) {
  const [reviewsState, setReview] = useState(reviews);

  const addNewComment = (comment) => {
    setReview((state) => [...state, comment]);
  };

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews ·
        <span className="reviews__amount">{reviewsState.length}</span>
      </h2>
      <ReviewList reviews={reviewsState} />
      <ReviewForm addComment={addNewComment} />
    </section>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(review).isRequired,
};

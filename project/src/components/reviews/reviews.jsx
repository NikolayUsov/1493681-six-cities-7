import React from 'react';
import PropTypes from 'prop-types';
import ReviewForm from '../review-form/review-form';
import ReviewList from '../review-list/review-list';
import { review } from '../review-list/review.prop';

export default function Reviews({ reviews }) {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews ·
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ReviewList reviews={reviews} />
      <ReviewForm />
    </section>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(review).isRequired,
};

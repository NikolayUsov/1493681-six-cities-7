import React from 'react';
import PropTypes from 'prop-types';
import { ReviewItemProp } from '../review-item/review.prop';
import ReviewItem from '../review-item/review-item';

export default function ReviewList({ reviews = [] }) {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (<ReviewItem key={review.id} review={review} />))}
    </ul>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(ReviewItemProp).isRequired,
};

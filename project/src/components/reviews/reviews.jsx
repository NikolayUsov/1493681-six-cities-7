/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import ReviewForm from '../review-form/review-form';
import ReviewList from '../review-list/review-list';

export default function Reviews({ reviews }) {
  return (
    <section className="property__reviews reviews">
      <ReviewList reviews={reviews} />
      <ReviewForm />
    </section>
  );
}

/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';

import ReviewForm from '../review-form/review-form';
import ReviewList from '../review-list/review-list';

export function Reviews({ id }) {
  return (
    <section className="property__reviews reviews">

      <ReviewList id={id} />
      <ReviewForm id={id} />
    </section>
  );
}

Reviews.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Reviews;

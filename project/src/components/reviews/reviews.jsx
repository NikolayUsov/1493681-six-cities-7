/* eslint-disable import/no-named-as-default */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReviewForm from '../review-form/review-form';
import ReviewList from '../review-list/review-list';
import { ReviewItemProp } from '../review-item/review.prop';
import { fetchReviews } from '../../store/api-action';

export function Reviews({ reviews, id, getReviews }) {
  useEffect(() => {
    getReviews(id);
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
  reviews: PropTypes.arrayOf(ReviewItemProp).isRequired,
  getReviews: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  reviews: state.reviews,
});

const mapDispatchToProps = (dispatch) => ({
  getReviews(id) {
    dispatch(fetchReviews(id));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Reviews);

import React from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { createProcent } from '../../utils/utils';
import { review } from './review.prop';

export default function ReviewList({ reviews = [] }) {
  return (
    <>
      <h2 className="reviews__title">
        Reviews ·
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map(({
          id, comment, rating, user, date,
        }) => (
          <li key={id} className="reviews__item">
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src={user.avatarUrl} width={54} height={54} alt="Reviews avatar" />
              </div>
              <span className="reviews__user-name">
                {user.name}
              </span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{ width: `${createProcent(rating, 5)}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">
                {comment}
              </p>
              <time
                className="reviews__time"
                dateTime={`${dayjs(date).format('YYYY-MM-DD')}`}
              >
                {`${dayjs(date).format('MMMM YYYY')}`}
              </time>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(review).isRequired,
};

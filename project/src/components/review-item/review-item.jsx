import React from 'react';
import dayjs from 'dayjs';
import { ReviewItemProp } from './review.prop';
import { createPercent } from '../../utils/utils';

export default function ReviewItem({ review }) {
  const {
    id, comment, rating, user, date,
  } = review;

  return (
    <li key={id} className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${createPercent(rating, 5)}%` }} />
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
  );
}

ReviewItem.propTypes = {
  review: ReviewItemProp.isRequired,
};

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createProcent } from '../../utils/utils.js';
import classNames from 'classnames';
export default function OfferCard ({offer}) {

  const {
    id,
    price,
    rating,
    isFavorite,
  } = offer;


  const addToFavoritesClass = classNames('place-card__bookmark-button', 'button',{
    'place-card__bookmark-button--active': isFavorite,
  });

  // eslint-disable-next-line no-console
  console.log(addToFavoritesClass);
  return (


    <article className="cities__place-card place-card">
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}?`}>
          <img className="place-card__image" src="img/apartment-01.jpg" width={260} height={200} alt="Place pic" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={addToFavoritesClass} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${createProcent(rating, 5)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/#">Beautiful &amp; luxurious apartment at great location</a>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}

OfferCard.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number,
    isFavorite: PropTypes.bool,
  }).isRequired,
};

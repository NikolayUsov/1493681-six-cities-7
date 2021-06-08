import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createProcent } from '../../utils/utils.js';
import classNames from 'classnames';
import { Types } from '../../mocs/offers.js';
import Premium from '../shared/premium';


export default function OfferCard ({offer, page}) {
  const {
    id,
    price,
    rating,
    isFavorite,
    title,
    type,
    isPremium,
    previewImage,
  } = offer;


  const addToFavoritesClass = classNames('place-card__bookmark-button', 'button',{
    'place-card__bookmark-button--active': isFavorite,
  });

  return (

    <article className={ `${page}__place-card place-card`}>
      {isPremium && <Premium />}
      <div className={`${page}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}?`}>
          <img className="place-card__image" src={previewImage} width={260} height={200} alt="Place pic" />
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
          <a href="/#">{title}</a>
        </h2>
        <p className="place-card__type">{Types[type]}</p>
      </div>
    </article>
  );
}

OfferCard.propTypes = {
  page: PropTypes.string,
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number,
    isFavorite: PropTypes.bool,
    title: PropTypes.string,
    type: PropTypes.string,
    isPremium: PropTypes.bool,
    previewImage: PropTypes.string,
  }).isRequired,
};

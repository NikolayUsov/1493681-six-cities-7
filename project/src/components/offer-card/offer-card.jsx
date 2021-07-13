/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Link, useRouteMatch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPercent } from '../../utils/utils';
import { Types, AppRoutes, AuthorizationStatus } from '../../const';
import OfferCardProp from './offer-card.prop';
import AddFavoritesButton from '../add-to-favorites-button/add-to-favorites-button';

const classNamesByPath = {
  [AppRoutes.ROOT]: {
    article: 'cities__place-card',
    image: 'cities__image-wrapper',
    info: '',
  },
  [AppRoutes.FAVORITES]: {
    article: 'favorites__card',
    image: 'favorites__image-wrapper',
    info: 'favorites__card-info',
  },
  [AppRoutes.OFFER_DETAILS]: {
    article: 'near-places__card',
    image: 'near-places__image-wrapper',
    info: '',
  },
};

function OfferCard({ offer, handleActiveOfferCard }) {
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

  const { path } = useRouteMatch();
  const isFavoriteView = path === AppRoutes.FAVORITES;
  const PictureSize = {
    WIDTH: isFavoriteView ? 150 : 260,
    HEIGHT: isFavoriteView ? 110 : 200,
  };

  return (

    <article
      onMouseEnter={() => handleActiveOfferCard(offer)}
      onMouseLeave={() => handleActiveOfferCard(null)}
      className={`${classNamesByPath[path].article} place-card`}
    >
      {isPremium && (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      )}
      <div className={`${classNamesByPath[path].image} place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={PictureSize.WIDTH}
            height={PictureSize.HEIGHT}
            alt="Place pic"
          />
        </Link>
      </div>
      <div className={`${classNamesByPath[path].info} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price" data-testid="price">
            <b className="place-card__price-value">
              €
              {price}
            </b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <AddFavoritesButton isFavorite={isFavorite} id={id} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${createPercent(rating, 5)}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{Types[type]}</p>
      </div>
    </article>
  );
}

OfferCard.propTypes = {
  handleActiveOfferCard: PropTypes.func,
  offer: OfferCardProp.isRequired,
};

OfferCard.defaultProps = {
  handleActiveOfferCard: () => {},
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

export { OfferCard };
export default connect(mapStateToProps)(OfferCard);

/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Redirect } from 'react-router-dom';
import Header from '../components/header/header';
import OfferCardProp from '../components/offer-card/offer-card.prop';
import GalleryDetails from '../components/details-gallery/details-gallery';
import { createPercent } from '../utils/utils';
import HostDetails from '../components/host-details/host-details';
import Reviews from '../components/reviews/reviews';
import { review } from '../components/review-list/review.prop';
import OfferCard from '../components/offer-card/offer-card';

const MAX_NEIGHBORHOOD = 3;

export default function Details({ offers, reviews }) {
  const { id } = useParams();
  const idx = offers.findIndex((elem) => elem.id === +id);

  if (idx === -1) {
    return <Redirect to="/" />;
  }

  const currentElement = offers[idx];

  const {
    images,
    isPrime,
    title,
    isFavorite,
    type,
    bedrooms,
    rating,
    maxAdults,
    price,
    goods,
    host,
    description,
  } = currentElement;

  const addToFavoritesClass = classNames('property__bookmark-button', 'button', {
    'property__bookmark-button--active': isFavorite,
  });

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          {images
            && (
            <div className="property__gallery-container container">
              <GalleryDetails photos={images} />
            </div>
            )}

          <div className="property__container container">
            <div className="property__wrapper">
              {isPrime
              && (
              <div className="property__mark">
                <span>Premium</span>
              </div>
              )}

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={addToFavoritesClass} type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${createPercent(rating, 5)}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {`${bedrooms} ${bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}`}
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ${maxAdults} ${maxAdults > 1 ? 'adults' : 'adult'}`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">
                  €
                  {price}
                </b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">Whats inside</h2>
                <ul className="property__inside-list">
                  {goods.map((elem) => (
                    <li
                      key={elem}
                      className="property__inside-item"
                    >
                      {elem}
                    </li>
                  ))}
                </ul>
              </div>

              <HostDetails host={host} description={description} />
              <Reviews reviews={reviews} />
            </div>
          </div>
          <section className="property__map map" />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighborhood</h2>
            <div className="near-places__list places__list">
              {offers
                .slice(0, MAX_NEIGHBORHOOD)
                .map((offer) => <OfferCard offer={offer} />)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

Details.propTypes = {
  offers: PropTypes.arrayOf(OfferCardProp).isRequired,
  reviews: PropTypes.arrayOf(review).isRequired,
};

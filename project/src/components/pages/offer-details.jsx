/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Header from '../header/header';
import OfferCardProp from '../offer-card/offer-card.prop';
import GalleryDetails from '../details-gallery/details-gallery';
import { createProcent } from '../../utils/utils';
import HostDeatails from '../details-host/details-host';
import Reviews from '../reviews/reviews';
import { review } from '../review-list/review.prop';
import OfferCardList from '../offers-list/offers-list';
import { OfferCardListParent } from '../../const';

const MAX_NEIGHBOURHOOD = 3;

export default function PageOfferDetails({ offers, reviews }) {
  const { id } = useParams();
  const idx = offers.findIndex((elem) => elem.id === +id);
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
                  <span style={{ width: `${createProcent(rating, 5)}%` }} />
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

              <HostDeatails host={host} description={description} />
              <Reviews reviews={reviews} />
            </div>
          </div>
          <section className="property__map map" />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {/* Вот тут с классами дикая жопа как переиспользовать  оффер лист ????
              По умному старался сделать но не выходило повезло что у класов в мейне
              и тут одинаковые
              стили и все работает, но нужно придумать

              А еще по клику на этот список карточек меняется вся страница но ui ужасен
              не понятно что произошло
              */}
              <OfferCardList
                container={OfferCardListParent.MAIN}
                offers={offers}
                slice={MAX_NEIGHBOURHOOD}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

PageOfferDetails.propTypes = {
  offers: PropTypes.arrayOf(OfferCardProp).isRequired,
  reviews: PropTypes.arrayOf(review).isRequired,
};

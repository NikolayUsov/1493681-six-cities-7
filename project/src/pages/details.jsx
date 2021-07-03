/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-named-as-default */
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import Header from '../components/header/header';
import OfferCardProp from '../components/offer-card/offer-card.prop';
import GalleryDetails from '../components/details-gallery/details-gallery';
import { createPercent } from '../utils/utils';
import HostDetails from '../components/host-details/host-details';
import Reviews from '../components/reviews/reviews';
import OfferCard from '../components/offer-card/offer-card';
import Map from '../components/map/map';
import Loader from '../components/loader/loader';
import { fetchNearbyOffers, fetchOfferDetails } from '../store/api-action';

export function Details({
  offerDetails, offerDetailsFetchStatus, offersNearby, getOfferDetails, getOffersNearby,
}) {
  const { id } = useParams();
  const { isLoading } = offerDetailsFetchStatus;
  useEffect(() => {
    getOfferDetails(id);
    getOffersNearby(id);
  }, [id]);

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
    city,
  } = offerDetails;

  const addToFavoritesClass = classNames('property__bookmark-button', 'button', {
    'property__bookmark-button--active': isFavorite,
  });

  if (isLoading) {
    return <Loader />;
  }
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
              <Reviews id={id} />
            </div>
          </div>
          <Map
            city={city.location}
            offers={offersNearby}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighborhood</h2>
            <div className="near-places__list places__list">
              { offersNearby.map((offer) => <OfferCard offer={offer} key={offer.id} />)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

Details.propTypes = {
  offerDetails: OfferCardProp,
  offerDetailsFetchStatus: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
    isSuccess: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
  }).isRequired,
  offersNearby: PropTypes.arrayOf(OfferCardProp).isRequired,
  getOfferDetails: PropTypes.func.isRequired,
  getOffersNearby: PropTypes.func.isRequired,
};

Details.defaultProps = {
  offerDetails: {},
};

const mapStateToProps = () => (state) => ({
  offerDetails: state.offerDetails,
  offersNearby: state.offersNearby,
  offerDetailsFetchStatus: state.fetchOfferDetails,
});

const mapDispatchToProps = (dispatch) => ({
  getOfferDetails(id) {
    dispatch(fetchOfferDetails(id));
  },
  getOffersNearby(id) {
    dispatch(fetchNearbyOffers(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);

import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/header/header';
import GalleryDetails from '../components/details-gallery/details-gallery';
import { createPercent } from '../utils/utils';
import HostDetails from '../components/host-details/host-details';
import Reviews from '../components/reviews/reviews';
import OfferCard from '../components/offer-card/offer-card';
import Map from '../components/map/map';
import Loader from '../components/loader/loader';
import { fetchOfferDetails, fetchOffersNearby } from '../store/reducers/features/offers/offers-slice';
import {
  selectOfferDetails,
  selectOffersDetailsFetchStatus,
  selectOffersNearby
} from '../store/reducers/features/offers/offers-selector';
import AddFavoritesButton from '../components/add-to-favorites-button/add-to-favorites-button';

export function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const offersNearby = useSelector(selectOffersNearby);
  const { isLoading } = useSelector(selectOffersDetailsFetchStatus);

  useEffect(() => {
    dispatch(fetchOfferDetails(id));
    dispatch(fetchOffersNearby(id));
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
  } = useSelector(selectOfferDetails);

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
                <AddFavoritesButton isFavorite={isFavorite} id={Number(id)} />
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
              <Reviews id={Number(id)} />
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

export default Details;

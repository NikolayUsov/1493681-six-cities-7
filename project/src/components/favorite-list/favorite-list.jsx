import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';
import OfferCardProp from '../offer-card/offer-card.prop';

const createFavoritesList = (arr) => arr.reduce((acc, element) => {
  if (element.city.name in acc) {
    acc[element.city.name].push(element);
    return acc;
  }

  acc[element.city.name] = [element];
  return acc;
}, {});

export default function FavoriteList({ offers }) {
  const favoritesList = createFavoritesList(offers);
  return (

    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {
          Object.entries(favoritesList).map(([city, cityOffers]) => (
            <li key={city} className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="/#">
                    <span>{city}</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places" data-testid="favorites-card-container">
                {cityOffers.map((offer) => <OfferCard key={offer.id} offer={offer} />)}
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  );
}

FavoriteList.propTypes = {
  offers: PropTypes.arrayOf(OfferCardProp).isRequired,
};

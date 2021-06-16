import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router';
import classNames from 'classnames';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import OfferPropType from '../offer-card/offer-card.prop';
import useMarker from '../../hooks/use-marker';
import { AppRoutes } from '../../const';

export default function Map({ city, offers, activeOffer }) {
// тут возникает ошибка activeOffer хз почему to-do
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  useMarker(map, city, offers, activeOffer);
  const { path } = useRouteMatch();

  const mapClass = classNames('map', {
    cities__map: path === AppRoutes.ROOT,
    property__map: path === AppRoutes.OFFER_DETAILS,
  });

  return (
    <section
      ref={mapRef}
      className={mapClass}
    />

  );
}

Map.propTypes = {
  city: PropTypes.shape({
    lat: PropTypes.node.isRequired,
    lng: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }).isRequired,
  offers: PropTypes.arrayOf(OfferPropType).isRequired,
  activeOffer: OfferPropType,
};

Map.defaultProps = {
  activeOffer: OfferPropType,
};

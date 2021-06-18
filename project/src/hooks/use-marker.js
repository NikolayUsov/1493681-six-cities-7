import { useEffect } from 'react';
import leaflet from 'leaflet';
import { LeafletProperties } from '../const';

export default function useMarker(map, city, offers, activeOffer) {
  const defaultCustomIcon = leaflet.icon({
    iconUrl: LeafletProperties.DEFAULT_PIN,
    iconSize: [LeafletProperties.PIN_WIDTH, LeafletProperties.PIN_HEIGHT],
    iconAnchor: [LeafletProperties.PIN_WIDTH / 2, LeafletProperties.PIN_HEIGHT],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: LeafletProperties.ACTIVE_PIN,
    iconSize: [LeafletProperties.PIN_WIDTH, LeafletProperties.PIN_HEIGHT],
    iconAnchor: [LeafletProperties.PIN_WIDTH / 2, LeafletProperties.PIN_HEIGHT],
  });

  useEffect(() => {
    const markerGroup = leaflet.layerGroup();
    if (map) {
      offers.forEach(({ id, location }) => leaflet.marker([location.lat, location.lng],
        {
          icon: (id === activeOffer?.id)
            ? currentCustomIcon
            : defaultCustomIcon,
        }).addTo(markerGroup));
      markerGroup.addTo(map);
    }

    return () => { markerGroup.remove(); };
  }, [map, offers, activeOffer]);
}

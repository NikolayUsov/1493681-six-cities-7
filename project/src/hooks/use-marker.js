import { useEffect } from 'react';
import leaflet from 'leaflet';
import { LeafletProperty } from '../const';

export default function useMarker(map, city, offers, activeOffer) {
  const defaultCustomIcon = leaflet.icon({
    iconUrl: LeafletProperty.DEFAULT_PIN,
    iconSize: [LeafletProperty.PIN_WIDTH, LeafletProperty.PIN_HEIGHT],
    iconAnchor: [LeafletProperty.PIN_WIDTH / 2, LeafletProperty.PIN_HEIGHT],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: LeafletProperty.ACTIVE_PIN,
    iconSize: [LeafletProperty.PIN_WIDTH, LeafletProperty.PIN_HEIGHT],
    iconAnchor: [LeafletProperty.PIN_WIDTH / 2, LeafletProperty.PIN_HEIGHT],
  });

  useEffect(() => {
    const markerGroup = leaflet.layerGroup();
    if (map) {
      offers.forEach(({ id, location }) => leaflet.marker([location.lat, location.lng],
        {
          icon: (id === (activeOffer && activeOffer.id))
            ? currentCustomIcon
            : defaultCustomIcon,
        }).addTo(markerGroup));

      markerGroup.addTo(map);
    }

    return () => { markerGroup.remove(); };
  }, [map, activeOffer, city, offers]);
}

import { useEffect, useState } from 'react';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LeafletProperties } from '../const';

export default function useMap(ref, city) {
  const { lat, lng, zoom } = city;
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (ref !== null && map === null) {
      const instance = Leaflet.map(ref.current).setView([lat, lng], zoom);
      Leaflet.tileLayer(
        LeafletProperties.LAYER,
        {
          attribution: LeafletProperties.ATTRIBUTION,
        },
      )
        .addTo(instance);

      setMap(instance);
    }
  },
  [ref, city]);
  return map;
}

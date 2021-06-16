import { useEffect, useState } from 'react';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LeafletProperty } from '../const';

export default function useMap(ref, { lat, lng, zoom }) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map === null) {
      const initMap = Leaflet.map(ref.current).setView([lat, lng], zoom);
      Leaflet.tileLayer(
        LeafletProperty.LAYER,
        {
          attribution: LeafletProperty.ATTRIBUTION,
        },
      )
        .addTo(initMap);

      setMap(initMap);
    } else {
      setMap(map.setView(new Leaflet.LatLng(lat, lng), zoom));
    }
  },
  [map, lat, lng, zoom, ref]);

  return map;
}

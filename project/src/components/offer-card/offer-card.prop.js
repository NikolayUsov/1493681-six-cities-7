import PropTypes from 'prop-types';

const locationProp = PropTypes.shape({
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  zoom: PropTypes.number,
});

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number,
  isFavorite: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.string,
  isPremium: PropTypes.bool,
  previewImage: PropTypes.string,
  bedrooms: PropTypes.number,
  location: locationProp,
  city: PropTypes.shape({
    location: locationProp,
    city: PropTypes.string,
  }),
  description: PropTypes.string,
  goods: PropTypes.string,
  host: PropTypes.shape({
    avatarUrl: PropTypes.string,
    id: PropTypes.number,
    isPro: PropTypes.bool,
    name: PropTypes.string,
  }),
  images: PropTypes.arrayOf(PropTypes.string),
  maxAdults: PropTypes.number,
}).isRequired;

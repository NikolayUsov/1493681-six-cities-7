export const AppRoutes = {
  ROOT: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  OFFER_DETAILS: '/offer/:id',
  NOT_FOUND: '/404',
};

export const Types = {
  apartment: 'Apartment',
  room: 'Private Room',
  house: 'House',
  hotel: 'Hotel',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const LoaderType = {
  page: 'loader/page',
  button: 'loader/button',
};
export const ApiRoutes = {
  HOSTELS: '/hotels',
  LOGIN: '/login',
  LOGOUT: '/logout',
  NEARBY: '/nearby',
  COMMENTS: '/comments',
  FAVORITES: '/favorite',
};
export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
export const SORT_TYPES = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];
export const SortFunctions = {
  Popular: (arr) => arr,
  'Price: low to high': (a, b) => a.price - b.price,
  'Price: high to low': (a, b) => b.price - a.price,
  'Top rated first': (a, b) => b.rating - a.rating,
};
export const LeafletProperties = {
  PIN_WIDTH: 30,
  PIN_HEIGHT: 40,
  LAYER: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  DEFAULT_PIN: '/img/pin.svg',
  ACTIVE_PIN: '/img/pin-active.svg',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};

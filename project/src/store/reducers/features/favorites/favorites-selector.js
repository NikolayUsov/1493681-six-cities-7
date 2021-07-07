import NameSpace from '../../name-space';

const selectFavoritesOffers = (state) => state[NameSpace.FAVORITES].favorites;
const selectFavoritesLoadStatus = (state) => state[NameSpace.FAVORITES].favoritesLoadStatus;

export { selectFavoritesOffers, selectFavoritesLoadStatus };

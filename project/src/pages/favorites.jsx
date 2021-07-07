import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/header/header';
import Logo from '../components/logo/logo';
import FavoriteList from '../components/favorite-list/favorite-list';
import FavoriteListEmpty from '../components/favorite-list-empty/favorite-list-empty';
import { selectFavoritesLoadStatus, selectFavoritesOffers } from '../store/reducers/features/favorites/favorites-selector';
import Loader from '../components/loader/loader';
import { fetchFavorites } from '../store/reducers/features/favorites/favorites-slice';

export default function Favorites() {
  const favoritesOffers = useSelector(selectFavoritesOffers);
  const { isLoading } = useSelector(selectFavoritesLoadStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  const mainContent = favoritesOffers.length
    ? <FavoriteList offers={favoritesOffers} />
    : <FavoriteListEmpty />;

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {mainContent}
        </div>
      </main>
      <footer className="footer container">
        <Logo isFooter />
      </footer>
    </div>
  );
}

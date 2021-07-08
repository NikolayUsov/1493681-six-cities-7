import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { selectAuthorizationStatus } from '../../store/reducers/features/user/user-selector';
import { AppRoutes, AuthorizationStatus } from '../../const';
import browserHistory from '../../browser-history';
import { fetchChangeFavorites } from '../../store/reducers/features/favorites/favorites-slice';

function AddFavoritesButton({ isFavorite, id }) {
  const isAuth = useSelector(selectAuthorizationStatus) === AuthorizationStatus.AUTH;
  const dispatch = useDispatch();
  const { path } = useRouteMatch();
  const classNamePrefix = path === AppRoutes.OFFER_DETAILS ? 'property' : 'place-card';
  const width = path === AppRoutes.OFFER_DETAILS ? 31 : 18;
  const height = path === AppRoutes.OFFER_DETAILS ? 33 : 19;
  const addToFavoritesClass = classNames(`${classNamePrefix}__bookmark-button`, 'button', {
    [`${classNamePrefix}__bookmark-button--active`]: isFavorite && isAuth,
  });

  const handleAddFavorites = () => {
    if (!isAuth) {
      browserHistory.push(AppRoutes.LOGIN);
      return;
    }
    dispatch(fetchChangeFavorites({ id, status: Number(!isFavorite), path }));
  };

  return (
    <button className={addToFavoritesClass} type="button" onClick={handleAddFavorites}>
      <svg className={`${classNamePrefix}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

AddFavoritesButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default AddFavoritesButton;

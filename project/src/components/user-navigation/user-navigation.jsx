import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../loader/loader';
import { AppRoutes, AuthorizationStatus, LoaderType } from '../../const';
import { fetchLogout } from '../../store/reducers/features/user/user-slice';
import { selectAuthorizationStatus, selectLogoutStatus, selectUserInfo } from '../../store/reducers/features/user/user-selector';

export function UserNavigation() {
  const userInfo = useSelector(selectUserInfo);
  const authorizationStatus = useSelector(selectAuthorizationStatus);
  const { isLoading } = useSelector(selectLogoutStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.AUTH;
  const dispatch = useDispatch();

  const avatarStyle = isAuth ? {
    backgroundImage: `url(${userInfo?.avatar_url})`,
  } : {};
  const classUserName = isAuth
    ? 'header__user-name user__name'
    : 'header__login';

  const handleLogoutClick = (evt) => {
    evt.preventDefault();
    dispatch(fetchLogout());
  };
  if (isLoading) {
    return <Loader type={LoaderType.button} />;
  }
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link
            to={isAuth ? AppRoutes.FAVORITES : AppRoutes.LOGIN}
            className="header__nav-link header__nav-link--profile"
            href="/#"
          >
            <div className="header__avatar-wrapper user__avatar-wrapper" style={avatarStyle} />
            <span className={classUserName}>
              {`${isAuth ? `${userInfo.email}` : 'Sign in'}`}
            </span>
          </Link>
        </li>
        {isAuth && (
        <li className="header__nav-item">
          <a className="header__nav-link" href="/#" onClick={handleLogoutClick}>
            <span className="header__signout">Sign out</span>
          </a>
        </li>
        )}
      </ul>
    </nav>
  );
}

export default UserNavigation;

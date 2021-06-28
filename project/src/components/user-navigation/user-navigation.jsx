import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../const';
import { fetchLogout } from '../../store/api-action';

export function UserNavigation({ authorizationStatus, logout, userInfo }) {
  const isAuth = authorizationStatus === AuthorizationStatus.AUTH;
  const avatarStyle = isAuth ? {
    backgroundImage: `url(${userInfo?.avatar_url})`,
  } : {};
  const classUserName = isAuth
    ? 'header__user-name user__name'
    : 'header__login';

  const handleLogoutClick = (evt) => {
    evt.preventDefault();
    logout();
  };
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

UserNavigation.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  logout: PropTypes.func,
  userInfo: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    avatar_url: PropTypes.string,
    is_pro: PropTypes.bool,
    token: PropTypes.string,
  }),
};

UserNavigation.defaultProps = {
  userInfo: {},
  logout: () => {},
};
const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  userInfo: state.userInfo,

});

const mapDispatchToProps = (dispatch) => ({
  logout() {
    dispatch(fetchLogout());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(UserNavigation);

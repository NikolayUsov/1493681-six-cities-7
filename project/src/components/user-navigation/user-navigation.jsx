import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { AppRoutes, AuthorizationStatus } from '../../const';
import { fetchLogout } from '../../store/api-action';

export function UserNavigation({ authorizationStatus, logout, userInfo }) {
  const history = useHistory();
  const isAuth = authorizationStatus === AuthorizationStatus.AUTH;
  const avatarStyle = {
    backgroundImage: `url(${userInfo?.avatar_url})`,
  };
  const onLoginClick = (evt) => {
    evt.preventDefault();
    if (!isAuth) {
      history.push(AppRoutes.LOGIN);
    }
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a onClick={onLoginClick} className="header__nav-link header__nav-link--profile" href="/#">
            <div className="header__avatar-wrapper user__avatar-wrapper" style={avatarStyle} />
            <span className="header__user-name user__name">
              {`${isAuth ? `${userInfo.email}` : 'Sign in'}`}
            </span>
          </a>
        </li>
        {isAuth && (
        <li className="header__nav-item">
          <a className="header__nav-link" href="/#" onClick={logout}>
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
  logout: PropTypes.func.isRequired,
  userInfo: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.number,
    name: PropTypes.string,
    avatar_url: PropTypes.string,
    is_pro: PropTypes.bool,
    token: PropTypes.string,
  }),
};

UserNavigation.defaultProps = {
  userInfo: {},
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

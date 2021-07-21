import NameSpace from '../../name-space';

const selectAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
const selectLogoutStatus = (state) => state[NameSpace.USER].logoutStatus;
const selectLoginStatus = (state) => state[NameSpace.USER].loginStatus;
const selectUserInfo = (state) => state[NameSpace.USER].userInfo;
const selectCheckAuthStatus = (state) => state[NameSpace.USER].checkAuthStatus;
export {
  selectAuthorizationStatus,
  selectLogoutStatus,
  selectLoginStatus,
  selectUserInfo,
  selectCheckAuthStatus
};

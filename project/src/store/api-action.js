/* eslint-disable import/prefer-default-export */
import { AuthorizationStatus } from '../const';
import { fetchFavorites } from './reducers/features/favorites/favorites-slice';
import { requiredAuthorization, setAuthUserData } from './reducers/features/user/user-slice';

const ApiRoutes = {
  HOSTELS: '/hotels',
  LOGIN: '/login',
  LOGOUT: '/logout',
  NEARBY: '/nearby',
  COMMENTS: '/comments',
};

export const checkAuth = () => (dispatch, _store, api) => {
  api.get(ApiRoutes.LOGIN)
    .then(({ data }) => {
      dispatch(fetchFavorites());
      dispatch(requiredAuthorization(AuthorizationStatus.AUTH));
      dispatch(setAuthUserData(data));
    })
    .catch(() => {
      dispatch(setAuthUserData({}));
    });
};

/* export const fetchLoginWillDelete = (loginData) => (dispatch, _store, api) => {
  dispatch(ActionCreator.loginRequest());
  api.post(ApiRoutes.LOGIN, loginData)
    .then(({ data }) => {
      localStorage.setItem('token', data.token);
      dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setAuthUserData(data));
      dispatch(ActionCreator.loginSuccess());
      dispatch(ActionCreator.redirectToBack());
    })
    .catch(() => {
      dispatch(ActionCreator.loginError());
    });
}; */

/* export const fetchLogout = () => (dispatch, _store, api) => {
  dispatch(ActionCreator.logoutRequest());
  api.delete(ApiRoutes.LOGOUT)
    .then(() => {
      dispatch(ActionCreator.logoutSuccess());
      dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.NO_AUTH));
    })
    .then(() => { dispatch(ActionCreator.redirectToRoute(AppRoutes.ROOT)); })
    .catch(() => dispatch(ActionCreator.logoutError()));
};
 */
/* export const fetchOfferDetails = (id) => (dispatch, _store, api) => {
  dispatch(ActionCreator.fetchOfferDetailRequest());
  api.get(`${ApiRoutes.HOSTELS}/${id}`)
    .then(({ data }) => {
      dispatch(ActionCreator.fetchOfferDetailSuccess(adaptedToClient(data)));
    })
    .catch(() => dispatch(ActionCreator.redirectToRoute(ApiRoutes.NOT_FOUND)));
};

export const fetchNearbyOffers = (id) => (dispatch, _store, api) => {
  dispatch(ActionCreator.fetchNearbyOffersRequest());
  api.get(`${ApiRoutes.HOSTELS}/${id}${ApiRoutes.NEARBY}`)
    .then(({ data }) => {
      dispatch(ActionCreator.fetchNearbyOffersSuccess(data.map(adaptedToClient)));
    })
    .catch(() => ActionCreator.fetchNearbyOffersError());
}; */

/* export const fetchReviews = (id) => (dispatch, _store, api) => {
  dispatch(ActionCreator.fetchReviewRequest());
  api.get(`${ApiRoutes.COMMENTS}/${id}`)
    .then(({ data }) => {
      dispatch(ActionCreator.fetchReviewSuccess(data.map(reviewAdaptedToClient)));
    })
    .catch(() => dispatch(ActionCreator.fetchReviewError));
};

export const postNewReview = (id, newComment) => (dispatch, _store, api) => {
  dispatch(ActionCreator.postNewReviewRequest());
  api.post(`${ApiRoutes.COMMENTS}/${id}`, newComment)
    .then(({ data }) => {
      dispatch(ActionCreator.postNewReviewSuccess(data.map(reviewAdaptedToClient)));
    })
    .catch(() => dispatch(ActionCreator.postNewReviewError()));
};
 */

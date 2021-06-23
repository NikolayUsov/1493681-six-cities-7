/* eslint-disable import/prefer-default-export */
import adaptedToClient from '../utils/adapte-to-client';
import { ActionCreator } from './actions';

const ApiRoute = {
  HOSTELS: '/hotels',
};

export const fetchHostels = () => (dispatch, _store, api) => {
  dispatch(ActionCreator.fetchOffersRequest());
  api.get(ApiRoute.HOSTELS)
    .then(({ data }) => {
      const offers = data.map(adaptedToClient);
      dispatch(ActionCreator.fetchOffersSuccess(offers));
    })
    .catch(() => { dispatch(ActionCreator.fetchOffersError()); });
};

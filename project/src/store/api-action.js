/* eslint-disable import/prefer-default-export */
import adaptedToClient from '../utils/adapte-to-client';
import { ActionCreator } from './actions';

export const fetchHostels = () => (dispatch, _store, api) => (
  api.get('/hotels')
    .then(({ data }) => {
      const offers = data.map(adaptedToClient);
      dispatch(ActionCreator.downloadOffers(offers));
    })
    .catch(() => { ActionCreator.errorLoadData(); })
);

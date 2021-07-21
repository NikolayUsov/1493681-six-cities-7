import { AuthorizationStatus } from '../../../../const';
import reducer, { requiredAuthorization, setAuthUserData } from './user-slice';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userInfo: {},
  loginStatus: {
    isError: false,
    isLoading: false,
    isSuccess: false,
  },

  logoutStatus: {
    isError: false,
    isLoading: false,
    isSuccess: false,
  },
};

describe('Test user-slice:', () => {
  beforeEach(() => initialState);

  describe('Test sync function:', () => {
    it('Should return initial state', () => {
      expect(reducer(initialState, {})).toEqual(initialState);
    });

    it('Should add auth status', () => {
      expect(reducer(initialState, requiredAuthorization(AuthorizationStatus.UNKNOWN)))
        .toEqual({ ...initialState, authorizationStatus: AuthorizationStatus.UNKNOWN });
    });

    it('Should add userInfo', () => {
      const userInfo = { name: 'test' };
      expect(reducer(initialState, setAuthUserData(userInfo)))
        .toEqual({ ...initialState, userInfo });
    });
  });
});

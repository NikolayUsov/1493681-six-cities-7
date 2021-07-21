import axios from 'axios';

const BASE_URL = 'https://7.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401,
};

const token = localStorage.getItem('token') ?? '';

const getToken = () => localStorage.getItem('token') ?? '';

export default function createAPI(onUnauthorized) {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'x-token': token,
    },
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const { response } = err;

    if (response.status === HttpCode.UNAUTHORIZED && !token) {
      onUnauthorized();
    }

    throw err;
  };

  api.interceptors.request.use((config) => {
    const currentToken = getToken();
    config.headers['x-token'] = currentToken;
    return config;
  });

  api.interceptors.response.use(onSuccess, onFail);
  return api;
}

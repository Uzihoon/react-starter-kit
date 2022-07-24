import axios from 'axios';
import userStorage from 'lib/storage/user';
import Cookie from 'js-cookie';
import { differenceInDays } from 'date-fns';

const REFRESH_TOKEN = 'refreshToken';

const client = axios.create({
  withCredentials: true
});

client.defaults.baseURL = process.env.REACT_APP_API_URL;

client.interceptors.request.use(
  async config => {
    const refreshToken = Cookie.get(REFRESH_TOKEN);
    const user = userStorage.get();
    const expiresAt = user?.expiresAt;
    let token = user?.token || '';

    if (!token) return config;

    if (
      expiresAt &&
      differenceInDays(new Date(expiresAt), new Date()) < 0 &&
      refreshToken
    ) {
      const body = { refreshToken };
      // TODO: Check Get token API URL
      const { data } = await axios.post('/auth/token', body);
      token = data.data.accessToken;

      userStorage.set({ ...user, token });
    }

    config.headers = config.headers || {};

    config.headers.Authorization = `Bearer ${token || ''}`;

    return config;
  },
  error => {
    Cookie.remove(REFRESH_TOKEN);
    return Promise.reject(error);
  }
);

export default client;

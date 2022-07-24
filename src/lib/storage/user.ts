import { User } from 'types/user';

const key = 'USER';
const tokenKey = 'TOKEN';

const userStorage = {
  get() {
    const data = localStorage.getItem(key);
    try {
      if (!data) return null;
      const parsed = JSON.parse(data) as User;
      return parsed;
    } catch (e) {
      localStorage.removeItem(key);
      return null;
    }
  },
  set(user: User) {
    localStorage.setItem(key, JSON.stringify(user));
  },
  clear() {
    localStorage.removeItem(key);
    localStorage.removeItem(tokenKey);
  },
  getToken() {
    const token = localStorage.getItem(tokenKey);
    return token || '';
  },
  setToken(token: string) {
    localStorage.setItem(tokenKey, token);
  }
};

export default userStorage;

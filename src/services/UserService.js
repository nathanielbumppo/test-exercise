import { request } from './Request';
import { config } from '../Constats';

export default {
  getUsersData() {
    const url = config.url.API_URL_USERS;
    return request(url);
  },
  getUserAvatar(name) {
    const url = `${config.url.API_URL_AVATAR}/?name=${name}`;
    return request(url);
  }
};

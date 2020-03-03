import { request } from './Request';

export default {
  getUsersData() {
    const url = `https://jsonplaceholder.typicode.com/users`;
    return request(url);
  },
};

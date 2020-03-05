import { request } from './Request';
import { config } from '../Constats';

export default {
  getAllPosts() {
    const url = config.url.API_URL_POSTS;
    return request(url);
  },
  addNewPost(title, body, userId) {
    const url = config.url.API_URL_POSTS;
    return request(url, 'POST', {
      body: JSON.stringify({
        title,
        body,
        userId
      })
    }, {
      "Content-type": "application/json; charset=UTF-8"
    });
  },
  changePost(postId, title, body, userId) {
    const url = `${config.url.API_URL_POSTS}/${postId}`;
    return request(url, 'PUT', {
      body: JSON.stringify({
        id: postId,
        title,
        body,
        userId
      })
    }, {
      "Content-type": "application/json; charset=UTF-8"
    })
  },
  deletePost(postId) {
    const url = `${config.url.API_URL_POSTS}/${postId}`;
    return request(url, 'DELETE');
  }
};

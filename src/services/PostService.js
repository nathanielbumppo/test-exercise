import { request } from './Request';

export default {
  getAllPosts() {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    return request(url);
  },
  addNewPost(title, body, userId) {
    const url = `https://jsonplaceholder.typicode.com/posts`;
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
  changePost(title, body, postId, userId) {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
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
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    return request(url, 'DELETE');
  }
};

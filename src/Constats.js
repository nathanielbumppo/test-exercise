const prod = {
  url: {
    API_URL: 'https://jsonplaceholder.typicode.com',
    API_URL_USERS: 'https://jsonplaceholder.typicode.com/users',
    API_URL_POSTS: 'https://jsonplaceholder.typicode.com/posts',
    API_URL_AVATAR: 'https://eu.ui-avatars.com/api'
  }
};

const dev = {
  url: {
    API_URL: 'https://jsonplaceholder.typicode.com',
    API_URL_USERS: 'https://jsonplaceholder.typicode.com/users',
    API_URL_POSTS: 'https://jsonplaceholder.typicode.com/posts',
    API_URL_AVATAR: 'https://eu.ui-avatars.com/api'
  }
};

 export const config = process.env.NODE_ENV === 'development' ? dev : prod;
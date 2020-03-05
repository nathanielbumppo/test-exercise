import axios from 'axios';

/**
 *
 * @param url - api endpoint
 * @param method - GET, POST, PUT, DELETE
 * @param data - для передачи данных с пагинацией передавать параметр "page"
 * @param headers - заголовки
 * @param args
 */

export const request = async (url, method, data, headers, ...args) => {
  let fileData;

  if (data instanceof FormData) {
    fileData = data;
  }

  const axiosConfig = {
    method: method || 'GET',
    url,
    data,
    headers,
    ...args,
  };

  const createAxios = axios.create(axiosConfig);

  createAxios.interceptors.request.use(
    (config) => {
      if (fileData) {
        config.data = fileData;
      }
      return config;
    },
    async (err) => {
      return Promise.reject(err);
    },
  );

  createAxios.interceptors.response.use(
    (config) => {
      return config;
    },
    (error) => {
      const { response } = error;
      if (response && response.status === 403) {
        console.error(response.statusText);
      }
      return Promise.reject(error);
    },
  );

  return createAxios(axiosConfig);
};

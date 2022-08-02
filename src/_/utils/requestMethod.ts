import { AxiosInstance } from '_/configs';

const errorHandler = (err) => {
  if (err.response.status === 401) {
    window.location.href = '/';
  }
  throw err;
};

export const Delete = (endpoint) => AxiosInstance.delete(endpoint).catch(errorHandler);
export const Get = (endpoint) => AxiosInstance.get(endpoint).catch(errorHandler);
export const Post = (endpoint, data) => AxiosInstance.post(endpoint, data).catch(errorHandler);
export const Put = (endpoint, data) => AxiosInstance.put(endpoint, data).catch(errorHandler);

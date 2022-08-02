import * as Axios from 'axios';

export const BACKEND_URL = 'https://202.51.232.124:7000';
export const AxiosInstance = Axios.default.create({
  baseURL: BACKEND_URL,
  withCredentials: true,
});

/* eslint-disable import/prefer-default-export */
import axios from "axios";

export const Axios = axios.create({
  baseURL: process.env.BACKEND_URL,
  withCredentials: true,
});

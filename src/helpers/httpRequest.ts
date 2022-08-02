import { Axios } from '@constants';

export const Delete = async (endpoint: string) => Axios.delete(endpoint);
export const Get = async (endpoint: string) => Axios.get(endpoint);
export const Post = async (endpoint: string, data) => Axios.post(endpoint, data);
export const Put = async (endpoint: string, data) => Axios.put(endpoint, data);

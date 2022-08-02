import { AxiosInstance } from '_/configs';

export const ENDPOINT = '/admin/user';
export const ENDPOINTS = `${ENDPOINT}s`;

export const Get = async () => AxiosInstance.get(ENDPOINTS);
export const GetById = async (id: number) => AxiosInstance.get(`${ENDPOINT}/${id}`);
export const Post = async (data) => AxiosInstance.post(ENDPOINT, {
  ...data,
});
export const PostLogin = async (data) => AxiosInstance.post(`${ENDPOINT}/login`, {
  ...data,
});
export const PutById = async (id: number, data) => AxiosInstance.put(`${ENDPOINT}/${id}`, {
  ...data,
});
export const DeleteById = async (data) => AxiosInstance.delete(`${ENDPOINT}/${data}`);

import {
  Delete, Get, Post, Put,
} from '_/utils';

// Endpoint
export const ENDPOINT = '/customer';
export const ENDPOINTS = `${ENDPOINT}s`;

// Request Methods
export const read = async () => Get(ENDPOINTS);
export const readById = async (id: number) => Get(`${ENDPOINT}/${id}`);
export const create = async (data) => Post(ENDPOINT, { ...data });
export const update = async (id: number, data) => Put(`${ENDPOINT}/${id}`, { ...data });
export const deleteById = async (data) => Delete(`${ENDPOINT}/${data}`);

// Response
export const response = (status, error, success) => {
  const setMutate = status[1];
  const [err, setErr] = error;
  return {
    onSuccess: async () => {
      success(ENDPOINTS);
      setMutate(false);
    },
    onMutate: () => {
      setErr({});
      setMutate(true);
    },
    onError: async (res) => {
      setErr({
        ...err,
        status: res.response.status,
        statusText: res.response.statusText,
        message: res.response.data.message,
      });
      setMutate(false);
    },
  };
};

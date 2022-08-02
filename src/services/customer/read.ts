import { Get } from '_/utils';
import type { AxiosResponse } from 'axios';

export const ENDPOINT = '/customer';
export const ENDPOINTS = `${ENDPOINT}s`;

const Read = (): [string, () => Promise<AxiosResponse<any, any>> ] => {
  const read = async () => Get(ENDPOINTS);
  return [
    ENDPOINTS, read,
  ];
};

export default Read;

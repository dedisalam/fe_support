import type { AxiosError as axiosError } from 'axios';

export type AxiosError<T = unknown, D = any> = axiosError<T, D>;

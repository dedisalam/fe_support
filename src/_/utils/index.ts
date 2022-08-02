import verifyEmail from './verifyEmail';

export { verifyEmail };
export * from './requestMethod';
export const isEmpty = (obj: object) => Object.keys(obj).length === 0;
export const isEmptyArray = (arr: []) => arr.length === 0;
export const REGEX = {
  EMAIL: /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

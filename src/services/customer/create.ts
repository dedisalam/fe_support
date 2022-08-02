import { Post } from '_/utils';
import { ENDPOINT, response } from './common';

const Create = (status, error, success) => {
  const create = async (data) => Post(ENDPOINT, { ...data });
  return [create, response(status, error, success)];
};

export default Create;

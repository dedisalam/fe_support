import { Delete as DeleteUtil } from '_/utils';
import type { AxiosResponse } from 'axios';
import { ENDPOINT, response } from './common';

type DeleteReturn = [(data: any) => Promise<AxiosResponse<any, any>>, Object];
type Status = [boolean, React.Dispatch<React.SetStateAction<boolean>>];
const Delete = (status: Status, error, success): DeleteReturn => {
  const deleteById = async (data) => DeleteUtil(`${ENDPOINT}/${data}`);
  return [
    deleteById, response(status, error, success),
  ];
};

export default Delete;

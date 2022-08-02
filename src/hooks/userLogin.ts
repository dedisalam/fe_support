import { useState } from 'react';
import { useMutation } from 'react-query';
import type { AxiosError } from 'axios';
import type { Error, UserLoginState } from '@args';
import { Post, errorHandler, mutateHandler } from '@helpers';

type Data = {
  error: Error;
};

const ENDPOINT = '/admin/user';
const Hooks = () => {
  const [state, setState] = useState<UserLoginState>({
    isLoading: false,
    error: undefined,
  });

  const { mutate } = useMutation(
    async (data: object) => Post(`${ENDPOINT}/login`, data),
    {
      onSuccess: () => {
        window.location.href = '/';
      },
      onMutate: () => mutateHandler([state, setState]),
      onError: (err: AxiosError<Data>) => errorHandler<UserLoginState>(err, [state, setState]),
    },
  );

  return {
    mutate,
    state,
  };
};

export default Hooks;

import type { AxiosError, Error, UseState } from '@args';

type Data = {
  error: Error;
};

export function errorHandler<T>(err: AxiosError<Data>, useState: UseState<T>) {
  const [state, setState] = useState;

  if (err.code === 'ERR_NETWORK') {
    setState({
      ...state,
      error: {
        global: {
          title: err.code,
          message: err.message,
        },
      },
    });
  }

  if (err.response) {
    if (err.response.status === 401) {
      window.location.href = '/';
    }

    setState({
      ...state,
      error: {
        local: err.response.data.error,
      },
    });
  }
}

export function mutateHandler<T>(useState: UseState<T>) {
  const [state, setState] = useState;

  setState({
    ...state,
    isLoading: true,
    error: undefined,
  });
}

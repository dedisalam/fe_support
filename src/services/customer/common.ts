export const ENDPOINT = '/customer';
export const ENDPOINTS = `${ENDPOINT}s`;

type ErrResponse = {
  response:{
    status: number
    statusText: string
    data: {
      message: string
    }
  }
};

type ResponResult = {
  onSuccess: () => Promise<void>
  onError: (data: ErrResponse) => Promise<void>
  onMutate: () => Promise<void>
};

const OnError = (status, error) => {
  const [err, setErr] = error;
  const setMutate = status[1];
  const result = async (res) => {
    setErr({
      ...err,
      status: res.response.status,
      statusText: res.response.statusText,
      message: res.response.data.message,
    });
    setMutate(false);
  };
  return result;
};

const OnMutate = (status, error) => {
  const result = async () => {
    error[1]({});
    status[1](true);
  };

  return result;
};

const OnSuccess = (status, success) => {
  const result = async () => {
    success(ENDPOINTS);
    status[1](false);
  };
  return result;
};
type Status = [boolean, React.Dispatch<React.SetStateAction<boolean>>];
export const response = (status:Status, error, success): ResponResult => ({
  onSuccess: OnSuccess(status, success),
  onMutate: OnMutate(status, error),
  onError: OnError(status, error),
});

export type Error = {
  title: string;
  detail: string;
};

export type ErrorBanner = {
  title: string;
  message: string;
};

export type UserLoginState = {
  isLoading: boolean;
  error?: {
    global?: ErrorBanner;
    local?: Error;
  };
};

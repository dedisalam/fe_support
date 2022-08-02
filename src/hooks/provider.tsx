import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import type { Provider as I } from 'interfaces/hooks';
import { ReactQueryDevtools } from 'react-query/devtools';

export default function Provider(props: I): JSX.Element {
  const { children } = props;
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

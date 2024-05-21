import React from 'react';
import Pdp from '@modules/pdp';
import { Provider } from 'react-redux';
import store from '@store/index';
import { QueryClient, QueryClientProvider } from 'react-query';
import ThemeProvider from '@components/atoms/theme-provider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const PDPPage = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Pdp />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default PDPPage;

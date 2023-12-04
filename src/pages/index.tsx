import React from 'react';
import Pdp from '@modules/pdp';
import { Provider } from 'react-redux';
import store from '@store/index';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { themeEasy } from '@cencosud-ds/easy-design-system';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={themeEasy}>
          <Pdp />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;

import React from 'react';
import Pdp from '@modules/pdp';
import { Provider } from 'react-redux';
import store from '@store/index';
import { QueryClient, QueryClientProvider } from 'react-query';
import dynamic from 'next/dynamic';

const EasyThemeProvider = dynamic(
  () =>
    import('@ccom-easy-design-system/theme.theme-provider').then(
      (module) => module.EasyThemeProvider,
    ),
  { ssr: false },
);

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
        <EasyThemeProvider>
          <Pdp />
        </EasyThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;

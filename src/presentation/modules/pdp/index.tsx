import { Provider } from 'react-redux';
import PdpContainer from './pdp-container';
import store from '@store/index';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@cencosud-ds/easy-design-system';
import { GetProduct } from '@entities/product/get-product.response';
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import axios from 'axios';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const Pdp = (props: InferGetStaticPropsType<GetStaticProps>) => {
  const { repo } = props;
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <PdpContainer {...repo} />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default Pdp;

export const getStaticProps = (async (ctx: GetStaticPropsContext) => {
  if (ctx?.params?.department) {
    const query = ctx?.params?.department.toString().split('-');
    const productId = Number(query?.[query?.length - 1].split('/')[0]);

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BFF_URL}/products/by-sku/${encodeURIComponent(
        productId,
      )}`,
      {
        headers: {
          'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY_BFF}`,
        },
      },
    );
    const repo = await response?.data;
    return { props: { repo }, revalidate: 60 };
  }
  return { props: { repo: {} } };
}) satisfies GetStaticProps<{
  repo: GetProduct | {};
}>;

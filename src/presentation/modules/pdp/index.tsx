import { Provider } from 'react-redux';
import PdpContainer from './pdp-container';
import store from '@store/index';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GetProduct } from '@entities/product/get-product.response';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import axios from 'axios';
import dynamic from 'next/dynamic';
import ProductNotFound from './product-not-found/product-not-found';

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

const Pdp = (props: InferGetServerSidePropsType<GetServerSideProps>) => {
  const { repo } = props;

  if (!repo || Object.keys(repo).length === 0) {
    return <ProductNotFound />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <EasyThemeProvider>
        <Provider store={store}>
          <PdpContainer {...repo} />
        </Provider>
      </EasyThemeProvider>
    </QueryClientProvider>
  );
};

export default Pdp;

export const getServerSideProps = (async (ctx: GetServerSidePropsContext) => {
  ctx.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  );
  if (ctx?.params?.department) {
    const query = ctx?.params?.department.toString().split('-');
    const productId = Number(query?.[query?.length - 1].split('/')[0]);

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BFF_URL}products/by-sku/${encodeURIComponent(
          productId,
        )}`,
        {
          headers: {
            'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY_BFF}`,
          },
        },
      );
      const repo = await response?.data;
      return { props: { repo } };
    } catch (error) {
      return { props: { repo: null } };
    }
  }
  return { props: { repo: {} } };
}) satisfies GetServerSideProps<{
  repo: GetProduct | null;
}>;

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
import dynamic from 'next/dynamic';
import ProductNotFound from './product-not-found/product-not-found';
import getProduct from '@use-cases/product/get-product';

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
  const accessToken = ctx?.req.cookies?.accessToken;
  ctx.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=0',
  );

  if (ctx?.params?.department) {
    const query = ctx?.params?.department.toString().split('-');
    const productId = Number(query?.[query?.length - 1].split('/')[0]);

    try {
      const response = getProduct(productId, accessToken);
      const repo = await response;
      return { props: { repo } };
    } catch (error) {
      console.error(`getServerSideProps error: ${JSON.stringify(error)}`);
      return { props: { repo: null } };
    }
  }
  return { props: { repo: null } };
}) satisfies GetServerSideProps<{
  repo: GetProduct | null;
}>;

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
import { useEffect } from 'react';
import { useDispatchProductEvent } from '@use-cases/product/dispatch-product-event';
import useGetId from '@hooks/useGetId';
import { EventType } from '@entities/events/ga-events';

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

const Pdp = (
  props: InferGetServerSidePropsType<
    GetServerSideProps<{ repo: GetProduct; productId: string }>
  >,
) => {
  const { repo, productId } = props;
  const { variantSkuId } = useGetId();
  const { dispatchViewItemEvent } = useDispatchProductEvent();

  useEffect(() => {
    if (repo && Object.keys(repo).length !== 0 && variantSkuId) {
      dispatchViewItemEvent({
        event: EventType.ViewItem,
        product: repo,
        productRefId: productId || '',
        variantSkuId: variantSkuId || '',
      });
    }
  }, [variantSkuId, repo, productId]);

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
    'public, s-maxage=10, stale-while-revalidate=0',
  );
  if (ctx?.params?.department) {
    const query = ctx?.params?.department.toString().split('-');
    const productId = query?.[query?.length - 1].split('/')[0];

    try {
      const response = getProduct(Number(productId));
      const repo = await response;
      return { props: { repo, productId: productId as string } };
    } catch (error) {
      console.error(`getServerSideProps error: ${JSON.stringify(error)}`);
      return { props: { repo: null, productId: '' } };
    }
  }
  return { props: { repo: null, productId: '' } };
}) satisfies GetServerSideProps<{
  repo: GetProduct | null;
  productId: string;
}>;

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

      if (repo?.allSpecificationsGroups?.includes('Códigos de Pintura')) {
        const formatColorCodes: (repo: GetProduct) => GetProduct = (repo) => {
          const colorCodes: { [key: string]: string[] } = {};
          repo?.specifications?.['Códigos de Pintura']?.forEach((spec) => {
            // Check if the specification exists in the object
            if (spec in repo.specifications) {
              // If it exists, get the values associated with that specification
              colorCodes[spec] = repo.specifications?.[spec];
              delete repo.specifications[spec];
            }
          });
          delete repo.specifications['Códigos de Pintura'];
          return { ...repo, colorCodes };
        };
        const formattedRepo: GetProduct | null = formatColorCodes(repo);
        return { props: { repo: formattedRepo } };
      } else return { props: { repo } };
    } catch (error) {
      return { props: { repo: null } };
    }
  }
  return { props: { repo: {} } };
}) satisfies GetServerSideProps<{
  repo: GetProduct | null;
}>;

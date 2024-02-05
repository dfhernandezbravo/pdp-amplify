import { Provider } from 'react-redux';
import PdpContainer from './pdp-container';
import store from '@store/index';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GetProduct } from '@entities/product/get-product.response';
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import axios from 'axios';
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

const Pdp = (props: InferGetStaticPropsType<GetStaticProps>) => {
  const { repo } = props;
  console.log('>>> props <<< :', props);
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

export const getStaticProps = (async (ctx: GetStaticPropsContext) => {
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
      console.log('>>>>> repo <<<:', repo);
      return { props: { repo }, revalidate: 60 };
    } catch (error) {
      console.info(error);
    }
  }
  return { props: { repo: {} } };
}) satisfies GetStaticProps<{
  repo: GetProduct | {};
}>;

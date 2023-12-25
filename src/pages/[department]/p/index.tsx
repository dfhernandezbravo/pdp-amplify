// Get static props
import React from 'react';
import Pdp from '@modules/pdp';
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import axios from 'axios';
import { GetProduct } from '@entities/product/get-product.response';

const App = ({ repo }: InferGetStaticPropsType<GetStaticProps>) => {
  return <Pdp {...repo} />;
};

export default App;

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
    return { props: { repo } };
  }
  return { props: { repo: {} } };
}) satisfies GetStaticProps<{
  repo: GetProduct;
}>;

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  };
};

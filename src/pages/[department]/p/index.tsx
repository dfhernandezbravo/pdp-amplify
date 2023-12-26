import React from 'react';
import Pdp from '@modules/pdp';
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import { GetProduct } from '@entities/product/get-product.response';

type Props = {
  repo: GetProduct;
};

const App = (props: Props) => {
  return <Pdp {...props} />;
};

export default App;

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const pdp = await import('@modules/pdp');
  if (pdp.getStaticProps) {
    return pdp.getStaticProps(ctx);
  }
  return {
    props: {},
  };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  };
};

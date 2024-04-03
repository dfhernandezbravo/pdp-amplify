import React from 'react';
import Pdp from '@modules/pdp';
import { GetServerSidePropsContext } from 'next';
import { GetProduct } from '@entities/product/get-product.response';

type Props = {
  repo: GetProduct;
  productId: string;
};

const App = (props: Props) => {
  return <Pdp {...props} />;
};

export default App;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const pdp = await import('@modules/pdp');
  if (pdp.getServerSideProps) {
    return pdp.getServerSideProps(ctx);
  }
  return {
    props: {},
  };
};

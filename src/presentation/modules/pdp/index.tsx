import PdpContainer from './pdp-container';
import Head from 'next/head';
import { useAppSelector } from '@hooks/storeHooks';
import CartEventLayout from '../../layouts/cart-event-layout';
import { useRouter } from 'next/router';

const Pdp = () => {
  const {
    query: { department },
  } = useRouter();
  const paramsArray = department?.toString().split('-');
  const productId = Number(paramsArray?.[paramsArray?.length - 1]);
  const { product } = useAppSelector((state) => state.product);

  return (
    <CartEventLayout>
      <Head>
        <title>
          {product?.metaTagDescription
            ? `${product?.metaTagDescription} | Easy.cl - Easy`
            : 'Easy.cl'}
        </title>
      </Head>

      <PdpContainer productId={productId} />
    </CartEventLayout>
  );
};

export default Pdp;

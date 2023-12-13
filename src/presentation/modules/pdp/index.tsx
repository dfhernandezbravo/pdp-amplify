import PdpContainer from './pdp-container';
import Head from 'next/head';
import { useAppSelector } from '@hooks/storeHooks';
import CartEventProvider from '../../providers/cart-event-provider';
import { useRouter } from 'next/router';

const Pdp = () => {
  const { asPath } = useRouter();
  const paramsArray = asPath?.toString().split('-');
  const productId = Number(
    paramsArray?.[paramsArray?.length - 1].split('/')[0],
  );
  const { product } = useAppSelector((state) => state.product);

  return (
    <CartEventProvider>
      <Head>
        <title>
          {product?.metaTagDescription
            ? `${product?.metaTagDescription} | Easy.cl - Easy`
            : 'Easy.cl'}
        </title>
      </Head>

      <PdpContainer productId={productId} />
    </CartEventProvider>
  );
};

export default Pdp;

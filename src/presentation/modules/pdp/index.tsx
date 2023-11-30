import PdpContainer from './pdp-container';
import Head from 'next/head';
import { useAppSelector } from '@hooks/storeHooks';
import { useRouter } from 'next/router';
// import useEventListener from '@hooks/eventListenerHooks';
// import WindowsEvents from '@components/events';
// import dispatchCartDataEvent from '@use-cases/shopping-cart/dispatch-cart-data-event';

const Pdp = () => {
  const {
    query: { n0 },
  } = useRouter();
  const paramsArray = n0?.toString().split('-');
  const productId = Number(paramsArray?.[paramsArray?.length - 1]);
  const { product } = useAppSelector((state) => state.product);

  // dispatchCartDataEvent();

  // useEventListener(
  //   document,
  //   WindowsEvents.CART_ID,
  //   updateCartId(),
  // );

  return (
    <>
      <Head>
        <title>
          {product?.metaTagDescription
            ? `${product?.metaTagDescription} | Easy.cl - Easy`
            : 'Easy.cl'}
        </title>
      </Head>

      <PdpContainer productId={productId} />
    </>
  );
};

export default Pdp;

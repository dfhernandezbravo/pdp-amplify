import PdpSkeleton from '@components/molecules/skeleton/pdp-skeleton/pdp-skeleton';
import { EventType } from '@entities/events/ga-events';
import { useAppDispatch } from '@hooks/store-hooks';
import useGetId from '@hooks/useGetId';
import { setProduct, setProductId } from '@store/product';
import { useDispatchProductEvent } from '@use-cases/product/dispatch-product-event';
import { getProduct } from '@use-cases/product/get-product/';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import PdpContainer from './pdp-container';
import ProductNotFound from './product-not-found/product-not-found';

const Pdp = () => {
  const { variantSkuId } = useGetId();
  const { dispatchViewItemEvent } = useDispatchProductEvent();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const query = router?.query.department as string;
  const productId = Number(query.split('-').pop());

  const { data, isLoading, isError } = useQuery(
    ['get-product', productId],
    () => {
      if (productId) return getProduct(productId);
    },
    { enabled: Boolean(productId) },
  );

  useEffect(() => {
    if (data) {
      dispatch(setProductId(productId));
      dispatch(setProduct(data));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (data && variantSkuId) {
      dispatchViewItemEvent({
        event: EventType.ViewItem,
        product: data,
        productRefId: `${productId}` || '',
        variantSkuId: variantSkuId || '',
      });
    }
  }, [variantSkuId, data, productId]);

  if (isError) return <ProductNotFound />;

  if (isLoading) return <PdpSkeleton />;

  return <PdpContainer productId={productId} />;
};

export default Pdp;

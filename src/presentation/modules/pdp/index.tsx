import PdpSkeleton from '@components/molecules/skeleton/pdp-skeleton/pdp-skeleton';
import { EventType } from '@entities/events/ga-events';
import { useAppDispatch } from '@hooks/store-hooks';
import useGetId from '@hooks/use-get-id';
import { setProduct, setProductId } from '@store/product';
import { useDispatchProductEvent } from '@use-cases/product/dispatch-product-event';
import { getProduct } from '@use-cases/product/get-product/';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import PdpContainer from './pdp-container';
import ProductNotFound from './product-not-found/product-not-found';
import { ParsedUrlQuery } from 'querystring';

interface PdpProps extends ParsedUrlQuery {
  department: string;
}

const Pdp = () => {
  const [productSku, setProductSKU] = useState<number | undefined>();
  const { variantSkuId } = useGetId();
  const { dispatchViewItemEvent } = useDispatchProductEvent();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { department } = router.query as PdpProps;

  useEffect(() => {
    if (department) setProductSKU(Number(department.split('-').pop()));
  }, [department]);

  const { data, isLoading, isError } = useQuery(
    ['get-product', productSku],
    () => {
      if (productSku) return getProduct(productSku);
    },
    { enabled: Boolean(productSku) },
  );

  useEffect(() => {
    if (data && productSku) {
      dispatch(setProductId(productSku));
      dispatch(setProduct(data));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (data && variantSkuId) {
      dispatchViewItemEvent({
        event: EventType.ViewItem,
        product: data,
        productRefId: `${productSku}` || '',
        variantSkuId: variantSkuId || '',
      });
    }
  }, [variantSkuId, data, productSku]);

  if (isError) return <ProductNotFound />;

  if (isLoading) return <PdpSkeleton />;

  if (!productSku) return null;

  return <PdpContainer productId={productSku} />;
};

export default Pdp;

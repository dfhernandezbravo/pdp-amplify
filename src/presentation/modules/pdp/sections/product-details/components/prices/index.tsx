import { useAppSelector } from '@hooks/storeHooks';
import dynamic from 'next/dynamic';

const Price = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.price').then(
      (module) => module.Price,
    ),
  { ssr: false },
);

const PriceContainer = () => {
  const { product } = useAppSelector((state) => state.product);

  let prices = product?.items?.[0]?.sellers?.[0]?.commertialOffer?.prices;
  let adjustments =
    product?.items?.[0]?.sellers?.[0]?.commertialOffer?.adjustments;

  if (prices) {
    return <Price price={prices} adjustments={adjustments || []} />;
  } else return null;
};

export default PriceContainer;

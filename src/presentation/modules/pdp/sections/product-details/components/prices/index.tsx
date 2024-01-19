import { useAppSelector } from '@hooks/storeHooks';
import { Price } from '@cencosud-ds/easy-design-system';

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

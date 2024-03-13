import M2Price from '@components/atoms/prices/M2Price';
import Price from '@components/atoms/prices/Price';
import { useAppSelector } from '@hooks/storeHooks';

const PriceContainer = () => {
  const { product } = useAppSelector((state) => state.product);

  let prices = product?.items?.[0]?.sellers?.[0]?.commertialOffer?.prices;
  let adjustments =
    product?.items?.[0]?.sellers?.[0]?.commertialOffer?.adjustments;
  let priceM2 = product?.items?.[0]?.sellers?.[0]?.commertialOffer?.pricesM2;

  if (prices) {
    return (
      <>
        {priceM2 ? (
          <M2Price
            price={prices}
            adjustments={adjustments || []}
            priceM2={priceM2}
          />
        ) : (
          <Price price={prices} adjustments={adjustments || []} />
        )}
      </>
    );
  } else {
    return null;
  }
  //   {
  //     priceM2 ? (
  //       <M2Price
  //         price={prices}
  //         adjustments={adjustments || []}
  //         priceM2={priceM2}
  //       />
  //     ) : (
  //       <Price price={prices} adjustments={adjustments || []} />
  //     );
  //   }
  // } else return null;
};

export default PriceContainer;

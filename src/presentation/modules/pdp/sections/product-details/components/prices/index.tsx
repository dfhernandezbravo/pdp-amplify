import { useAppSelector } from '@hooks/storeHooks';
import {
  DiscountPercentage,
  FullPrice,
  OfferPrice,
  PricesContainer,
} from './style';
import { useEffect, useState } from 'react';

const Price = () => {
  const { product } = useAppSelector((state) => state.product);
  const [offerPrice, setOfferPrice] = useState<number>();
  const [brandPrice, setBrandPrice] = useState<number>();
  const [totalPrice, setTotalPrice] = useState<number>();

  const calculatePercentage = (price1: number, price2: number) => {
    const discount = price1 - price2;

    return Math.ceil((discount * 100) / price1);
  };

  const formatPrice = (num: number) => {
    return (num / 1000).toFixed(3);
  };

  useEffect(() => {
    setBrandPrice(
      product?.items?.[0]?.sellers?.[0]?.commertialOffer?.prices?.brandPrice,
    );
    setOfferPrice(
      product?.items?.[0]?.sellers?.[0]?.commertialOffer?.prices?.offerPrice,
    );
    setTotalPrice(
      product?.items?.[0]?.sellers?.[0]?.commertialOffer?.prices?.normalPrice,
    );
  }, [product]);

  if (totalPrice) {
    return (
      <PricesContainer>
        {brandPrice && (
          <div>
            <OfferPrice>${formatPrice(brandPrice)}</OfferPrice>
            <DiscountPercentage>
              {calculatePercentage(totalPrice, brandPrice)}%
            </DiscountPercentage>
          </div>
        )}
        {offerPrice && (
          <div>
            <OfferPrice>${formatPrice(offerPrice)}</OfferPrice>
            <DiscountPercentage>
              {calculatePercentage(totalPrice, offerPrice)}%
            </DiscountPercentage>
          </div>
        )}
        <FullPrice>Normal:${formatPrice(totalPrice)}</FullPrice>
      </PricesContainer>
    );
  } else return null;
};

export default Price;

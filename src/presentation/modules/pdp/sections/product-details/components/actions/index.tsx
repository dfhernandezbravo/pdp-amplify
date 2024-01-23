import React, { useState } from 'react';
import { ButtonsContainer, OutOfStockText, QuantityTitle } from './style';
import { QuantitySelector } from '@cencosud-ds/easy-design-system';
import { useAppSelector } from '@hooks/storeHooks';
import Desktop from '@components/Desktop';
import Buttons from './buttons';
import { useRouter } from 'next/router';

const Actions = () => {
  const { product } = useAppSelector((state) => state.product);
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  const availableStock = () => {
    const skuId = router?.query?.skuId;
    if (skuId) {
      const selectedProduct = product?.items?.find(
        (item) => item?.itemId === skuId,
      );
      return (
        selectedProduct?.sellers?.[0]?.commertialOffer?.availableQuantity || 0
      );
    } else
      return (
        product?.items?.[0].sellers?.[0]?.commertialOffer?.availableQuantity ||
        0
      );
  };

  if (!availableStock())
    return (
      <OutOfStockText>
        Este producto no está disponible en este momento
      </OutOfStockText>
    );

  if (product)
    return (
      <ButtonsContainer>
        <Desktop>
          <QuantityTitle>Cantidad</QuantityTitle>
          <QuantitySelector
            quantity={quantity}
            onIncrementQuantity={() => setQuantity(quantity + 1)}
            onDecrementQuantity={() => setQuantity(quantity - 1)}
            onChange={(quantity) => setQuantity(quantity)}
            disabled={false}
            max={availableStock()}
          />
        </Desktop>
        <Buttons quantity={quantity} product={product} />
      </ButtonsContainer>
    );
  else return null;
};

export default Actions;

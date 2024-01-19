import React, { useState } from 'react';
import { ButtonsContainer, OutOfStockText, QuantityTitle } from './style';
import { QuantitySelector } from '@cencosud-ds/easy-design-system';
import { useAppSelector } from '@hooks/storeHooks';
import Desktop from '@components/Desktop';
import Buttons from './buttons';
import { useSearchParams } from 'next/navigation';

const Actions = () => {
  const { product } = useAppSelector((state) => state.product);
  const { cartId, cart } = useAppSelector((state) => state.cart);
  const [quantity, setQuantity] = useState(1);
  const searchParams = useSearchParams();

  const availableStock = () => {
    if (searchParams?.get('skuId')) {
      const selectedProduct = product?.items?.find(
        (item) => item?.itemId === searchParams.get('skuId'),
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
        <Buttons
          quantity={quantity}
          product={product}
          cartId={cartId}
          shoppingCart={cart}
        />
      </ButtonsContainer>
    );
  else return null;
};

export default Actions;

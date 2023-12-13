import React, { useState } from 'react';
import { ButtonsContainer, OutOfStockText, QuantityTitle } from './style';
import { QuantitySelector } from '@cencosud-ds/easy-design-system';
import { useAppSelector } from '@hooks/storeHooks';
import Desktop from '@components/Desktop';
import Buttons from './buttons';

const Actions = () => {
  const { product } = useAppSelector((state) => state.product);
  const { cartId, cart } = useAppSelector((state) => state.cart);
  const [quantity, setQuantity] = useState(1);

  if (!product?.items?.[0]?.sellers?.[0]?.commertialOffer?.availableQuantity)
    return (
      <OutOfStockText>
        Este producto no está disponible en este momento
      </OutOfStockText>
    );

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
          max={
            product?.items?.[0]?.sellers?.[0]?.commertialOffer
              ?.availableQuantity
          }
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
};

export default Actions;

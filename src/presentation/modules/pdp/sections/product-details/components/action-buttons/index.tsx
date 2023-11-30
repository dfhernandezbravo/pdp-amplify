import React, { useState } from 'react';
import { ButtonsContainer, OutOfStockText } from './style';
import { ButtonEasy } from '@cencosud-ds/easy-design-system';
import QuantitySelector from '@components/atoms/QuantitySelector';
import { useAppSelector } from '@hooks/storeHooks';
import Desktop from '@components/Desktop';

const ActionButtons = () => {
  const { product } = useAppSelector((state) => state.product);
  const [quantity, setQuantity] = useState(1);
  const loading = false;

  if (product?.items?.[0]?.sellers?.[0]?.commertialOffer?.availableQuantity) {
    return (
      <ButtonsContainer>
        <Desktop>
          <QuantitySelector
            index={1}
            quantity={quantity}
            onIncrementQuantity={() => setQuantity(quantity + 1)}
            onDecrementQuantity={() => setQuantity(quantity - 1)}
            onChange={(quantity) => setQuantity(quantity)}
            disabled={loading}
            max={
              product?.items?.[0]?.sellers?.[0]?.commertialOffer
                ?.availableQuantity
            }
          />
        </Desktop>
        <ButtonEasy variant="primary" label="Comprar ahora" />
        <ButtonEasy variant="secondary" label="Añadir al carro" />
      </ButtonsContainer>
    );
  } else
    return (
      <OutOfStockText>
        Este producto no está disponible en este momento
      </OutOfStockText>
    );
};

export default ActionButtons;

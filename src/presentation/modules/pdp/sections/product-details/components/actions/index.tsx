import React, { useState } from 'react';
import { ButtonsContainer, OutOfStockText, QuantityTitle } from './style';
import { useAppSelector } from '@hooks/storeHooks';
import Desktop from '@components/Desktop';
import Buttons from './buttons';
import dynamic from 'next/dynamic';

const QuantitySelector = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.quantity-selector').then(
      (module) => module.QuantitySelector,
    ),
  { ssr: false },
);

const Actions = () => {
  const { product, selectedItem } = useAppSelector((state) => state.product);
  const [quantity, setQuantity] = useState(1);

  const availableStock = () => {
    return selectedItem?.sellers?.[0]?.commertialOffer?.availableQuantity || 0;
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
        <Buttons quantity={quantity} />
      </ButtonsContainer>
    );
  else return null;
};

export default Actions;

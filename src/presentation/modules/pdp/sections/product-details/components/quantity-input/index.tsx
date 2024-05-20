import React from 'react';
import dynamic from 'next/dynamic';
import { setQuantity } from '@store/product';
import { useAppSelector, useAppDispatch } from '@hooks/store-hooks';
import { QuantityTitle } from './style';

const QuantitySelector = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.quantity-selector').then(
      (module) => module.QuantitySelector,
    ),
  { ssr: false },
);

const QuantityInput = () => {
  const { quantity, selectedVariant } = useAppSelector(
    (state) => state.product,
  );
  const dispatch = useAppDispatch();

  const availableStock = () => {
    return (
      selectedVariant?.sellers?.[0]?.commertialOffer?.availableQuantity || 0
    );
  };

  if (!quantity === undefined) return null;

  return (
    <>
      <QuantityTitle>Cantidad</QuantityTitle>
      <QuantitySelector
        quantity={quantity}
        onIncrementQuantity={() => dispatch(setQuantity?.(quantity + 1))}
        onDecrementQuantity={() => dispatch(setQuantity?.(quantity - 1))}
        onChange={(quantity) => dispatch(setQuantity?.(quantity))}
        disabled={false}
        max={availableStock()}
      />
    </>
  );
};

export default QuantityInput;

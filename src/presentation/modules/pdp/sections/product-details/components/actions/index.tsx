import React from 'react';
import { OutOfStockText } from './style';
import { useAppSelector } from '@hooks/store-hooks';
import DesktopActions from './layouts/desktop-actions';
import MobileActions from './layouts/mobile-actions';

const Actions = () => {
  const { product, selectedVariant } = useAppSelector((state) => state.product);

  const availableStock = () => {
    return (
      selectedVariant?.sellers?.[0]?.commertialOffer?.availableQuantity || 0
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
      <>
        <DesktopActions />
        <MobileActions />
      </>
    );
  else return null;
};

export default Actions;

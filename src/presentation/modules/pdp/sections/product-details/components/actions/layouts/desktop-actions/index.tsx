import React from 'react';
import Buttons from '../../buttons';
import Desktop from '@components/Desktop';
import QuantityInput from '../../../quantity-input';

const DesktopActions = () => {
  return (
    <Desktop>
      <QuantityInput />
      <Buttons />
    </Desktop>
  );
};

export default DesktopActions;

import React from 'react';
import Buttons from '../../buttons';
import Desktop from '@components/Desktop';
import QuantityInput from '../../../quantity-input';
import { QuantityContainer } from './style';

const DesktopActions = () => {
  return (
    <Desktop>
      <QuantityContainer>
        <QuantityInput />
      </QuantityContainer>
      <Buttons />
    </Desktop>
  );
};

export default DesktopActions;

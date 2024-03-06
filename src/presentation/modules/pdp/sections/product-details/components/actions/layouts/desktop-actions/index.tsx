import React from 'react';
import { ButtonsContainer } from './style';
import Buttons from '../../buttons';
import Desktop from '@components/Desktop';
import QuantityInput from '../../../quantity-input';

const DesktopActions = () => {
  return (
    <Desktop>
      <ButtonsContainer>
        <QuantityInput />
        <Buttons />
      </ButtonsContainer>
    </Desktop>
  );
};

export default DesktopActions;

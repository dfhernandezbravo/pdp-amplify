import React from 'react';
import { Container, ButtonsContainer } from './style';
import Buttons from '../../buttons';
import Mobile from '@components/Mobile';
import { useAppSelector } from '@hooks/storeHooks';

const MobileActions = () => {
  const { openedColorGroup } = useAppSelector((state) => state.tintometric);

  return (
    <Mobile>
      <Container openedColorGroup={openedColorGroup !== ''}>
        <ButtonsContainer>
          <Buttons />
        </ButtonsContainer>
      </Container>
    </Mobile>
  );
};

export default MobileActions;

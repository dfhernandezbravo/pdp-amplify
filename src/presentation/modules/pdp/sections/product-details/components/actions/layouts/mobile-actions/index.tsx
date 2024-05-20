import React from 'react';
import { Container } from './style';
import Buttons from '../../buttons';
import Mobile from '@components/Mobile';
import { useAppSelector } from '@hooks/store-hooks';

const MobileActions = () => {
  const { openedColorGroup } = useAppSelector((state) => state.tintometric);

  return (
    <Mobile>
      <Container openedColorGroup={openedColorGroup !== ''}>
        <Buttons />
      </Container>
    </Mobile>
  );
};

export default MobileActions;

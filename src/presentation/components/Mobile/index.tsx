import useBreakpoints from '@hooks/use-device/useBreakpoints';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Mobile: React.FC<Props> = ({ children }) => {
  const { isSm, isXs, isMd } = useBreakpoints();

  return isSm || isXs || isMd ? <>{children}</> : null;
};

export default Mobile;

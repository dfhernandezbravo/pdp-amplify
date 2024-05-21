import useBreakpoints from '@hooks/use-device/useBreakpoints';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Desktop: React.FC<Props> = ({ children }) => {
  const { isLg } = useBreakpoints();

  return isLg ? <>{children}</> : null;
};

export default Desktop;

import { useEffect, useState } from 'react';
import PdpContainer from './pdp-container';

const Pdp = () => {
  const [pathname, setPathname] = useState<string>();
  const paramsArray = pathname?.toString().split('-');
  const productId = Number(paramsArray?.[paramsArray?.length - 1].slice(0, -2));

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { pathname } = window.location;
      setPathname(pathname);
    }
  }, []);

  return <PdpContainer productId={productId} />;
};

export default Pdp;

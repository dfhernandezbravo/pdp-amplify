import React from 'react';
import { useAppSelector } from '@hooks/storeHooks';
import dynamic from 'next/dynamic';
import { RibbonProps } from './types';

const BitRibbons = dynamic(
  () =>
    import('@ccom-easy-design-system/molecules.ribbons').then(
      (module) => module.Ribbons,
    ),
  { ssr: false },
);

const Ribbons = ({ group }: RibbonProps) => {
  const { product } = useAppSelector((state) => state.product);
  const ribbons = product?.ribbons;

  if (!ribbons) return null;

  return <BitRibbons group={group} ribbons={ribbons} />;
};

export default Ribbons;

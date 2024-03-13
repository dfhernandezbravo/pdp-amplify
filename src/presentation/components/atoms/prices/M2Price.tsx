import dynamic from 'next/dynamic';

const M2Price = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.price').then(
      (module) => module.M2Price,
    ),
  { ssr: false },
);

export default M2Price;

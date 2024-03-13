import dynamic from 'next/dynamic';

const Price = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.price').then(
      (module) => module.Price,
    ),
  { ssr: false },
);

export default Price;

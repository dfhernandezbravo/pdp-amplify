import dynamic from 'next/dynamic';

const CheckBox = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.checkbox').then(
      (module) => module.Checkbox,
    ),
  { ssr: false, loading: () => <></> },
);

export default CheckBox;

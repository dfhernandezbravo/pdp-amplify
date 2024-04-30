import React from 'react';
import dynamic from 'next/dynamic';

export const Textfield = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.textfield').then(
      (module) => module.Textfield,
    ),
  { ssr: false, loading: () => <></> },
);

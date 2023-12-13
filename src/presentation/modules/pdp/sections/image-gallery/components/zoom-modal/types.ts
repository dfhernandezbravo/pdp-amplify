import { Dispatch, SetStateAction } from 'react';

export type ZoomModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

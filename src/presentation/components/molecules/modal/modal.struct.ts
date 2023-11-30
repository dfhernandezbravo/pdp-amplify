export type Button = {
  background: string;
  color: string;
  text: string;
  onClick?: () => void;
  borderColor: string;
};

export type Icon = {
  onClick: () => void;
};

export interface ModalStruct {
  children: React.ReactNode;
  open: boolean;
  setOpen: (v: boolean) => void;
  title?: string;
  icon?: Icon;
}

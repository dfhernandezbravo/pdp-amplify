import { ColorType } from '../../types';
import { useAppSelector } from '@hooks/storeHooks';
import ColorPickerDesktop from './layouts/color-picker-desktop';
import ColorPickerMobile from './layouts/color-picker-mobile';

type Props = {
  color?: ColorType;
};

const ColorPicker = ({ color }: Props) => {
  const { openedColorGroup } = useAppSelector((state) => state.tintometric);

  if (openedColorGroup === color?.name)
    return (
      <>
        <ColorPickerDesktop color={color} />
        <ColorPickerMobile color={color} />
      </>
    );
  else return null;
};

export default ColorPicker;

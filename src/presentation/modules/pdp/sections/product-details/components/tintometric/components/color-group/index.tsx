import React from 'react';
import { Color, ColorGroupContainer, Footer, ArrowContainer } from './style';
import { CgChevronDown, CgChevronUp } from 'react-icons/cg';
import ColorPicker from '../color-picker';
import { ColorType } from '../../types';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { setOpenedColorGroup } from '@store/tintometric';

type Props = {
  color?: ColorType;
};

const ColorGroup = ({ color }: Props) => {
  const dispatch = useAppDispatch();
  const { openedColorGroup } = useAppSelector((state) => state.tintometric);

  const handleOpen = (colorName: string | undefined) => {
    dispatch(setOpenedColorGroup(colorName));
  };

  if (color && color?.mainColor)
    return (
      <div>
        <ColorGroupContainer
          className="color-group-container"
          $isOpen={openedColorGroup === color?.name}
          onClick={() => handleOpen(color?.name)}
        >
          <Color $backgroundColor={color?.mainColor}></Color>
          <Footer $isOpen={openedColorGroup === color?.name}>
            <span>{color?.name}</span>
            <ArrowContainer>
              {openedColorGroup === color?.name ? (
                <CgChevronUp size={20} />
              ) : (
                <CgChevronDown size={20} />
              )}
            </ArrowContainer>
          </Footer>
        </ColorGroupContainer>
        <ColorPicker color={color} />
      </div>
    );

  return null;
};

export default ColorGroup;

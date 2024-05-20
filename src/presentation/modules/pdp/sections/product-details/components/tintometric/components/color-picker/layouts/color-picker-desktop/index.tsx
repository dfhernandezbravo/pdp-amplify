import React from 'react';
import {
  Color,
  ColorContainer,
  ColorName,
  ColorsContainer,
  Header,
  Title,
  ToolTipContainer,
} from './style';
import Desktop from '@components/Desktop';
import { GrClose } from 'react-icons/gr';
import { useAppDispatch, useAppSelector } from '@hooks/store-hooks';
import { setOpenedColorGroup, setSelectedColor } from '@store/tintometric';
import { ColorType } from '../../../../types';

type Props = {
  color?: ColorType;
};

const ColorPickerDesktop = ({ color }: Props) => {
  const { openedColorGroup } = useAppSelector((state) => state.tintometric);
  const dispatch = useAppDispatch();

  const handleColorSelection = (selectedColor: {
    codeName: string;
    name: string;
    hexCode: string;
  }) => {
    dispatch(setSelectedColor(selectedColor));
    dispatch(setOpenedColorGroup(''));
  };

  return (
    <Desktop>
      <ToolTipContainer
        onClick={(e) => e.stopPropagation()}
        $isOpen={openedColorGroup === color?.name}
      >
        <Header>
          <Title>Colores disponibles</Title>
          <GrClose
            cursor={'pointer'}
            onClick={() => dispatch(setOpenedColorGroup(''))}
            size={20}
          />
        </Header>
        <ColorsContainer>
          {color?.availableColors?.map((color) => (
            <ColorContainer
              onClick={() => handleColorSelection(color)}
              key={color?.codeName}
            >
              <Color $backgroundColor={color?.hexCode}></Color>
              <ColorName className="color-name">{color?.codeName}</ColorName>
            </ColorContainer>
          ))}
        </ColorsContainer>
      </ToolTipContainer>
    </Desktop>
  );
};

export default ColorPickerDesktop;

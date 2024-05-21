import Mobile from '@components/Mobile';
import React, { useEffect } from 'react';
import { ColorType } from '../../../../types';
import {
  BlockScroll,
  ToolTipContainer,
  Header,
  ColorsContainer,
  Color,
  ColorContainer,
  Title,
} from './style';
import { useAppDispatch, useAppSelector } from '@hooks/store-hooks';
import { GrClose } from 'react-icons/gr';
import { setOpenedColorGroup, setSelectedColor } from '@store/tintometric';
import SelectedColor from '../../../selected-color';
import QuantityInput from '@modules/pdp/sections/product-details/components/quantity-input';

type Props = {
  color?: ColorType;
};

const ColorPickerMobile = ({ color }: Props) => {
  const { selectedColor, openedColorGroup } = useAppSelector(
    (state) => state.tintometric,
  );
  const dispatch = useAppDispatch();

  const handleColorSelection = (selectedColor: {
    codeName: string;
    name: string;
    hexCode: string;
  }) => {
    dispatch(setSelectedColor(selectedColor));
  };

  const selectedColorFromSameGroup = () => {
    return color?.availableColors?.filter(
      (color) => color.codeName === selectedColor?.codeName,
    ).length;
  };

  useEffect(() => {
    (!selectedColor || !selectedColorFromSameGroup()) &&
      color?.availableColors?.[0] &&
      handleColorSelection(color?.availableColors?.[0]);
  }, []);

  return (
    <Mobile>
      <BlockScroll $isOpen={openedColorGroup === color?.name} />
      <ToolTipContainer onClick={(e) => e.stopPropagation()}>
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
              <Color
                $backgroundColor={color?.hexCode}
                selected={color?.codeName === selectedColor?.codeName}
              ></Color>
            </ColorContainer>
          ))}
        </ColorsContainer>
        <SelectedColor />
        <QuantityInput />
      </ToolTipContainer>
    </Mobile>
  );
};

export default ColorPickerMobile;

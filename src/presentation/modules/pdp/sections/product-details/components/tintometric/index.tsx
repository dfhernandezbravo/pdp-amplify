import { useAppSelector } from '@hooks/storeHooks';
import React from 'react';
import { ColorsContainer, Title } from './style';
import ColorGroup from './components/color-group/index';
import SelectedColor from './components/selected-color';

const Tintometric = () => {
  const { product } = useAppSelector((state) => state.product);
  const colorCodes = product?.colorCodes;
  const colorPalettes = product?.colorPalettes;

  if (!colorCodes || colorCodes.length === 0 || !colorPalettes) return null;

  const getColor = (color: string) => {
    const colorData = colorPalettes?.find((c) => c?.name === color);

    const filteredCodes = colorData?.code.filter((item) => {
      const findColor = colorCodes?.find((c) => c?.color === color);
      return findColor?.value.includes(item.codeName);
    });
    const filteredColors = {
      ...colorData,
      availableColors: filteredCodes,
    };
    delete filteredColors.code;

    return filteredColors;
  };

  return (
    <>
      <Title>Grupos de color:</Title>
      <ColorsContainer>
        {colorCodes.map((color) => (
          <ColorGroup color={getColor(color.color)} key={color.color} />
        ))}
      </ColorsContainer>
      <SelectedColor />
    </>
  );
};

export default Tintometric;

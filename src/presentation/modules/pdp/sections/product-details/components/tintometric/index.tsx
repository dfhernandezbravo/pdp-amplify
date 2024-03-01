import { useAppSelector } from '@hooks/storeHooks';
import React from 'react';
import { ColorsContainer, Title } from './style';
import colorsData from './colors.json';
import ColorGroup from './components/color-group/index';
import SelectedColor from './components/selected-color';

const Tintometric = () => {
  const { product } = useAppSelector((state) => state.product);
  const colorCodes = product?.colorCodes;
  if (!colorCodes) return null;

  const getColor = (color: string) => {
    const colorData = colorsData?.find((c) => c?.name === color);

    const filteredCodes = colorData?.code.filter((item) => {
      return colorCodes?.[color]?.[0].includes(item.codeName);
    });
    const filteredColors = {
      ...colorData,
      availableColors: filteredCodes,
    };
    delete filteredColors.code;

    return filteredColors;
  };

  return (
    <div>
      <Title>Grupos de colores:</Title>
      <ColorsContainer>
        {Object.keys(colorCodes).map((color) => (
          <ColorGroup color={getColor(color)} key={color} />
        ))}
      </ColorsContainer>
      <SelectedColor />
    </div>
  );
};

export default Tintometric;

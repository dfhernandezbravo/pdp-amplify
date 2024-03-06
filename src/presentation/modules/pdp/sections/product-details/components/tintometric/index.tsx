import { useAppSelector } from '@hooks/storeHooks';
import React from 'react';
import { ColorsContainer, Title } from './style';
import ColorGroup from './components/color-group/index';
import SelectedColor from './components/selected-color';

const Tintometric = () => {
  const { product } = useAppSelector((state) => state.product);
  const colorCodes = product?.colorCodes;
  const colorPalettes = product?.colorPalettes;

  if (!colorCodes || !colorPalettes) return null;

  const getColor = (color: string) => {
    const colorData = colorPalettes?.find((c) => c?.name === color);

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
    <>
      <Title>Grupos de color:</Title>
      <ColorsContainer>
        {Object.keys(colorCodes).map((color) => (
          <ColorGroup color={getColor(color)} key={color} />
        ))}
      </ColorsContainer>
      <SelectedColor />
    </>
  );
};

export default Tintometric;

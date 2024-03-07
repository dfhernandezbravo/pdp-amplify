import React from 'react';
import {
  Color,
  ColorCode,
  ColorName,
  SelectedColorContainer,
  Title,
  Container,
} from './style';
import { useAppSelector } from '@hooks/storeHooks';

const SelectedColor = () => {
  const { selectedColor } = useAppSelector((state) => state.tintometric);

  const capitalizeFirstLetter = (text: string) => {
    let words = text.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] =
        words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join(' ');
  };

  if (!selectedColor) return null;

  return (
    <Container>
      <Title>Color selecionado:</Title>
      <SelectedColorContainer>
        <Color $backgroundColor={selectedColor?.hexCode}></Color>
        <ColorName>{capitalizeFirstLetter(selectedColor?.name)}</ColorName>
        <ColorCode>{selectedColor?.codeName}</ColorCode>
      </SelectedColorContainer>
    </Container>
  );
};

export default SelectedColor;

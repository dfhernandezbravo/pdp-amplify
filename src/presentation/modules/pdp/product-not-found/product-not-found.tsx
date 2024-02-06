import React from 'react';
import {
  Container,
  Main,
  StoreLink,
  Title,
  Subtitle,
  TextContainer,
} from './style';

const ProductNotFound = () => {
  return (
    <Container>
      <Main>
        <TextContainer>
          <Title>Lo sentimos, hemos reorganizado los productos</Title>
          <Subtitle>
            Parece que lo que estás buscando terminó en otro lugar.
          </Subtitle>
          <StoreLink href="/">Volver al inicio</StoreLink>
        </TextContainer>
      </Main>
    </Container>
  );
};

export default ProductNotFound;

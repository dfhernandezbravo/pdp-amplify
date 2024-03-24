import { useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  Container,
  Main,
  StoreLink,
  Title,
  Subtitle,
  TextContainer,
} from './style';
import customEvents from '@use-cases/observability/custom-events';

const ProductNotFound = () => {
  const { asPath } = useRouter();

  useEffect(() => {
    customEvents({
      eventName: 'page-not-found',
      data: {
        url: asPath,
        type: 'pdp',
      },
    });
  }, []);
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

import { useAppSelector } from '@hooks/storeHooks';
import { Brand, Container, ProductId, Title } from './style';
import Price from './components/prices';

const ProductDetails = () => {
  const { product } = useAppSelector((state) => state.product);

  return (
    <Container>
      <Brand>{product?.brand}</Brand>
      <Title>{product?.items?.[0].name}</Title>
      <ProductId>
        Código del producto: {product?.items?.[0]?.referenceId?.[0]?.Value}
      </ProductId>
      <Price />
    </Container>
  );
};

export default ProductDetails;

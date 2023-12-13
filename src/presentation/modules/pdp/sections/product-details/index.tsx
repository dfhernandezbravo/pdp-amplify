import dynamic from 'next/dynamic';
import { useAppSelector } from '@hooks/storeHooks';
import {
  Brand,
  Container,
  ProductId,
  Separator,
  Subtitle,
  Title,
} from './style';
import Price from './components/prices';
import ProductSpecifications from './components/product-specifications';
import Image from 'next/image';
import ExchangesConditions from './components/exchanges-conditions';
import Actions from './components/actions';
import AverageRateSkeleton from '@components/molecules/skeleton/ratings-and-reviews/AverageRateSkeleton';

const RatingAverage = dynamic(() => import('ratingsAndReviews/averageEvent'), {
  ssr: false,
  loading: () => <AverageRateSkeleton />,
});

const ProductDetails = () => {
  const { product } = useAppSelector((state) => state.product);

  return (
    <Container>
      <Brand>{product?.brand}</Brand>
      <Title>{product?.productName}</Title>
      <ProductId>
        Código del producto: {product?.items?.[0]?.referenceId?.[0]?.Value}
      </ProductId>
      <RatingAverage />
      <Price />
      {product?.specifications && (
        <ProductSpecifications items={product?.specifications} />
      )}
      <Actions />
      <Separator />
      <Subtitle>Medios de pago disponibles: </Subtitle>
      <Image
        alt="Medios de pagos"
        src="https://easyclqa.vtexassets.com/arquivos/payment-methods.png"
        width={430}
        height={43}
      />
      <Separator />
      <ExchangesConditions />
    </Container>
  );
};

export default ProductDetails;

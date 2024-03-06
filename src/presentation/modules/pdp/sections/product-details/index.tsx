// import dynamic from 'next/dynamic';
import { useAppSelector } from '@hooks/storeHooks';
import { Brand, Container, ProductId, Separator, Title } from './style';
import Price from './components/prices';
import ProductSpecifications from './components/product-specifications';
import ExchangesConditions from './components/exchanges-conditions';
import Actions from './components/actions';
import AddService from './components/add-service';
import Variants from './components/variants';
import Tintometric from './components/tintometric';

// const RatingAverage = dynamic(() => import('ratingsAndReviews/averageEvent'), {
//   ssr: false,
//   loading: () => <></>,
// });

const ProductDetails = () => {
  const { product } = useAppSelector((state) => state.product);
  const brand = product?.brand;
  const refId = product?.items?.[0]?.referenceId?.[0]?.Value;

  return (
    <Container>
      <Brand href={`/search/${brand}?filter=brand/${brand}&page=1`}>
        {brand}
      </Brand>
      <Title>{product?.productName}</Title>
      <ProductId>Código del producto: {refId}</ProductId>
      {/* <RatingAverage /> */}
      <Price />
      <ProductSpecifications />
      <Variants />
      <Tintometric />
      <Actions />
      <AddService />
      <Separator />
      <ExchangesConditions />
    </Container>
  );
};

export default ProductDetails;

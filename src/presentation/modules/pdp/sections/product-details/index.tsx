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
import FloorCalculator from './components/calculator/floor-calculator';
import PaintCalculator from './components/calculator/paint-calculator';

// const RatingAverage = dynamic(() => import('ratingsAndReviews/averageEvent'), {
//   ssr: false,
//   loading: () => <></>,
// });

const ProductDetails = () => {
  const { product } = useAppSelector((state) => state.product);
  const brand = product?.brand;
  const refId = product?.items?.[0]?.referenceId?.[0]?.Value;
  const showFloorCalculator =
    product?.specifications?.['Rendimiento'] &&
    product?.specifications?.['PrecioM2']?.[0] === 'Visible';
  const showPaintCalculator =
    [
      'Esmalte al agua',
      'Pinturas Látex',
      'Esmalte sintético y óleos',
    ].findIndex((c) => product?.categories?.[0].includes(c)) !== -1;

  return (
    <Container>
      <Brand
        data-id="product-brand"
        href={`/search/${brand}?filter=brand/${brand}&page=1`}
      >
        {brand}
      </Brand>
      <Title data-id="product-name">{product?.productName}</Title>
      <ProductId>Código del producto: {refId}</ProductId>
      <Price />
      <ProductSpecifications />
      <Variants />
      <Tintometric />
      {showFloorCalculator && <FloorCalculator />}
      {showPaintCalculator && <PaintCalculator />}
      <Actions />
      <AddService />
      <Separator />
      <ExchangesConditions />
    </Container>
  );
};

export default ProductDetails;

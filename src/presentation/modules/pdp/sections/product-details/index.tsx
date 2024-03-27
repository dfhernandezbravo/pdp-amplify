import { useAppSelector } from '@hooks/storeHooks';
import { Brand, Container, ProductId, Separator, Title } from './style';
import Price from './components/prices';
import ProductSpecifications from './components/product-specifications';
import ExchangesConditions from './components/exchanges-conditions';
import Actions from './components/actions';
import AddService from './components/add-service';
import Variants from './components/variants';
import Tintometric from './components/tintometric';
import FloorCalculator from './components/floor-calculator';
import LogiscticsRibbons from './components/logistic-ribbons';
import PromotionsRibbons from './components/promotions-ribbons';

const ProductDetails = () => {
  const { product } = useAppSelector((state) => state.product);
  const brand = product?.brand;
  const refId = product?.items?.[0]?.referenceId?.[0]?.Value;
  const showCalculator =
    product?.specifications?.['Rendimiento'] &&
    product?.specifications?.['PrecioM2']?.[0] === 'Visible';

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
      <PromotionsRibbons />
      <Price />
      <LogiscticsRibbons />
      <ProductSpecifications />
      <Variants />
      <Tintometric />
      {showCalculator && <FloorCalculator />}
      <Actions />
      <AddService />
      <Separator />
      <ExchangesConditions />
    </Container>
  );
};

export default ProductDetails;

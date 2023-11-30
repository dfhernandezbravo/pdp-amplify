import { useQuery } from 'react-query';
import { useAppDispatch } from '@hooks/storeHooks';
import getProduct from '@use-cases/product/get-product';
import { useEffect } from 'react';
import { setProduct } from '@store/product';
import ImageGallery from './sections/image-gallery';
import {
  DetailsContainer,
  ImagesContainer,
  Main,
  Section,
  Separator,
} from './style';
import ProductDetails from './sections/product-details';
import { PdpProps } from './types';
import SpecificationsTables from './sections/specifications-tables';
import EmotionalDescription from './sections/emotional-description';
import PdpBreadcrumbs from './components/breadcrumbs';

const PdpContainer = ({ productId }: PdpProps) => {
  const dispatch = useAppDispatch();
  const { data } = useQuery(
    ['get-product', productId],
    () => {
      if (productId) return getProduct(productId);
    },
    { enabled: Boolean(productId) },
  );

  useEffect(() => {
    if (data) dispatch(setProduct(data));
  }, [data, dispatch]);

  return (
    <Main>
      <PdpBreadcrumbs />
      <Section>
        <ImagesContainer>
          <ImageGallery />
        </ImagesContainer>
        <Separator />
        <DetailsContainer>
          <ProductDetails />
        </DetailsContainer>
      </Section>
      <EmotionalDescription />
      <Section id="specifications">
        <SpecificationsTables />
      </Section>
    </Main>
  );
};

export default PdpContainer;

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
  ProductDetailsSection,
  Separator,
} from './style';
import ProductDetails from './sections/product-details';
import { PdpProps } from './types';

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
      <ProductDetailsSection>
        <ImagesContainer>
          <ImageGallery />
        </ImagesContainer>
        <Separator />
        <DetailsContainer>
          <ProductDetails />
        </DetailsContainer>
      </ProductDetailsSection>
    </Main>
  );
};

export default PdpContainer;

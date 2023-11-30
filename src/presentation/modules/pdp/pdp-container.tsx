import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import dynamic from 'next/dynamic';
import { useAppDispatch } from '@hooks/storeHooks';
import getProduct from '@use-cases/product/get-product';
import { setProduct } from '@store/product';
import ImageGallery from './sections/image-gallery';
import ProductDetails from './sections/product-details';
import { PdpProps } from './types';
import {
  DetailsContainer,
  ImagesContainer,
  Main,
  ProductDetailsSection,
  Separator,
} from './style';

const RatingAndReview = dynamic(() => import('ratingsAndReviews/index'), {
  ssr: false,
  loading: () => <>loading...</>,
});

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
      <RatingAndReview />
    </Main>
  );
};

export default PdpContainer;

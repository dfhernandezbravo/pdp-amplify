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
  ReviewContainer,
  Section,
  Separator,
} from './style';
import PdpBreadcrumbs from './components/breadcrumbs';
import EmotionalDescription from './sections/emotional-description';
import SpecificationsTables from './sections/specifications-tables';

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
      <ReviewContainer>
        <RatingAndReview />
      </ReviewContainer>
    </Main>
  );
};

export default PdpContainer;

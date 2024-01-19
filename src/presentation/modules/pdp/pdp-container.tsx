import React, { useEffect } from 'react';
// import dynamic from 'next/dynamic';
import { useAppDispatch } from '@hooks/storeHooks';
import { useRouter } from 'next/router';
import { setProduct } from '@store/product';
import ImageGallery from './sections/image-gallery';
import ProductDetails from './sections/product-details';
import {
  DetailsContainer,
  ImagesContainer,
  Main,
  // ReviewContainer,
  Section,
  Separator,
} from './style';
import PdpBreadcrumbs from './components/breadcrumbs';
import EmotionalDescription from './sections/emotional-description';
import SpecificationsTables from './sections/specifications-tables';
// import { RatingsProps } from '@entities/ratings-and-reviews/ratings-and-reviews.type';
import { GetProduct } from '@entities/product/get-product.response';
// import FirstLoadSkeleton from '@components/molecules/skeleton/ratings-and-reviews/FirstLoadSkeleton';
import CartEventProvider from '../../providers/cart-event-provider';
import Head from 'next/head';
import { setImages } from '@store/gallery';
// import dynamic from 'next/dynamic';

// const RatingAndReview = dynamic<RatingsProps>(
//   () => import('ratingsAndReviews/index'),
//   {
//     ssr: false,
//     loading: () => <FirstLoadSkeleton />,
//   },
// );

const PdpContainer = (productData: GetProduct) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const setDefaultImages = () => {
    const skuId = router.query.skuId as string;
    if (skuId) {
      const item = productData?.items?.find((item) => item.itemId === skuId);
      dispatch(setImages(item?.images));
    } else dispatch(setImages(productData?.items?.[0]?.images));
  };

  useEffect(() => {
    if (productData) {
      dispatch(setProduct(productData));
      setDefaultImages();
    }
  }, [productData, dispatch]);

  return (
    <CartEventProvider>
      <Head>
        <title>
          {productData?.metaTagDescription
            ? `${productData?.metaTagDescription} | Easy.cl - Easy`
            : 'Easy.cl'}
        </title>
      </Head>
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
        {/* <ReviewContainer>
          {product && <RatingAndReview productInfo={product} />}
        </ReviewContainer> */}
      </Main>
    </CartEventProvider>
  );
};

export default PdpContainer;

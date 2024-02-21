import React, { useEffect } from 'react';
// import dynamic from 'next/dynamic';
import { useAppDispatch } from '@hooks/storeHooks';
import { setProduct, setSelectedVariant } from '@store/product';
import { setImages } from '@store/gallery';
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
import useDefaultVariant from '@hooks/useDefaultVariant';
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
  const defaultVariant = useDefaultVariant(productData?.items);

  const getCategorie = (categories: string[]) => {
    const categoriesArray = categories?.[0].split('/');
    return categoriesArray?.[categoriesArray.length - 2];
  };

  useEffect(() => {
    if (productData) {
      dispatch(setProduct(productData));
      dispatch(setSelectedVariant(defaultVariant));
      dispatch(setImages(defaultVariant?.images));
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
        <meta
          name="description"
          content={`Compra ${productData?.productName} y renueva tu hogar. En Easy.cl encontrarás todo en ${getCategorie(
            productData?.categories,
          )} para renovar el amor por tu hogar.`}
          data-react-helmet="true"
        ></meta>
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

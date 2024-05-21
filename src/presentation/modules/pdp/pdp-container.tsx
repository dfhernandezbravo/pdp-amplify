import ImageGallery from './sections/image-gallery';
import ProductDetails from './sections/product-details';
import {
  DetailsContainer,
  ImagesContainer,
  Main,
  Section,
  Separator,
} from './style';
import PdpBreadcrumbs from './components/breadcrumbs';
import EmotionalDescription from './sections/emotional-description';
import SpecificationsTables from './sections/specifications-tables';
import CartEventProvider from '../../providers/cart-event-provider';
import Head from 'next/head';
import useDefaultVariant from '@hooks/use-default-variant';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/store-hooks';
import { setSelectedVariant } from '@store/product';
import { setImages } from '@store/gallery';

const PdpContainer = ({ productId }: { productId: number }) => {
  const { product } = useAppSelector((state) => state.product);
  const defaultVariant = useDefaultVariant(product?.items);
  const dispatch = useAppDispatch();

  const getCategories = (categories?: string[]) => {
    if (!categories) return 'productos';
    const categoriesArray = categories?.[0].split('/');
    return categoriesArray?.[categoriesArray.length - 2];
  };

  useEffect(() => {
    if (product) {
      dispatch(setSelectedVariant(defaultVariant));
      dispatch(setImages(defaultVariant?.images));
    }
  }, [product, dispatch]);

  return (
    <CartEventProvider>
      <Head>
        <title>
          {product?.metaTagDescription
            ? `${product?.metaTagDescription} | Easy.cl - Easy`
            : 'Easy.cl'}
        </title>
        <meta
          name="description"
          content={`Compra ${product?.productName} y renueva tu hogar. En Easy.cl encontrarás todo en ${getCategories(
            product?.categories,
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
      </Main>
    </CartEventProvider>
  );
};

export default PdpContainer;

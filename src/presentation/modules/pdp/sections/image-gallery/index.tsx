import { useEffect, useState } from 'react';
import { useAppSelector } from '@hooks/storeHooks';
import { ProductImage } from '@entities/product-image';
import { ImageGalleryContainer, SwiperContainer } from './style';
import Thumbnails from './components/thumbnails';
import SwiperEasy from '@components/molecules/swiper';
import Image from 'next/image';
import { SwiperClass } from 'swiper/react';
import Desktop from '@components/Desktop';
import useBreakpoints from '@hooks/useBreakpoints';

const ImageGallery = () => {
  const [images, setImages] = useState<ProductImage[]>();
  const { product } = useAppSelector((state) => state.product);
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  const { isXs, isSm } = useBreakpoints();

  useEffect(() => {
    setIsMobile(isSm ?? isXs);
  }, [isXs, isSm]);

  useEffect(() => {
    setImages(product?.items?.[0].images);
  }, [product]);

  const renderItem = (item: ProductImage, index: number) => {
    return (
      <Image
        src={item?.imageUrl}
        alt={item?.imageText ?? `product image ${index}`}
        width={414}
        height={331}
      />
    );
  };

  const slideTo = (index: number) => swiper?.slideTo(index);

  useEffect(() => {
    swiper?.on('slideChange', (swipe) => {
      setActiveIndex(swipe?.activeIndex);
    });
  }, [swiper]);

  if (images)
    return (
      <ImageGalleryContainer>
        <Desktop>
          <Thumbnails
            images={images}
            activeIndex={activeIndex}
            slideTo={slideTo}
          />
        </Desktop>
        <SwiperContainer>
          <SwiperEasy
            hasPagination={isMobile}
            swiper={swiper}
            setSwiper={setSwiper}
            items={images}
            renderItem={renderItem}
            slidesPerGroup={1}
            slidesPerView={1}
          />
        </SwiperContainer>
        {/* <ZoomLabel/> */}
      </ImageGalleryContainer>
    );

  return null;
};

export default ImageGallery;

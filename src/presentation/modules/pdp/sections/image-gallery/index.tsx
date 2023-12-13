import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { ProductImage } from '@entities/product-image';
import { ImageGalleryContainer, SwiperContainer, ZoomLabel } from './style';
import Thumbnails from './components/thumbnails';
import SwiperEasy from '@components/molecules/swiper';
import Image from 'next/image';
import Desktop from '@components/Desktop';
import useBreakpoints from '@hooks/useBreakpoints';
import { FaMagnifyingGlassPlus } from 'react-icons/fa6';
import { Skeleton } from '@cencosud-ds/easy-design-system';
import ZoomModal from './components/zoom-modal';
import { setActiveIndex, setOpenZoomModal } from '@store/gallery';
import { SwiperClass } from 'swiper/react';

const ImageGallery = () => {
  const { images, openZoomModal, zoomModalIndex } = useAppSelector(
    (state) => state.gallery,
  );
  const dispatch = useAppDispatch();
  const [isMobile, setIsMobile] = useState(false);
  const [loadingMainImage, setLoadingMainImage] = useState(false);
  const [swiper, setSwiper] = useState<SwiperClass>();

  const { isXs, isSm } = useBreakpoints();

  useEffect(() => {
    if (isSm || isXs) setIsMobile(true);
    else setIsMobile(false);
  }, [isXs, isSm]);

  const renderItem = (item: ProductImage, index: number) => {
    return loadingMainImage ? (
      <Skeleton animation={'wave'} height={'331px'} width={'414px'} />
    ) : (
      <Image
        src={item?.imageUrl}
        alt={item?.imageText ?? `product image ${index}`}
        width={414}
        height={331}
        onClick={() => dispatch(setOpenZoomModal(true))}
        onLoad={() => setLoadingMainImage(false)}
        priority
      />
    );
  };

  useEffect(() => {
    swiper?.on('slideChange', (swipe) => {
      dispatch(setActiveIndex(swipe?.activeIndex));
    });
  }, [swiper]);

  useEffect(() => {
    if (!openZoomModal) {
      swiper?.slideTo(zoomModalIndex, 400);
      dispatch(setActiveIndex(zoomModalIndex));
    }
  }, [openZoomModal]);

  if (images)
    return (
      <ImageGalleryContainer>
        <Desktop>
          <Thumbnails swiper={swiper} />
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
          {!isMobile && (
            <ZoomLabel>
              Presiona para hacer zoom
              <FaMagnifyingGlassPlus size="16px" />
            </ZoomLabel>
          )}
        </SwiperContainer>
        <ZoomModal />
      </ImageGalleryContainer>
    );
  else return <></>;
};

export default ImageGallery;

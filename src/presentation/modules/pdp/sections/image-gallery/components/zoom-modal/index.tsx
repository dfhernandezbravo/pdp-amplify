import Modal from '@components/molecules/modal';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Skeleton } from '@cencosud-ds/easy-design-system';
import { ProductImage } from '@entities/product-image';
import { Container, SwiperContainer, ThumbnailsContainer } from './style';
import SwiperEasy from '@components/molecules/swiper';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { setOpenZoomModal, setZoomModalIndex } from '@store/gallery';
import ThumbnailsCarousel from './components/thumbnails-carousel';
import { SwiperClass } from 'swiper/react';

const ZoomModal = () => {
  const dispatch = useAppDispatch();
  const { product } = useAppSelector((state) => state.product);
  const { activeIndex, zoomModalIndex, images, openZoomModal } = useAppSelector(
    (state) => state.gallery,
  );
  const [loadingMainImage, setLoadingMainImage] = useState(false);
  const [swiper, setSwiper] = useState<SwiperClass>();

  useEffect(() => {
    swiper?.on('slideChange', (swipe) => {
      dispatch(setZoomModalIndex(swipe?.activeIndex));
    });
  }, [swiper]);

  useEffect(() => {
    if (activeIndex) {
      swiper?.slideTo(activeIndex, 400);
      dispatch(setZoomModalIndex(activeIndex));
    }
  }, [activeIndex]);

  const renderItem = (item: ProductImage, index: number) => {
    return loadingMainImage ? (
      <Skeleton animation={'wave'} height={'331px'} width={'414px'} />
    ) : (
      <Image
        src={item?.imageUrl}
        alt={item?.imageText ?? `product image`}
        width={414}
        height={331}
        onLoad={() => setLoadingMainImage(false)}
        priority
      />
    );
  };

  if (images)
    return (
      <Modal
        open={openZoomModal}
        setOpen={(open) => dispatch(setOpenZoomModal(open))}
        title={product?.productName}
        icon={{ onClick: () => dispatch(setOpenZoomModal(false)) }}
      >
        <Container>
          <ThumbnailsContainer>
            <ThumbnailsCarousel index={zoomModalIndex} swiper={swiper} />
          </ThumbnailsContainer>
          <SwiperContainer>
            <SwiperEasy
              initialSlide={activeIndex}
              setSwiper={setSwiper}
              swiper={swiper}
              items={images}
              renderItem={renderItem}
              slidesPerGroup={1}
              slidesPerView={1}
            />
          </SwiperContainer>
        </Container>
      </Modal>
    );
  else return null;
};

export default ZoomModal;

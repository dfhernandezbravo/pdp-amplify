import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/store-hooks';
import {
  ImageGalleryContainer,
  ItemContainer,
  SwiperContainer,
  ZoomLabel,
} from './style';
import Thumbnails from './components/thumbnails';
import Image from 'next/image';
import Desktop from '@components/Desktop';
import useBreakpoints from '@hooks/useBreakpoints';
import { FaMagnifyingGlassPlus } from 'react-icons/fa6';
import ZoomModal from './components/zoom-modal';
import {
  setActiveIndex,
  setOpenZoomModal,
  setZoomModalIndex,
} from '@store/gallery';
import dynamic from 'next/dynamic';
import { ProductImage } from '@entities/product-image';

const Skeleton = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.skeleton').then(
      (module) => module.Skeleton,
    ),
  { ssr: false },
);

const Swiper = dynamic(
  () =>
    import('@ccom-easy-design-system/molecules.swiper').then(
      (module) => module.Swiper,
    ),
  { ssr: false, loading: () => <Skeleton /> },
);

const ImageGallery = () => {
  const { images, openZoomModal, zoomModalIndex, activeIndex } = useAppSelector(
    (state) => state.gallery,
  );
  const dispatch = useAppDispatch();
  const [isMobile, setIsMobile] = useState(false);

  const { device } = useBreakpoints();

  useEffect(() => {
    setIsMobile(device !== 'Desktop');
  }, [device]);

  const renderItem = (item: unknown, index: number) => {
    const productImage = item as ProductImage;
    return (
      <ItemContainer>
        <Image
          data-id="product-image"
          src={productImage?.imageUrl}
          alt={productImage?.imageText ?? `product image ${index}`}
          width={500}
          height={500}
          onClick={() => dispatch(setOpenZoomModal(true))}
          priority={index === 0 ? true : false}
          className="swiper-lazy"
        />
        <div className="swiper-lazy-preloader"></div>
      </ItemContainer>
    );
  };

  const changeIndex = (index: number) => {
    dispatch(setActiveIndex(index));
    dispatch(setZoomModalIndex(index));
  };

  useEffect(() => {
    if (!openZoomModal) {
      dispatch(setActiveIndex(zoomModalIndex));
    }
  }, [openZoomModal]);

  const [, forceUpdate] = useState<number>(0);

  useEffect(() => {
    forceUpdate((prev) => prev + 1);
  }, [isMobile]);

  if (images)
    return (
      <ImageGalleryContainer>
        <Desktop>
          <Thumbnails />
        </Desktop>
        <SwiperContainer>
          <Swiper
            key={isMobile ? 'mobile' : 'desktop'}
            hasPagination={isMobile}
            items={images}
            renderItem={renderItem}
            slidesPerGroup={1}
            slidesPerView={1}
            onChangeIndex={(index: number) => changeIndex(index)}
            activeIndex={activeIndex}
          />
          <Desktop>
            <ZoomLabel>
              Presiona para hacer zoom
              <FaMagnifyingGlassPlus size="16px" />
            </ZoomLabel>
          </Desktop>
        </SwiperContainer>
        <ZoomModal />
      </ImageGalleryContainer>
    );
  else return <></>;
};

export default ImageGallery;

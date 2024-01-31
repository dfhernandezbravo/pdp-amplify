import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { ProductImage } from '@entities/product-image';
import {
  ImageGalleryContainer,
  ItemContainer,
  SkeletonContainer,
  SwiperContainer,
  ZoomLabel,
} from './style';
import Thumbnails from './components/thumbnails';
import SwiperEasy from '@components/molecules/swiper';
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

const Skeleton = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.skeleton').then(
      (module) => module.Skeleton,
    ),
  { ssr: false },
);

const ImageGallery = () => {
  const { images, openZoomModal, zoomModalIndex, activeIndex } = useAppSelector(
    (state) => state.gallery,
  );
  const dispatch = useAppDispatch();
  const [isMobile, setIsMobile] = useState(false);
  const [loadingImage, setLoadingImage] = useState(true);

  const { isXs, isSm } = useBreakpoints();

  useEffect(() => {
    if (isSm || isXs) setIsMobile(true);
    else setIsMobile(false);
  }, [isXs, isSm]);

  const renderItem = (item: ProductImage, index: number) => {
    return (
      <ItemContainer>
        {loadingImage && (
          <SkeletonContainer>
            <Skeleton
              animationtype="wave"
              height={isXs || isSm ? '200px' : '500px'}
              width="613px"
            />
          </SkeletonContainer>
        )}
        <Image
          src={item?.imageUrl}
          alt={item?.imageText ?? `product image ${index}`}
          width={828}
          height={613}
          onClick={() => dispatch(setOpenZoomModal(true))}
          onLoad={() => setLoadingImage(false)}
          priority
        />
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

  if (images)
    return (
      <ImageGalleryContainer>
        <Desktop>
          <Thumbnails />
        </Desktop>
        <SwiperContainer $loading={loadingImage}>
          <SwiperEasy
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

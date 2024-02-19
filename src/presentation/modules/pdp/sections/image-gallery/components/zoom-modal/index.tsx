import Modal from '@components/molecules/modal';
import { Container, SwiperContainer, ZoomLabel } from './style';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { setOpenZoomModal, setZoomModalIndex } from '@store/gallery';
import ThumbnailsCarousel from './components/thumbnails-carousel';
import SwiperZoom from '@components/molecules/swiper-zoom';
import Desktop from '@components/Desktop';
import useBreakpoints from '@hooks/useBreakpoints';
import { useEffect, useState } from 'react';
import { FaMagnifyingGlassPlus } from 'react-icons/fa6';
import Mobile from '@components/Mobile';

const ZoomModal = () => {
  const dispatch = useAppDispatch();
  const { product } = useAppSelector((state) => state.product);
  const { activeIndex, zoomModalIndex, images, openZoomModal } = useAppSelector(
    (state) => state.gallery,
  );
  const [isMobile, setIsMobile] = useState(false);

  const { isXs, isSm, isMd } = useBreakpoints();

  useEffect(() => {
    if (isSm || isXs || isMd) setIsMobile(true);
    else setIsMobile(false);
  }, [isXs, isSm, isMd]);

  const changeIndex = (index: number) => {
    dispatch(setZoomModalIndex(index));
  };

  if (images)
    return (
      <Modal
        open={openZoomModal}
        setOpen={(open) => dispatch(setOpenZoomModal(open))}
        brand={product?.brand}
        title={product?.productName}
        icon={{ onClick: () => dispatch(setOpenZoomModal(false)) }}
        style={{ overflowY: 'hidden' }}
      >
        <Container $showThumbnails={images?.length > 1}>
          <Desktop>
            <ThumbnailsCarousel />
          </Desktop>
          <SwiperContainer $showThumbnails={images?.length > 1}>
            <SwiperZoom
              hasPagination={isMobile}
              initialSlide={activeIndex}
              items={images}
              onChangeIndex={(index: number) => changeIndex(index)}
              slidesPerGroup={1}
              slidesPerView={1}
              activeIndex={zoomModalIndex}
              allowTouchMove={isMobile}
            />
            <Mobile>
              <ZoomLabel>
                <span>Desliza los dedos para hacer zoom</span>
                <FaMagnifyingGlassPlus size="16px" />
              </ZoomLabel>
            </Mobile>
          </SwiperContainer>
        </Container>
      </Modal>
    );
  else return null;
};

export default ZoomModal;

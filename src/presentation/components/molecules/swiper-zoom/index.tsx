import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import ArrowButton from './components/arrow-button';
import { SwiperZoomProps } from './props';
import { SwiperComponent, SwiperContainer, SwiperWrapper } from './styles';
import getDisabledArrowButton from './validations/disabled-arrow-button';
import getModules from './validations/get-modules';
import showArrowButtons from './validations/show-arrow-button';
import ImageZoom from './components/image-zoom';

function SwiperZoom({
  items,
  slidesPerGroup,
  slidesPerView,
  hasActionButton = false,
  isPositionAbsoluteButtons = true,
  hasPagination = false,
  isCenteredSlides = false,
  isLoop = false,
  autoPlay = false,
  isGrid = false,
  paginationStyle = 'bullet',
  delay = 4000,
  rowsGrid,
  fillGrid = 'column',
  initialSlide,
  direction = 'horizontal',
  activeIndex,
  allowTouchMove = true,
  onChangeIndex,
}: SwiperZoomProps) {
  const [isEnd, setIsEnd] = useState(false);
  const [isStart, setIsStart] = useState(true);
  const [swiper, setSwiper] = useState<SwiperClass>();

  useEffect(() => {
    if (activeIndex !== undefined) {
      swiper?.slideTo(activeIndex, 400);
    }
  }, [activeIndex]);

  useEffect(() => {
    swiper?.on('slideChange', (swipe) => {
      onChangeIndex?.(swipe?.activeIndex);
    });
  }, [swiper]);

  return (
    <SwiperContainer paginationStyle={paginationStyle}>
      <SwiperComponent direction={direction}>
        {showArrowButtons({
          hasActionButton,
          slidesPerView,
          countItems: items.length,
        }) && (
          <ArrowButton
            position="left"
            isPositionAbsolute={isPositionAbsoluteButtons}
            disabled={getDisabledArrowButton(isLoop, isStart)}
            onClick={() => swiper && swiper.slidePrev()}
          />
        )}
        <SwiperWrapper>
          <Swiper
            initialSlide={initialSlide}
            slidesPerView={slidesPerView}
            slidesPerGroup={slidesPerGroup}
            allowTouchMove={allowTouchMove}
            modules={getModules({ hasPagination, autoPlay, isGrid })}
            pagination={{
              clickable: true,
            }}
            centeredSlides={isCenteredSlides}
            onSwiper={(ev) => {
              setSwiper?.(ev);
            }}
            onSlideChange={(ev) => {
              setIsEnd(ev.isEnd);
              setIsStart(ev.isBeginning);
            }}
            loop={isLoop}
            autoplay={{ delay }}
            grid={{ rows: rowsGrid, fill: fillGrid }}
            direction={direction}
          >
            {items.map((item, index) => (
              <SwiperSlide key={`swiper-zoom-slide-${index}`}>
                <ImageZoom
                  image={item}
                  activeIndex={activeIndex}
                  selected={index === activeIndex}
                />
              </SwiperSlide>
            ))}
            {hasPagination && (
              <div className="swiper-pagination-bullet custom-pagination-container" />
            )}
          </Swiper>
        </SwiperWrapper>

        {showArrowButtons({
          hasActionButton,
          slidesPerView,
          countItems: items.length,
        }) && (
          <ArrowButton
            position="right"
            isPositionAbsolute={isPositionAbsoluteButtons}
            disabled={getDisabledArrowButton(isLoop, isEnd)}
            onClick={() => swiper && swiper.slideNext()}
          />
        )}
      </SwiperComponent>
    </SwiperContainer>
  );
}

export default SwiperZoom;

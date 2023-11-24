import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowButton from './components/arrow-button';
import { SwiperEasyProps } from './props';
import { SwiperComponent, SwiperContainer, SwiperWrapper } from './styles';
import getDisabledArrowButton from './validations/disabled-arrow-button';
import getModules from './validations/get-modules';
import showArrowButtons from './validations/show-arrow-button';

function SwiperEasy<T>({
  swiper,
  setSwiper,
  items,
  renderItem,
  slidesPerGroup,
  slidesPerView,
  hasActionButton = false,
  isPositionAbsoluteButtons = true,
  hasPagination = false,
  isCenteredSlides = false,
  isLoop = false,
  autoPlay = false,
  paginationStyle = 'bullet',
  delay = 4000,
  rowsGrid,
  fillGrid = 'column',
}: SwiperEasyProps<T>) {
  const [isEnd, setIsEnd] = useState(false);
  const [isStart, setIsStart] = useState(true);

  return (
    <SwiperContainer paginationStyle={paginationStyle}>
      <SwiperComponent>
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
            slidesPerView={slidesPerView}
            slidesPerGroup={slidesPerGroup}
            modules={getModules({ hasPagination, autoPlay })}
            pagination={{
              clickable: true,
            }}
            centeredSlides={isCenteredSlides}
            onSwiper={(ev) => {
              setSwiper(ev);
            }}
            onSlideChange={(ev) => {
              setIsEnd(ev.isEnd);
              setIsStart(ev.isBeginning);
            }}
            loop={isLoop}
            autoplay={{ delay }}
            grid={{ rows: rowsGrid, fill: fillGrid }}
          >
            {items.map((item, index) => (
              <SwiperSlide key={index}>{renderItem(item, index)}</SwiperSlide>
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

export default SwiperEasy;

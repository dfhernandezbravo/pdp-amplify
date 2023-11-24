import { Dispatch, SetStateAction } from 'react';
import { SwiperClass } from 'swiper/react';

export interface SwiperEasyProps<T> {
  swiper: SwiperClass | undefined;
  setSwiper: Dispatch<SetStateAction<SwiperClass | undefined>>;
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  slidesPerView: number;
  slidesPerGroup: number;
  hasActionButton?: boolean;
  isPositionAbsoluteButtons?: boolean;
  hasPagination?: boolean;
  isCenteredSlides?: boolean;
  isLoop?: boolean;
  autoPlay?: boolean;
  paginationStyle?: 'bullet' | 'dot';
  delay?: number;
  isGrid?: boolean;
  rowsGrid?: number;
  fillGrid?: 'column' | 'row';
}

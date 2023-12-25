import { ProductImage } from '@entities/product-image';

export interface SwiperZoomProps {
  items: ProductImage[];
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
  initialSlide?: number;
  direction?: 'horizontal' | 'vertical';
  onChangeIndex?: (index: number) => void;
  activeIndex?: number;
  allowTouchMove?: boolean;
}

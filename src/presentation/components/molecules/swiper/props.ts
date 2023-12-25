import { ProductImage } from '@entities/product-image';

export interface SwiperEasyProps {
  items: ProductImage[];
  renderItem: (item: ProductImage, index: number) => React.ReactNode;
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
  activeIndex: number;
  onChangeIndex?: (index: number) => void;
}

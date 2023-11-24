import { ProductImage } from '@entities/product-image';

export interface ThumbnailsProps {
  images: ProductImage[];
  activeIndex?: number;
  slideTo: (index: number) => void;
}

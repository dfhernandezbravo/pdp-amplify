import { ProductImage } from '@entities/product-image';
import Mobile from '@components/Mobile';
import Desktop from '@components/Desktop';
import MobileZoom from './components/mobile-zoom';
import DesktopZoom from './components/desktop-zoom';

type Props = {
  image: ProductImage;
  activeIndex?: number;
  selected: boolean;
};

const ImageZoom = ({ image, activeIndex, selected }: Props) => {
  return (
    <>
      <Desktop>
        <DesktopZoom
          imageSrc={image?.imageUrl}
          altText={image?.imageText}
          selected={selected}
          activeIndex={activeIndex}
        />
      </Desktop>
      <Mobile>
        <MobileZoom
          imageSrc={image?.imageUrl}
          altText={image?.imageText}
          activeIndex={activeIndex}
        />
      </Mobile>
    </>
  );
};

export default ImageZoom;

import React from 'react';
import { ThumbnailsProps } from './types';
import { Rest, ThumbnailContainer, ThumbnailsContainer } from './style';
import Image from 'next/image';

const Thumbnails = ({ images, activeIndex, slideTo }: ThumbnailsProps) => {
  return (
    <ThumbnailsContainer>
      {images?.map((item, i) =>
        i < 5 ? (
          <ThumbnailContainer
            onClick={() => slideTo(i)}
            selected={activeIndex === i}
            key={item?.imageUrl}
          >
            <Image
              src={item?.imageUrl}
              alt={item?.imageText ?? `product image ${i}`}
              width={79}
              height={79}
            />
          </ThumbnailContainer>
        ) : null,
      )}
      {images?.length > 5 && <Rest>+{images.length - 5}</Rest>}
    </ThumbnailsContainer>
  );
};

export default Thumbnails;

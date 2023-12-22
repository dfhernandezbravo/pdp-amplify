import React, { useState } from 'react';
import { ThumbnailContainer, ThumbnailsContainer } from './style';
import Image from 'next/image';
import { Skeleton } from '@cencosud-ds/easy-design-system';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { setZoomModalIndex } from '@store/gallery';

const ThumbnailsCarousel = () => {
  const dispatch = useAppDispatch();
  const { images, zoomModalIndex } = useAppSelector((state) => state.gallery);
  const [loadingThumbnails, setLoadingThumbnails] = useState(false);

  return (
    <ThumbnailsContainer>
      {images?.map((item, i) => (
        <ThumbnailContainer
          onClick={() => dispatch(setZoomModalIndex(i))}
          selected={zoomModalIndex === i}
          key={`thumbnail-zoom-${i}`}
        >
          {loadingThumbnails ? (
            <Skeleton animation={'wave'} height={'79px'} width={'79px'} />
          ) : (
            <Image
              src={item?.imageUrl}
              alt={item?.imageText ?? `product image ${i}`}
              width={256}
              height={189}
              onLoad={() => setLoadingThumbnails(false)}
            />
          )}
        </ThumbnailContainer>
      ))}
    </ThumbnailsContainer>
  );
};

export default ThumbnailsCarousel;

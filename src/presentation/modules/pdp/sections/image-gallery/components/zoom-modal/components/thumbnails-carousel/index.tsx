import React, { useState } from 'react';
import {
  SkeletonContainer,
  ThumbnailContainer,
  ThumbnailsContainer,
} from './style';
import Image from 'next/image';
import { Skeleton } from '@cencosud-ds/easy-design-system';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { setZoomModalIndex } from '@store/gallery';

const ThumbnailsCarousel = () => {
  const dispatch = useAppDispatch();
  const { images, zoomModalIndex } = useAppSelector((state) => state.gallery);

  const [loadingStates, setLoadingStates] = useState(images?.map(() => true));

  const handleImageLoad = (index: number) => {
    // Update the loading state of the specific image once it is loaded
    setLoadingStates((prevStates) => {
      if (prevStates) {
        const newStates = [...prevStates];
        newStates[index] = false;
        return newStates;
      }
    });
  };

  return (
    <ThumbnailsContainer>
      {images?.map((item, i) => (
        <ThumbnailContainer
          onClick={() => dispatch(setZoomModalIndex(i))}
          selected={zoomModalIndex === i}
          key={`thumbnail-zoom-${i}`}
        >
          {loadingStates?.[i] && (
            <SkeletonContainer>
              <Skeleton animation={'wave'} height={'70px'} width={'70px'} />
            </SkeletonContainer>
          )}
          <Image
            src={item?.imageUrl}
            alt={item?.imageText ?? `product image ${i}`}
            width={256}
            height={189}
            onLoad={() => handleImageLoad(i)}
          />
        </ThumbnailContainer>
      ))}
    </ThumbnailsContainer>
  );
};

export default ThumbnailsCarousel;

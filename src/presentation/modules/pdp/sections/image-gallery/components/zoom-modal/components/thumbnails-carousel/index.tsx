import React, { useState } from 'react';
import {
  SkeletonContainer,
  ThumbnailContainer,
  ThumbnailsContainer,
} from './style';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { setZoomModalIndex } from '@store/gallery';
import dynamic from 'next/dynamic';

const Skeleton = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.skeleton').then(
      (module) => module.Skeleton,
    ),
  { ssr: false },
);

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

  if (images && images.length > 1)
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
                <Skeleton
                  animationtype={'wave'}
                  height={'70px'}
                  width={'70px'}
                />
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
  else return null;
};

export default ThumbnailsCarousel;

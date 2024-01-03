import React, { useState } from 'react';
import {
  Rest,
  SkeletonContainer,
  ThumbnailContainer,
  ThumbnailsContainer,
} from './style';
import Image from 'next/image';
import { Skeleton } from '@cencosud-ds/easy-design-system';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { setActiveIndex, setOpenZoomModal } from '@store/gallery';

const Thumbnails = () => {
  const dispatch = useAppDispatch();
  const { images, activeIndex } = useAppSelector((state) => state.gallery);
  const [loadingThumbnails, setLoadingThumbnails] = useState(true);

  return (
    <ThumbnailsContainer>
      {images?.map((item, i) =>
        i < 5 ? (
          <ThumbnailContainer
            onClick={() => dispatch(setActiveIndex(i))}
            selected={activeIndex === i}
            key={item?.imageUrl}
          >
            {loadingThumbnails && (
              <SkeletonContainer>
                <Skeleton animation={'wave'} height={'70px'} width={'70px'} />
              </SkeletonContainer>
            )}
            <Image
              src={item?.imageUrl}
              alt={item?.imageText ?? `product image ${i}`}
              width={256}
              height={189}
              onLoad={() => setLoadingThumbnails(false)}
            />
          </ThumbnailContainer>
        ) : null,
      )}
      {images && images?.length > 5 && (
        <Rest onClick={() => dispatch(setOpenZoomModal(true))}>
          +{images?.length - 5}
        </Rest>
      )}
    </ThumbnailsContainer>
  );
};

export default Thumbnails;

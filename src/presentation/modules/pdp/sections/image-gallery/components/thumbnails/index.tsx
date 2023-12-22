import React, { useState } from 'react';
import { ThumbnailsProps } from './types';
import { Rest, ThumbnailContainer, ThumbnailsContainer } from './style';
import Image from 'next/image';
import { Skeleton } from '@cencosud-ds/easy-design-system';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { setActiveIndex, setOpenZoomModal } from '@store/gallery';

const Thumbnails = ({ swiper }: ThumbnailsProps) => {
  const dispatch = useAppDispatch();
  const { images, activeIndex } = useAppSelector((state) => state.gallery);
  const [loadingThumbnails, setLoadingThumbnails] = useState(false);

  return (
    <ThumbnailsContainer>
      {images?.map((item, i) =>
        i < 5 ? (
          <ThumbnailContainer
            onClick={() => dispatch(setActiveIndex(i))}
            selected={activeIndex === i}
            key={item?.imageUrl}
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

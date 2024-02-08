import React from 'react';
import { Rest, ThumbnailContainer, ThumbnailsContainer } from './style';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { setActiveIndex, setOpenZoomModal } from '@store/gallery';

const Thumbnails = () => {
  const dispatch = useAppDispatch();
  const { images, activeIndex } = useAppSelector((state) => state.gallery);

  if (images && images.length > 1)
    return (
      <ThumbnailsContainer>
        {images?.map((item, i) =>
          i < 5 ? (
            <ThumbnailContainer
              onClick={() => dispatch(setActiveIndex(i))}
              selected={activeIndex === i}
              key={item?.imageUrl}
            >
              <Image
                src={item?.imageUrl}
                alt={item?.imageText ?? `product image ${i}`}
                width={80}
                height={80}
                priority={false}
                loading="lazy"
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
  else return null;
};

export default Thumbnails;

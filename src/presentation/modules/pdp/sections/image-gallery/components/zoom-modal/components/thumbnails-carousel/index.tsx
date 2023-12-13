// import SwiperEasy from '@components/molecules/swiper';
// import { ProductImage } from '@entities/product-image';
// import React, { useState } from 'react';
// import { ThumbnailContainer } from './style';
// import { Skeleton } from '@cencosud-ds/easy-design-system';
// import Image from 'next/image';
// import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
// import { setSwiper } from '@store/gallery';

// const ThumbnailsCarousel = () => {
//   const dispatch = useAppDispatch();
//   const { activeIndex, swiper, images } = useAppSelector(
//     (state) => state.gallery,
//   );
//   const [loadingThumbnails, setLoadingThumbnails] = useState(false);

//   const renderItem = (item: ProductImage, i: number) => {
//     return (
//       <ThumbnailContainer
//         onClick={() => swiper?.slideTo(i, 1)}
//         selected={activeIndex === i}
//         key={item?.imageUrl}
//       >
//         {loadingThumbnails ? (
//           <Skeleton animation={'wave'} height={'79px'} width={'79px'} />
//         ) : (
//           <Image
//             src={item?.imageUrl}
//             alt={item?.imageText ?? `product image ${i}`}
//             width={79}
//             height={79}
//             onLoad={() => setLoadingThumbnails(false)}
//           />
//         )}
//       </ThumbnailContainer>
//     );
//   };

//   if (images)
//     return (
//       <SwiperEasy
//         swiper={swiper}
//         setSwiper={(swiper) => dispatch(setSwiper(swiper))}
//         items={images}
//         renderItem={renderItem}
//         slidesPerGroup={1}
//         slidesPerView={5}
//         direction={'vertical'}
//       />
//     );
//   else return null;
// };

// export default ThumbnailsCarousel;

import React, { useState } from 'react';
import { ThumbnailContainer, ThumbnailsContainer } from './style';
import Image from 'next/image';
import { Skeleton } from '@cencosud-ds/easy-design-system';
import { useAppSelector } from '@hooks/storeHooks';
import { SwiperClass } from 'swiper/react';

type Props = {
  swiper?: SwiperClass;
  index: number;
};

const ThumbnailsCarousel = ({ swiper, index }: Props) => {
  const { images } = useAppSelector((state) => state.gallery);
  const [loadingThumbnails, setLoadingThumbnails] = useState(false);

  return (
    <ThumbnailsContainer>
      {images?.map((item, i) => (
        <ThumbnailContainer
          onClick={() => swiper?.slideTo(i, 400)}
          selected={index === i}
          key={item?.imageUrl}
        >
          {loadingThumbnails ? (
            <Skeleton animation={'wave'} height={'79px'} width={'79px'} />
          ) : (
            <Image
              src={item?.imageUrl}
              alt={item?.imageText ?? `product image ${i}`}
              width={79}
              height={79}
              onLoad={() => setLoadingThumbnails(false)}
            />
          )}
        </ThumbnailContainer>
      ))}
    </ThumbnailsContainer>
  );
};

export default ThumbnailsCarousel;

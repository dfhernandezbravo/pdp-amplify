import { useEffect, useState } from 'react';
import { Overlay, ZoomContainer } from './style';
import Image from 'next/image';
import { Skeleton } from '@cencosud-ds/easy-design-system';

type DesktopZoomProps = {
  imageSrc: string;
  altText: string;
  activeIndex?: number;
  selected: boolean;
};

const DesktopZoom = ({
  imageSrc,
  altText,
  activeIndex,
  selected,
}: DesktopZoomProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHover, setIsHover] = useState(false);
  const [loadingImage, setLoadingImage] = useState(true);
  const [minHeight, setMinHeight] = useState(500);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    setMinHeight(height);
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    !selected && setIsHover(false);
  }, [activeIndex]);

  return (
    <ZoomContainer
      style={{ minHeight: minHeight }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      $loading={loadingImage}
    >
      {isHover && selected && !loadingImage ? (
        <Overlay
          $background={imageSrc}
          style={{
            backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
          }}
        />
      ) : (
        <>
          {loadingImage && (
            <Skeleton animation="wave" height={`${minHeight}px`} />
          )}
          <Image
            src={imageSrc}
            alt={altText}
            height={331}
            width={414}
            onLoad={() => setLoadingImage(false)}
          />
        </>
      )}
    </ZoomContainer>
  );
};

export default DesktopZoom;

import { useEffect, useRef, useState } from 'react';
import { Overlay, SkeletonContainer, ZoomContainer } from './style';
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
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageSize, setImageSize] = useState<{
    height: number;
    width: number;
  }>();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    // Limit x and y values to be within the range of 0 to 100
    const clampedX = Math.min(100, Math.max(0, x));
    const clampedY = Math.min(100, Math.max(0, y));

    setMousePosition({ x: clampedX, y: clampedY });
  };

  useEffect(() => {
    if (imageRef.current) {
      const { width, height } = imageRef.current.getBoundingClientRect();
      setImageSize({ height, width });
    }
  }, [imageRef]);

  useEffect(() => {
    !selected && setIsHover(false);
  }, [activeIndex]);

  return (
    <ZoomContainer
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{ height: imageSize?.height, width: imageSize?.width }}
    >
      {isHover && selected && !loadingImage ? (
        <Overlay
          $background={imageSrc}
          style={{
            backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
            height: imageSize?.height,
            width: imageSize?.width,
          }}
        />
      ) : (
        <>
          {loadingImage && (
            <SkeletonContainer>
              <Skeleton height={`${imageSize?.height}px`} animation="wave" />
            </SkeletonContainer>
          )}
          <Image
            ref={imageRef}
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

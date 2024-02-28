import { useEffect, useState } from 'react';
import { Overlay, ZoomContainer } from './style';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Skeleton = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.skeleton').then(
      (module) => module.Skeleton,
    ),
  { ssr: false },
);

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
  const [imgSize, setImgSize] = useState({ height: 400, width: 400 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    setIsHover(true);

    setImgSize({ height, width });
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    !selected && setIsHover(false);
  }, [activeIndex]);

  return (
    <ZoomContainer
      style={{ minHeight: imgSize.height, minWidth: imgSize.width }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHover(false)}
      $loading={loadingImage}
    >
      {isHover && selected && !loadingImage ? (
        <Overlay
          $background={imageSrc}
          style={{
            backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
            minHeight: imgSize.height,
            minWidth: imgSize.width,
          }}
        />
      ) : (
        <>
          {loadingImage && <Skeleton animationtype="wave" />}
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

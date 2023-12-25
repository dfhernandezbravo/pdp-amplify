import React, { useEffect, useState } from 'react';
import { Overlay, ZoomContainer } from './style';
import Image from 'next/image';

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    console.log('left:', left, 'top:', top, 'width:', width, 'height:', height);

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    console.log('x:', x, 'y:', y);

    setMousePosition({ x, y });
  };

  useEffect(() => {
    !selected && setIsHover(false);
  }, [activeIndex]);

  return (
    <ZoomContainer
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover && selected ? (
        <Overlay
          $background={imageSrc}
          style={{
            backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
          }}
        />
      ) : (
        <Image src={imageSrc} alt={altText} height={331} width={414} />
      )}
    </ZoomContainer>
  );
};

export default DesktopZoom;

import React, { useState, useEffect, useRef } from 'react';
import { ImageContainer } from './styles';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Skeleton = dynamic(
  () =>
    import('@ccom-easy-design-system/atoms.skeleton').then(
      (module) => module.Skeleton,
    ),
  { ssr: false },
);

type MobileZoomProps = {
  imageSrc: string;
  altText: string;
  activeIndex?: number;
};

const MobileZoom = ({ imageSrc, altText, activeIndex }: MobileZoomProps) => {
  const [loadingImage, setLoadingImage] = useState(true);
  const [scale, setScale] = useState(1);
  const [initialTouchesDistance, setInitialTouchesDistance] = useState(0);
  const [pinchCenter, setPinchCenter] = useState({ x: 0, y: 0 });
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [lastTouch, setLastTouch] = useState({ x: 0, y: 0 });
  const [tapping, setTapping] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  const resetImage = () => {
    setScale(1);
    setInitialTouchesDistance(0);
    setPinchCenter({ x: 0, y: 0 });
    setLastTouch({ x: 0, y: 0 });
    setImagePosition({ x: 0, y: 0 });
  };

  const handleDoubleTap = () => {
    if (scale === 1) {
      const rect = imageRef?.current?.getBoundingClientRect();
      if (rect) {
        setImagePosition({
          x: -rect?.width / 4,
          y: -rect?.height / 4,
        });
      }
      setScale(2);
    } else {
      resetImage();
    }
    setTapping(false);
  };

  const handleImageLoad = () => {
    setLoadingImage(false);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    if (scale > 1) event.stopPropagation();
    const touches = event.touches;
    if (touches.length === 1) {
      if (tapping) {
        handleDoubleTap();
      }
      setLastTouch({ x: touches[0].clientX, y: touches[0].clientY });
    } else if (touches.length === 2) {
      const distance = Math.hypot(
        touches[0].clientX - touches[1].clientX,
        touches[0].clientY - touches[1].clientY,
      );
      setInitialTouchesDistance(distance);
      const centerX = (touches[0].clientX + touches[1].clientX) / 2;
      const centerY = (touches[0].clientY + touches[1].clientY) / 2;
      setPinchCenter({ x: centerX, y: centerY });
    }
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    const touches = event.touches;
    if (touches.length === 1) {
      const deltaX = touches[0].clientX - lastTouch.x;
      const deltaY = touches[0].clientY - lastTouch.y;
      setImagePosition({
        x: imagePosition.x + deltaX,
        y: imagePosition.y + deltaY,
      });
      setLastTouch({ x: touches[0].clientX, y: touches[0].clientY });
    } else if (touches.length === 2) {
      const currentDistance = Math.hypot(
        touches[0].clientX - touches[1].clientX,
        touches[0].clientY - touches[1].clientY,
      );
      const newScale = (currentDistance / initialTouchesDistance) * scale;
      if (newScale >= 1 && newScale <= 4) {
        setScale(newScale);
      }
    }
  };

  const handleTouchEnd = () => {
    setInitialTouchesDistance(0);
    if (!tapping) {
      setTapping(true);
    }
  };

  useEffect(() => {
    resetImage();
  }, [activeIndex]);

  useEffect(() => {
    if (tapping) {
      const timeout = setTimeout(() => {
        setTapping(false);
      }, 200); // Adjust the time interval for detecting double tap as needed
      return () => clearTimeout(timeout);
    }
  }, [tapping]);

  return (
    <ImageContainer
      $loading={loadingImage}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {loadingImage && (
        <Skeleton height={331} width={414} animationtype="wave" />
      )}
      <div
        style={{
          transform: `scale(${scale}) translate(${imagePosition.x}px, ${imagePosition.y}px)`,
          transformOrigin: `${pinchCenter.x}px ${pinchCenter.y}px`,
        }}
      >
        <Image
          ref={imageRef}
          src={imageSrc}
          alt={altText || 'Product image'}
          width={414}
          height={331}
          onLoad={handleImageLoad}
        />
      </div>
    </ImageContainer>
  );
};

export default MobileZoom;

import React, { useRef, useState, useEffect } from 'react';
import { ImageContainer } from './styles';
import Image from 'next/image';
import { Skeleton } from '@cencosud-ds/easy-design-system';

type MobileZoomProps = {
  imageSrc: string;
  altText: string;
  activeIndex?: number;
};

const MobileZoom = ({ imageSrc, altText, activeIndex }: MobileZoomProps) => {
  const zoomRef = useRef<HTMLDivElement>(null);
  const [initialDistance, setInitialDistance] = useState<number | null>(null);
  const [currentScale, setCurrentScale] = useState<number>(1);
  const [pinchCenterX, setPinchCenterX] = useState<number>(0);
  const [pinchCenterY, setPinchCenterY] = useState<number>(0);
  const [loadingImage, setLoadingImage] = useState(true);

  useEffect(() => {
    const element = zoomRef.current;

    setCurrentScale(1);
    if (element) element.style.transform = `scale(1)`;
  }, [activeIndex]);

  useEffect(() => {
    const element = zoomRef.current;

    const getDistance = (point1: Touch, point2: Touch) => {
      const dx = point2.clientX - point1.clientX;
      const dy = point2.clientY - point1.clientY;
      // prettier-ignore
      return Math.sqrt((dx * dx) + (dy * dy));
    };

    const handlePinchStart = (event: TouchEvent) => {
      if (event.touches.length >= 2) {
        const distance = getDistance(event.touches[0], event.touches[1]);
        setInitialDistance(distance);

        const centerX =
          (event.touches[0].clientX + event.touches[1].clientX) / 2;
        const centerY =
          (event.touches[0].clientY + event.touches[1].clientY) / 2;
        setPinchCenterX(centerX);
        setPinchCenterY(centerY);
      }
    };

    const handlePinchMove = (event: TouchEvent) => {
      if (event.touches.length >= 2 && initialDistance !== null) {
        const distance = getDistance(event.touches[0], event.touches[1]);
        const scale = Math.min(
          1.2,
          Math.max(1, (distance / initialDistance) * currentScale),
        );
        setCurrentScale(scale);

        // prettier-ignore
        const deltaX = pinchCenterX - (pinchCenterX * scale);
        // prettier-ignore
        const deltaY = pinchCenterY - (pinchCenterY * scale);

        if (element) {
          element.style.transform = `scale(${scale}) translate(${deltaX}px, ${deltaY}px)`;
        }
      }
    };

    if (element) {
      element.addEventListener('touchstart', handlePinchStart);
      element.addEventListener('touchmove', handlePinchMove);
    }

    return () => {
      if (element) {
        element.removeEventListener('touchstart', handlePinchStart);
        element.removeEventListener('touchmove', handlePinchMove);
      }
    };
  }, [initialDistance, currentScale, pinchCenterX, pinchCenterY]);

  return (
    <ImageContainer $loading={loadingImage} ref={zoomRef}>
      {loadingImage && <Skeleton animation="wave" />}
      <Image
        src={imageSrc}
        alt={altText}
        height={331}
        width={414}
        onLoad={() => setLoadingImage(false)}
      />
    </ImageContainer>
  );
};

export default MobileZoom;

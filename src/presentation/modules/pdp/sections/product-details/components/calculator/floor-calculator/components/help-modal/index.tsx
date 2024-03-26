import React, { useEffect, useRef } from 'react';
import {
  ModalOverlay,
  ModalContent,
  GoBackButton,
  Title,
  Content,
  TitleModal,
  BackgroundModal,
} from './styles';
import Image from 'next/image';
import { MdOutlineArrowBackIos } from 'react-icons/md';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const HelpModal = ({ isOpen, onClose }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef?.current?.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  if (!isOpen) return null;
  return (
    <>
      <BackgroundModal />
      <ModalOverlay ref={modalRef}>
        <ModalContent>
          <TitleModal>
            <GoBackButton onClick={onClose}>
              <MdOutlineArrowBackIos size={'24px'} />
            </GoBackButton>
            ¿Cómo calcular los m2 que necesito comprar?
          </TitleModal>
          <Title>Superficie simple</Title>
          <Content>
            Son los espacios cuadrados o rectangulares. Para obtener la cantidad
            de m2 que necesitas, debes multiplicar el largo y ancho de la
            superficie.
          </Content>
          <Image
            src={'/images/floor-calculator/simple.svg'}
            alt="Superficie simple"
            width={330}
            height={170}
          />
          <Title>Superficie compuesta</Title>
          <Content>
            Son los espacios compuestos por dos o más figuras. Para calcular la
            cantidad de m2 totales, divide la superficie en figuras simples
            (cuadrados y rectángulos); multiplica el largo y ancho de cada una;
            y suma los totales. Si tienes una superficie triangular, multiplica
            largo y ancho y luego divídelo en dos.
          </Content>
          <Image
            src={'/images/floor-calculator/compose.svg'}
            alt="Superficie compuesta"
            width={330}
            height={250}
          />
          <Title>¿Por qué se recomienda agregar un 10% adicional?</Title>
          <Content style={{ marginBottom: '16px' }}>
            Las medidas del producto no coinciden con las dimensiones de la
            superficie donde se aplicará. Esto produce cortes y ajustes que
            provocan una ligera merma. Te pedimos que agregues un 10% adicional
            al total de m2 para que puedas terminar tu trabajo sin que te falte
            material.
          </Content>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default HelpModal;

import React, { useEffect, useRef } from 'react';
import {
  ModalOverlay,
  ModalContent,
  GoBackButton,
  Title,
  Content,
  TitleModal,
  BackgroundModal,
  BlockScroll,
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
      <BlockScroll open={isOpen} />
      <BackgroundModal />
      <ModalOverlay id="modal-help-calculator" ref={modalRef}>
        <ModalContent>
          <TitleModal>
            <GoBackButton onClick={onClose}>
              <MdOutlineArrowBackIos size={'24px'} />
            </GoBackButton>
            ¿Cómo calcular los m2 que necesito comprar?
          </TitleModal>
          <Title>Largo lineal</Title>
          <Content>
            Es la suma del largo de todas las paredes que quieres pintar. Esto
            te permitirá conocer el largo total de la superficie a pintar.
          </Content>
          <Image
            src={'/images/paint-calculator/simple.svg'}
            alt="Largo lineal"
            width={330}
            height={170}
          />
          <Title>Superficie</Title>
          <Content>
            Es el resultado de la multiplicación del largo lineal con la altura
            del espacio.
          </Content>
          <Image
            src={'/images/paint-calculator/compose.svg'}
            alt="Superficie"
            width={330}
            height={250}
          />
          <Title>¿Por qué se recomienda agregar un 10% adicional?</Title>
          <Content style={{ marginBottom: '16px' }}>
            Dependiendo del producto usado, su aplicación y la superficie, esto
            podría diferir de lo recomendado, es por esto que se sugiere comprar
            un poco más para que no te falte pintura.
          </Content>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default HelpModal;

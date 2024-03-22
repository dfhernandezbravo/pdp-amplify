import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  animation: ${fadeIn} 0.3s ease;
  overflow-y: auto;
`;

export const ModalContent = styled.div`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  width: 400px;
  height: 100vh;
  background-color: white;
  padding: 1rem;
  box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.2);
  animation: ${slideIn} 0.3s ease;
`;

export const GoBackButton = styled.button`
  border: none;
  background: none;
  font-size: 16px;
  cursor: pointer;
`;

export const TitleModal = styled.div`
  display: flex;
  align-items: top;
  justify-content: start;
  gap: 8px;
  font-size: 18px;
  font-weight: 400;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin: 8px 0;
`;

export const Content = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 8px 0;
`;

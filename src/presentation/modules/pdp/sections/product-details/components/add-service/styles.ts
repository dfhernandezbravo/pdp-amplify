import styled, { css, keyframes } from 'styled-components';

export const ServiceContainer = styled.div`
  background-color: #f9f9f9;
  margin-top: 1.625rem;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 4px;
`;

export const TitleContainer = styled.div`
  margin-bottom: 1.125rem;
`;

export const Title = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
  margin-bottom: 0.375rem;
`;

export const Subtitle = styled.p`
  font-size: 0.75rem;
  color: #999;
  font-weight: 600;
  margin: 0;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  color: #4d4d4d;
  font-size: 0.875rem;
  cursor: pointer;
  text-transform: capitalize;

  span {
    padding-left: 0.2rem;
    font-weight: 700;
  }
`;

const growAnimation = keyframes`
  
    0% {
      transform: scale(0) translate(-50%, -50%);
    }
    100% {
      transform: scale(1) translate(-50%, -50%);
    }
  
`;

export const StyledRadio = styled.div<{ checked: boolean }>`
  margin-right: 1.063rem;
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 50%;
  border: 1px solid #818180;
  background-color: transparent;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 70%;
    width: 70%;
    border-radius: 50%;
    background-color: transparent;

    ${({ checked }) =>
      checked
        ? css`
            animation: ${growAnimation} 0.2s ease;
            background-color: #009372;
          `
        : null}
  }
`;

export const Radio = styled.input.attrs({
  type: 'radio',
})`
  display: none;
`;

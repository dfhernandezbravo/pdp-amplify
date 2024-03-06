import styled, { css } from 'styled-components';

export const Container = styled.div<{ openedColorGroup: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  padding: 0.5rem;
  ${({ openedColorGroup }) =>
    !openedColorGroup &&
    css`
      box-shadow: 0px -3px 3px rgba(0, 0, 0, 0.2);
    `}
  z-index: 99;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex-direction: row-reverse;
`;

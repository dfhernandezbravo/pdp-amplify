import styled, { css } from 'styled-components';

export const ImageContainer = styled.div<{ $loading: boolean }>`
  img {
    object-fit: contain;
    height: 100%;
    width: 100%;

    ${({ $loading }) =>
      $loading
        ? css`
            height: 0;
          `
        : null}
  }
`;

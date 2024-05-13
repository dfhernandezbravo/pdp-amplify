import styled from 'styled-components';

export const BreadcrumbContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme: { spacing } }) => spacing[100]};
`;

export const BreadcrumbItem = styled.div<{ $isLast: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({ theme: { spacing } }) => spacing[100]};

  a,
  span,
  p {
    text-decoration: none;
    text-transform: none;
    color: ${(props) => (props.$isLast ? '#4d4d4d' : '#818180')};
    font-weight: ${(props) => (props.$isLast ? 700 : 400)};
    font-size: ${({ theme: { fontSize } }) => fontSize[100]};

    &::first-letter {
      text-transform: uppercase;
    }
  }

  svg {
    width: 10px;
    height: 10px;
    color: #818180;
  }
`;

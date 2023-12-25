import styled from 'styled-components';

export const Title = styled.p`
  font-weight: 600;
  color: #1a1a1a;
  font-size: 1.375rem;
  letter-spacing: 0;
  padding-bottom: 1rem;
  margin: 0;
  min-height: 46px;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

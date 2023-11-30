import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 1.3rem;
  font-weight: 700;
  padding-top: 0.25rem;
  padding-bottom: 0.5rem;
`;

export const Subtitle = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  padding-bottom: 0.5rem;
`;

export const Brand = styled.span`
  font-size: 0.938rem;
  color: #4d4d4d;
  margin: 0;
  font-weight: 600;
`;

export const ProductId = styled.span`
  color: #818180;
  font-size: 0.75rem;
  padding-bottom: 5px;
`;

export const Separator = styled.div`
  border-top: 1px solid #e0e3e8;
  width: 100%;
  margin: 1rem 0;
`;

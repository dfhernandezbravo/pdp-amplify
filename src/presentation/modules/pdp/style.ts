import styled from 'styled-components';

export const Main = styled.div`
  max-width: 79.25rem;
  margin-left: auto;
  margin-right: auto;
`;

export const Separator = styled.div`
  border-left: 1px solid #e0e3e8;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ProductDetailsSection = styled.section`
  display: flex;
  gap: 1rem;
  background-color: #fff;
  margin: 0 1rem;
  padding: 4rem 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImagesContainer = styled.div`
  width: 60%;

  @media (max-width: 768px) {
    width: 70%;
  }
`;

export const DetailsContainer = styled.div`
  width: 40%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

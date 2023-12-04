import styled from 'styled-components';

export const Main = styled.div`
  max-width: 79.25rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Separator = styled.div`
  border-left: 1px solid #e0e3e8;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Section = styled.section`
  display: flex;
  gap: 2rem;
  background-color: #fff;
  margin: 0 1rem;
  margin-bottom: 2rem;
  padding: 3.5rem 2rem;
  min-height: fit-content;
  scroll-behavior: smooth;

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

import styled from 'styled-components';

export const Main = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  max-width: 79.25rem;

  @media only screen and (max-width: 780px) {
    margin-bottom: 4rem;
  }
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem 0.5rem;
  }
`;

export const ImagesContainer = styled.div`
  width: 60%;

  @media (max-width: 768px) {
    width: 70%;
  }
`;

export const DetailsContainer = styled.div`
  width: 30%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ReviewContainer = styled.div`
  margin: 1rem;
`;

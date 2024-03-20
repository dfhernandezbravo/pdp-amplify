import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: 0 1rem;
  margin-bottom: 2rem;
  padding: 1.5rem 2rem 1.25rem;
  min-height: fit-content;
  scroll-behavior: smooth;
`;

export const Title = styled.h3`
  color: #1a1a1a;
  font-weight: 500;
  font-size: 1.25rem;
  letter-spacing: 0;
  line-height: 1.438rem;
  margin: 0 0 0.625rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Description = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1rem;
  color: #818180;

  width: 100%;
  text-wrap: wrap;

  .iframeContainer {
    aspect-ratio: 16 / 9;

    iframe {
      aspect-ratio: inherit;
      width: 100%;
      height: auto;
    }
  }
`;

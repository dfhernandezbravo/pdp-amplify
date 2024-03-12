import styled from 'styled-components';

export const Title = styled.p`
  margin-top: 0;
  font-family: Open Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #727273;
  margin-bottom: 5px;
  margin-top: 1rem;
`;

export const ColorsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 84px);
  gap: 0.5rem;
  grid-auto-columns: 1fr;
  justify-items: start;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, 54px);
    gap: 0.8rem;
  }
`;

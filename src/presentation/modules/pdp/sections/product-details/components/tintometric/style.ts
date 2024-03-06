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
  grid-template-columns: repeat(auto-fit, minmax(84px, 1fr));
  gap: 0.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(54px, 1fr));
    gap: 0.8rem;
  }
`;

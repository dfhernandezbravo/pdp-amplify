import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  margin-top: 1rem;
  @media only screen and (max-width: 780px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const AverageRateContainer = styled.div`
  width: 300px;
  height: 230px;
  & div {
    height: 100%;
    border-radius: 8px;
  }
  @media only screen and (max-width: 780px) {
    width: 450px;
  }
`;

export const CommentListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

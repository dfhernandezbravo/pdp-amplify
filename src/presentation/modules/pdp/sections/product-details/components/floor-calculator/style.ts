import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;
  justify-content: start;
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  gap: 8px;
  margin: 16px 0;
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: bold;
  display: flex;
  height: 24px;
  align-items: center;
  justify-content: start;
`;

export const Icon = styled.div`
  width: 24px;
  height: 24px;
  padding: 4px;
  margin-right: 8px;
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 16px;
  font-size: 14px;
  font-weight: 400;
  label {
    font-size: 14px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  border: 1px solid #aaaaaa;
  border-radius: 6px;
  width: fit-content;
  padding-right: 3px;
  align-items: center;
  div {
    border: none;
  }
  span {
    padding: 12px 16px;
    background-color: #f3f3f3;
    font-size: 16px;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    width: 54px;
  }
`;

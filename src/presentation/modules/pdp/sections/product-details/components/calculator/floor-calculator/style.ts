import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;
  justify-content: start;
  padding: 16px;
  border-radius: 8px;
  gap: 8px;
  margin: 16px 0;
`;
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 16px;
  gap: 8px;
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
  }
`;

import styled from 'styled-components';

export const Title = styled.p`
  font-family: Open Sans;
  font-size: 15px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
  color: #333333;
`;

export const SelectedColorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3px;
`;

export const Color = styled.div<{ $backgroundColor?: string }>`
  height: 35px;
  width: 35px;
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor && $backgroundColor};
  border-radius: 4px;
  border: 4px solid #fff;
  box-shadow: 0 0 0 2.5px #000;
`;

export const ColorName = styled.span`
  font-family: Open Sans;
  font-size: 13px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  padding-left: 0.7rem;
`;

export const ColorCode = styled.span`
  font-family: Open Sans;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  padding-left: 0.2rem;
  color: #727273;
`;

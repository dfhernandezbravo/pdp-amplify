import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{ open?: boolean }>`
    ${(props) => (props.open ? `body {overflow: hidden}` : '')}
`;

export const Container = styled.div`
  z-index: 9999;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  font-family: 'Open Sans', sans-serif;
`;
export const Content = styled.div`
  background: #ffffff;
  border-radius: 8px;
  width: max-content;
  min-width: 528px;
  height: max-content;
  min-height: 194px;
  position: absolute;
  max-width: 90%;
  max-height: 90%;
  overflow-y: scroll;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;

  @media only screen and (max-width: 574px) {
    min-width: max-content;
  }
`;

export const TitleContainer = styled.div`
  border-bottom: 1px solid #aaaaaa;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Title = styled.p`
  padding: 0 10px;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  color: #333333;
  padding-right: auto;
`;

export const Icon = styled.span`
  margin-left: auto;
  padding: 0.5rem;
  padding-right: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;

  @media only screen and (max-width: 574px) {
    flex-flow: column;
    padding: 5px 15px 15px 15px;
  }
`;
export const Button = styled.button`
  width: 100%;
  margin: 10px;
  border-radius: 8px;
  cursor: pointer;
  height: 44px;
  @media only screen and (max-width: 574px) {
    margin: 10px 10px 0px 10px;
  }
`;

export const Body = styled.div`
  color: #4d4d4d;
  font-size: 16px;
  padding: 15px;
  padding-top: 1rem;
`;

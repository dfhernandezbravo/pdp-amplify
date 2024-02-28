import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{ open?: boolean }>`
    ${(props) => (props.open ? `body {overflow: hidden}` : '')}
`;

export const Container = styled.div`
  z-index: 9999;
  background: rgba(0, 0, 0, 0.25);
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  font-family: 'Open Sans', sans-serif;

  @media only screen and (max-width: 768px) {
    width: 100dvw;
    height: 100dvh;
    max-width: 100dvw;
    max-height: 100dvh;
    border-radius: 0;
  }
`;

export const Content = styled.div`
  background: #ffffff;
  border-radius: 8px;
  width: max-content;
  height: fit-content;
  position: absolute;
  max-width: 60%;
  max-height: 75%;
  overflow-y: scroll;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;

  @media only screen and (max-width: 768px) {
    width: 100dvw;
    height: 100dvh;
    max-width: 100dvw;
    max-height: 100dvh;
    border-radius: 0;
  }
`;

export const TitleContainer = styled.div`
  border-bottom: 1px solid #aaaaaa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 10px;
  max-width: 100dvw;

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  color: #333333;
  padding-right: auto;

  @media only screen and (max-width: 574px) {
    font-size: 16px;
  }
`;

export const Brand = styled.span`
  font-size: 14px;
  color: #1a1a1a;
  font-weight: 600;
`;

export const Icon = styled.span`
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

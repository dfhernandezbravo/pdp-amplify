import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    scroll-behavior: smooth;
  }
`;

export const List = styled.ul`
  list-style-position: inside;
  padding-bottom: 0.5rem;

  li {
    font-size: 0.8rem;
  }

  span {
    font-size: 0.9rem;
    position: relative;
    left: -0.5rem;
    font-weight: 200;

    b {
      padding-left: 0.5rem;
      color: #4d4d4d;
    }
  }
`;

export const Link = styled.a`
  color: ${(props) => props.theme.colors.neutral[1000]};
  font-style: normal;
  text-decoration: underline;
  font-weight: 600;
  font-size: 0.813rem;
  line-height: 1rem;
`;

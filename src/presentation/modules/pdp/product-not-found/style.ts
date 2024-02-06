import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled.div`
  height: 100dvh;
  width: 100dvw;
  background-repeat: no-repeat;
  background-image: url('/images/desktop.png');
  background-size: contain;
  background-color: #f1f3f4;
  background-position-x: center;

  @media only screen and (max-width: 780px) {
    background-image: url('/images/mobile.png');
  }
`;

export const Main = styled.main`
  padding-left: 8rem;
  display: flex;
  padding-top: 12rem;
  flex-direction: column;
  max-height: 60vh;
  gap: 1rem;
  position: relative;

  @media only screen and (max-width: 780px) {
    margin-bottom: 4rem;
    align-items: center;
    padding: 0 2rem;
    width: 100dvw;
  }
`;

export const TextContainer = styled.div`
  @media only screen and (max-width: 780px) {
    margin-top: 50dvh;
  }
`;

export const Title = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 2.25rem;
  padding-bottom: 1rem;
  color: #333;
  @media only screen and (max-width: 780px) {
    text-align: center;
    max-width: 30ch;
  }
`;

export const Subtitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: #626262;
  padding-bottom: 1.5rem;
`;

export const StoreLink = styled(Link)`
  color: #fff;
  background-color: #af1212;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  text-decoration: none;

  @media only screen and (max-width: 780px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  &:hover {
    background-color: #a80f0f;
  }
`;

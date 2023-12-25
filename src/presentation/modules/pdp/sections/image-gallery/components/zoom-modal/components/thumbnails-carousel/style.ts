import styled from 'styled-components';

type ThumbnailProps = {
  selected: boolean;
};

export const ThumbnailsContainer = styled.div`
  width: 18%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  max-height: 500px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
`;

export const ThumbnailContainer = styled.div<ThumbnailProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 79px;
  width: 79px;
  min-height: 79px;
  min-width: 79px;
  padding: 2px;
  border: 1px solid ${(props) => (props.selected ? 'red' : '#e0e3e8')};
  border-radius: ${(props) => props.theme.radius.xsm};
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

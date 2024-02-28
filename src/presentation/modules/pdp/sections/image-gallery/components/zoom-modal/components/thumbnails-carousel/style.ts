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
  height: 100%;
  max-height: 55vh;
  overflow-y: scroll;
  border: 1px solid #e0e3e8;
  padding: 1rem 0;
  border-radius: ${({ theme }) => theme.radius.xsm};

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
  position: relative;
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

export const SkeletonContainer = styled.div`
  width: 79px;
  position: absolute;
  top: 3.5px;
  left: 3.5px;
`;

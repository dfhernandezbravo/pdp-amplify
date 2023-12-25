import styled from 'styled-components';

type ThumbnailProps = {
  selected: boolean;
};

export const ThumbnailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const ThumbnailContainer = styled.div<ThumbnailProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 79px;
  width: 79px;
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

export const Rest = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  min-height: 85px;
  width: 85px;
  color: #818180;
  background-color: #f9f9f9;
  border-radius: ${(props) => props.theme.radius.xsm};
  cursor: pointer;
`;

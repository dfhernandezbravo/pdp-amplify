/* eslint-disable react/jsx-no-useless-fragment */
import {
  Container,
  Content,
  TitleContainer,
  Title,
  Body,
  Icon,
  GlobalStyle,
} from './modal.styles';
import { ModalStruct } from './modal.struct';
import { CgClose } from 'react-icons/cg';

const Modal = (props: ModalStruct) => {
  return (
    <>
      <GlobalStyle open={props?.open} />
      {props?.open && (
        <Container onClick={() => props?.setOpen(false)}>
          <Content onClick={(e) => e.stopPropagation()}>
            <TitleContainer>
              <Title>{props?.title}</Title>
              {props?.icon && (
                <Icon onClick={props?.icon?.onClick}>
                  <CgClose size={'32px'} />
                </Icon>
              )}
            </TitleContainer>
            <Body>{props?.children}</Body>
          </Content>
        </Container>
      )}
    </>
  );
};
export default Modal;

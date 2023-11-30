/* eslint-disable react/jsx-no-useless-fragment */
import {
  Container,
  Content,
  TitleContainer,
  Title,
  Description,
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
              {props?.icon && (
                <Icon onClick={props?.icon?.onClick}>
                  <CgClose size={'32px'} />
                </Icon>
              )}
            </TitleContainer>
            <Title>{props?.title}</Title>
            <Description>{props?.children}</Description>
          </Content>
        </Container>
      )}
    </>
  );
};
export default Modal;

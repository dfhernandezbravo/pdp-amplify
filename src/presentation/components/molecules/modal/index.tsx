import {
  Container,
  Content,
  TitleContainer,
  Title,
  Body,
  Icon,
  GlobalStyle,
  Brand,
} from './styles';
import { ModalStruct } from './props';
import { CgClose } from 'react-icons/cg';

const Modal = (props: ModalStruct) => {
  return (
    <>
      <GlobalStyle open={props?.open} />
      {props?.open && (
        <Container onClick={() => props?.setOpen(false)}>
          <Content onClick={(e) => e.stopPropagation()}>
            <TitleContainer>
              <div>
                {props?.brand && <Brand>{props?.brand}</Brand>}
                <Title>{props?.title}</Title>
              </div>
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

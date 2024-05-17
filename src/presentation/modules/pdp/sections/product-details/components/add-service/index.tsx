import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { setAdditionalService } from '@store/product';
import useAddAditionalService from '@use-cases/product/add-aditional-service';
import ServiceTerms from './components/service-terms';
import {
  Label,
  Options,
  Radio,
  ServiceContainer,
  StyledRadio,
  Subtitle,
  Title,
  TitleContainer,
} from './styles';

const AddService = () => {
  const { product, additionalService } = useAppSelector(
    (state) => state.product,
  );
  const dispatch = useAppDispatch();
  useAddAditionalService();

  const formatPrice = (num: number) => {
    return (num / 1000).toFixed(3);
  };
  if (product?.items?.[0]?.offering)
    return (
      <ServiceContainer>
        <TitleContainer>
          <Title>Servicios adicionales</Title>
          <Subtitle>Incluye servicios adicionales con tu compra</Subtitle>
        </TitleContainer>
        <Options>
          <Label>
            <StyledRadio checked={!additionalService} />
            <Radio
              checked={!additionalService}
              onClick={() => dispatch(setAdditionalService(false))}
            />
            Sin {product?.items?.[0]?.offering?.name.split(' ')?.[0]}
          </Label>
          <Label>
            <StyledRadio checked={additionalService} />
            <Radio
              checked={additionalService}
              onClick={() => dispatch(setAdditionalService(true))}
            />
            {product?.items?.[0]?.offering?.name} +
            <span>${formatPrice(product?.items?.[0]?.offering?.value)}</span>
          </Label>
        </Options>
        <ServiceTerms />
      </ServiceContainer>
    );
  else return null;
};

export default AddService;

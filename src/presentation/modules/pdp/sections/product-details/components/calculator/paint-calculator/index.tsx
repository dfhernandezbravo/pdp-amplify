import {
  ResultContainer,
  InputGroup,
  FormContainer,
  SelectHands,
  ResultItem,
  CalculatorWrapper,
} from './style';
import CheckBox from '@components/atoms/checkbox-bit';
import { useEffect, useState } from 'react';
import { Textfield } from '@components/atoms/textfield-bit';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import HelpModal from './components/help-modal';
import { setQuantity } from '@store/product';
import Button from '@components/atoms/button-bit';
import { Controller, useForm } from 'react-hook-form';
import Select from '@modules/pdp/components/Select';
import TitleCalculator from '../components/title';
import { calculatePaintQuantity } from '@use-cases/product/use-calculator';

type CalculatorForm = {
  coverage: number;
  extraChecked: boolean;
  hands: number;
};
const optionsHands = [
  { value: '1', label: '1 mano' },
  { value: '2', label: '2 manos' },
  { value: '3', label: '3 manos' },
];

const PaintCalculator = () => {
  const dispatch = useAppDispatch();
  const {
    control,
    watch,
    formState: { isValid },
  } = useForm<CalculatorForm>();
  const { product } = useAppSelector((state) => state.product);
  const liters = product?.specifications?.['Litraje'];
  const [unitResult, setUnitResult] = useState(0);
  const [gallonResult, setGallonResult] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const calculate = () => {
    const formValues = watch();
    if (isValid && liters?.length) {
      const calculatorResult = calculatePaintQuantity(liters[0], formValues);
      setUnitResult(calculatorResult.unitResult);
      setGallonResult(calculatorResult.gallonResult);
      dispatch(setQuantity(calculatorResult.unitResult));
    } else {
      setUnitResult(0);
      dispatch(setQuantity(1));
    }
  };
  const handleHelp = (open: boolean) => {
    setShowModal(open);
  };
  const blockInvalidChar = (e: React.KeyboardEvent<HTMLInputElement>) =>
    ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();
  useEffect(() => {
    calculate();
  }, [watch(), product]);

  return (
    <FormContainer>
      <TitleCalculator variant={'paint'} text="¿Cuánta pintura necesito?" />
      <CalculatorWrapper>
        <Controller
          name="coverage"
          control={control}
          defaultValue={undefined}
          render={({ field }) => (
            <InputGroup>
              <Textfield
                {...field}
                label="Superficie"
                placeholder=""
                type="number"
                min={0}
                onKeyDown={blockInvalidChar}
                fullwidth
              />
              <span>m²</span>
            </InputGroup>
          )}
        />
        <SelectHands>
          <Controller
            name="hands"
            control={control}
            defaultValue={1}
            render={({ field }) => (
              <Select
                id="handsPaintCalculator"
                value={optionsHands.find((o) => o.value === `${field.value}`)}
                onChange={(e) => field.onChange(e.value)}
                label="Manos de pintura"
                options={optionsHands}
                height={42}
                fullwidth={true}
              />
            )}
          />
        </SelectHands>
      </CalculatorWrapper>
      <Button
        variant="link"
        type="button"
        label="Ayuda para calcular m²"
        onClick={() => handleHelp(true)}
        style={{ fontSize: '14px', padding: '0', justifyContent: 'start' }}
      />
      {unitResult ? (
        <ResultContainer>
          <div style={{ display: 'flex' }}>
            <ResultItem>
              <div>Necesitarás</div>
              <div style={{ fontWeight: 'bold' }}>{gallonResult} Galones</div>
            </ResultItem>
            <ResultItem style={{ marginLeft: '6rem' }}>
              <div>Cantidad sugerida</div>
              <div style={{ fontWeight: 'bold' }}>{unitResult} unidades</div>
            </ResultItem>
          </div>
          <hr style={{ margin: '16px 0' }} />
          <Controller
            name="extraChecked"
            control={control}
            defaultValue={true}
            render={({ field }) => (
              <CheckBox
                onChange={(e) => field.onChange(e.target.checked)}
                defaultChecked={true}
                label="Agregar un 10% al total de m2 recomendado por el potencial desperdicio de material"
                style={{ fontSize: '14px', fontWeight: 400 }}
              />
            )}
          />
        </ResultContainer>
      ) : null}
      {showModal && (
        <HelpModal isOpen={showModal} onClose={() => handleHelp(false)} />
      )}
    </FormContainer>
  );
};
export default PaintCalculator;

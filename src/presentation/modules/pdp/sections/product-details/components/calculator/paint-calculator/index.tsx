import {
  ResultContainer,
  InputGroup,
  FormContainer,
  SelectHands,
  ResultItem,
} from './style';
import CheckBox from '@components/atoms/checkbox-bit';
import { useEffect, useState } from 'react';
import { Textfield } from '@cencosud-ds/easy-design-system';
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
    } else setUnitResult(0);
  };
  const handleHelp = () => {
    setShowModal(true);
  };
  const blockInvalidChar = (e: React.KeyboardEvent<HTMLInputElement>) =>
    ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();
  useEffect(() => {
    calculate();
  }, [watch(), product]);

  return (
    <FormContainer>
      <TitleCalculator variant={'paint'} text="¿Cuánta pintura necesito?" />
      <div style={{ display: 'flex' }}>
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
                width={200}
                min={0}
                onKeyDown={blockInvalidChar}
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
                customWidth={150}
                height={40}
                fullwidth={false}
              />
            )}
          />
        </SelectHands>
      </div>
      <Button
        variant="link"
        type="button"
        label="Ayuda para calcular m²"
        onClick={handleHelp}
        style={{ fontSize: '14px', padding: '0', justifyContent: 'start' }}
      />
      {unitResult ? (
        <ResultContainer>
          <div style={{ display: 'flex' }}>
            <ResultItem>
              <div>Necesitarás</div>
              <div>
                <strong>{gallonResult} Galones</strong>
              </div>
            </ResultItem>
            <ResultItem style={{ marginLeft: '6rem' }}>
              <div>Cantidad sugerida</div>
              <div>
                <strong>{unitResult} unidades</strong>
              </div>
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
                checked={field.value}
                label="Agregar un 10% al total de m2 recomendado por el potencial desperdicio de material"
                style={{ fontSize: '14px', fontWeight: 400 }}
              />
            )}
          />
        </ResultContainer>
      ) : null}
      {showModal && (
        <HelpModal isOpen={showModal} onClose={() => setShowModal(false)} />
      )}
    </FormContainer>
  );
};
export default PaintCalculator;

import { ResultContainer, InputGroup, FormContainer } from './style';
import CheckBox from '@components/atoms/checkbox-bit';
import { useEffect, useState } from 'react';
import { Textfield } from '@cencosud-ds/easy-design-system';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import HelpModal from './components/help-modal';
import { setQuantity } from '@store/product';
import Button from '@components/atoms/button-bit';
import { Controller, useForm } from 'react-hook-form';
import TitleCalculator from '../components/title';
import { calculateFloorQuantity } from '@use-cases/product/use-calculator';

type CalculatorForm = {
  coverage: number;
  extraChecked: boolean;
};

const FloorCalculator = () => {
  const dispatch = useAppDispatch();
  const {
    control,
    watch,
    getValues,
    formState: { isValid },
  } = useForm<CalculatorForm>();

  const { product } = useAppSelector((state) => state.product);

  const coverageArea = product?.specifications?.['Rendimiento'];
  const prices = product?.items?.[0]?.sellers?.[0]?.commertialOffer?.prices;

  const [result, setResult] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const calculate = () => {
    const formValues = watch();
    if (isValid && coverageArea) {
      const value = coverageArea[0]?.replace(' m2', '').replace(',', '.');
      const resultFloorCalculator = calculateFloorQuantity(value, formValues);
      dispatch(setQuantity(resultFloorCalculator.unitResult));
    } else setResult(0);
  };

  const blockInvalidChar = (e: React.KeyboardEvent<HTMLInputElement>) =>
    ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

  const handleHelp = () => {
    setShowModal(true);
  };

  useEffect(() => {
    calculate();
  }, [watch()]);

  if (!coverageArea) return null;
  return (
    <FormContainer>
      <TitleCalculator variant={'floor'} text="¿Cuántas cajas necesito?" />
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
            />
            <span>m²</span>
          </InputGroup>
        )}
      />
      <Button
        variant="link"
        type="button"
        label="Ayuda para calcular m²"
        onClick={handleHelp}
        style={{ fontSize: '14px', padding: '0', justifyContent: 'start' }}
      />
      {result ? (
        <ResultContainer>
          <div>
            Necesitas: <strong>{result} cajas</strong> para cubrir los{' '}
            {getValues('coverage')} m²
          </div>
          {prices?.normalPrice && (
            <div>
              Total estimado:{' '}
              <span style={{ color: 'darkred', fontWeight: 'bold' }}>
                ${prices?.normalPrice * result}
              </span>
            </div>
          )}
          <div style={{ margin: '16px 0' }}>
            <hr />
          </div>
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

export default FloorCalculator;

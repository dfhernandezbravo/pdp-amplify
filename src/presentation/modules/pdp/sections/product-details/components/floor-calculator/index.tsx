import Image from 'next/image';
import {
  Container,
  Title,
  Text,
  ResultContainer,
  InputGroup,
  Icon,
} from './style';
import CheckBox from '@components/atoms/checkbox-bit';
import { useState } from 'react';
import { Textfield } from '@cencosud-ds/easy-design-system';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import HelpModal from './components/help-modal';
import { setQuantity } from '@store/product';
import Button from '@components/atoms/button-bit';

const FloorCalculator = () => {
  const dispatch = useAppDispatch();
  const { product } = useAppSelector((state) => state.product);

  const coverageArea = product?.specifications?.['Rendimiento'];
  const prices = product?.items?.[0]?.sellers?.[0]?.commertialOffer?.prices;

  const [extraChecked, setExtraChecked] = useState(true);
  const [result, setResult] = useState(0);
  const [inputValue, setInputValue] = useState<number | undefined>(undefined);
  const [showModal, setShowModal] = useState(false);

  const calculate = (inputValue: number, extraChecked: boolean) => {
    if (coverageArea && inputValue) {
      const value = coverageArea[0]?.replace(' m2', '').replace(',', '.');
      try {
        const coverageValue = parseFloat(value);
        let result = inputValue / coverageValue;
        if (extraChecked) {
          result = result * 1.1;
        }
        result = Math.ceil(result);
        setResult(result);

        dispatch(setQuantity(result));
      } catch (e) {
        setResult(0);
      }
    } else setResult(0);
  };

  const handleChangeValue = (value: string) => {
    if (value) {
      const newValue = parseFloat(value);
      setInputValue(newValue);
      calculate(newValue, extraChecked);
    } else setResult(0);
  };

  const handleHelp = () => {
    setShowModal(true);
  };

  const handleCheck = (checked: boolean) => {
    setExtraChecked(checked);
    calculate(inputValue || 0, checked);
  };

  if (!coverageArea) return null;
  return (
    <Container>
      <Title>
        <Icon>
          <Image
            src="/icons/product/floor-calculator.svg"
            alt="Floor calculator"
            width={24}
            height={24}
          />
        </Icon>
        ¿Cuántas cajas necesito?
      </Title>
      <Text>
        Ingresa los <strong>m²</strong> que debes cubrir
      </Text>
      <InputGroup>
        <Textfield
          label="Superficie"
          placeholder=""
          onChange={(e) => handleChangeValue(e.target.value)}
          type="number"
        />
        <span>m²</span>
      </InputGroup>
      <Button
        variant="link"
        type="button"
        label="Ayuda para calcular m²"
        onClick={handleHelp}
        style={{ fontSize: '14px', padding: '0', justifyContent: 'start' }}
      />
      {result ? (
        <ResultContainer>
          <p>
            Necesitas: <strong>{result} cajas</strong>
          </p>
          {prices?.normalPrice && (
            <p>
              Total estimado: <strong>${prices?.normalPrice * result}</strong>
            </p>
          )}
          <div style={{ margin: '16px 0' }}>
            <hr />
          </div>
          <CheckBox
            label="Agregar un 10% al total de m2 recomendado por el potencial desperdicio de material"
            onChange={(e) => handleCheck(e.target.checked)}
            checked={extraChecked}
            style={{ fontSize: '14px', fontWeight: 400 }}
          />
        </ResultContainer>
      ) : null}
      {showModal && (
        <HelpModal isOpen={showModal} onClose={() => setShowModal(false)} />
      )}
    </Container>
  );
};

export default FloorCalculator;

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { QuantitySelectorProps } from './types';
import { Button, QuantitySelectorContainer } from './styles';
import { useEffect } from 'react';

const QuantitySelector = (props: QuantitySelectorProps) => {
  // props
  const {
    quantity,
    onIncrementQuantity,
    onDecrementQuantity,
    onChange,
    disabled,
    max,
  } = props;

  useEffect(() => {
    if (quantity > max) onChange(max);
    if (quantity < 1) onChange(1);
  }, [quantity, max]);

  return (
    <QuantitySelectorContainer>
      <Button
        side="left"
        className="quantitySelectorBtn quantitySelectorBtn--minus"
        onClick={onDecrementQuantity}
        disabled={quantity === 1}
      >
        <AiOutlineMinus />
      </Button>
      <input
        type="number"
        name="quantityInput"
        max={max}
        min={1}
        onChange={(e) => onChange(+e.target.value)}
        value={quantity}
        className="quantityInput"
        disabled={disabled}
      />
      <Button
        side="right"
        className="quantitySelectorBtn quantitySelectorBtn--plus"
        onClick={onIncrementQuantity}
      >
        <AiOutlinePlus />
      </Button>
    </QuantitySelectorContainer>
  );
};

export default QuantitySelector;

export type QuantitySelectorProps = {
  index: number;
  quantity: number;
  onIncrementQuantity: () => void;
  onDecrementQuantity: () => void;
  onChange: (quantity: number) => void;
  disabled: boolean;
  max: number;
};

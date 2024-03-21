type FormPaintCalculator = {
  coverage: number;
  extraChecked: boolean;
  hands: number;
};
type PaintCalculatorResult = {
  unitResult: number;
  gallonResult: number;
};
type FormFloorCalculator = {
  coverage: number;
  extraChecked: boolean;
};
type FloorCalculatorResult = {
  unitResult: number;
};
const calculatePaintQuantity = (
  liters: string,
  formValues: FormPaintCalculator,
): PaintCalculatorResult => {
  const coveragePerLiter = 10; // 10m² por litro
  const litersPerGallon = 3.78; // 1 galón = 3.78 litros

  const litersValue = parseFloat(liters);
  const inputValue = formValues.coverage;
  try {
    let literResult = inputValue / coveragePerLiter;
    if (formValues.extraChecked) {
      literResult = literResult * 1.1;
    }
    if (formValues.hands) {
      literResult = literResult * formValues.hands;
    }
    const gallonsResult = literResult / litersPerGallon;
    const unitResult = Math.ceil(literResult / litersValue);

    return {
      unitResult,
      gallonResult: parseFloat(gallonsResult.toFixed(1)),
    };
  } catch (e) {
    return {
      unitResult: 0,
      gallonResult: 0,
    };
  }
};

const calculateFloorQuantity = (
  coverage: string,
  formValues: FormFloorCalculator,
): FloorCalculatorResult => {
  const inputValue = formValues.coverage;
  try {
    const coverageValue = parseFloat(coverage);
    let result = inputValue / coverageValue;
    if (formValues.extraChecked) {
      result = result * 1.1;
    }
    result = Math.ceil(result);
    return {
      unitResult: result,
    };
  } catch (e) {
    return {
      unitResult: 0,
    };
  }
};

export { calculatePaintQuantity, calculateFloorQuantity };

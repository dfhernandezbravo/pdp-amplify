import { CharacteristicTable } from '@cencosud-ds/easy-design-system';
import { TableContainer, Title } from './style';
import { useAppSelector } from '@hooks/storeHooks';
import { useEffect, useState } from 'react';

type spec = {
  name: string;
  value: string;
};

type specificationsType = {
  [key: string]: spec[];
};

type specObjectType = {
  [key: string]: string[];
};

const SpecificationsTables = () => {
  const { product } = useAppSelector((state) => state.product);
  const [specifications, setSpecifications] = useState<specificationsType>();

  const formatSpecifications = (
    specArray: string[],
    specObject: specObjectType,
  ) => {
    const result: specificationsType = {};
    specArray.forEach((spec) => {
      // Check if the specification exists in the object
      if (spec in specObject) {
        // If it exists, get the values associated with that specification
        result[spec] = specObject[spec].map((prop) => {
          const item = { name: prop, value: specObject[prop][0] };
          return item;
        });
      }
    });

    return result;
  };

  useEffect(() => {
    if (product?.allSpecificationsGroups) {
      const values = formatSpecifications(
        product?.allSpecificationsGroups,
        product?.specifications,
      );
      setSpecifications(values);
    }
  }, [product?.allSpecificationsGroups]);

  return (
    <TableContainer>
      <Title>Características de producto</Title>
      {specifications &&
        Object.keys(specifications).map((spec) => (
          <CharacteristicTable
            key={spec}
            title={spec}
            rows={specifications[spec]}
          />
        ))}
    </TableContainer>
  );
};

export default SpecificationsTables;

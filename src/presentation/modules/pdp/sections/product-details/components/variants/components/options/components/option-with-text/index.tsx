import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { OptionsContainer, StyledLink, OutOfStock } from './styles';
import { Item } from '@entities/product/get-product.response';

type Props = { options: Item[]; variation: string };

const OptionWithText = ({ options, variation }: Props) => {
  const [selected, setSelected] = useState<string>();
  const router = useRouter();

  const defaultOption = () => {
    return options?.find(
      (option) => option?.sellers?.[0]?.commertialOffer?.availableQuantity > 0,
    )?.itemSpecifications?.[variation][0];
  };

  const selectOption = (option: Item) => {
    const skuId = option?.itemId;
    router.push(
      {
        query: {
          department: router.query.department,
          skuId: skuId,
        },
      },
      undefined,
      { shallow: true },
    );
    setSelected(option?.itemSpecifications?.[variation][0]);
  };

  useEffect(() => {
    setSelected(defaultOption());
  }, [variation]);

  return (
    <OptionsContainer>
      {options?.map((option) => {
        const optionValue = option?.itemSpecifications?.[variation][0];
        const skuId = option?.itemId;
        const outOfStock =
          option?.sellers?.[0]?.commertialOffer?.availableQuantity === 0;

        return outOfStock ? (
          <OutOfStock>{optionValue}</OutOfStock>
        ) : (
          <StyledLink
            onClick={() => !outOfStock && selectOption(option)}
            selected={selected === optionValue}
            key={skuId}
          >
            {optionValue}
          </StyledLink>
        );
      })}
    </OptionsContainer>
  );
};

export default OptionWithText;

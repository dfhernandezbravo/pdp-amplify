import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { OptionsContainer, StyledLink, OutOfStock } from './styles';
import { Item } from '@entities/product/get-product.response';
import { useAppSelector } from '@hooks/storeHooks';

type Props = { options: Item[]; variation: string };

const OptionWithText = ({ options, variation }: Props) => {
  const [selected, setSelected] = useState<string>();
  const { selectedItem } = useAppSelector((state) => state.product);
  const router = useRouter();

  const defaultOption = () => {
    return selectedItem?.itemSpecifications?.[variation][0];
  };

  const selectOption = (option: Item) => {
    const skuId = option?.itemId;

    const newUrl = `/${router.query.department}/p?skuId=${skuId}`;

    window.history.replaceState(
      { ...window.history.state, as: newUrl, url: newUrl },
      '',
      newUrl,
    );
    setSelected(option?.itemSpecifications?.[variation][0]);
  };

  useEffect(() => {
    setSelected(defaultOption());
    if (variation === 'Tallas') {
      const arrayForSort = [...options];
      arrayForSort.sort((a, b) => {
        const optionValueA = a?.itemSpecifications?.[variation][0];
        const optionValueB = b?.itemSpecifications?.[variation][0];
        const numberA = parseInt(optionValueA);
        const numberB = parseInt(optionValueB);
        return numberA - numberB;
      });
    }
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

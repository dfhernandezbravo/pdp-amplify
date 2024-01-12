import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Item } from '@entities/product/get-product.response';
import { StyledLink, OptionsContainer } from './styles';

type Props = { options: Item[]; variation: string };

const OptionWithImage = ({ options, variation }: Props) => {
  const [selected, setSelected] = useState<string>();
  const pathname = usePathname();

  const defaultOption = () => {
    const firstOptionWithStock = options?.find(
      (option) => option?.sellers?.[0]?.commertialOffer?.availableQuantity > 0,
    );
    return firstOptionWithStock?.images?.[0]?.imageUrl;
  };

  useEffect(() => {
    setSelected(defaultOption());
  }, [variation]);

  return (
    <OptionsContainer>
      {options?.map((option, i) => {
        const optionName = option?.itemSpecifications?.[variation][0];
        const imageUrl = option?.images?.[0]?.imageUrl;
        const imageText =
          option?.images?.[0]?.imageText || `variant-${optionName}-${i + 1}`;
        const skuId = option?.itemId;
        const outOfStock =
          option?.sellers?.[0]?.commertialOffer?.availableQuantity === 0;

        return (
          <StyledLink
            onClick={() => setSelected(imageUrl)}
            disabled={outOfStock}
            selected={selected === imageUrl}
            href={pathname + '?skuId=' + skuId}
            shallow
            key={skuId}
          >
            <Image src={imageUrl} alt={imageText} height={1167} width={934} />
          </StyledLink>
        );
      })}
    </OptionsContainer>
  );
};

export default OptionWithImage;

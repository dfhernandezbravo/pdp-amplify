import Image from 'next/image';
import { Title, Icon, Text } from './style';

type Props = {
  variant: 'paint' | 'floor';
  text: string;
};

const TitleCalculator = (props: Props) => {
  const { variant, text } = props;
  return (
    <>
      <Title>
        <Icon>
          <Image
            src={`/icons/product/${variant}-calculator.svg`}
            alt={`${variant} calculator`}
            width={24}
            height={24}
          />
        </Icon>
        {text}
      </Title>
      <Text>
        Ingresa los <strong>m²</strong> que debes cubrir
      </Text>
    </>
  );
};

export default TitleCalculator;

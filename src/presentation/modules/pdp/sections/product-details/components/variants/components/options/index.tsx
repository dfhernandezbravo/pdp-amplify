import { Item } from '@entities/product/get-product.response';
import OptionWithImage from './components/option-with-image';
import OptionWithText from './components/option-with-text';

type Props = { options: Item[]; variation: string };

const Options = ({ options, variation }: Props) => {
  return variation === 'Color' ? (
    <OptionWithImage options={options} variation={variation} />
  ) : (
    <OptionWithText options={options} variation={variation} />
  );
};

export default Options;

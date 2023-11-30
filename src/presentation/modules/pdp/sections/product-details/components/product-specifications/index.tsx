import { Link, List } from './style';
import { ProductSpecificationsProps } from './types';

const ProductSpecifications = ({ items }: ProductSpecificationsProps) => {
  return (
    <>
      <List>
        {Object.entries(items).map((item, i) => {
          if (i < 4)
            return (
              <li key={item[0]}>
                <span>
                  {item[0]}
                  <b>{item[1]}</b>
                </span>
              </li>
            );
        })}
      </List>
      <Link href="#specifications">Ver más características</Link>
    </>
  );
};

export default ProductSpecifications;

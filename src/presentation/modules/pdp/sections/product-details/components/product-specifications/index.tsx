import { GlobalStyle, Link, List } from './style';
import { ProductSpecificationsProps } from './types';

const ProductSpecifications = ({ items }: ProductSpecificationsProps) => {
  return (
    <>
      <GlobalStyle />
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
      <span>
        <Link href="#specifications">Ver más características</Link>
      </span>
    </>
  );
};

export default ProductSpecifications;

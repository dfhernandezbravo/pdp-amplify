import { useAppSelector } from '@hooks/storeHooks';
import { GlobalStyle, Link, List } from './style';

const ProductSpecifications = () => {
  const { product } = useAppSelector((state) => state.product);

  if (product?.specifications)
    return (
      <>
        <GlobalStyle />
        <List>
          {Object.entries(product?.specifications).map((item, i) => {
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
  else return null;
};

export default ProductSpecifications;

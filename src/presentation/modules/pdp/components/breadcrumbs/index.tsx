import { Breadcrumbs } from '@cencosud-ds/easy-design-system';
import { useAppSelector } from '@hooks/storeHooks';
import { BreadCrumbsContainer } from './style';

const PdpBreadcrumbs = () => {
  const { product } = useAppSelector((state) => state.product);

  if (product?.categories?.[0]) {
    return (
      <BreadCrumbsContainer>
        <Breadcrumbs
          init="Inicio"
          url={product?.categories?.[0]}
          finalText={product?.productName}
        />
      </BreadCrumbsContainer>
    );
  } else return null;
};

export default PdpBreadcrumbs;

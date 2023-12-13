import { Breadcrumbs } from '@cencosud-ds/easy-design-system';
import { useAppSelector } from '@hooks/storeHooks';
import { BreadCrumbsContainer } from './style';
import Link from 'next/link';

const PdpBreadcrumbs = () => {
  const { product } = useAppSelector((state) => state.product);

  const formatUrl = (url: string) =>
    url?.replaceAll(' ', '-').toLocaleLowerCase();

  const links = () => {
    if (product?.categories && product?.categories?.length > 0) {
      const arrayLinks = [...product.categories, product?.productName];
      return arrayLinks;
    }
    return [];
  };

  return (
    <BreadCrumbsContainer>
      {links() && (
        <Breadcrumbs>
          {links()?.map((link, i, { length }) => {
            if (i + 1 === length) return <span key={link}>{link}</span>;
            if (i + 1 < length)
              return (
                <Link key={link} href={formatUrl(link)}>
                  {product?.categories?.[0].split('/')?.[i + 1]}
                </Link>
              );
          })}
        </Breadcrumbs>
      )}
    </BreadCrumbsContainer>
  );
};

export default PdpBreadcrumbs;

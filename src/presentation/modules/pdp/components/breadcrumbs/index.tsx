import { Breadcrumbs } from '@cencosud-ds/easy-design-system';
import { useAppSelector } from '@hooks/storeHooks';
import { BreadCrumbsContainer, LastParagraph, LinksFormat } from './style';

const PdpBreadcrumbs = () => {
  const { product } = useAppSelector((state) => state.product);

  const formatUrl = (url: string) =>
    url?.replaceAll(' ', '-').toLocaleLowerCase();

  const links = () => {
    if (product?.categories && product?.categories?.length > 0) {
      const categories = [...product.categories].reverse();
      const arrayLinks = [...categories, product?.productName];
      return arrayLinks;
    }
    return [];
  };

  return (
    <BreadCrumbsContainer>
      {links() && (
        <Breadcrumbs>
          {links()?.map((link, i, { length }) => {
            if (i + 1 === length)
              return <LastParagraph key={link}>{link}</LastParagraph>;
            if (i + 1 < length) {
              return (
                <LinksFormat key={link} href={formatUrl(link)}>
                  {product?.categories?.[0].split('/')?.[i + 1]}
                </LinksFormat>
              );
            }
          })}
        </Breadcrumbs>
      )}
    </BreadCrumbsContainer>
  );
};

export default PdpBreadcrumbs;

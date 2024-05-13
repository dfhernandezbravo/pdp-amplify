import { Breadcrumbs } from '@components/atoms/breadcrumbs/breadcrumbs';
import { GetProduct } from '@entities/product/get-product.response';
import { useAppSelector } from '@hooks/storeHooks';
import { BreadCrumbsContainer, LastParagraph, LinksFormat } from './style';
import { useBreadcrumbs } from './useBreadcrumbs';

const getUrl = (product?: GetProduct) => {
  if (product?.categories) {
    const category = product?.categories?.[0];
    const url = `${category}${product?.productName}`;
    return url;
  }
  return '';
};

const PdpBreadcrumbs = () => {
  const { product } = useAppSelector((state) => state.product);
  let { links, setShowAll } = useBreadcrumbs({ url: getUrl(product) });

  return (
    <BreadCrumbsContainer>
      <Breadcrumbs>
        {links?.map((link, i, { length }) => {
          if (i + 1 === length)
            return (
              <LastParagraph key={`${link}_${i}`}>{link.text}</LastParagraph>
            );
          if (i + 1 < length) {
            return (
              <LinksFormat key={`${link}_${i}`} href={link.href}>
                {link.href === '#' ? (
                  <span onClick={() => setShowAll(true)}>{link.text}</span>
                ) : (
                  <span>{link.text}</span>
                )}
              </LinksFormat>
            );
          }
        })}
      </Breadcrumbs>
    </BreadCrumbsContainer>
  );
};

export default PdpBreadcrumbs;

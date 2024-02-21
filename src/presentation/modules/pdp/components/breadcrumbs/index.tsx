import {
  Breadcrumbs,
  useBreadcrumbs,
  useDevice,
} from '@cencosud-ds/easy-design-system';
import { useAppSelector } from '@hooks/storeHooks';
import { BreadCrumbsContainer, LastParagraph, LinksFormat } from './style';
import { GetProduct } from '@entities/product/get-product.response';
import { useState } from 'react';

type Links = {
  text: string;
  href: string;
};

const getUrl = (product?: GetProduct) => {
  if (product?.categories) {
    const category = product?.categories?.[0];
    const url = `${category}/${product?.productName}`;
    return url.replace(/\/\//g, '/').replace(/-/g, ' ');
  }
  return '';
};

const PdpBreadcrumbs = () => {
  const { device } = useDevice();
  const { product } = useAppSelector((state) => state.product);
  let { links } = useBreadcrumbs({ url: getUrl(product) });

  const [showAll, setShowAll] = useState(false);

  const getLinks = (links: Links[]) => {
    // se quitan todos los elementos vacios
    links = links?.filter((link) => link.text);

    // solo para mobile se muestra solo el ultimo elemento y se agrega la opcion de ver mas
    if (device === 'Phone' && !showAll && links?.length > 2) {
      links = [{ text: '...', href: '#' }, ...links.slice(-2)];
    }

    return links;
  };

  return (
    <BreadCrumbsContainer>
      <Breadcrumbs>
        {getLinks(links)?.map((link, i, { length }) => {
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

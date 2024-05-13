import { useDevice } from '@hooks/use-device';
import { useEffect, useState } from 'react';
import { useSlugify } from './useSlugify';

type Links = {
  text: string;
  href: string;
};

interface Props {
  url: string;
}

interface UseBreadcrumbs {
  links: Links[];
  setShowAll: (showAll: boolean) => void;
}

export function useBreadcrumbs({ url }: Props): UseBreadcrumbs {
  const [links, setLinks] = useState<Links[]>([]);
  const { slugify } = useSlugify();
  const { device } = useDevice();
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const elementsUrl = url.split('/');
    const linkAux: Links[] = elementsUrl.reduce(
      (acc: Links[], curr: string) => {
        const lastHref = acc.length > 0 ? acc[acc.length - 1].href : '';
        const link: Links = {
          text: curr,
          href: lastHref + '/' + slugify(curr),
        };
        acc.push(link);
        return acc;
      },
      [] as Links[],
    );
    setLinks(linkAux);
  }, [url]);

  const getLinks = (links: Links[]) => {
    // se quitan todos los elementos vacios
    links = links?.filter((link) => link.text);

    // solo para mobile se muestra solo el ultimo elemento y se agrega la opcion de ver mas
    if (device === 'Phone' && !showAll && links?.length > 2) {
      links = [{ text: '...', href: '#' }, ...links.slice(-2)];
    }

    return links;
  };

  return {
    links: getLinks(links),
    setShowAll,
  };
}

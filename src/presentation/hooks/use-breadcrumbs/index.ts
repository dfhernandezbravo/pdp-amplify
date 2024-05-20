import { useState } from 'react';

type Links = {
  text: string;
  href: string;
};

interface UseBreadcrumbs {
  links: Links[];
  splitUrl: (url: string) => void;
}

export function useBreadcrumbs(): UseBreadcrumbs {
  const [links, setLinks] = useState<Links[]>([]);
  const regex = /-/g;

  const splitUrl = (url: string) => {
    const elementsUrl = url.split('/');
    let currentUrl = '';
    const linkAux: Links[] = [];

    elementsUrl.forEach((element) => {
      currentUrl += `/${element}`;

      const link: Links = {
        text: element.replace(regex, ' ').split('?')[0],
        href: currentUrl.split('?')[0],
      };

      linkAux.push(link);
    });

    setLinks(linkAux);
    return linkAux;
  };

  return {
    links,
    splitUrl,
  };
}

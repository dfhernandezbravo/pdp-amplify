import dynamic from 'next/dynamic';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa6';
import { BreadcrumbContainer, BreadcrumbItem } from './styles';

const Layout = dynamic(
  import('@ccom-easy-design-system/atoms.layout').then(
    (module) => module.Layout,
  ),
  {
    ssr: false,
  },
);

interface Props {
  children: React.ReactNode[];
}

export const Breadcrumbs = ({ children }: Props) => {
  return (
    <BreadcrumbContainer>
      <Layout is={['Desktop', 'Tablet']}>
        {children.map((element, index) => (
          <BreadcrumbItem $isLast={index === children.length - 1} key={index}>
            {element}
            {index < children.length - 1 && <FaAngleRight />}
          </BreadcrumbItem>
        ))}
      </Layout>
      <Layout is={['Phone']}>
        <BreadcrumbItem $isLast={false}>
          {children[0]} <FaAngleRight />
        </BreadcrumbItem>
        <BreadcrumbItem $isLast={true}>
          {children[children.length - 1]}
        </BreadcrumbItem>
      </Layout>
    </BreadcrumbContainer>
  );
};

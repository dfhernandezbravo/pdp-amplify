import styled from 'styled-components';
import Link from 'next/link';

export const BreadCrumbsContainer = styled.div`
  margin-bottom: 1rem;
  padding-left: 1.1rem;
`;

export const LinksFormat = styled(Link)`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

export const LastParagraph = styled.span`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

export type RibbonsGroups =
  | 'event'
  | 'promotionShipping'
  | 'promotions'
  | 'promotionDiscount'
  | 'exclusive'
  | 'logistic';

export type RibbonProps = {
  group: RibbonsGroups[];
};

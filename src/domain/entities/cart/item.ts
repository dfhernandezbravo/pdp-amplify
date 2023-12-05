import { Adjustment } from './adjustment';

export type Item = {
  itemId: string;
  quantity: number;
  product: {
    id: string;
    sku: string;
    description: string;
    availability: string;
    category: string;
    unit: string;
    unitValue: number;
    size: string;
    color: string;
    prices: {
      currency: string;
      normalPrice: number;
      offerPrice: number;
      brandPrice: number;
    };
    images: string;
    brand: string;
    seller: {
      id: string;
      name: string;
    };
    options: [
      {
        type: string;
        id: string;
        description: string;
        price: number;
      },
    ];
  };
  adjustment: Adjustment[];
  priceAfterDiscount: number;
};

export type AddItemShoppingCartEvent = {
  cartId?: string;
  product: {
    imageUrl: string;
    productName: string;
    id: string;
    productId: string;
    brand: string;
    quantity: number;
    prices: {
      brandPrice: number | null;
      currency: string;
      normalPrice: number;
      offerPrice: number | null;
    };
    paintingCode?: {
      code?: string;
      hexColor?: string;
    };
  };
};

export type AddItemShoppingCartEvent = {
  cartId?: string;
  product: {
    imageUrl: string;
    productName: string;
    productId: string;
    brand: string;
    quantity: number;
    prices: {
      brandPrice: number;
      currency: string;
      normalPrice: number;
      offerPrice: number;
    };
  };
};
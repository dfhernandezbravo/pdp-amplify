import { GetCart as Cart } from '@entities/cart/get-cart.response';
import { createSlice } from '@reduxjs/toolkit';

type CartState = {
  cartId?: string;
  cart?: Cart;
  loadingCart: boolean;
  quantityInCart: number | undefined;
  loadingQuantity: boolean;
};

const initialState: CartState = {
  cartId: undefined,
  cart: undefined,
  loadingCart: false,
  quantityInCart: undefined,
  loadingQuantity: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartId: (state, { payload }) => {
      state.cartId = payload;
    },
    setCart: (state, { payload }) => {
      state.cart = payload;
    },
  },
});

export const { setCart, setCartId } = cartSlice.actions;
export default cartSlice;

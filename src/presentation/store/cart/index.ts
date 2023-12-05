import { GetCart } from '@entities/cart/get-cart.response';
import { createSlice } from '@reduxjs/toolkit';

type CartState = {
  cartId?: string;
  cart?: GetCart;
  loadingCart: boolean;
};

const initialState: CartState = {
  cartId: undefined,
  cart: undefined,
  loadingCart: false,
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

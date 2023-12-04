import { createSlice } from '@reduxjs/toolkit';

type CartState = {
  cartId?: string;
  loadingCart: boolean;
};

const initialState: CartState = {
  cartId: undefined,
  loadingCart: false,
};

const cartSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setCartId: (state, { payload }) => {
      state.cartId = payload;
    },
  },
});

export const { setCartId } = cartSlice.actions;
export default cartSlice;

import { createSlice } from '@reduxjs/toolkit';
import { GetProduct } from '@entities/product/get-product.response';

type ProductState = {
  product: GetProduct | undefined;
  loadingProducts: boolean;
};

const initialState: ProductState = {
  product: undefined,
  loadingProducts: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, { payload }) => {
      state.product = payload;
    },
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice;

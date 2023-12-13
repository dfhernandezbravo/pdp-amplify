import { createSlice } from '@reduxjs/toolkit';
import { GetProduct } from '@entities/product/get-product.response';

type ProductState = {
  product: GetProduct | undefined;
  loadingProduct: boolean;
};

const initialState: ProductState = {
  product: undefined,
  loadingProduct: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, { payload }) => {
      state.product = payload;
    },
    setLoadingProduct: (state, { payload }) => {
      state.loadingProduct = payload;
    },
  },
});

export const { setProduct, setLoadingProduct } = productSlice.actions;
export default productSlice;

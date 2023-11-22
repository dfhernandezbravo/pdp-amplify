import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../../domain/entities/product.type';

type ProductState = {
  product: Product | undefined;
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

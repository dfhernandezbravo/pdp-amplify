import { createSlice } from '@reduxjs/toolkit';
import { GetProduct } from '@entities/product/get-product.response';

type ProductState = {
  product: GetProduct | undefined;
  loadingProduct: boolean;
  additionalService: boolean;
};

const initialState: ProductState = {
  product: undefined,
  loadingProduct: false,
  additionalService: true,
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
    setAdditionalService: (state, { payload }) => {
      state.additionalService = payload;
    },
  },
});

export const { setProduct, setLoadingProduct, setAdditionalService } =
  productSlice.actions;
export default productSlice;

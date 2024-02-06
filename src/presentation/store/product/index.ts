import { createSlice } from '@reduxjs/toolkit';
import { GetProduct, Item } from '@entities/product/get-product.response';

type ProductState = {
  product: GetProduct | undefined;
  selectedVariant: Item | undefined;
  loadingProduct: boolean;
  additionalService: boolean;
};

const initialState: ProductState = {
  product: undefined,
  selectedVariant: undefined,
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
    setSelectedVariant: (state, { payload }) => {
      state.selectedVariant = payload;
    },
    setLoadingProduct: (state, { payload }) => {
      state.loadingProduct = payload;
    },
    setAdditionalService: (state, { payload }) => {
      state.additionalService = payload;
    },
  },
});

export const {
  setProduct,
  setLoadingProduct,
  setAdditionalService,
  setSelectedVariant,
} = productSlice.actions;
export default productSlice;

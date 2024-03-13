import { createSlice } from '@reduxjs/toolkit';
import { GetProduct, Item } from '@entities/product/get-product.response';

type ProductState = {
  product: GetProduct | undefined;
  selectedVariant: Item | undefined;
  loadingProduct: boolean;
  additionalService: boolean;
  quantity: number;
};

const initialState: ProductState = {
  product: undefined,
  selectedVariant: undefined,
  loadingProduct: false,
  additionalService: true,
  quantity: 1,
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
    setQuantity: (state, { payload }) => {
      state.quantity = payload;
    },
  },
});

export const {
  setProduct,
  setLoadingProduct,
  setAdditionalService,
  setSelectedVariant,
  setQuantity,
} = productSlice.actions;
export default productSlice;

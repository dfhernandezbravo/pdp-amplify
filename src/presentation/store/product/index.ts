import { createSlice } from '@reduxjs/toolkit';
import { GetProduct, Item } from '@entities/product/get-product.response';

type ProductState = {
  product: GetProduct | undefined;
  selectedItem: Item | undefined;
  loadingProduct: boolean;
  additionalService: boolean;
};

const initialState: ProductState = {
  product: undefined,
  selectedItem: undefined,
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
    setSelectedItem: (state, { payload }) => {
      state.selectedItem = payload;
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
  setSelectedItem,
} = productSlice.actions;
export default productSlice;

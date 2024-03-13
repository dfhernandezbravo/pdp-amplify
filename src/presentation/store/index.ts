import { configureStore } from '@reduxjs/toolkit';
import productSlice from './product';
import cartSlice from './cart';
import gallerySlice from './gallery';
import tintometricSlice from './tintometric';

const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    cart: cartSlice.reducer,
    gallery: gallerySlice.reducer,
    tintometric: tintometricSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

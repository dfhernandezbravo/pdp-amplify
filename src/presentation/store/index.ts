import { configureStore } from '@reduxjs/toolkit';
import productSlice from './product';

const store = configureStore({
  reducer: {
    product: productSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

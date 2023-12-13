import { ProductImage } from '@entities/product-image';
import { createSlice } from '@reduxjs/toolkit';

type GalleryState = {
  images?: ProductImage[];
  activeIndex: number;
  zoomModalIndex: number;
  openZoomModal: boolean;
};

const initialState: GalleryState = {
  images: undefined,
  activeIndex: 0,
  zoomModalIndex: 0,
  openZoomModal: false,
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setImages: (state, { payload }) => {
      state.images = payload;
    },
    setActiveIndex: (state, { payload }) => {
      state.activeIndex = payload;
    },
    setZoomModalIndex: (state, { payload }) => {
      state.zoomModalIndex = payload;
    },
    setOpenZoomModal: (state, { payload }) => {
      state.openZoomModal = payload;
    },
  },
});

export const {
  setActiveIndex,
  setZoomModalIndex,
  setImages,
  setOpenZoomModal,
} = gallerySlice.actions;
export default gallerySlice;

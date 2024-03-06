import { createSlice } from '@reduxjs/toolkit';

type TintometricState = {
  openedColorGroup: string;
  selectedColor:
    | {
        codeName: string;
        name: string;
        hexCode: string;
      }
    | undefined;
  openMobileColorPicker: boolean;
};

const initialState: TintometricState = {
  openedColorGroup: '',
  selectedColor: undefined,
  openMobileColorPicker: false,
};

const tintometricSlice = createSlice({
  name: 'tintometric',
  initialState,
  reducers: {
    setOpenedColorGroup: (state, { payload }) => {
      if (state.openedColorGroup === payload) {
        state.openedColorGroup = '';
      } else state.openedColorGroup = payload;
    },
    setSelectedColor: (state, { payload }) => {
      state.selectedColor = payload;
    },
    setOpenMobileColorPicker: (state, { payload }) => {
      state.openMobileColorPicker = payload;
    },
  },
});

export const { setOpenedColorGroup, setSelectedColor } =
  tintometricSlice.actions;
export default tintometricSlice;

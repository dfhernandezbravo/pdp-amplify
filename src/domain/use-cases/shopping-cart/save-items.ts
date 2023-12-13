import { createAsyncThunk } from '@reduxjs/toolkit';
import dispatchCartHeaderEvent from './dispatch-cart-header-event';
import { AxiosError } from 'axios';
import {
  SaveShoppingCartItemsRequest,
  SetShoppingCartItemsRequest,
} from '@entities/cart/get-cart.response';
import cartService from '@services/cart';
import {
  dispatchMiniCartAddProductEvent,
  dispatchMiniCartEvent,
} from './dispatch-mini-cart-event';
import { Item } from '@entities/cart/item';
import { setCart } from '@store/cart';

type ParamsUseCase = {
  data: SaveShoppingCartItemsRequest;
  cartId: string;
  quantity: number;
  productReferenceId?: string;
};

type ParamsSetUseCase = {
  data: SetShoppingCartItemsRequest;
  cartId: string;
  quantity: number;
};

const totalItems = (items: Item[]): number => {
  let sum = 0;
  for (const obj of items) {
    sum += obj.quantity;
  }
  return sum;
};

export default totalItems;

export const addItemsShoppingCart = createAsyncThunk(
  'shopping-cart/items',
  async (
    params: ParamsUseCase,
    { fulfillWithValue, rejectWithValue, dispatch },
  ) => {
    try {
      const { data } = await cartService.addItem(params.data, params.cartId);
      const totalQuantity = totalItems(data.items);
      dispatchCartHeaderEvent({ quantity: totalQuantity });
      dispatchMiniCartEvent();
      dispatchMiniCartAddProductEvent({ ...data });
      dispatch(setCart(data));
      return fulfillWithValue(data);
    } catch (error) {
      const axiosError = error as AxiosError;
      const id = params?.productReferenceId;

      return rejectWithValue({
        error: axiosError?.response?.data,
        itemId: id,
      });
    }
  },
);

export const updateItemsShoppingCart = createAsyncThunk(
  'shopping-cart/items/set',
  async (
    params: ParamsSetUseCase,
    { fulfillWithValue, rejectWithValue, dispatch },
  ) => {
    try {
      const { data } = await cartService.updateItem(params.data, params.cartId);
      const totalQuantity = totalItems(data.items);
      dispatchCartHeaderEvent({ quantity: totalQuantity });
      dispatchMiniCartEvent();
      dispatchMiniCartAddProductEvent({ ...data });
      dispatch(setCart(data));
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

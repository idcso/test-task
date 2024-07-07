import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductSchema } from '../types/product';

const initialState: ProductSchema = {
  data: undefined,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.data = action.payload;
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.data?.push(action.payload);
    },
  },
});

export const { actions: productActions } = productSlice;
export const { reducer: productReducer } = productSlice;

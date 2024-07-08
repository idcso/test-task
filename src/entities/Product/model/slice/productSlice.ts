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
    updateProducts: (state, action: PayloadAction<Product>) => {
      const updatedProduct = action.payload;
      state.data?.map((p) => (p.id === updatedProduct.id ? updatedProduct : p));
    },
    filterProducts: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        data: state.data?.filter((product) => product.id !== action.payload),
      };
    },
  },
});

export const { actions: productActions } = productSlice;
export const { reducer: productReducer } = productSlice;

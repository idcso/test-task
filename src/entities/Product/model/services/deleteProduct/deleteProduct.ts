import { AppDispatch } from '@/app/providers/storeProvider';
import axios from 'axios';
import { productActions } from '../../slice/productSlice';
import { Product } from '../../types/product';

export const deleteProduct = (id: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      await axios.delete<Product>(`http://localhost:3000/products/${id}`);
      dispatch(productActions.filterProducts(id));
    } catch (error) {
      console.log(error);
    }
  };
};

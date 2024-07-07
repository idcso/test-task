import { AppDispatch } from '@/app/providers/storeProvider';
import axios from 'axios';
import { productActions } from '../../slice/productSlice';
import { Product } from '../../types/product';

export const initializeProducts = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const products = await axios.get<Product[]>(
        'http://localhost:3000/products'
      );
      dispatch(productActions.setProducts(products.data));
    } catch (error) {
      console.log(error);
    }
  };
};

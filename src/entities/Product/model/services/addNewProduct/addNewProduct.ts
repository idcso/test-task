import { AppDispatch } from '@/app/providers/storeProvider';
import axios from 'axios';
import { productActions } from '../../slice/productSlice';
import { Product, ProductWithoutId } from '../../types/product';

export const addNewProduct = (data: ProductWithoutId) => {
  return async (dispatch: AppDispatch) => {
    try {
      const newProduct = await axios.post<Product>(
        'http://localhost:3000/products',
        data
      );
      dispatch(productActions.addProduct(newProduct.data));
    } catch (error) {
      console.log(error);
    }
  };
};

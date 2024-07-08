import { AppDispatch } from '@/app/providers/storeProvider';
import axios from 'axios';
import { productActions } from '../../slice/productSlice';
import { Product, ProductWithoutId } from '../../types/product';

export const editProduct = (data: ProductWithoutId, id: string | undefined) => {
  return async (dispatch: AppDispatch) => {
    try {
      const updatedProduct = await axios.put<Product>(
        `http://localhost:3000/products/${id}`,
        data
      );
      dispatch(productActions.updateProducts(updatedProduct.data));
    } catch (error) {
      console.log(error);
    }
  };
};

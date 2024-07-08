export { getProductsData } from './model/selectors/getProductsData';
export { addNewProduct } from './model/services/addNewProduct/addNewProduct';
export { deleteProduct } from './model/services/deleteProduct/deleteProduct';
export { editProduct } from './model/services/editProduct/editProduct';
export { initializeProducts } from './model/services/initializeProducts/initializeProducts';
export { productReducer } from './model/slice/productSlice';
export { ProductStatus } from './model/types/product';
export type {
  Product,
  ProductSchema,
  ProductWithoutId,
} from './model/types/product';

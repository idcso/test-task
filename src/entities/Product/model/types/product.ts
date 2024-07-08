export enum ProductStatus {
  ACTIVE = 'active',
  ARCHIVE = 'archive',
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string[];
  price: string;
  status: ProductStatus;
}

export type ProductWithoutId = Omit<Product, 'id'>;

export interface ProductSchema {
  data?: Product[];
}

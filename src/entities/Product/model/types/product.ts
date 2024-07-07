export enum ProductStatus {
  ACTIVE = 'active',
  ARCHIVE = 'archive',
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  status: ProductStatus;
}

export interface ProductSchema {
  data?: Product[];
}

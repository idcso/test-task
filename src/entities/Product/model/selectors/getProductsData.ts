import { StateSchema } from '@/app/providers/storeProvider';

export const getProductsData = (state: StateSchema) => state.product.data;

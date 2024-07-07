import { productReducer } from '@/entities/Product';
import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';

export const store = configureStore<StateSchema>({
  reducer: {
    product: productReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

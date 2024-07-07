import { CreateProductPage } from '@/pages/CreateProductPage';
import { EditProductPage } from '@/pages/EditProductPage';
import { ProductsPage } from '@/pages/ProductsPage';
import { Navigate, RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  PRODUCTS = 'products',
  CREATE = 'create',
  EDIT = 'edit',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.PRODUCTS]: '/products',
  [AppRoutes.CREATE]: '/products/create',
  [AppRoutes.EDIT]: '/products/edit/',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <Navigate to={RoutePath.products} />,
  },
  [AppRoutes.PRODUCTS]: {
    path: RoutePath.products,
    element: <ProductsPage />,
  },
  [AppRoutes.CREATE]: {
    path: RoutePath.create,
    element: <CreateProductPage />,
  },
  [AppRoutes.EDIT]: {
    path: `${RoutePath.edit}:id`,
    element: <EditProductPage />,
  },
};

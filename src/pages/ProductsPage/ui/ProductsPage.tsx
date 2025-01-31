import { getProductsData, initializeProducts } from '@/entities/Product';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ProductsTable } from '@/widgets/ProductsTable';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const ProductsPage = () => {
  const products = useSelector(getProductsData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeProducts());
  }, [dispatch]);

  if (!products) {
    return <div>No products</div>;
  }

  return (
    <div>
      <ProductsTable />
    </div>
  );
};

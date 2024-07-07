import { getProductsData, initializeProducts } from '@/entities/Product';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TableTemplate } from './TableTemplate';
import { columns } from './Columns';

export const ProductsTable = () => {
  const products = useSelector(getProductsData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeProducts());
  }, [dispatch]);

  if (!products) {
    return <div>No products</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <TableTemplate data={products} columns={columns} />
    </div>
  );
};

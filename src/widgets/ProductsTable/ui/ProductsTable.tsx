import { getProductsData } from '@/entities/Product';
import { useSelector } from 'react-redux';
import { columns } from './Columns';
import { TableTemplate } from './TableTemplate';

export const ProductsTable = () => {
  const products = useSelector(getProductsData);

  if (!products) {
    return <div>No products</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <TableTemplate data={products} columns={columns} />
    </div>
  );
};

import { deleteProduct } from '@/entities/Product';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button } from '@/shared/ui/button';

export const DeleteProduct = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();

  return (
    <Button
      onClick={() => dispatch(deleteProduct(id))}
      variant="ghost"
      className="p-0 h-6 w-full font-normal justify-start"
    >
      Delete
    </Button>
  );
};

import { AppRouter } from '@/app/providers/router';
import { initializeProducts } from '@/entities/Product';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeProducts());
  }, [dispatch]);

  return (
    <div className="bg-slate-800 h-screen">
      <AppRouter />
    </div>
  );
};

export default App;

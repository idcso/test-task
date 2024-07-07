import { routeConfig } from '@/shared/config/routeConfig/routeConfig';
import { Route, Routes } from 'react-router-dom';

export const AppRouter = () => (
  <Routes>
    {Object.values(routeConfig).map(({ path, element }) => (
      <Route key={path} path={path} element={element} />
    ))}
  </Routes>
);

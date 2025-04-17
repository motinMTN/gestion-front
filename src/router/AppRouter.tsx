import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { renderRoutes, routes } from '.';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        { renderRoutes(routes) }
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
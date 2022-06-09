import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from 'config';
import { useAuth } from 'context/AuthContext';

const PublicRoute = () => {
  const { isAuthenticated, loadingAuth } = useAuth();

  if (loadingAuth) return null;

  if (isAuthenticated) {
    return <Navigate to={ROUTES.PETS.absolutePath} />;
  }

  return <Outlet />;
};

export default PublicRoute;

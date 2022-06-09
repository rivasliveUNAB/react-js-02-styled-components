import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';

import { ROUTES } from 'config';
import Home from 'pages/Home';
import Pets from 'pages/Pets';
import NotFound from 'pages/404';
import Logout from 'pages/Logout';
import Trainers from 'pages/Trainers';
import Vaccines from 'pages/Vaccines';
import VaccinesAdmin from 'pages/VaccinesAdmin';
import { AuthProvider } from 'context/AuthContext';
import PublicRoute from './components/public';
import PrivateRoute from './components/private';

const Routes = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ReactRoutes>
          <Route path="/" element={<PublicRoute />}>
            <Route index path={ROUTES.HOME.path} element={<Home />} />
            <Route path="signup" element={<h1>Signup</h1>} />
          </Route>

          <Route path="/app" element={<PrivateRoute />}>
            <Route index path={ROUTES.PETS.path} element={<Pets />} />
            <Route path={ROUTES.TRAINERS.path} element={<Trainers />} />
            <Route path={ROUTES.VACCINES.path} element={<Vaccines />} />
            <Route path={ROUTES.VACCINES_ADMIN.path} element={<VaccinesAdmin />} />
          </Route>

          <Route path="/auth" element={<PrivateRoute />}>
            <Route path={ROUTES.LOGOUT.path} element={<Logout />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </ReactRoutes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Routes;

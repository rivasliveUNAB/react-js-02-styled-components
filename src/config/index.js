const baseUrl = `${process.env.REACT_APP_API_URL}/v1`;

const config = {
  baseUrl
};

export const ROUTES = {
  HOME: {
    path: '/',
    absolutePath: '/'
  },
  PETS: {
    path: 'dashboard',
    absolutePath: '/app/dashboard'
  },
  TRAINERS: {
    path: 'trainers',
    absolutePath: '/app/trainers'
  },
  VACCINES: {
    path: 'vaccines',
    absolutePath: '/app/vaccines'
  },
  VACCINES_ADMIN: {
    path: 'vaccines-admin',
    absolutePath: '/app/vaccines-admin'
  },
  LOGOUT: {
    path: 'logout',
    absolutePath: '/auth/logout'
  },
}

export default config;

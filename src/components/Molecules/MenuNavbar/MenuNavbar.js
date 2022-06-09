import { NavLink } from 'react-router-dom';

import { ROUTES } from 'config';
import { useAppTheme } from 'context/AppTheme';
import SunFilled from 'components/Atoms/Icons/SunFilled';
import MoonFilled from 'components/Atoms/Icons/MoonFilled';

import { StyleMenuItem, StyleMenuNavbar } from './style';

const LinkMenu = ({ to, children, style }) => {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? 'active-item' : '')}>
      <StyleMenuItem style={style} color="transparent" labelColor="text">
        {children}
      </StyleMenuItem>
    </NavLink>
  );
};

const MenuNavbar = () => {
  const { themeToggle, theme } = useAppTheme();

  return (
    <StyleMenuNavbar>
      <StyleMenuItem color="transparent" labelColor="text" onClick={themeToggle} style={{ fontSize: 18 }}>
        {theme === 'light' ? <MoonFilled /> : <SunFilled />}
      </StyleMenuItem>

      <LinkMenu to={ROUTES.PETS.absolutePath}>Pets</LinkMenu>

      <LinkMenu to={ROUTES.TRAINERS.absolutePath}>Trainers</LinkMenu>

      <LinkMenu to={ROUTES.VACCINES.absolutePath}>Vaccines</LinkMenu>

      <LinkMenu to={ROUTES.VACCINES_ADMIN.absolutePath}>Vaccines Admin</LinkMenu>

      <LinkMenu style={{ color: 'red', background: 'rgba(100, 100, 100, .1)' }} to={ROUTES.LOGOUT.absolutePath}>
        Logout
      </LinkMenu>
    </StyleMenuNavbar>
  );
};

export default MenuNavbar;

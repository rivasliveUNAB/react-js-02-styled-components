import { useAppTheme } from 'context/AppTheme';
import SunFilled from 'components/Atoms/Icons/SunFilled';
import MoonFilled from 'components/Atoms/Icons/MoonFilled';

import { StyleMenuItem, StyleMenuNavbar } from './style';

const MenuNavbar = () => {
  const { themeToggle, theme } = useAppTheme();

  return (
    <StyleMenuNavbar>
      <StyleMenuItem
        color="transparent"
        labelColor="text"
        onClick={themeToggle}
        style={{ fontSize: 18 }}
      >
        {theme === 'light' ? <MoonFilled /> : <SunFilled />}
      </StyleMenuItem>
      <StyleMenuItem color="transparent" labelColor="text">
        Pets
      </StyleMenuItem>
      <StyleMenuItem color="transparent" labelColor="text">
        Trainers
      </StyleMenuItem>
      <StyleMenuItem color="transparent" labelColor="text">
        Vaccines
      </StyleMenuItem>
      <StyleMenuItem color="transparent" labelColor="text">
        Vaccines Admin
      </StyleMenuItem>
    </StyleMenuNavbar>
  );
};

export default MenuNavbar;

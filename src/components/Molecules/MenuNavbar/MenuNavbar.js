import { StyleMenuItem, StyleMenuNavbar } from './style';

const MenuNavbar = () => {
  return (
    <StyleMenuNavbar>
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

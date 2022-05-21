import MenuNavbar from 'components/Molecules/MenuNavbar';
import Title from 'components/Atoms/Title';
import { StyleNavbar } from './style';

const Navbar = () => {
  return (
    <StyleNavbar>
      <Title color="secondary">Pets</Title>
      <MenuNavbar />
    </StyleNavbar>
  );
};

export default Navbar;

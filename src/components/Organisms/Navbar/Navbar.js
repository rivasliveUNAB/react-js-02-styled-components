import MenuNavbar from '../../Molecules/MenuNavbar';
import {StyleNavbar} from './style';
import Title from '../../Atoms/Title';

const Navbar = () => {
  return (
    <StyleNavbar>
      <Title color="secondary">Pets</Title>
      <MenuNavbar />
    </StyleNavbar>
  );
};

export default Navbar;

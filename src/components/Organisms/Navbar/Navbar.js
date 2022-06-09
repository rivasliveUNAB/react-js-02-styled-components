import { Link } from 'react-router-dom';

import { ROUTES } from 'config';
import useModal from 'hooks/useModal';
import Title from 'components/Atoms/Title';
import { ModalMenu } from 'components/Molecules/Modals';
import MenuNavbar from 'components/Molecules/MenuNavbar';
import ButtonBurger from 'components/Atoms/ButtonBurguer';
import { OnlyDesk, OnlyMobile } from 'components/Atoms/Responsive';

import { StyleNavbar } from './style';

const Navbar = () => {
  const { visible, onToggle } = useModal();
  return (
    <StyleNavbar>
      <Link to={ROUTES.HOME.absolutePath}>
        <Title color="secondary">Pets</Title>
      </Link>

      <OnlyDesk>
        <MenuNavbar />
      </OnlyDesk>

      <OnlyMobile isShowInTablet>
        <ButtonBurger onClick={onToggle} isOpen={visible} />
      </OnlyMobile>

      <ModalMenu onCancel={onToggle} visible={visible} />
    </StyleNavbar>
  );
};

export default Navbar;

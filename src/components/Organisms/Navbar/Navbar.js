import useModal from 'hooks/useModal';
import Modal from 'components/Atoms/Modal';
import Title from 'components/Atoms/Title';
import MenuNavbar from 'components/Molecules/MenuNavbar';
import ButtonBurger from 'components/Atoms/ButtonBurguer';
import { OnlyDesk, OnlyMobile } from 'components/Atoms/Responsive';

import { StyleNavbar } from './style';

const Navbar = () => {
  const { visible, onToggle } = useModal();
  return (
    <StyleNavbar>
      <Title color="secondary">Pets</Title>

      <OnlyDesk>
        <MenuNavbar />
      </OnlyDesk>

      <OnlyMobile isShowInTablet>
        <ButtonBurger onClick={onToggle} isOpen={visible} />
      </OnlyMobile>

      <Modal
        closeButton={false}
        isOpen={visible}
        contentStyle={{
          top: 65,
          left: 0,
          height: 'calc(100% - 65px)',
          width: '100%'
        }}
      >
        <MenuNavbar />
      </Modal>
    </StyleNavbar>
  );
};

export default Navbar;

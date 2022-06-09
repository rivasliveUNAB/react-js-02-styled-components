import Modal from 'components/Atoms/Modal';
import MenuNavbar from 'components/Molecules/MenuNavbar';
import { StyleCloseBtn } from './style';

const ModalMenu = ({ visible, onCancel }) => {
  return (
    <Modal
      closeButton={false}
      isOpen={visible}
      footer={false}
      contentStyle={{
        top: 0,
        left: 0,
        height: '100%',
        width: '100%'
      }}
    >
      <StyleCloseBtn onClick={onCancel} labelColor="text" color="shadowInput">
        X
      </StyleCloseBtn>
      <MenuNavbar />
    </Modal>
  );
};

export default ModalMenu;

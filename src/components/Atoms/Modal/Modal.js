import LibModal from 'react-modal';
import Title from 'components/Atoms/Title';
import { customStyles, StyleBody, StyleCloseBtn, StyleFooter } from './style';
import Button from '../Button';

const Modal = ({
  isOpen,
  children,
  onCancel,
  title,
  okText = 'Ok',
  okProps = {},
  cancelText = 'Cancel',
  cancelProps = {
    onClick: onCancel
  },
  width = 350,
  contentStyle = customStyles.content,
  closeButton = true,
  ...restProps
}) => {
  return (
    <LibModal style={{ ...customStyles, content: contentStyle }} isOpen={isOpen} {...restProps}>
      <StyleBody
        style={{
          maxWidth: width
        }}
      >
        {title && <Title size={27}>{title}</Title>}
        {closeButton && (
          <StyleCloseBtn labelColor="text" color="transparent" onClick={onCancel}>
            X
          </StyleCloseBtn>
        )}
        {children}

        <StyleFooter>
          {cancelText && (
            <Button color="shadowInput" labelColor="text" {...cancelProps}>
              {cancelText}
            </Button>
          )}
          <Button {...okProps}>{okText}</Button>
        </StyleFooter>
      </StyleBody>
    </LibModal>
  );
};

export default Modal;

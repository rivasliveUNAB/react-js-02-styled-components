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
  footer = true,
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

        {footer && (
          <StyleFooter>
            {cancelText && (
              <Button color="shadowInput" labelColor="text" {...cancelProps}>
                {cancelText}
              </Button>
            )}
            {okText && <Button {...okProps}>{okText}</Button>}
          </StyleFooter>
        )}
      </StyleBody>
    </LibModal>
  );
};

export default Modal;

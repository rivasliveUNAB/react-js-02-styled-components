import { StyleButtonBurger, StyleWrapper } from './style';

const ButtonBurger = ({ isOpen = false, ...props }) => {
  return (
    <StyleWrapper {...props}>
      <StyleButtonBurger $isOpen={isOpen} />
    </StyleWrapper>
  );
};

export default ButtonBurger;

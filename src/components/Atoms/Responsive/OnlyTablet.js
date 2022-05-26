import { StyleOnlyTablet } from './style';

const OnlyTablet = ({ children, ...props }) => {
  return <StyleOnlyTablet {...props}>{children}</StyleOnlyTablet>;
};

export default OnlyTablet;

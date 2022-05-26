import { StyleOnlyDesk } from './style';

const OnlyDesk = ({ children, ...props }) => {
  return <StyleOnlyDesk {...props}>{children}</StyleOnlyDesk>;
};

export default OnlyDesk;

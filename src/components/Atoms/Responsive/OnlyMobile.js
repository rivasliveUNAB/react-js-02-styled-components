import { StyleOnlyMobileDesk, StyleOnlyTablet } from './style';

const OnlyMobile = ({ children, isShowInTablet = false, ...props }) => {
  if (isShowInTablet) {
    return <StyleOnlyMobileDesk {...props}>{children}</StyleOnlyMobileDesk>;
  }

  return <StyleOnlyTablet {...props}>{children}</StyleOnlyTablet>;
};

export default OnlyMobile;

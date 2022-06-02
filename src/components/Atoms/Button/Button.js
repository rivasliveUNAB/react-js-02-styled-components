import Loading from 'components/Atoms/Loading';
import { StyleButton } from './style';

const Button = ({
  onClick,
  className = '',
  color = 'primary',
  labelColor = 'white',
  loading = false,
  disabled = false,
  children,
  ...restProps
}) => {
  return (
    <StyleButton
      $color={color}
      onClick={onClick}
      $labelColor={labelColor}
      disabled={loading || disabled}
      className={`btn ${className}`}
      {...restProps}
    >
      {loading && <Loading />}
      {children}
    </StyleButton>
  );
};

export default Button;

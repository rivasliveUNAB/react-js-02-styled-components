import styled from 'styled-components';
import Button from '../../Atoms/Button';

export const StyleWrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.bgCard};
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 15px 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const StyleImage = styled.img`
  border-radius: 12px;
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const StyleButton = styled(Button)`
  position: absolute;
  min-width: auto;
  padding: 0;
  width:40px;
  height: 40px;
  right: 75px;
  top: 30px;
  border-radius: 50px;
  font-size: 18px;
  z-index: ${({ theme }) => theme.zIndex.two};
`;

export const StyleDelButton = styled(StyleButton)`
  right: 30px;
`;

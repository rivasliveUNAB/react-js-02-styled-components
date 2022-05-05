import styled from 'styled-components';
import Button from '../../Atoms/Button';

export const StyleMenuNavbar = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
`;

export const StyleMenuItem = styled(Button)`
  margin-right: 10px;
  min-width: auto;
  padding: 0 10px;
  transition: color 0.3s;
  font-weight: 700;

  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

import styled from 'styled-components';
import Button from 'components/Atoms/Button';
import {mediaQueries} from 'styles/theme';

export const StyleMenuNavbar = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;

  ${mediaQueries.desktop} {
    flex-direction: row;
  }
`;

export const StyleMenuItem = styled(Button)`
  min-width: auto;
  padding: 0 10px;
  transition: color 0.3s;
  font-weight: 700;
  font-size: 27px;
  margin: 10px 0;

  &:hover {
    opacity: 1;
    color: ${({theme}) => theme.colors.secondary};
  }

  ${mediaQueries.desktop} {
    margin: 0 10px 0 0;
    font-size: 16px;
  }
`;

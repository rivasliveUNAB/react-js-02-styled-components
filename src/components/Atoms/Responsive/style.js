import styled from 'styled-components';
import { mediaQueries } from 'styles/theme';

export const StyleOnlyDesk = styled.div`
  display: none;

  ${mediaQueries.desktop} {
    display: initial;
  }
`;

export const StyleOnlyTablet = styled.div`
  display: none;

  ${mediaQueries.tablet} {
    display: initial;
  }
`;

export const StyleOnlyMobile = styled.div`
  display: initial;

  ${mediaQueries.tablet} {
    display: none;
  }
`;

export const StyleOnlyMobileDesk = styled.div`
  display: initial;

  ${mediaQueries.desktop} {
    display: none;
  }
`;

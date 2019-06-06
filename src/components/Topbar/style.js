import styled from 'styled-components';

import * as Spacing from 'styles/spacing';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: ${Spacing.base * 3}px 0;
`;

export const Logo = styled.img`
  height: ${Spacing.base * 4}px;
`;

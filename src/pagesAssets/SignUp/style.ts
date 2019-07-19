import styled from 'styled-components';

import * as Spacing from 'styles/spacing';
import * as Responsive from 'styles/responsive';
import { Wrapper as OriginalWrapper } from 'components/Grid';

export const Wrapper = styled(OriginalWrapper)`
  margin-top: ${Spacing.base * 2}px;

  @media (min-width: ${Responsive.phone + 1}px) {
    margin-top: ${Spacing.base * 6}px;
  }
`;

export const SmallWrapper = styled(Wrapper)`
  max-width: ${Spacing.base * 90}px;
`;

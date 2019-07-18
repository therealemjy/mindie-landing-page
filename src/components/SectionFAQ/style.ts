import styled from 'styled-components';

import * as Spacing from 'styles/spacing';
import * as Typography from 'styles/typography';
import { Wrapper as OriginalWrapper } from 'components/Grid';

export const Wrapper = styled(OriginalWrapper)`
  max-width: ${Spacing.base * 90}px;
  padding-top: ${Spacing.base * 5}px;
  padding-bottom: ${Spacing.base * 5}px;
`;

export const Title = styled.h2`
  ${Typography.title};

  text-align: center;
`;

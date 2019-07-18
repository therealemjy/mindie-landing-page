import styled from 'styled-components';

import * as Spacing from 'styles/spacing';
import * as Typography from 'styles/typography';
import { Wrapper as OriginalWrapper } from 'components/Grid';

export const Wrapper = styled(OriginalWrapper)`
  max-width: ${Spacing.base * 90}px;
`;

export const Title = styled.h2`
  ${Typography.title};

  text-align: center;
  margin-bottom: ${Spacing.base * 2}px;
`;

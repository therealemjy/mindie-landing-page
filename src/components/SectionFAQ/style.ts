import styled from 'styled-components';

import * as Spacing from 'styles/spacing';
import * as Typography from 'styles/typography';
import OriginalWrapper from 'components/Wrapper';

export const Wrapper = styled(OriginalWrapper)`
  max-width: ${Spacing.base * 90}px;
  padding-top: ${Spacing.base * 10}px;
  padding-bottom: ${Spacing.base * 10}px;
`;

export const Title = styled.h2`
  ${Typography.title};
  text-align: center;
`;

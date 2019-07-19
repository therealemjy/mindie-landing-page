import styled from 'styled-components';

import * as Spacing from 'styles/spacing';
import * as Typography from 'styles/typography';

export const Price = styled.h2`
  ${Typography.title};

  margin-bottom: ${Spacing.base * 2}px;
`;

export const Recurrence = styled.span`
  font-size: 1.125rem;
`;

import styled from 'styled-components';

import * as Spacing from 'styles/spacing';
import * as Colors from 'styles/colors';
import * as Typography from 'styles/typography';

export const Container = styled.li`
  margin-bottom: ${Spacing.base}px;
  display: flex;
  align-items: center;
`;

export const Icon = styled.span`
  width: ${Spacing.base * 2}px;
  height: auto;
  margin-right: ${Spacing.base}px;
`;

export const Content = styled.span`
  color: ${Colors.darkGrey};
  font-weight: ${Typography.weight.demiBold};
  font-size: 1.125rem;
`;

import styled from 'styled-components';

import * as Colors from 'styles/colors';
import * as Spacing from 'styles/spacing';
import * as Typography from 'styles/typography';

export const Container = styled.div`
  padding: ${Spacing.base * 3}px 0;
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: ${Spacing.base * 4}px;
`;

export const Name = styled.span`
  margin-left: 10px;
  font-size: 1.5rem;
  font-weight: ${Typography.weight.bold};
  color: ${Colors.darkGrey};
`;

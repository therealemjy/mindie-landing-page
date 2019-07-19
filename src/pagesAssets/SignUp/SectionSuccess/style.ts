import styled from 'styled-components';

import * as Spacing from 'styles/spacing';
import * as Typography from 'styles/typography';

export const Illustration = styled.div`
  display: block;
  width: 100%;
  height: auto;
  max-width: ${Spacing.base * 20}px;
  margin: 0 auto ${Spacing.base * 3}px;
`;

export const Title = styled.h2`
  ${Typography.title};

  text-align: center;
  margin-bottom: ${Spacing.base * 2}px;
`;

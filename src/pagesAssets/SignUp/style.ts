import styled from 'styled-components';

import * as Spacing from 'styles/spacing';
import * as Responsive from 'styles/responsive';
import * as Typography from 'styles/typography';
import { Wrapper as OriginalWrapper } from 'components/Grid';

export const SmallWrapper = styled(OriginalWrapper)`
  max-width: ${Spacing.base * 90}px;
`;

export const SuccessSection = styled.div`
  margin-top: ${Spacing.base * 2}px;

  @media (min-width: ${Responsive.phone + 1}px) {
    margin-top: ${Spacing.base * 6}px;
  }
`;

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

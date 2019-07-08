import styled from 'styled-components';

import * as Spacing from 'styles/spacing';
import * as Typography from 'styles/typography';
import * as Responsive from 'styles/responsive';
import OriginalWrapper from 'components/Wrapper';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: ${Spacing.base * 10}px;
  padding-bottom: ${Spacing.base * 5}px;

  @media (min-width: ${Responsive.phone + 1}px) {
    min-height: ${Spacing.base * 90}px;
  }
`;

export const Wrapper = styled(OriginalWrapper)`
  max-width: ${Spacing.base * 90}px;
`;

export const Illustration = styled.img`
  height: auto;
  width: ${Spacing.base * 16}px;
  margin: 0 auto ${Spacing.base * 2}px;
  display: block;
`;

export const Title = styled.h2`
  ${Typography.title};
  text-align: center;
`;

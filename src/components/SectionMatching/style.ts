import styled from 'styled-components';

import * as Spacing from 'styles/spacing';
import * as Typography from 'styles/typography';
import { Wrapper as OriginalWrapper } from 'components/Grid';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Wrapper = styled(OriginalWrapper)`
  max-width: ${Spacing.base * 90}px;
`;

export const Illustration = styled.img`
  height: auto;
  width: 90%;
  margin: 0 auto ${Spacing.base * 4}px;
  display: block;
`;

export const Title = styled.h2`
  ${Typography.title};

  text-align: center;
  margin-bottom: ${Spacing.base * 2}px;
`;

import styled from 'styled-components';

import * as Spacing from 'styles/spacing';
import * as Typography from 'styles/typography';
import OriginalWrapper from 'components/Wrapper';

export const Container = styled.div`
  min-height: ${Spacing.base * 90}px;
  display: flex;
  align-items: center;
  overflow-x: hidden;
`;

export const Wrapper = styled(OriginalWrapper)`
  text-align: center;
  max-width: ${Spacing.base * 90}px;
`;

export const Illustration = styled.img`
  height: auto;
  width: ${Spacing.base * 16}px;
  margin-bottom: ${Spacing.base * 2}px;
`;

export const Title = styled.h2`
  ${Typography.title};
`;

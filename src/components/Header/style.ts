import styled from 'styled-components';

import * as Spacing from 'styles/spacing';
import * as Typography from 'styles/typography';
import OriginalWrapper from 'components/Wrapper';
import OriginalP from 'components/P';

export const Container = styled.div`
  min-height: ${Spacing.base * 87}px;
  position: relative;
  overflow-x: hidden;
`;

export const Wrapper = styled(OriginalWrapper)`
  padding-top: ${Spacing.base * 10}px;
`;

export const Title = styled.h1`
  ${Typography.mainTitle};

  margin: ${Spacing.base * 15}px 0 ${Spacing.base * 2}px;
  max-width: 520px;
  width: 47%;
`;

export const P = styled(OriginalP)`
  margin: 0 0 ${Spacing.base * 4}px;
  max-width: 450px;
  width: 47%;
`;

export const Illustration = styled.img`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 50%;
  width: 1500px;
  height: auto;
  margin-top: -${Spacing.base * 37}px;
`;

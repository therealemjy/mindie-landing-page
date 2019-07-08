import styled from 'styled-components';

import * as Spacing from 'styles/spacing';
import * as Typography from 'styles/typography';
import OriginalWrapper from 'components/Wrapper';

export const Container = styled.div`
  position: relative;
  overflow-x: hidden;
`;

export const Wrapper = styled(OriginalWrapper)`
  max-width: ${Spacing.base * 90}px;
  padding-top: ${Spacing.base * 10}px;
  padding-bottom: ${Spacing.base * 10}px;
`;

export const Title = styled.h2`
  ${Typography.title};
  text-align: center;
`;

export const Shape = styled.img`
  z-index: -1;
  position: absolute;
  opacity: 0.05;
  left: 50%;
  height: auto;
`;

export const Triangle = styled(Shape)`
  width: ${Spacing.base * 30}px;
  transform: translateX(200%) rotate(-25deg);
  bottom: ${Spacing.base * 6}px;
`;

export const Square = styled(Shape)`
  width: ${Spacing.base * 20}px;
  transform: translateX(-400%) rotate(-30deg);
  bottom: ${Spacing.base * 30}px;
`;

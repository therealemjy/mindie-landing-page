import styled from 'styled-components';

import * as Spacing from 'styles/spacing';
import * as Typography from 'styles/typography';
import OriginalWrapper from 'components/Wrapper';

export const Container = styled.div`
  min-height: ${Spacing.base * 90}px;
  display: flex;
  align-items: center;
  position: relative;
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

export const Shape = styled.img`
  z-index: -1;
  position: absolute;
  opacity: 0.05;
  left: 50%;
  height: auto;
`;

export const Circle = styled(Shape)`
  width: ${Spacing.base * 15}px;
  transform: translateX(20%);
  bottom: 0;
`;

export const Triangle = styled(Shape)`
  width: ${Spacing.base * 35}px;
  transform: translateX(-250%) rotate(20deg);
  bottom: ${Spacing.base * 20}px;
`;

export const Square = styled(Shape)`
  width: ${Spacing.base * 16}px;
  transform: translateX(260%) rotate(-15deg);
  bottom: ${Spacing.base * 40}px;
`;

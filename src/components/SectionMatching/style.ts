import styled from 'styled-components';

import * as Spacing from 'styles/spacing';
import * as Typography from 'styles/typography';
import OriginalWrapper from 'components/Wrapper';

export const Container = styled.div`
  min-height: ${Spacing.base * 90}px;
  display: flex;
  align-items: center;
  position: relative;
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
  opacity: 0.1;
  left: 50%;
  height: auto;
  width: ${Spacing.base * 20}px;
`;

export const Circle = styled(Shape)`
  transform: translateX(300%);
  bottom: 0;
`;

export const Triangle = styled(Shape)`
  transform: translateX(-400%) rotate(20deg);
  bottom: ${Spacing.base * 40}px;
`;

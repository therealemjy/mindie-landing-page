import styled from 'styled-components';

import * as Spacing from 'styles/spacing';

export const Shape = styled.img`
  position: absolute;
  opacity: 0.05;
  left: 50%;
  height: auto;
`;

export const Shape1 = styled(Shape)`
  width: ${Spacing.base * 15}px;
  transform: translateX(20%);
  top: ${Spacing.base * 205}px;
`;

export const Shape2 = styled(Shape)`
  width: ${Spacing.base * 35}px;
  transform: translateX(-250%) rotate(20deg);
  top: ${Spacing.base * 170}px;
`;

export const Shape3 = styled(Shape)`
  width: ${Spacing.base * 16}px;
  transform: translateX(260%) rotate(-15deg);
  top: ${Spacing.base * 300}px;
`;

export const Shape4 = styled(Shape)`
  width: ${Spacing.base * 30}px;
  transform: translateX(200%) rotate(-25deg);
  top: ${Spacing.base * 150}px;
`;

export const Shape5 = styled(Shape)`
  width: ${Spacing.base * 20}px;
  transform: translateX(-400%) rotate(-30deg);
  top: ${Spacing.base * 280}px;
`;

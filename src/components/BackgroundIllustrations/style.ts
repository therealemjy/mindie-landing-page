import styled from 'styled-components';

import * as Spacing from 'styles/spacing';
import * as Responsive from 'styles/responsive';

export const Shape = styled.img`
  z-index: -1;
  position: absolute;
  opacity: 0.05;
  left: 50%;
  height: auto;
`;

export const Shape1 = styled(Shape)`
  width: ${Spacing.base * 8}px;
  transform: translateX(20%);
  top: ${Spacing.base * 185}px;

  @media (min-width: ${Responsive.phone + 1}px) {
    width: ${Spacing.base * 15}px;
    top: ${Spacing.base * 205}px;
  }
`;

export const Shape2 = styled(Shape)`
  width: ${Spacing.base * 15}px;
  top: ${Spacing.base * 145}px;
  transform: translateX(-150%) rotate(20deg);

  @media (min-width: ${Responsive.phone + 1}px) {
    width: ${Spacing.base * 35}px;
    transform: translateX(-250%) rotate(20deg);
    top: ${Spacing.base * 170}px;
  }
`;

export const Shape3 = styled(Shape)`
  width: ${Spacing.base * 16}px;
  transform: translateX(60%) rotate(-15deg);
  top: ${Spacing.base * 250}px;

  @media (min-width: ${Responsive.phone + 1}px) {
    width: ${Spacing.base * 16}px;
    transform: translateX(260%) rotate(-15deg);
    top: ${Spacing.base * 300}px;
  }
`;

export const Shape4 = styled(Shape)`
  width: ${Spacing.base * 15}px;
  transform: translateX(-130%) rotate(-25deg);
  top: ${Spacing.base * 290}px;

  @media (min-width: ${Responsive.phone + 1}px) {
    width: ${Spacing.base * 30}px;
    transform: translateX(200%) rotate(-25deg);
    top: ${Spacing.base * 150}px;
  }
`;

export const Shape5 = styled(Shape)`
  width: ${Spacing.base * 12}px;
  transform: translateX(-120%) rotate(-30deg);
  top: ${Spacing.base * 220}px;

  @media (min-width: ${Responsive.phone + 1}px) {
    width: ${Spacing.base * 20}px;
    transform: translateX(-400%) rotate(-30deg);
    top: ${Spacing.base * 280}px;
  }
`;

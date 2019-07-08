import styled from 'styled-components';

import * as Spacing from 'styles/spacing';
import * as Colors from 'styles/colors';
import * as Typography from 'styles/typography';
import * as Responsive from 'styles/responsive';
import OriginalP from 'components/P';

export const Container = styled.div`
  position: relative;
  padding-bottom: ${Spacing.base * 24}px;

  @media (min-width: ${Responsive.phone + 1}px) {
    min-height: ${Spacing.base * 127}px;
    padding-bottom: 0;
  }
`;

export const Title = styled.h1`
  ${Typography.mainTitle};
  color: ${Colors.darkGrey};
  margin: ${Spacing.base * 2}px 0 ${Spacing.base * 2}px;

  @media (min-width: ${Responsive.phone + 1}px) {
    width: 60%;
    margin-top: ${Spacing.base * 9}px;
  }
`;

export const P = styled(OriginalP)`
  margin: 0 0 ${Spacing.base * 4}px;
  color: ${Colors.darkGrey};

  @media (min-width: ${Responsive.phone + 1}px) {
    width: 60%;
  }
`;

export const Illustration = styled.div`
  z-index: -1;
  position: absolute;
`;

export const Sky = styled(Illustration)`
  top: 0;
  bottom: ${Spacing.base * 10}px;
  left: 0;
  right: 0;
  background-color: ${Colors.skyGreen};
`;

export const IllustrationCharacter = styled(Illustration)`
  display: none;

  @media (min-width: ${Responsive.phone + 1}px) {
    display: block;
    width: auto;
    height: ${Spacing.base * 48}px;
    left: 50%;
    transform: translateX(154%);
    bottom: ${Spacing.base * 54}px;
  }
`;

export const IllustrationMountains = styled(Illustration)`
  bottom: 0;
  width: auto;
  height: ${Spacing.base * 25}px;
  left: 50%;
  transform: translateX(-45%);

  @media (min-width: ${Responsive.phone + 1}px) {
    height: ${Spacing.base * 62}px;
    transform: translateX(-50%);
  }
`;

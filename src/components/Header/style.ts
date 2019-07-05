import styled from 'styled-components';

import * as Spacing from 'styles/spacing';
import * as Typography from 'styles/typography';
import * as Responsive from 'styles/responsive';
import OriginalP from 'components/P';

export const Container = styled.div`
  min-height: ${Spacing.base * 127}px;
  position: relative;
  overflow-x: hidden;
`;

export const Title = styled.h1`
  ${Typography.mainTitle};

  margin: ${Spacing.base * 5}px 0 ${Spacing.base * 2}px;

  @media (min-width: ${Responsive.phone + 1}px) {
    max-width: 520px;
    width: 47%;
    margin-top: ${Spacing.base * 5}px;
  }
`;

export const P = styled(OriginalP)`
  margin: 0 0 ${Spacing.base * 4}px;

  @media (min-width: ${Responsive.phone + 1}px) {
    max-width: 450px;
    width: 47%;
  }
`;

export const IllustrationMountains = styled.img`
  /* display: none; */
  z-index: -1;
  position: absolute;
  bottom: 0;
  width: auto;
  margin: auto;

  @media (min-width: ${Responsive.phone + 1}px) {
    display: block;
    height: ${Spacing.base * 62}px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

import styled from 'styled-components';

import * as Spacing from 'styles/spacing';
import OriginalWrapper from 'components/Wrapper';

export const Container = styled.div``;

export const Wrapper = styled(OriginalWrapper)`
  padding-top: ${Spacing.base * 10}px;
`;

export const Row = styled.div`
  padding: ${Spacing.base * 2}px 0;

  @media (min-width: ${Spacing.base * 80}px) {
    display: flex;
    align-items: center;
    padding: 10% 0 ${Spacing.base * 15}px;
  }
`;

export const Col = styled.div`
  @media (min-width: ${Spacing.base * 80}px) {
    flex: 1;
  }
`;

export const Title = styled.h1``;

export const Text = styled.p``;

export const Illustrations = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 50%;
  width: 500px;
`;

export const WomanSofaIllustration = styled.img`
  position: absolute;
  height: auto;
  width: 500px;
  top: 150px;
  left: 50px;
`;

export const BackgroundIllustration = styled.img`
  width: 1500px;
  height: auto;
  margin-top: -300px;
`;

import styled from 'styled-components';

import * as Spacing from 'styles/spacing';
import OriginalWrapper from 'components/Wrapper';

export const Wrapper = styled(OriginalWrapper)`
  padding-top: ${Spacing.base * 10}px;
`;

export const Title = styled.h1`
  margin: ${Spacing.base * 15}px 0 ${Spacing.base * 2}px;
  max-width: 520px;
  width: 50%;
  font-size: 2.25rem;
`;

export const Text = styled.p`
  margin: 0 0 10px;
  max-width: 450px;
  width: 50%;
`;

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

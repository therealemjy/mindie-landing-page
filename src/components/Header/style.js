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
    padding: ${Spacing.base * 15}px 0;
  }
`;

export const Col = styled.div`
  @media (min-width: ${Spacing.base * 80}px) {
    flex: 1;
  }
`;

export const Title = styled.h1``;

export const Text = styled.p``;

export const Illustration = styled.img`
  max-width: 100%;
  height: auto;
`;

import styled from 'styled-components';

import * as Spacing from 'styles/spacing';
import * as Responsive from 'styles/responsive';

export const Page = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  flex: 1 0 auto;
`;

export const Section = styled.div`
  padding-top: ${Spacing.base * 5}px;
  padding-bottom: ${Spacing.base * 5}px;

  @media (min-width: ${Responsive.phone + 1}px) {
    padding-top: ${Spacing.base * 8}px;
    padding-bottom: ${Spacing.base * 8}px;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${Spacing.base * 130}px;
  padding: 0 ${Spacing.base * 2}px;
`;

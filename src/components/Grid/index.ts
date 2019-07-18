import styled from 'styled-components';

import * as Spacing from 'styles/spacing';

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${Spacing.base * 130}px;
  padding: 0 ${Spacing.base * 2}px;
`;

export const Page = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  flex: 1 0 auto;
`;

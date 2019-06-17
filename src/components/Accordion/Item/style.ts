import styled from 'styled-components';

import * as Spacing from 'styles/spacing';
import * as Colors from 'styles/colors';

export const Container = styled.div``;

export const Question = styled.button<{ isActive: boolean }>`
  cursor: pointer;
  width: 100%;
  background-color: ${Colors.lightGrey};
  border: 0;
  padding: ${Spacing.base * 2}px;
`;

export const Answer = styled.div``;

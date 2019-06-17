import styled, { css } from 'styled-components';

import * as Spacing from 'styles/spacing';
import * as Colors from 'styles/colors';
import * as Typography from 'styles/typography';
import P from 'components/P';

export const Container = styled.div`
  margin-bottom: ${Spacing.base}px;
`;

export const Question = styled.span`
  ${Typography.paragraph};

  font-weight: ${Typography.weight.demiBold};
  color: ${Colors.lightGrey};
  text-align: left;
  margin-right: ${Spacing.base}px;
`;

export const Button = styled.button<{ isActive: boolean }>`
  cursor: pointer;
  outline: 0;
  width: 100%;
  background-color: ${Colors.almostWhite};
  border-radius: ${Spacing.base}px;
  border: 0;
  padding: ${Spacing.base * 2}px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: transparent;

      > ${Question} {
        color: ${Colors.darkGrey};
      }
    `}}
`;

export const Icon = styled.img`
  width: ${Spacing.base * 4}px;
  height: auto;
  background-color: ${Colors.almostWhite};
  border-radius: 50%;
  padding: 4px;
  flex-shrink: 0;
`;

export const Answer = styled(P)`
  padding: 0 ${Spacing.base * 2}px ${Spacing.base * 2}px;
`;

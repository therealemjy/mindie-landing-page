import styled, { css } from 'styled-components';

import * as Spacing from 'styles/spacing';
import * as Colors from 'styles/colors';
import * as Typography from 'styles/typography';
import P from 'components/P';

export const Question = styled.span`
  ${Typography.paragraph};

  font-weight: ${Typography.weight.demiBold};
  color: ${Colors.lightGrey};
  text-align: left;
  margin-right: ${Spacing.base}px;
  transition: color 600ms ease;
`;

export const Button = styled.button`
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
  transition: background-color 600ms ease;
`;

export const Icon = styled.img`
  width: ${Spacing.base * 4}px;
  height: auto;
  background-color: ${Colors.almostWhite};
  border-radius: 50%;
  padding: 4px;
  flex-shrink: 0;
`;

export const Answer = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 600ms ease;
`;

export const AnswerText = styled(P)`
  padding: ${Spacing.base}px ${Spacing.base * 2}px ${Spacing.base * 2}px;
`;

export const Container = styled.div<{ isActive: boolean }>`
  margin-bottom: ${Spacing.base}px;

  ${({ isActive }) =>
    isActive &&
    css`
      ${Answer} {
        max-height: 1000px;
      }

      ${Button} {
        background-color: transparent;
      }

      ${Question} {
        color: ${Colors.darkGrey};
      }
    `};
`;

import styled, { css } from 'styled-components';

import * as Colors from 'styles/colors';
import * as Spacing from 'styles/spacing';
import * as Typography from 'styles/typography';
import * as Responsive from 'styles/responsive';

export const Container = styled.div`
  width: 100%;
  max-width: ${Spacing.base * 58}px;
`;

export const Form = styled.form``;

export const ControlRow = styled.div`
  position: relative;
`;

export const Label = styled.label`
  ${Typography.label};

  display: block;
  margin-bottom: ${Spacing.base}px;
`;

const inputsCss = css`
  border-radius: ${Spacing.base}px;
  border: 1px solid transparent;
  outline: 0;
  padding: ${Spacing.base * 2}px;
  display: block;
  width: 100%;
`;

export const Input = styled.input`
  ${Typography.input};
  ${inputsCss};

  flex: 1;
  background-color: ${Colors.almostWhite};
  margin-bottom: ${Spacing.base}px;

  ::placeholder,
  ::-webkit-input-placeholder {
    line-height: 1.6;
    color: ${Colors.lightGrey};
  }
  :-ms-input-placeholder {
    line-height: 1.6;
    color: ${Colors.lightGrey};
  }
`;

export const SubmitButton = styled.button`
  ${Typography.button};
  ${inputsCss};

  background-color: ${Colors.purple};
  cursor: pointer;

  :hover {
    background-color: ${Colors.lavanderPurple};
  }

  @media (min-width: ${Responsive.phone + 1}px) {
    padding-left: ${Spacing.base * 6}px;
    padding-right: ${Spacing.base * 6}px;
  }
`;

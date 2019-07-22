import styled from 'styled-components';

import inputCss from './inputCss';
import * as Colors from 'styles/colors';
import * as Spacing from 'styles/spacing';
import * as Typography from 'styles/typography';

export { default as inputCss } from './inputCss';
export { default as SubmitButton } from './SubmitButton';

export const Form = styled.form``;

export const Label = styled.label`
  ${Typography.label};

  display: block;
  margin-bottom: ${Spacing.base}px;
`;

export const Input = styled.input`
  ${Typography.input};
  ${inputCss};

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

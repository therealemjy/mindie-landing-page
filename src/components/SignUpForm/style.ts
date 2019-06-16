import styled, { css } from 'styled-components';

import * as Colors from 'styles/colors';
import * as Spacing from 'styles/spacing';
import * as Typography from 'styles/typography';

const inputsCss = css`
  border-radius: ${Spacing.base / 2}px;
  border: 1px solid transparent;
  outline: 0;
  padding: ${Spacing.base * 2}px;
`;

export const Input = styled.input`
  ${Typography.input};
  ${inputsCss};

  background-color: ${Colors.almostWhite};

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${Colors.lightGrey};
  }
  :-ms-input-placeholder {
    color: ${Colors.lightGrey};
  }
`;

export const SubmitButton = styled.button`
  ${Typography.button};
  ${inputsCss};

  background-color: ${Colors.azure};
  margin-left: ${Spacing.base * 2}px;
  cursor: pointer;

  :hover {
    background-color: ${Colors.green};
  }
`;

import styled, { css } from 'styled-components';

import * as Colors from 'styles/colors';
import * as Spacing from 'styles/spacing';
import * as Typography from 'styles/typography';

export const Container = styled.div`
  width: 100%;
  max-width: ${Spacing.base * 54}px;
`;

export const Form = styled.form``;

export const ControlRow = styled.div`
  position: relative;
  display: flex;
`;

export const Label = styled.label`
  display: block;
  font-weight: ${Typography.weight.demiBold};
  margin-bottom: ${Spacing.base}px;
`;

const inputsCss = css`
  border-radius: ${Spacing.base}px;
  border: 1px solid transparent;
  outline: 0;
  padding: ${Spacing.base * 2}px;
`;

export const Input = styled.input`
  ${Typography.input};
  ${inputsCss};

  flex: 1;
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

export const Select = styled.select`
  ${Typography.input};
  ${inputsCss};

  cursor: pointer;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: ${Colors.almostWhite};
  padding-right: ${Spacing.base * 6}px;
`;

export const Icon = styled.img`
  cursor: pointer;
  width: ${Spacing.base * 3}px;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${Spacing.base * 2}px;
  margin: auto;
`;

export const EndMessage = styled.span`
  ${Typography.paragraph};

  font-weight: ${Typography.weight.demiBold};
  color: ${Colors.green};
`;

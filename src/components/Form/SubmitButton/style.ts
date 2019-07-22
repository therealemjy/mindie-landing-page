import styled from 'styled-components';

import * as Form from 'components/Form';
import * as Colors from 'styles/colors';
import * as Typography from 'styles/typography';
import * as Responsive from 'styles/responsive';
import * as Spacing from 'styles/spacing';

export const Container = styled.button`
  ${Typography.button};
  ${Form.inputCss};

  position: relative;
  background-color: ${Colors.purple};
  cursor: pointer;

  :hover,
  :disabled {
    background-color: ${Colors.lavanderPurple};
  }

  @media (min-width: ${Responsive.phone + 1}px) {
    padding-left: ${Spacing.base * 4}px;
    padding-right: ${Spacing.base * 4}px;
  }
`;

export const Loader = styled.div`
  position: absolute;
  width: ${Spacing.base * 3}px;
  height: ${Spacing.base * 3}px;
  top: 0;
  bottom: 0;
  margin: auto;
  right: ${Spacing.base * 2}px;

  @media (min-width: ${Responsive.phone + 1}px) {
    right: ${Spacing.base * 4}px;
  }

  background: white;
`;

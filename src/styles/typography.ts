import { css } from 'styled-components';

import * as Colors from './colors';

export const family = '"Avenir Next", sans-serif';

export const weight = {
  bold: 700,
  demiBold: 600,
  medium: 500,
  normal: 300,
  light: 200,
};

export const input = css`
  font-size: 1.125rem;
  color: ${Colors.darkGrey};
`;

export const button = css`
  font-size: 1.125rem;
  color: ${Colors.white};
`;

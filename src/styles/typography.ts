import { css } from 'styled-components';

import * as Colors from './colors';
import * as Responsive from './responsive';

export const weight = {
  bold: 700,
  demiBold: 600,
  medium: 500,
  normal: 300,
  light: 200,
};

export const mainTitle = css`
  color: ${Colors.darkGrey};
  font-size: 2.125rem;

  @media (min-width: ${Responsive.phone + 1}px) {
    font-size: 2.425rem;
  }
`;

export const title = css`
  color: ${Colors.darkGrey};
  font-size: 1.75rem;

  @media (min-width: ${Responsive.phone + 1}px) {
    font-size: 2rem;
  }
`;

export const paragraph = css`
  font-size: 1.125rem;
  color: ${Colors.pigeonGrey};
  line-height: 1.6;
`;

export const input = css`
  font-size: 1.125rem;
  color: ${Colors.darkGrey};
`;

export const button = css`
  font-size: 1.125rem;
  color: ${Colors.white};
`;

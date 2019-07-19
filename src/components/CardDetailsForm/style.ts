import styled from 'styled-components';

import { inputCss } from 'components/Form';
import * as Spacing from 'styles/spacing';
import * as Colors from 'styles/colors';

// Note: Stripe uses its own styling syntax
export const CardElement = {
  base: {
    fontSize: '16px',
    fontFamily: 'Nunito, sans-serif',
    color: Colors.darkGrey,

    '::placeholder': {
      color: Colors.lightGrey,
    },
  },
};

export const CardElementContainer = styled.div`
  ${inputCss};

  background-color: ${Colors.almostWhite};
  margin-bottom: ${Spacing.base}px;
`;

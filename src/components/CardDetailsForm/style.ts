import styled from 'styled-components';

import { Form as OriginalForm, inputCss } from 'components/Form';
import * as Spacing from 'styles/spacing';
import * as Colors from 'styles/colors';

export const Form = styled(OriginalForm)`
  position: relative;
`;

export const CardElementContainer = styled.div`
  ${inputCss};

  background-color: ${Colors.almostWhite};
  margin-bottom: ${Spacing.base}px;
`;

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

export const Error = styled.div`
  position: absolute;
  bottom: -${Spacing.base * 4}px;
  color: ${Colors.pastelRed};
`;

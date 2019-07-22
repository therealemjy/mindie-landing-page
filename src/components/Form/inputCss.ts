import { css } from 'styled-components';

import * as Spacing from 'styles/spacing';

// Note: this CSS needs to be in a separate file so both Form and SubmitButton can import it
export default css`
  border-radius: ${Spacing.base}px;
  border: 1px solid transparent;
  outline: 0;
  padding: ${Spacing.base * 2}px;
  display: block;
  width: 100%;
`;

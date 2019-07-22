import React from 'react';

import * as Style from './style';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const SubmitButton: React.SFC<Props> = ({
  children,
  isLoading = false,
  ...otherProps
}) => (
  <Style.Container {...otherProps} disabled={isLoading}>
    {children}
    {isLoading && <Style.Loader />}
  </Style.Container>
);

export default SubmitButton;

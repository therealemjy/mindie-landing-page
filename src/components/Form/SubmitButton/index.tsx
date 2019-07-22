import React from 'react';

import * as Style from './style';
import IconLoader from './loader.svg';

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
    {isLoading && <Style.Loader as={IconLoader} />}
  </Style.Container>
);

export default SubmitButton;

import React from 'react';

import Logo from './mindie-logo.svg';
import Wrapper from 'components/Wrapper';
import * as Style from './style';

const Topbar: React.SFC = props => (
  <Style.Container {...props}>
    <Wrapper>
      <Style.Brand>
        <Style.Logo as={Logo} />
        <Style.Name>mindie</Style.Name>
      </Style.Brand>
    </Wrapper>
  </Style.Container>
);

export default Topbar;

import React from 'react';

import Logo from './mindie-logo.svg';
import Wrapper from 'components/Wrapper';
import * as Style from './style';

const Topbar: React.SFC = () => (
  <Style.Container>
    <Wrapper>
      <Style.Logo as={Logo} />
    </Wrapper>
  </Style.Container>
);

export default Topbar;

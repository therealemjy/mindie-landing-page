import React from 'react';

import * as Style from './style';
import SignUpForm from 'containers/SignUpForm';

const Footer: React.SFC = () => (
  <Style.Wrapper>
    <SignUpForm />

    <Style.WarningTitle>
      Si votre santé est en danger, n'utilisez pas ce site. Appelez le 15.
    </Style.WarningTitle>

    <Style.Infos>
      <Style.Copyright>
        Copyright &#169; {new Date().getFullYear()}
      </Style.Copyright>

      <Style.Contact href="mailto:bonjour@mindie.app">
        Contactez-nous
      </Style.Contact>
    </Style.Infos>
  </Style.Wrapper>
);

export default Footer;

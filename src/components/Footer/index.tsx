import React from 'react';

import * as Style from './style';
import IllustrationMountains from './mountains-alt.svg';

export interface Props {
  noSignUpForm?: boolean;
}

const Footer: React.SFC<Props> = ({ noSignUpForm = false }) => (
  <Style.Container>
    <Style.Wrapper>
      {!noSignUpForm && (
        <>
          <Style.Title>Pas de stigma. Pas de tabous.</Style.Title>

          <Style.PreSignUpForm />
        </>
      )}

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
    <Style.IllustrationMountains as={IllustrationMountains} />
  </Style.Container>
);

export default Footer;

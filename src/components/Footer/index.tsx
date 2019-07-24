import React from 'react';

import * as Style from './style';
import IllustrationMountains from './mountains-alt.svg';

export interface Props {
  noSignUpForm?: boolean;
  noWarning?: boolean;
}

const Footer: React.SFC<Props> = ({
  noSignUpForm = false,
  noWarning = false,
}) => (
  <Style.Container>
    <Style.Wrapper>
      {!noSignUpForm && (
        <>
          <Style.Title>Commencez dès maintenant.</Style.Title>
          <Style.PreSignUpForm label="Inscrivez-vous" />
        </>
      )}

      <Style.ContentContainer>
        <Style.Content>
          {!noWarning && (
            <Style.WarningTitle>
              Si votre santé est en danger, n'utilisez pas ce site. Appelez le
              15.
            </Style.WarningTitle>
          )}

          <Style.Infos>
            <Style.Copyright>
              Copyright &#169; {new Date().getFullYear()}
            </Style.Copyright>

            <Style.Contact href="mailto:bonjour@mindie.app">
              Contactez-nous
            </Style.Contact>
          </Style.Infos>
        </Style.Content>
      </Style.ContentContainer>

      <Style.IllustrationMountains as={IllustrationMountains} />
    </Style.Wrapper>
  </Style.Container>
);

export default Footer;

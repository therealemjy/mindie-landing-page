import React from 'react';

import * as Style from './style';
import Topbar from 'components/Topbar';
import Wrapper from 'components/Wrapper';
import PreSignUpForm from 'containers/PreSignUpForm';

import IllustrationCharacter from './character-in-peace.svg';
import IllustrationMountains from './mountains.svg';

const Header: React.SFC = () => {
  return (
    <Style.Container>
      <Topbar />

      <Wrapper>
        <Style.Title>
          Obtenez le soutien d'un professionnel depuis le confort de votre
          canapé
        </Style.Title>
        <Style.P>
          Nous traversons tous des périodes difficiles dans nos vies. Parler à
          un psychologue avec un avis neutre peut toujours aider, même quand on
          se dit ne pas en avoir besoin.
        </Style.P>

        <PreSignUpForm />
      </Wrapper>

      <Style.Sky />
      <Style.IllustrationMountains as={IllustrationMountains} />
      <Style.IllustrationCharacter as={IllustrationCharacter} />
    </Style.Container>
  );
};

export default Header;

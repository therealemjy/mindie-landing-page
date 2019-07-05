import React from 'react';

import * as Style from './style';
import Topbar from 'components/Topbar';
import Wrapper from 'components/Wrapper';
import PreSignUpForm from 'containers/PreSignUpForm';

import IllustrationMountains from './mountains.svg';

const Header: React.SFC = () => {
  return (
    <Style.Container>
      <Topbar />

      <Wrapper>
        <Style.Title>
          Obtenez le soutien d'un professionnel depuis le comfort de votre
          canapé
        </Style.Title>
        <Style.P>
          Nous traversons tous des périodes difficiles dans nos vies. Parler à
          un professionnel de la psychologie avec un avis neutre peut toujours
          aider, même quand on se dit ne pas en avoir besoin.
        </Style.P>

        <PreSignUpForm />
      </Wrapper>

      <Style.IllustrationMountains as={IllustrationMountains} />
    </Style.Container>
  );
};

export default Header;

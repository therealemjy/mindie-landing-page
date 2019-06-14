import React from 'react';

import * as Style from './style';
import Topbar from 'components/Topbar';

import IllustrationWeirdShape from './weird-shape.svg';

const Header = () => {
  return (
    <Style.Container>
      <Topbar />

      <Style.Wrapper>
        <Style.Title>
          Obtenez le soutien d'un professionnel depuis le comfort de votre
          canapé
        </Style.Title>
        <Style.P>
          Nous traversons tous des périodes difficiles dans nos vies. Parler à
          un professionnel de la psychologie avec un avis neutre peut toujours
          aider, même quand on se dit ne pas en avoir besoin.
        </Style.P>
      </Style.Wrapper>

      <Style.Illustration as={IllustrationWeirdShape} />
    </Style.Container>
  );
};

export default Header;

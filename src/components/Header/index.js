import React from 'react';

import * as Style from './style';
import IllustrationWeirdShape from './weird-shape.svg';
import Topbar from 'components/Topbar';

const Header = () => {
  return (
    <Style.Container>
      <Topbar />

      <Style.Wrapper>
        <Style.Title>
          Obtenez le soutien d'un professionnel depuis le comfort de votre
          canapé
        </Style.Title>
        <Style.Text>
          Nous traversons tous des périodes difficiles dans nos vies. Parler à
          un professionnel de la psychologie avec un avis neutre peut toujours
          aider, même quand on se dit ne pas en avoir besoin.
        </Style.Text>
      </Style.Wrapper>

      <Style.Illustration as={IllustrationWeirdShape} />
    </Style.Container>
  );
};

export default Header;

import React from 'react';

import * as Style from './style';
import Topbar from 'components/Topbar';
import { Wrapper } from 'components/Grid';
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
          Échangez par message avec un psychologue qui vous aidera à être plus
          heureux au quotidien.
        </Style.P>

        <PreSignUpForm
          label="Inscrivez-vous maintenant"
          analyticLabel="PreSignUpFormHeader"
        />
      </Wrapper>

      <Style.Sky />
      <Style.IllustrationMountains as={IllustrationMountains} />
      <Style.IllustrationCharacter as={IllustrationCharacter} />
    </Style.Container>
  );
};

export default Header;

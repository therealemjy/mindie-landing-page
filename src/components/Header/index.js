import React from 'react';

import * as Style from './style';
import IllustrationWomanSofa from './woman-sofa.svg';
import IllustrationWeirdShape from './weird-shape.svg';
import Topbar from 'components/Topbar';

const Header = () => {
  return (
    <Style.Container>
      <Topbar />

      <Style.Wrapper>
        <Style.Title>Soigne toi wesh</Style.Title>
        <Style.Text>
          Lorem ipsum dar karhti odhq lorem ipsum dar karhti odhq lorem ipsum
          dar karhti odhq lorem ipsum dar karhti odhq lorem ipsum dar karhti
          odhq
        </Style.Text>
      </Style.Wrapper>

      <Style.Illustrations>
        <Style.WomanSofaIllustration as={IllustrationWomanSofa} />
        <Style.BackgroundIllustration as={IllustrationWeirdShape} />
      </Style.Illustrations>
    </Style.Container>
  );
};

export default Header;

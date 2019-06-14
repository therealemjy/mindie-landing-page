import React from 'react';

import * as Style from './style';
import P from 'components/P';

import IllustrationShield from './shield.svg';

const SectionSecurity = () => {
  return (
    <Style.Container>
      <Style.Wrapper>
        <Style.Illustration as={IllustrationShield} />

        <Style.Title>Confidentialité et sécurité</Style.Title>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur
          mollis tortor nec consectetur. Mauris varius enim non accumsan
          pulvinar. Ut pretium eu augue eu faucibus.
        </P>
      </Style.Wrapper>
    </Style.Container>
  );
};

export default SectionSecurity;

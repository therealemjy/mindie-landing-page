import React from 'react';

import * as Style from './style';
import P from 'components/P';

import IllustrationShield from './shield.svg';
import Circle from './circle.svg';
import Triangle from './triangle.svg';
import Square from './square.svg';

const SectionMatching: React.SFC = () => {
  return (
    <Style.Container>
      <Style.Wrapper>
        <Style.Illustration as={IllustrationShield} />

        <Style.Title>Choisissez un psychologue qui vous correspond</Style.Title>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur
          mollis tortor nec consectetur. Mauris varius enim non accumsan
          pulvinar. Ut pretium eu augue eu faucibus.
        </P>
      </Style.Wrapper>

      <Style.Circle as={Circle} />
      <Style.Triangle as={Triangle} />
      <Style.Square as={Square} />
    </Style.Container>
  );
};

export default SectionMatching;

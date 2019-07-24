import React from 'react';

import * as Style from './style';
import { Section } from 'components/Grid';
import P from 'components/P';

import IllustrationPsyChoices from './psy-choices.svg';

const SectionMatching: React.SFC = () => {
  return (
    <Section>
      <Style.Container>
        <Style.Wrapper>
          <Style.Illustration as={IllustrationPsyChoices} />

          <Style.Title>
            Choisissez un practicien qui vous correspond
          </Style.Title>
          <Style.P>
            Après que vous ayez répondu à quelques questions, nos psychologues
            analysent vos réponses. Vous sélectionnez ensuite celui qui vous
            correspond le plus parmi les profils de ceux ayant indiquer pouvoir
            vous aider.
          </Style.P>
        </Style.Wrapper>
      </Style.Container>
    </Section>
  );
};

export default SectionMatching;

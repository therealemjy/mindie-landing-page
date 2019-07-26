import React from 'react';

import * as Style from './style';
import { Section } from 'components/Grid';

import IllustrationPsyChoices from './psy-choices.svg';

const SectionMatching: React.SFC = () => {
  return (
    <Section>
      <Style.Container>
        <Style.Wrapper>
          <Style.Illustration as={IllustrationPsyChoices} />

          <Style.Title>Choisissez un praticien qui vous correspond</Style.Title>
          <Style.P>
            Pouvoir parler de ses problèmes à une personne qui ne vous juge pas
            apporte du réconfort et aide à avancer. Notre système de matching
            vous permettra de choisir un psychologue qui vous correspond, parmi
            ceux qui auront déjà indiqué être en mesure de vous aider.
          </Style.P>
        </Style.Wrapper>
      </Style.Container>
    </Section>
  );
};

export default SectionMatching;

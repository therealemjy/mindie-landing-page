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
            Choisissez un psychologue qui vous correspond
          </Style.Title>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            efficitur mollis tortor nec consectetur. Mauris varius enim non
            accumsan pulvinar. Ut pretium eu augue eu faucibus.
          </P>
        </Style.Wrapper>
      </Style.Container>
    </Section>
  );
};

export default SectionMatching;

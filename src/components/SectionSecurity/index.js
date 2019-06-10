import React from 'react';

import * as Style from './style';

import IllustrationShield from './shield.svg';

const SectionSecurity = () => {
  return (
    <Style.Container>
      <Style.ShieldIllustration as={IllustrationShield} />

      <Style.Title>Confidentialité et sécurité</Style.Title>
      <Style.Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur
        mollis tortor nec consectetur. Mauris varius enim non accumsan pulvinar.
        Ut pretium eu augue eu faucibus.
      </Style.Paragraph>
    </Style.Container>
  );
};

export default SectionSecurity;

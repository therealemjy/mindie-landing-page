import React from 'react';

import * as PageStyle from 'pagesAssets/SignUp/style';
import * as Style from './style';
import IllustrationAvatar from './avatar.svg';
import P from 'components/P';

const Success: React.SFC = () => (
  <PageStyle.SmallWrapper>
    <Style.Illustration as={IllustrationAvatar} />
    <Style.Title>Vous êtes prêt !</Style.Title>
    <P>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur
      mollis tortor nec consectetur. Mauris varius enim non accumsan pulvinar.
      Ut pretium eu augue eu faucibus.
    </P>
  </PageStyle.SmallWrapper>
);

export default Success;

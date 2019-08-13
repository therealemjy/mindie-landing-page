import React from 'react';

import * as PageStyle from 'pagesAssets/SignUp/style';
import * as Style from './style';
import IllustrationAvatar from './avatar.svg';
import P from 'components/P';

export interface SectionSuccessType {
  postSignUp: React.ReactNode;
  postPayment: React.ReactNode;
}

const SectionSuccess: SectionSuccessType = {
  postSignUp: (
    <PageStyle.SmallWrapper>
      <Style.Illustration as={IllustrationAvatar} />
      <Style.Title>Votre parcours commence maintenant !</Style.Title>
      <P>
        Merci pour votre inscription ; vos réponses ont été transmises de
        manière confidentielle à nos psychologues qui vont les analyser. Vous
        recevrez bientôt un email de notre part détaillant la suite du
        processus.
      </P>
      <br />
      <P>Bienvenue sur Mindie 🙂</P>
      <br />
      <P>Maxime & Anthony, fondateurs de Mindie</P>
    </PageStyle.SmallWrapper>
  ),
  postPayment: (
    <PageStyle.SmallWrapper>
      <Style.Illustration as={IllustrationAvatar} />
      <Style.Title>Votre parcours commence maintenant !</Style.Title>
      <P>
        Merci pour votre inscription ; vos réponses ont été transmises de
        manière confidentielle à nos psychologues qui vont les analyser. Vous
        recevrez bientôt un email de notre part détaillant la suite du
        processus.
      </P>
      <br />
      <P>Bienvenue sur Mindie 🙂</P>
      <br />
      <P>Maxime & Anthony, fondateurs de Mindie</P>
    </PageStyle.SmallWrapper>
  ),
};

export default SectionSuccess;

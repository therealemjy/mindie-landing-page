import React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';

import * as PageStyle from 'pagesAssets/SignUp/style';
import * as Style from './style';
import CardDetailsForm from 'containers/CardDetailsForm';
import ListItem from './ListItem';

export interface Props {
  apiKey: string;
  onSubmit: () => void;
  email: string;
}

const SectionPayment: React.SFC<Props> = ({ apiKey, onSubmit, email }) => (
  <PageStyle.SmallWrapper>
    <Style.Price>
      49€<Style.Recurrence> / semaine</Style.Recurrence>
    </Style.Price>

    <Style.List>
      <ListItem>
        Matching avec un psychologue qualifié et adapté à vous
      </ListItem>
      <ListItem>Pas de sessions fixes, écrivez lorsque vous le voulez</ListItem>
      <ListItem>Communications confidentielles et encryptées</ListItem>
      <ListItem>Aucun jugement ou stigmat</ListItem>
    </Style.List>

    <Style.BillingDetails>
      Votre souscription ne démarrera que lorsque vous commencerez à parler avec
      votre psychologue ; aucun montant ne vous sera débité avant cela. Vous
      pouvez de plus annuler votre souscription à n'importe quel moment, sans
      frais.
    </Style.BillingDetails>

    <StripeProvider apiKey={apiKey}>
      <Elements>
        <CardDetailsForm onSubmit={onSubmit} email={email} />
      </Elements>
    </StripeProvider>
  </PageStyle.SmallWrapper>
);

export default SectionPayment;

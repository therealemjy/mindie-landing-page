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
      <ListItem>Matching avec un psychologue adapté à vous</ListItem>
      <ListItem>Support personnalisé d'un psychologue qualifié</ListItem>
      <ListItem>Écrivez dès que vous en ressentez le besoin</ListItem>
      <ListItem>Communications confidentielles et encryptées</ListItem>
      <ListItem>Aucun besoin de se déplacer</ListItem>
      <ListItem>Aucun jugement ou stigmat</ListItem>
    </Style.List>

    <Style.BillingDetails>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
      sit amet, consectetur adipiscing elit.
    </Style.BillingDetails>

    <StripeProvider apiKey={apiKey}>
      <Elements>
        <CardDetailsForm onSubmit={onSubmit} email={email} />
      </Elements>
    </StripeProvider>
  </PageStyle.SmallWrapper>
);

export default SectionPayment;

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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </ListItem>
      <ListItem>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </ListItem>
      <ListItem>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </ListItem>
    </Style.List>

    <StripeProvider apiKey={apiKey}>
      <Elements>
        <CardDetailsForm onSubmit={onSubmit} email={email} />
      </Elements>
    </StripeProvider>
  </PageStyle.SmallWrapper>
);

export default SectionPayment;

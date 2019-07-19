import React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';

import * as PageStyle from 'pagesAssets/SignUp/style';
// import * as Style from './style';
import CardDetailsForm from 'containers/CardDetailsForm';

export interface Props {
  apiKey: string;
  onSubmit: () => void;
  email: string;
}

const SectionPayment: React.SFC<Props> = ({ apiKey, onSubmit, email }) => (
  <PageStyle.SmallWrapper>
    <StripeProvider apiKey={apiKey}>
      <Elements>
        <CardDetailsForm onSubmit={onSubmit} email={email} />
      </Elements>
    </StripeProvider>
  </PageStyle.SmallWrapper>
);

export default SectionPayment;

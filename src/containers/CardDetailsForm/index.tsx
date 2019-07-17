import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { injectStripe } from 'react-stripe-elements';

import { AppError } from '../../types/error';
import config from 'config';
import CardDetailsForm, {
  Props as ICardDetailsForm,
} from 'components/CardDetailsForm';

export interface Props {
  stripe: any; // TODO: define typing
  onSubmit: () => void;
}

const ContainedCardDetailsForm: React.SFC<Props> = ({
  stripe,
  onSubmit,
  ...otherProps
}) => {
  const [clientSecret, setClientSecret] = useState<undefined | string>(
    undefined
  );
  const [serverError, setServerError] = useState<undefined | AppError>(
    undefined
  );
  const [stripeError, setStripeError] = useState<any>(undefined);
  const [cardElementRef, setCardElementRef] = useState<undefined | any>(
    undefined
  );

  useEffect(() => {
    const fetchSetupIntent = async () => {
      try {
        // Fetch client secret
        const { data } = await Axios({
          method: 'post',
          url: config.api.setupIntentUrl,
        });

        setClientSecret(data);
      } catch (error) {
        setServerError(error);
      }
    };

    fetchSetupIntent();
  }, []);

  const handleSubmit = async () => {
    // Save card details
    const [
      { setupIntent, error: errorHandleCardSetup },
      { token, error: errorCreateToken },
    ] = await Promise.all([
      stripe.handleCardSetup(clientSecret, cardElementRef),
      stripe.createToken(),
    ]);

    if (errorHandleCardSetup || errorCreateToken) {
      setStripeError(errorHandleCardSetup || errorCreateToken);
      return;
    }

    // Create customer
    try {
      await Axios({
        method: 'post',
        url: config.api.createCustomerUrl,
        data: {
          // TODO: get real email address
          email: 'contact@maxime-julian.com',
          paymentMethodId: setupIntent.payment_method,
          tokenId: token.id,
        },
      });
    } catch (error) {
      setServerError(error);
    }

    // Callback
    onSubmit();
  };

  if (stripeError || serverError) {
    console.log(stripeError || serverError);
    return <>Something went wrong :(</>;
  }

  if (!clientSecret) {
    return <>Loading...</>;
  }

  return (
    <CardDetailsForm
      {...otherProps}
      onSubmit={handleSubmit}
      onReady={setCardElementRef}
    />
  );
};

export default injectStripe(ContainedCardDetailsForm) as React.ComponentType<
  ICardDetailsForm
>;

import React, { useEffect, useState } from 'react';
import Axios, { AxiosResponse } from 'axios';
import { injectStripe } from 'react-stripe-elements';

import config from 'config';
import CardDetailsForm from 'components/CardDetailsForm';

export interface Props {
  stripe: any; // TODO: define typing
}

const ContainedCardDetailsForm: React.SFC<Props> = ({
  stripe,
  ...otherProps
}) => {
  const [clientSecret, setClientSecret] = useState<undefined | string>(
    undefined
  );
  const [serverError, setServerError] = useState<undefined | string>(undefined);
  const [cardElementRef, setCardElementRef] = useState<undefined | any>(
    undefined
  );

  useEffect(() => {
    const fetchSetupIntent = async () => {
      try {
        // Fetch client secret
        const { data }: AxiosResponse<string> = await Axios({
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
      setServerError(errorHandleCardSetup || errorCreateToken);
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
          token,
        },
      });
    } catch (error) {
      setServerError(error);
    }
  };

  if (serverError) {
    console.log(serverError);
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

export default injectStripe(ContainedCardDetailsForm);

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
  const [error, setError] = useState<undefined | string>(undefined);
  const [cardElementRef, setCardElementRef] = useState<undefined | any>(
    undefined
  );

  useEffect(() => {
    // Fetch client secret
    Axios({
      method: 'post',
      url: config.api.setupIntentUrl,
    })
      .then(({ data }: AxiosResponse<string>) => {
        setClientSecret(data);
      })
      .catch(error => {
        console.log(error);
        setError(error);
      });
  }, []);

  const handleSubmit = async () => {
    // Save card details
    const { setupIntent, error } = await stripe.handleCardSetup(
      clientSecret,
      cardElementRef,
      {
        payment_method_data: {
          billing_details: {
            name: 'Quentin de Montargis',
          },
        },
      }
    );

    if (error) {
      console.log(error);
      setError(error);
    }

    // Create customer
    Axios({
      method: 'post',
      url: config.api.createCustomerUrl,
      data: {
        // TODO: get real email address
        email: 'contact@maxime-julian.com',
        paymentMethodId: setupIntent.payment_method,
      },
    }).catch(error => {
      console.log(error);
      setError(error);
    });
  };

  if (error) {
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
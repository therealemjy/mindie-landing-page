import React, { useEffect, useState } from 'react';
import Axios, { AxiosResponse } from 'axios';
import { injectStripe } from 'react-stripe-elements';

import config from 'config';
import CardDetailsForm from 'components/CardDetailsForm';

const ContainedCardDetailsForm: React.SFC = props => {
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

  const handleSubmit = () => {
    console.log('SUBMIT');
    console.log(cardElementRef);
  };

  if (error) {
    return <>Something wrong happened :(</>;
  }

  if (!clientSecret) {
    return <>Loading...</>;
  }

  return (
    <CardDetailsForm
      {...props}
      onSubmit={handleSubmit}
      onReady={setCardElementRef}
    />
  );
};

export default injectStripe(ContainedCardDetailsForm);

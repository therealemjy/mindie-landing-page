import React, { useEffect, useState } from 'react';
import Axios, { AxiosResponse } from 'axios';

import config from 'config';
import CardDetailsForm from 'components/CardDetailsForm';

const ContainedCardDetailsForm: React.SFC = props => {
  const [clientSecret, setClientSecret] = useState<undefined | string>(
    undefined
  );
  const [error, setError] = useState<undefined | string>(undefined);

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

  const handleSubmit = () => console.log('SUBMIT');

  if (error) {
    return <>Something wrong happened :(</>;
  }

  if (!clientSecret) {
    return <>Loading...</>;
  }

  return <CardDetailsForm {...props} onSubmit={handleSubmit} />;
};

export default ContainedCardDetailsForm;

import React, { useEffect, useState } from 'react';
import Axios, { AxiosResponse } from 'axios';

import config from 'config';

// import * as Style from './style';

const CardDetailsForm: React.SFC = () => {
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

  if (error) {
    return <>{error}</>;
  }

  if (!clientSecret) {
    return <>Loading...</>;
  }

  return <>Display form here</>;
};

export default CardDetailsForm;

import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import config from '../config';
import { AppError } from '../types/error';

const withConnectedAccountConfirmation = (Component: React.SFC) => (
  componentProps: any
) => {
  const [serverError, setServerError] = useState<undefined | AppError>(
    undefined
  );

  useEffect(() => {
    const confirmConnectedAccount = async (confirmationCode: string) => {
      try {
        await Axios({
          method: 'post',
          url: config.api.confirmConnectedAccountUrl,
          data: {
            code: confirmationCode,
          },
        });
      } catch (error) {
        setServerError(error);
      }
    };

    const url = new URL(window.location.href);
    const code = url.searchParams.get('code');

    if (!code) {
      // TODO: redirect to home page if no code was provided
    } else {
      // Confirm connected account
      confirmConnectedAccount(code);
    }
  }, []);

  if (serverError) {
    console.log(serverError);
  }

  return <Component {...componentProps} />;
};

export default withConnectedAccountConfirmation;

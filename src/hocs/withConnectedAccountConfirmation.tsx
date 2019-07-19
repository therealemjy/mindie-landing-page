import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { navigate } from 'gatsby';

import config from 'config';
import { AppError } from 'types/error';
import getSearchParam from 'utils/getSearchParam';

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

    const code = getSearchParam(window.location.href, 'code');

    if (!code) {
      navigate('/');
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

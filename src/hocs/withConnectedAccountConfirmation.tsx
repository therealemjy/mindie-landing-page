import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import { AppError } from '../types/error';

const withConnectedAccountConfirmation = (Component: React.SFC) => (
  componentProps: any
) => {
  const [serverError, setServerError] = useState<undefined | AppError>(
    undefined
  );

  useEffect(() => {}, []);

  return <Component {...componentProps} />;
};

export default withConnectedAccountConfirmation;

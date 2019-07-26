import React from 'react';
import { navigate } from 'gatsby';

import getSearchParam from 'utils/getSearchParam';
import { isWindowAvailable } from '../utils';

function withEmailRedirect<T>(Component: React.ComponentType<T>) {
  return (componentProps: any) => {
    let email: string | undefined;

    if (isWindowAvailable) {
      email = getSearchParam(window.location.href, 'email') || undefined;
    }

    if (isWindowAvailable && !email) {
      navigate('/');
    }

    return <Component {...componentProps} email={email} />;
  };
}

export default withEmailRedirect;

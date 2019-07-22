import React from 'react';
import { navigate } from 'gatsby';

import getSearchParam from 'utils/getSearchParam';

function withEmailRedirect<T>(Component: React.ComponentType<T>) {
  return (componentProps: any) => {
    let email =
      window &&
      window.location.href &&
      getSearchParam(window.location.href, 'email');

    if (!email) {
      navigate('/');
    }

    return <Component {...componentProps} email={email} />;
  };
}

export default withEmailRedirect;

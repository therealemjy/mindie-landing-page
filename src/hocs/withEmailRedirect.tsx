import React from 'react';
import { navigate } from 'gatsby';

import getSearchParam from 'utils/getSearchParam';

function withEmailRedirect<T>(Component: React.ComponentType<T>) {
  return (componentProps: any) => {
    let email: string | undefined;

    if (typeof window !== 'undefined') {
      email = getSearchParam(window.location.href, 'email') || undefined;
    }

    if (typeof window !== 'undefined' && !email) {
      navigate('/');
    }

    return <Component {...componentProps} email={email} />;
  };
}

export default withEmailRedirect;

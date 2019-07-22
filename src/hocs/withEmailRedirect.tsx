import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

import getSearchParam from 'utils/getSearchParam';

function withEmailRedirect<T>(Component: React.ComponentType<T>) {
  return (componentProps: any) => {
    let email: string | undefined;

    useEffect(() => {
      email = getSearchParam(window.location.href, 'email') || undefined;

      if (!email) {
        navigate('/');
      }
    }, []);

    return <Component {...componentProps} email={email} />;
  };
}

export default withEmailRedirect;

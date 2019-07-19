import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

const withEmailRedirect = (Component: React.SFC) => (componentProps: any) => {
  useEffect(() => {
    const url = new URL(window.location.href);
    const email = url.searchParams.get('email');

    if (!email) {
      navigate('/');
    }
  });

  return <Component {...componentProps} />;
};

export default withEmailRedirect;

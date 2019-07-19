import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

import getSearchParam from 'utils/getSearchParam';

const withEmailRedirect = (Component: React.SFC) => (componentProps: any) => {
  useEffect(() => {
    if (!getSearchParam(window.location.href, 'email')) {
      navigate('/');
    }
  });

  return <Component {...componentProps} />;
};

export default withEmailRedirect;

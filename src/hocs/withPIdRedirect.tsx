import React from 'react';
import { navigate } from 'gatsby';

import getSearchParam from 'utils/getSearchParam';
import { isWindowAvailable } from '../utils/index';

// Note: pId corresponds to the ID of the connected account of the psy the payment will be sent to
function withPIdRedirect<T>(Component: React.ComponentType<T>) {
  return (componentProps: any) => {
    let pId: string | undefined;

    if (isWindowAvailable) {
      pId = getSearchParam(window.location.href, 'pId') || undefined;
    }

    if (isWindowAvailable && !pId) {
      navigate('/');
    }

    return <Component {...componentProps} pId={pId} />;
  };
}

export default withPIdRedirect;

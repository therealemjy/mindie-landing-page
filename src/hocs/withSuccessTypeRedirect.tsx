import React from 'react';
import { navigate } from 'gatsby';

import getSearchParam from 'utils/getSearchParam';
import { isWindowAvailable } from '../utils';
import SectionSuccess, {
  SectionSuccessType,
} from 'pagesAssets/SignUp/SectionSuccess';

function withSuccessTypeRedirect<T>(Component: React.ComponentType<T>) {
  return (componentProps: any) => {
    let type: keyof SectionSuccessType | null = null;

    if (isWindowAvailable) {
      type = getSearchParam(
        window.location.href,
        'type'
      ) as keyof SectionSuccessType;
    }

    if (isWindowAvailable && !type) {
      navigate('/');
    }

    if (isWindowAvailable && type && !SectionSuccess[type]) {
      navigate('/');
    }

    return <Component {...componentProps} type={type} />;
  };
}

export default withSuccessTypeRedirect;

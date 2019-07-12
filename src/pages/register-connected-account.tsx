import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import SEO from 'components/SEO';
import Topbar from 'components/Topbar';
import Wrapper from 'components/Wrapper';

const RegisterConnectedAccount: React.SFC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [serverError, setServerError] = useState<any>(undefined);

  <>
    {/* TODO: SEO */}
    <SEO title="" description="" />
    <Topbar />

    <Wrapper>
      <h1>Final step</h1>
    </Wrapper>
  </>;
};

export default RegisterConnectedAccount;

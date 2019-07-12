import React from 'react';

import enhance from '../hocs/withConnectedAccountConfirmation';
import SEO from 'components/SEO';
import Topbar from 'components/Topbar';
import Wrapper from 'components/Wrapper';

const ConfirmConnectedAccount: React.SFC = () => (
  <>
    {/* TODO: SEO */}
    <SEO title="" description="" />
    <Topbar />

    <Wrapper>
      <h1>Final step</h1>
    </Wrapper>
  </>
);

export default enhance(ConfirmConnectedAccount);

import React from 'react';

import withConnectedAccountConfirmation from '../hocs/withConnectedAccountConfirmation';
import { Page, Content } from 'components/Grid';
import SEO from 'components/SEO';
import Topbar from 'components/Topbar';
import { Wrapper } from 'components/Grid';

const ConfirmConnectedAccount: React.SFC = () => (
  <Page>
    <Content>
      {/* TODO: SEO */}
      <SEO title="" description="" />
      <Topbar />

      <Wrapper>
        <h1>Final step</h1>
      </Wrapper>
    </Content>
  </Page>
);

export default withConnectedAccountConfirmation(ConfirmConnectedAccount);

import React from 'react';

import SEO from 'components/SEO';
import { Page, Content } from 'components/Grid';

const NotFound: React.SFC = () => (
  <Page>
    <Content>
      <SEO title="404: Not found" description="" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Content>
  </Page>
);

export default NotFound;

import React from 'react';
import { Link } from 'gatsby';

import SEO from 'components/SEO';
import { Page, Content } from 'components/Grid';

const NotFound: React.SFC = () => (
  <Page>
    <Content>
      <SEO title="404: Not found" description="" />
      <h1>Page introuvable :(</h1>
      <Link to="/">Revenir sur la page d'accueil</Link>
    </Content>
  </Page>
);

export default NotFound;

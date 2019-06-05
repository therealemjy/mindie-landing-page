import React from 'react';

import Layout from 'components/Layout';
import Topbar from 'components/Topbar';
import SEO from 'components/SEO';

export default function App() {
  return (
    <Layout>
      <SEO title="Mindie App | Sois heureux wesh" />

      <Topbar />
    </Layout>
  );
}

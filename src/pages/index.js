import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Header from 'components/Header';
import SectionSecurity from 'components/SectionSecurity';

export default function App() {
  return (
    <Layout>
      <SEO title="Mindie App | Sois heureux wesh" />

      <Header />

      <SectionSecurity />
    </Layout>
  );
}

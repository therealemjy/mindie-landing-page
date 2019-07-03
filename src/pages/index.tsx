import React from 'react';

import SEO from 'components/SEO';
import Header from 'components/Header';
import SectionSecurity from 'components/SectionSecurity';
import SectionFAQ from 'components/SectionFAQ';
import Footer from 'components/Footer';

const App: React.SFC = () => (
  <>
    {/* TODO: SEO */}
    <SEO title="Mindie App | Sois heureux wesh" description="" />

    <Header />

    <SectionSecurity />

    <SectionFAQ />

    <Footer />
  </>
);

export default App;

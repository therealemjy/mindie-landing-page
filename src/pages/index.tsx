import React from 'react';

import SEO from 'components/SEO';
import BackgroundIllustrations from 'components/BackgroundIllustrations';
import Header from 'components/Header';
import SectionMatching from 'components/SectionMatching';
import SectionFAQ from 'components/SectionFAQ';
import Footer from 'components/Footer';

const App: React.SFC = () => (
  <>
    {/* TODO: SEO */}
    <SEO title="Mindie" description="" />

    {/* <BackgroundIllustrations /> */}

    <Header />

    <SectionMatching />
    <SectionFAQ />

    <Footer />
  </>
);

export default App;

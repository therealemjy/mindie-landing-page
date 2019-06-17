import React, { useState, useEffect } from 'react';

import SEO from 'components/SEO';
import Header from 'components/Header';
import SectionSecurity from 'components/SectionSecurity';
import SectionFAQ from 'components/SectionFAQ';
import Footer from 'components/Footer';
import Api from 'libs/api';
import ApiContext from 'contexts/api';
import RegistrationContext from 'contexts/registration';

const App = () => {
  // Note: ideally this side-effect should be stored in a separate container, but because of
  // how  Gatsby generates pages we can't do that without complicated changes to the structure
  const [apiDriver, setApiDriver] = useState<undefined | Api>(undefined);
  useEffect(() => setApiDriver(new Api()), []);

  return (
    <RegistrationContext.Provider>
      <ApiContext.Provider value={apiDriver}>
        <SEO title="Mindie App | Sois heureux wesh" description="" />

        <Header />

        <SectionSecurity />

        <SectionFAQ />

        <Footer />
      </ApiContext.Provider>
    </RegistrationContext.Provider>
  );
};

export default App;

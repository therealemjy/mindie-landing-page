import React from 'react';
import ScriptLoader from 'react-script-loader-hoc';
import { navigate } from 'gatsby';

import SectionPayment from 'pagesAssets/SignUp/SectionPayment';
import config from 'config';
import withSteps from 'hocs/withSteps';
import withEmailRedirect from 'hocs/withEmailRedirect';
import SEO from 'components/SEO';
import Topbar from 'components/Topbar';
import Footer from 'components/Footer';
import { Page, Content } from 'components/Grid';
import { compose } from 'utils';
import withPIdRedirect from 'hocs/withPIdRedirect';

export interface Props {
  scriptsLoadedSuccessfully: boolean;
  email: string;
  pId: string;
}

const SignUp: React.SFC<Props> = ({
  email,
  pId,
  scriptsLoadedSuccessfully,
}) => {
  if (!scriptsLoadedSuccessfully) {
    return <>Chargement...</>;
  }

  return (
    <Page>
      <Content>
        <SEO
          title="Inscription - Mindie"
          description="Obtenez le soutien d'un professionnel depuis le confort de votre canapé"
        />

        <Topbar />

        <SectionPayment
          apiKey={config.stripe.publicKey}
          onSubmit={() => navigate('/success?type=postPayment')}
          email={email}
          pId={pId}
        />
      </Content>

      <Footer noSignUpForm noWarning />
    </Page>
  );
};

export default compose(
  withPIdRedirect,
  withEmailRedirect,
  withSteps,
  ScriptLoader('https://js.stripe.com/v3/')
)(SignUp);

import React from 'react';
import ScriptLoader from 'react-script-loader-hoc';

import * as Style from 'pagesAssets/SignUp/style';
import SectionSuccess from 'pagesAssets/SignUp/SectionSuccess';
import SectionPayment from 'pagesAssets/SignUp/SectionPayment';
import config from 'config';
import withSteps from 'hocs/withSteps';
import withEmailRedirect from 'hocs/withEmailRedirect';
import SEO from 'components/SEO';
import Topbar from 'components/Topbar';
import Footer from 'components/Footer';
import SignUpForm from 'components/SignUpForm';
import { Page, Content } from 'components/Grid';

export interface Props {
  scriptsLoadedSuccessfully: boolean;
  step: number;
  email: string;
  setStep: (step: number) => void;
}

const SignUp: React.SFC<Props> = ({ step, setStep, email }) => {
  const handleSetStep = (step: number) => () => setStep(step);

  return (
    <Page>
      <Content>
        {/* TODO: SEO */}
        <SEO title="" description="" />
        <Topbar />

        {step === 0 && (
          <Style.Wrapper>
            <SignUpForm onSubmit={handleSetStep(1)} />
          </Style.Wrapper>
        )}

        {step === 1 && (
          <SectionPayment
            apiKey={config.stripe.publicKey}
            onSubmit={handleSetStep(2)}
            email={email}
          />
        )}

        {step === 2 && <SectionSuccess />}
      </Content>

      <Footer noSignUpForm noWarning />
    </Page>
  );
};

export default withEmailRedirect<Props>(
  withSteps(ScriptLoader('https://js.stripe.com/v3/')(SignUp))
);

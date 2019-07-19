import React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import ScriptLoader from 'react-script-loader-hoc';

import * as Style from 'pagesAssets/SignUp/style';
import Success from 'pagesAssets/SignUp/Success';
import config from 'config';
import withSteps from 'hocs/withSteps';
import withEmailRedirect from 'hocs/withEmailRedirect';
import SEO from 'components/SEO';
import Topbar from 'components/Topbar';
import Footer from 'components/Footer';
import SignUpForm from 'components/SignUpForm';
import { Page, Content } from 'components/Grid';
import CardDetailsForm from 'containers/CardDetailsForm';

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
          <Style.SmallWrapper>
            <StripeProvider apiKey={config.stripe.publicKey}>
              <Elements>
                <CardDetailsForm onSubmit={handleSetStep(2)} email={email} />
              </Elements>
            </StripeProvider>
          </Style.SmallWrapper>
        )}

        {step === 2 && <Success />}
      </Content>

      <Footer noSignUpForm noWarning />
    </Page>
  );
};

export default withEmailRedirect<Props>(
  withSteps(ScriptLoader('https://js.stripe.com/v3/')(SignUp))
);

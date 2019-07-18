import React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import ScriptLoader from 'react-script-loader-hoc';

import config from 'config';
import SEO from 'components/SEO';
import Topbar from 'components/Topbar';
import Footer from 'components/Footer';
import SignUpForm from 'components/SignUpForm';
import { Wrapper, Page, Content } from 'components/Grid';
import withSteps from 'hocs/withSteps';
import CardDetailsForm from 'containers/CardDetailsForm';

export interface Props {
  scriptsLoadedSuccessfully: boolean;
  step: number;
  setStep: (step: number) => void;
}

const SignUp: React.SFC<Props> = ({
  scriptsLoadedSuccessfully,
  step,
  setStep,
}) => {
  if (!scriptsLoadedSuccessfully) {
    return <>Loading...</>;
  }

  const handleSetStep = (step: number) => () => setStep(step);

  return (
    <Page>
      <Content>
        {/* TODO: SEO */}
        <SEO title="" description="" />
        <Topbar />

        <Wrapper>
          {step === 0 && <SignUpForm onSubmit={handleSetStep(1)} />}
          {step === 1 && (
            <StripeProvider apiKey={config.stripe.publicKey}>
              <Elements>
                <CardDetailsForm onSubmit={handleSetStep(2)} />
              </Elements>
            </StripeProvider>
          )}
          {step === 2 && <>Success page</>}
        </Wrapper>
      </Content>

      <Footer noSignUpForm />
    </Page>
  );
};

export default withSteps(ScriptLoader('https://js.stripe.com/v3/')(SignUp));

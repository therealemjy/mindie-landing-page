import React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import ScriptLoader from 'react-script-loader-hoc';

import * as Style from 'pagesAssets/SignUp/style';
import IllustrationAvatar from 'pagesAssets/SignUp/avatar.svg';
import config from 'config';
import withSteps from 'hocs/withSteps';
import CardDetailsForm from 'containers/CardDetailsForm';
import SEO from 'components/SEO';
import Topbar from 'components/Topbar';
import Footer from 'components/Footer';
import SignUpForm from 'components/SignUpForm';
import { Wrapper, Page, Content } from 'components/Grid';
import P from 'components/P';

export interface Props {
  scriptsLoadedSuccessfully: boolean;
  step: number;
  setStep: (step: number) => void;
}

const SignUp: React.SFC<Props> = ({ step, setStep }) => {
  const handleSetStep = (step: number) => () => setStep(step);

  return (
    <Page>
      <Content>
        {/* TODO: SEO */}
        <SEO title="" description="" />
        <Topbar />

        {step === 0 && (
          <Wrapper>
            <SignUpForm onSubmit={handleSetStep(1)} />
          </Wrapper>
        )}
        {step === 1 && (
          <Style.SmallWrapper>
            <StripeProvider apiKey={config.stripe.publicKey}>
              <Elements>
                <CardDetailsForm onSubmit={handleSetStep(2)} />
              </Elements>
            </StripeProvider>
          </Style.SmallWrapper>
        )}
        {step === 2 && (
          <Style.SmallWrapper>
            <Style.SuccessSection>
              <Style.Illustration as={IllustrationAvatar} />
              <Style.Title>Vous êtes prêt !</Style.Title>
              <P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                efficitur mollis tortor nec consectetur. Mauris varius enim non
                accumsan pulvinar. Ut pretium eu augue eu faucibus.
              </P>
            </Style.SuccessSection>
          </Style.SmallWrapper>
        )}
      </Content>

      <Footer noSignUpForm noWarning />
    </Page>
  );
};

export default withSteps(ScriptLoader('https://js.stripe.com/v3/')(SignUp));

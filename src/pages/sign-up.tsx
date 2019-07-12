import React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import ScriptLoader from 'react-script-loader-hoc';

import config from 'config';
import SEO from 'components/SEO';
import Topbar from 'components/Topbar';
import Wrapper from 'components/Wrapper';
// import SignUpForm from 'components/SignUpForm';
import CardDetailsForm from 'containers/CardDetailsForm';

export interface Props {
  scriptsLoadedSuccessfully: boolean;
}

const SignUp: React.SFC<Props> = ({ scriptsLoadedSuccessfully }) => {
  if (!scriptsLoadedSuccessfully) {
    return <>Loading...</>;
  }

  return (
    <>
      {/* TODO: SEO */}
      <SEO title="" description="" />
      <Topbar />

      <Wrapper>
        <h1>Sign up</h1>
        {/* <SignUpForm onSubmit={() => console.log('HEYY')} /> */}
        <StripeProvider apiKey={config.stripe.publicKey}>
          <Elements>
            <CardDetailsForm />
          </Elements>
        </StripeProvider>
      </Wrapper>
    </>
  );
};

// TODO: move side effect to a container (don't know how to do at the moment because of how Gatsby generates pages)
export default ScriptLoader('https://js.stripe.com/v3/')(SignUp);

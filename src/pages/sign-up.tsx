import React from 'react';

import SEO from 'components/SEO';
import Topbar from 'components/Topbar';
import Wrapper from 'components/Wrapper';
import SignUpForm from 'components/SignUpForm';
import CardDetailsForm from 'components/CardDetailsForm';

const SignUp: React.SFC = () => (
  <>
    {/* TODO: SEO */}
    <SEO title="" description="" />

    <Topbar />

    <Wrapper>
      <h1>Sign up</h1>
      {/* <SignUpForm onSubmit={() => console.log('HEYY')} /> */}
      <CardDetailsForm />
    </Wrapper>
  </>
);

export default SignUp;

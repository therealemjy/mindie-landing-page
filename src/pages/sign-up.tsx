import React from 'react';

import * as Style from 'pagesAssets/SignUp/style';
import SectionSuccess from 'pagesAssets/SignUp/SectionSuccess';
import withSteps from 'hocs/withSteps';
import withEmailRedirect from 'hocs/withEmailRedirect';
import SEO from 'components/SEO';
import Topbar from 'components/Topbar';
import Footer from 'components/Footer';
import SignUpForm from 'components/SignUpForm';
import { Page, Content } from 'components/Grid';
import { compose } from 'utils';

export interface Props {
  step: number;
  email: string;
  setStep: (step: number) => void;
}

const SignUp: React.SFC<Props> = ({ step, setStep, email }) => {
  const handleSetStep = (step: number) => () => setStep(step);

  return (
    <Page>
      <Content>
        <SEO
          title="Inscription - Mindie"
          description="Obtenez le soutien d'un professionnel depuis le confort de votre canapé"
        />

        <Topbar />

        {step === 0 && (
          <Style.Wrapper>
            <SignUpForm onSubmit={handleSetStep(1)} email={email} />
          </Style.Wrapper>
        )}

        {step === 1 && <SectionSuccess />}
      </Content>

      <Footer noSignUpForm noWarning />
    </Page>
  );
};

export default compose(
  withEmailRedirect,
  withSteps
)(SignUp);

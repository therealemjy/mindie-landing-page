import React from 'react';
import { navigate } from 'gatsby';

import * as Style from 'pagesAssets/SignUp/style';
import withEmailRedirect from 'hocs/withEmailRedirect';
import SEO from 'components/SEO';
import Topbar from 'components/Topbar';
import Footer from 'components/Footer';
import SignUpForm from 'components/SignUpForm';
import { Page, Content } from 'components/Grid';

export interface Props {
  email: string;
}

const SignUp: React.SFC<Props> = ({ email }) => {
  return (
    <Page>
      <Content>
        <SEO
          title="Inscription - Mindie"
          description="Obtenez le soutien d'un professionnel depuis le confort de votre canapé"
        />

        <Topbar />

        <Style.Wrapper>
          <SignUpForm
            onSubmit={() => navigate('/success?type=postSignUp')}
            email={email}
          />
        </Style.Wrapper>
      </Content>

      <Footer noSignUpForm noWarning />
    </Page>
  );
};

export default withEmailRedirect(SignUp);

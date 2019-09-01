import React from 'react';

import SectionSuccess, {
  SectionSuccessType,
} from 'pagesAssets/SignUp/SectionSuccess';
import withSuccessTypeRedirect from 'hocs/withSuccessTypeRedirect';
import SEO from 'components/SEO';
import Topbar from 'components/Topbar';
import Footer from 'components/Footer';
import { Page, Content } from 'components/Grid';

export interface Props {
  type: keyof SectionSuccessType;
}

const Success: React.SFC<Props> = ({ type }) => {
  return (
    <Page>
      <Content>
        <SEO
          title="Votre parcours commence maintenant - Mindie"
          description="Obtenez le soutien d'un professionnel depuis le confort de votre canapé"
        />

        <Topbar />
        {SectionSuccess[type]}
      </Content>
      <Footer noSignUpForm noWarning />
    </Page>
  );
};

export default withSuccessTypeRedirect(Success);

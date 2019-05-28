import React from 'react';
import PropTypes from 'prop-types';

import Footer from 'components/Footer';

import * as Style from './style';

const Layout = ({ children, displayFooter }) => (
  <Style.Container>
    <Style.Page id="page">
      <Style.Main>{children}</Style.Main>

      {displayFooter && <Footer />}
    </Style.Page>
  </Style.Container>
);

Layout.defaultProps = {
  displayFooter: true,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  displayFooter: PropTypes.bool,
};

export default Layout;

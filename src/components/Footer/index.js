import React from 'react';

import * as ROUTES from 'config/routes';

import * as Style from './style';

const Footer = () => (
  <Style.Wrapper>
    <Style.Container>
      <Style.Copyright>
        © {new Date().getFullYear()} Mindie. All Rights Reserved.
      </Style.Copyright>

      <Style.LinksList>
        <Style.ListItem>
          <Style.Link to={ROUTES.HOME}>Privacy Policy</Style.Link>
          <Style.Link to={ROUTES.HOME}>Terms of Service</Style.Link>
        </Style.ListItem>
      </Style.LinksList>
    </Style.Container>
  </Style.Wrapper>
);

export default Footer;

import React from 'react';

import * as Style from './style';
import Illustration from './integration-record-video.svg';
import Topbar from 'components/Topbar';

const Header = () => {
  return (
    <Style.Container>
      <Topbar />

      <Style.Wrapper>
        <Style.Row>
          <Style.Col>
            <Style.Title>Soigne toi wesh</Style.Title>
            <Style.Text>
              Lorem ipsum dar karhti odhq lorem ipsum dar karhti odhq lorem
              ipsum dar karhti odhq lorem ipsum dar karhti odhq lorem ipsum dar
              karhti odhq
            </Style.Text>
          </Style.Col>
          <Style.Col>
            <Style.Illustration as={Illustration} />
          </Style.Col>
        </Style.Row>
      </Style.Wrapper>
    </Style.Container>
  );
};

export default Header;

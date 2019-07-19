import React from 'react';

import * as Style from './style';
import IconCheck from './icon-check.svg';

const ListItem: React.SFC = ({ children }) => (
  <Style.Container>
    <Style.Icon as={IconCheck} />
    <Style.Content>{children}</Style.Content>
  </Style.Container>
);

export default ListItem;

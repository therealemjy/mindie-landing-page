import React from 'react';

import Triangle from './triangle.svg';
import Square from './square.svg';
import Circle from './circle.svg';
import * as Style from './style';

const BackgroundIllustrations: React.SFC = () => (
  <>
    <Style.Shape1 as={Circle} />
    <Style.Shape2 as={Triangle} />
    <Style.Shape3 as={Circle} />
    <Style.Shape4 as={Square} />
    <Style.Shape5 as={Triangle} />
  </>
);

export default BackgroundIllustrations;

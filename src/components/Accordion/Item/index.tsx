import React from 'react';

import * as Style from './style';

interface Props {
  question: string;
  answer: string;
  id: string;
  isActive?: boolean;
  onClick?: () => void;
}

const Item: React.SFC<Props> = ({
  question,
  answer,
  isActive = false,
  onClick,
}) => (
  <Style.Container>
    <Style.Question isActive={isActive} onClick={onClick}>
      {question}
    </Style.Question>
    {isActive && <Style.Answer>{answer}</Style.Answer>}
  </Style.Container>
);

export default Item;

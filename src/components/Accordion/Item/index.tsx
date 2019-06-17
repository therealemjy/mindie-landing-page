import React from 'react';

import * as Style from './style';
import IconPlus from './plus.svg';
import IconMinus from './minus.svg';

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
    <Style.Button isActive={isActive} onClick={onClick}>
      <Style.Question>{question}</Style.Question>
      <Style.Icon as={isActive ? IconMinus : IconPlus} />
    </Style.Button>
    {isActive && <Style.Answer>{answer}</Style.Answer>}
  </Style.Container>
);

export default Item;

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
  <Style.Container isActive={isActive}>
    <Style.Button onClick={onClick}>
      <Style.Question>{question}</Style.Question>
      <Style.Icon as={isActive ? IconMinus : IconPlus} />
    </Style.Button>
    <Style.Answer>
      <Style.AnswerText>{answer}</Style.AnswerText>
    </Style.Answer>
  </Style.Container>
);

export default Item;

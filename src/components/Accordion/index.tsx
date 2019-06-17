import React from 'react';

import * as Style from './style';
import Item from './Item';

export interface QuestionAnswer {
  id: string;
  question: string;
  answer: string;
}

interface Props {
  questionsAnswers: QuestionAnswer[];
  onChange: (value: string) => void;
  activeItemId?: string;
  className?: string;
}

const handleChange = (callback: (value: string) => void, value: string) => () =>
  callback(value);

const Accordion: React.SFC<Props> = ({
  questionsAnswers,
  activeItemId,
  className,
  onChange,
}) => (
  <Style.Container className={className}>
    {questionsAnswers.map(itemProps => (
      <Item
        {...itemProps}
        isActive={activeItemId === itemProps.id}
        onClick={handleChange(onChange, itemProps.id)}
        key={`accordion-item-${itemProps.id}`}
      />
    ))}
  </Style.Container>
);

export default Accordion;

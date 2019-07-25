import React from 'react';

import * as Style from './style';
import Item from './Item';

export interface QuestionAnswer {
  id: string;
  question: string;
  answer: React.ReactNode;
}

interface Props {
  questionsAnswers: QuestionAnswer[];
  onToggle: (value: string) => void;
  activeItemsIds?: string[];
  className?: string;
}

const handleChange = (callback: (value: string) => void, value: string) => () =>
  callback(value);

const Accordion: React.SFC<Props> = ({
  questionsAnswers,
  activeItemsIds = [],
  className,
  onToggle,
}) => (
  <Style.Container className={className}>
    {questionsAnswers.map(itemProps => (
      <Item
        {...itemProps}
        isActive={activeItemsIds.indexOf(itemProps.id) > -1}
        onClick={handleChange(onToggle, itemProps.id)}
        key={`accordion-item-${itemProps.id}`}
      />
    ))}
  </Style.Container>
);

export default Accordion;

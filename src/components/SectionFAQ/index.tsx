import React from 'react';

import * as Style from './style';
import Accordion from 'containers/Accordion';

const questionsAnswers = [
  {
    id: 'question-1',
    question: '?',
    answer: '!',
  },
  {
    id: 'question-2',
    question: '?',
    answer: '!',
  },
  {
    id: 'question-3',
    question: '?',
    answer: '!',
  },
];

const SectionFAQ: React.SFC = () => {
  return (
    <Style.Container>
      <Accordion questionsAnswers={questionsAnswers} />
    </Style.Container>
  );
};

export default SectionFAQ;

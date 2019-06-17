import React, { useState } from 'react';

import Accordion from 'components/Accordion';
import { QuestionAnswer } from 'components/Accordion';

interface Props {
  questionsAnswers: QuestionAnswer[];
}

const ContainedAccordion: React.SFC<Props> = props => {
  const [activeItemId, setActiveItemId] = useState<undefined | string>(
    undefined
  );

  return (
    <Accordion
      {...props}
      activeItemId={activeItemId}
      onChange={setActiveItemId}
    />
  );
};

export default ContainedAccordion;

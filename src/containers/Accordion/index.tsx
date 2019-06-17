import React, { useState } from 'react';

import Accordion from 'components/Accordion';
import { QuestionAnswer } from 'components/Accordion';

interface Props {
  questionsAnswers: QuestionAnswer[];
}

const ContainedAccordion: React.SFC<Props> = props => {
  const [activeItemsIds, setActiveItemsIds] = useState<string[]>([]);

  const handleToggleItemId = (id: QuestionAnswer['id']) =>
    setActiveItemsIds(
      activeItemsIds.indexOf(id) > -1
        ? [
            ...activeItemsIds.slice(0, activeItemsIds.indexOf(id)),
            ...activeItemsIds.slice(activeItemsIds.indexOf(id) + 1),
          ]
        : [...activeItemsIds, id]
    );

  return (
    <Accordion
      {...props}
      activeItemsIds={activeItemsIds}
      onToggle={handleToggleItemId}
    />
  );
};

export default ContainedAccordion;

import React from 'react';

import * as Style from './style';
import Accordion from 'containers/Accordion';

const questionsAnswers = [
  {
    id: 'question-1',
    question: `Qu'est-ce que la vie ?`,
    answer: `Nous ne savons pas`,
  },
  {
    id: 'question-2',
    question: `En combien de temps vais-je être mis en relation avec mon psychologue ?`,
    answer: `La mise en relation s’effectue instantanément dès que vous avez choisi votre offre. Nous choisissons votre psychologue en fonction des réponses aux questionsqui vous sont posées lors de votre inscription.`,
  },
  {
    id: 'question-3',
    question: `Comment vais-je communiquer avec mon psychologue ?`,
    answer: `Si vous avez choisi les consultations par messages, vous profiterez d’un espace d’échange de messages privé et sécurisé avec votre psychologue. Vous pourrez lui écrire quand vous le souhaitez et le nombre de messages est illimité. Votre psychologue vous répond une à deux fois par jour, 5 j/7 et pendant le temps nécessaire à vous sentir mieux. Vous gardez le même psychologue tout au long de votre accompagnement.
    \n\nSi vous avez choisi les consultations par téléphone, votre psychologue vous appelle quand vous le souhaitez sur le numéro de téléphone que vous renseignezlors de votre inscription. Vous avez la possibilité d’effectuer une consultation de 30 minutes chaque semaine.`,
  },
];

const SectionFAQ: React.SFC = () => {
  return (
    <Style.Wrapper>
      <Style.Title>Questions fréquentes</Style.Title>
      <Accordion questionsAnswers={questionsAnswers} />
    </Style.Wrapper>
  );
};

export default SectionFAQ;

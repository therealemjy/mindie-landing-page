import React from 'react';

import * as Style from './style';
import { Section } from 'components/Grid';
import Accordion from 'containers/Accordion';

const questionsAnswers = [
  {
    id: 'question-1',
    question: `Est-ce fait pour moi ?`,
    answer: `Parler des benefices d'un suivi psychologique`,
  },
  {
    id: 'question-3',
    question: `Les psychologues de mindie sont-ils qualifiés ?`,
    answer: `Bien évidemment (parler des certifications + ADELI)`,
  },
  {
    id: 'question-2',
    question: `Est-ce réellement efficace ?`,
    answer: `Absolument ! (donner references articles)`,
  },
  {
    id: 'question-4',
    question: `Combien cela coûte-t-il ?`,
    answer: `49€ / semaine, parler du referal et dire que l'user peut cancel des qu'il le souhaite`,
  },
  {
    id: 'question-5',
    question: `Vais-je échanger avec le même psychologue tout le long de mon parcours ?`,
    answer: `Si vous avez choisi les consultations par messages, vous profiterez d’un espace d’échange de messages privé et sécurisé avec votre psychologue. Vous pourrez lui écrire quand vous le souhaitez et le nombre de messages est illimité. Votre psychologue vous répond une à deux fois par jour, 5 j/7 et pendant le temps nécessaire à vous sentir mieux. Vous gardez le même psychologue tout au long de votre accompagnement.
    \n\nSi vous avez choisi les consultations par téléphone, votre psychologue vous appelle quand vous le souhaitez sur le numéro de téléphone que vous renseignezlors de votre inscription. Vous avez la possibilité d’effectuer une consultation de 30 minutes chaque semaine.`,
  },
  {
    id: 'question-6',
    question: `Les échanges avec mon psychologue sont-ils confidentiels ?`,
    answer: `Si vous avez choisi les consultations par messages, vous profiterez d’un espace d’échange de messages privé et sécurisé avec votre psychologue. Vous pourrez lui écrire quand vous le souhaitez et le nombre de messages est illimité. Votre psychologue vous répond une à deux fois par jour, 5 j/7 et pendant le temps nécessaire à vous sentir mieux. Vous gardez le même psychologue tout au long de votre accompagnement.
    \n\nSi vous avez choisi les consultations par téléphone, votre psychologue vous appelle quand vous le souhaitez sur le numéro de téléphone que vous renseignezlors de votre inscription. Vous avez la possibilité d’effectuer une consultation de 30 minutes chaque semaine.`,
  },
];

const SectionFAQ: React.SFC = () => {
  return (
    <Section>
      <Style.Wrapper>
        <Style.Title>Questions fréquentes</Style.Title>
        <Accordion questionsAnswers={questionsAnswers} />
      </Style.Wrapper>
    </Section>
  );
};

export default SectionFAQ;

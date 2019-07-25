import React from 'react';

import * as Style from './style';
import { Section } from 'components/Grid';
import Accordion from 'containers/Accordion';

const questionsAnswers = [
  {
    id: 'question-1',
    question: `Quel est l'objectif de Mindie ?`,
    answer: (
      <>
        La santé mentale est un sujet encore tabou en France. Notre but est de
        proposer une alternative à la thérapie classique, en rendant la
        psychologie accessible et abordable.
        <br />
        <br />
        Mindie permet de communiquer avec un psychologue certifié par message
        écrit ou audio et de faire ainsi part de ses problèmes de tous les
        jours, afin d'obtenir en retour un avis objectif et sans jugement et de
        trouver à terme des solutions durables.
        <br />
        <br />
        Nous n'essayons pas de remplacer la thérapie classique en cabinet.
        Beaucoup de personnes la préfèrent ; libre à chacun de suivre la
        pratique qui lui convient le mieux. Nous avons créé Mindie afin que plus
        de personnes puissent bénéficier d'un support psychologique leur
        permettant de surmonter les épreuves du quotidien dans un environnement
        sans stigmats ni jugement.
      </>
    ),
  },
  {
    id: 'question-2',
    question: `Les psychologues de Mindie sont-ils qualifiés ?`,
    answer: (
      <>
        Bien évidemment ! Tous nos psychologues possèdent un BAC + 5 en
        psychologie et sont reconnus comme psychologues par l'État. Ils sont
        certifiés par l'ARS après avoir fourni un justificatif de leurs
        diplômes, formations et pratique professionnelle; ils détiennent ainsi
        un numéro ADELI.
        <br />
        <br />
        Nous choisissons rigoureusement les psychologues qui sont sur notre
        plateforme, chacun d'eux ayant dû passer de multiples entretiens avant
        d'être sélectionné. Tous nos praticiens suivent notre éthique et sont
        investis dans la misson qui est la nôtre.
        <br />
        <br />
        Vous aurez accès à toutes ses informations concernant votre psychologue
        à n'importe quel moment durant vos échanges.
      </>
    ),
  },
  {
    id: 'question-3',
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

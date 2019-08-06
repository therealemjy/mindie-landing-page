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
        Mindie permet de communiquer avec un psychologue certifié par messages
        écrits ou audios et de faire ainsi part de ses problèmes de tous les
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
        diplômes, formations et pratique professionnelle ; ils détiennent ainsi
        un numéro ADELI.
        <br />
        <br />
        Nous choisissons rigoureusement les psychologues qui sont sur notre
        plateforme, chacun d'eux ayant dû passer de multiples entretiens avant
        d'être sélectionnés. Tous nos praticiens suivent notre éthique et sont
        investis dans la mission qui est la nôtre.
        <br />
        <br />
        Vous aurez accès à toutes les informations concernant votre psychologue
        à n'importe quel moment durant vos échanges.
      </>
    ),
  },
  {
    id: 'question-3',
    question: `Est-ce réellement efficace ?`,
    answer: (
      <>
        Parfaitement ! De nombreuses études internationales ont démontré que la
        psychothérapie en ligne est très efficace. L'utilisation de messages
        écrits pour échanger avec son psychologue est un moyen pour les
        utilisateurs de Mindie de s'ouvrir facilement et de parler de leurs
        problèmes tels qu'ils leur viennent, sans avoir à attendre d'avoir un
        rendez-vous et de se souvenir des problèmatiques dont ils voulaient
        discuter.
      </>
    ),
  },
  {
    id: 'question-4',
    question: `Combien cela coûte-t-il ?`,
    answer: (
      <>
        Le prix de l'abonnement est de 49€ par semaine. Vous n'avez aucun
        contrat à signer et il vous est possible d'annuler votre abonnement,
        sans frais, à n'importe quel moment.
        <br />
        <br />
        De plus, vous pouvez parrainer n'importe quelle personne de votre
        entourage et bénéficier d'une réduction de 14€ par semaine pendant
        quatre semaines ; soit une réduction totale de 56€ ! La personne
        parrainée bénéficiera par ailleurs de la même réduction que vous.
        <br />
        Pour parrainer quelqu'un ou pour en savoir plus sur le parrainage,
        envoyez-nous un email à{' '}
        <a href="mailto:bonjour@mindie.app">bonjour@mindie.app</a>.
      </>
    ),
  },
  {
    id: 'question-5',
    question: `Vais-je toujours échanger avec le même psychologue ?`,
    answer: `Absolument ! Une fois choisi, votre psychologue travaillera avec vous durant toute la durée de votre parcours.`,
  },
  {
    id: 'question-6',
    question: `Les échanges avec mon psychologue sont-ils confidentiels ?`,
    answer: (
      <>
        Les échanges avec votre psychologue sont parfaitement confidentiels. Vos
        messages et ceux de votre praticien sont encryptés, tout comme les
        communications entre votre téléphone et le serveur. Ainsi, uniquement
        vous et votre psychologue ont la capacité de lire les messages que vous
        vous échangez. Par ailleurs, votre psychologue est tenu de respecter le
        secret professionnel en suivant les mêmes règles qu'une thérapie
        classique en cabinet.
        <br />
        <br />
        Le respect de votre vie privée est un élément essentiel au bon
        fonctionnement de Mindie, nous mettons donc un point d'honneur à ce que
        vos données personnelles soient sécurisées.
      </>
    ),
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

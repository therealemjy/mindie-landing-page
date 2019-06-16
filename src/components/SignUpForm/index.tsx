import React from 'react';

import * as Style from './style';
import { ChangeEvent } from 'containers/SignUpForm';

export enum Motivation {
  PROBLEMES_COUPLE = 'PROBLEMES_COUPLE',
}

export interface Values {
  email: string;
  motivation?: Motivation;
}

interface Props {
  step: number;
  values: Values;
  onChange: (event: ChangeEvent) => void;
  onSubmit: (step: number, values: Values) => void;
}

const handleChange = (callback: (event: ChangeEvent) => void) => ({
  currentTarget: { name, value },
}: React.FormEvent<HTMLInputElement>) =>
  callback({
    name,
    value,
  });

const SignUpForm: React.SFC<Props> = ({ step, values, onChange, onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent form from submitting
    event.preventDefault();

    onSubmit(step, values);
  };

  // Note: we direclty submit the form when the user selects a motivation
  const handleMotivationChange = ({
    currentTarget: { name, value },
  }: React.FormEvent<HTMLSelectElement>) => {
    onChange({ name, value });
    onSubmit(step, {
      ...values,
      [name]: value,
    });
  };

  // Final step
  if (step === 2) {
    return <>Merci !</>;
  }

  // Choose motivation step
  if (step === 1) {
    return (
      <form onSubmit={handleSubmit}>
        <select
          value={values.motivation}
          onChange={handleMotivationChange}
          name="motivation"
        >
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </form>
    );
  }

  // Provide email step
  return (
    <form onSubmit={handleSubmit}>
      <Style.Input
        onChange={handleChange(onChange)}
        name="email"
        type="email"
        placeholder="Email"
        value={values.email}
      />
      <Style.SubmitButton type="submit">Envoyer</Style.SubmitButton>
    </form>
  );
};

export default SignUpForm;

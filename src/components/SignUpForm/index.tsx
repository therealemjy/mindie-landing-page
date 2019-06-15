import React from 'react';

import * as Style from './style';
import { ChangeEvent } from 'containers/SignUpForm';

interface Values {
  email: string;
  motivation: string;
}

interface Props {
  step: number;
  values: Values;
  onChange: (event: ChangeEvent) => void;
  onSubmit: (step: number, values: Values) => void;
}

const handleChange = (callback: (event: ChangeEvent) => void, name: string) => (
  event: React.ChangeEvent<HTMLInputElement>
) =>
  callback({
    name,
    value: event.target.value,
  });

const SignUpForm: React.SFC<Props> = ({ step, values, onChange, onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent form from submitting
    event.preventDefault();

    onSubmit(step, values);
  };

  // Final step
  if (step === 2) {
    return <>Merci !</>;
  }

  // Choose motivation step
  if (step === 1) {
    return (
      <form onSubmit={handleSubmit}>
        <>Select</>
      </form>
    );
  }

  // Provide email step
  return (
    <form onSubmit={handleSubmit}>
      <Style.Input
        onChange={handleChange(onChange, 'email')}
        value={values.email}
      />
      <Style.SubmitButton type="submit">Envoyer</Style.SubmitButton>
    </form>
  );
};

export default SignUpForm;

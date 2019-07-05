import React from 'react';

import * as Style from './style';

interface Props {
  email: string;
  onChange: (email: string) => void;
  onSubmit: (email: string) => void;
  className?: string;
}

const handleChange = (callback: (email: string) => void) => ({
  currentTarget: { name, value },
}: React.FormEvent<HTMLInputElement>) => callback(value);

const SignUpForm: React.SFC<Props> = ({
  email,
  onChange,
  onSubmit,
  className,
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent form from submitting
    event.preventDefault();

    onSubmit(email);
  };

  return (
    <Style.Container className={className}>
      <Style.Form onSubmit={handleSubmit}>
        <Style.Label htmlFor="email">Inscrivez-vous</Style.Label>
        <Style.ControlRow>
          <Style.Input
            value={email}
            onChange={handleChange(onChange)}
            id="email"
            name="email"
            type="email"
            placeholder="Email"
          />
          <Style.SubmitButton type="submit">
            Obtenir un support personnalisé
          </Style.SubmitButton>
        </Style.ControlRow>
      </Style.Form>
    </Style.Container>
  );
};

export default SignUpForm;

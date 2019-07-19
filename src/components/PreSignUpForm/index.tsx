import React from 'react';

import * as Style from './style';
import { Form, ControlRow, Label, Input, SubmitButton } from 'components/Form';

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
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email">Inscrivez-vous</Label>
        <ControlRow>
          <Input
            value={email}
            onChange={handleChange(onChange)}
            id="email"
            name="email"
            type="email"
            placeholder="Email"
          />
          <SubmitButton type="submit">
            Obtenir un support personnalisé
          </SubmitButton>
        </ControlRow>
      </Form>
    </Style.Container>
  );
};

export default SignUpForm;

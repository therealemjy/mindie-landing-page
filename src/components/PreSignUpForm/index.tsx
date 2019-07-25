import React from 'react';

import * as Style from './style';
import { Form, Label, Input, SubmitButton } from 'components/Form';

interface Props {
  email: string;
  label: string;
  onChange: (email: string) => void;
  onSubmit: (email: string) => void;
  className?: string;
}

const handleChange = (callback: (email: string) => void) => ({
  currentTarget: { value },
}: React.FormEvent<HTMLInputElement>) => callback(value);

const SignUpForm: React.SFC<Props> = ({
  email,
  label,
  onChange,
  onSubmit,
  className,
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent form from submitting
    event.preventDefault();

    onSubmit(email);
  };

  const id = `email-${label}`;

  return (
    <Style.Container className={className}>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor={id}>{label}</Label>
        <Input
          value={email}
          onChange={handleChange(onChange)}
          id={id}
          name="email"
          type="email"
          placeholder="Email"
        />
        <SubmitButton type="submit">
          Obtenir un support personnalisé
        </SubmitButton>
      </Form>
    </Style.Container>
  );
};

export default SignUpForm;

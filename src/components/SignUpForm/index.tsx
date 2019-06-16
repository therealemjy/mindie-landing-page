import React from 'react';

import * as Style from './style';
import { ChangeEvent } from 'containers/SignUpForm';

import IconChevronDown from './chevron-down.svg';

export enum Motivation {
  COUPLE_ISSUES = 'COUPLE_ISSUES',
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
  className?: string;
}

const handleChange = (callback: (event: ChangeEvent) => void) => ({
  currentTarget: { name, value },
}: React.FormEvent<HTMLInputElement>) =>
  callback({
    name,
    value,
  });

const SignUpForm: React.SFC<Props> = ({
  step,
  values,
  onChange,
  onSubmit,
  className,
}) => {
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
      <Style.Form onSubmit={handleSubmit} className={className}>
        <Style.SelectContainer>
          <Style.Select
            value={values.motivation}
            onChange={handleMotivationChange}
            name="motivation"
            defaultValue=""
          >
            <option value="" disabled>
              Qu'est ce qui vous amène ?
            </option>
            <option value={Motivation.COUPLE_ISSUES}>
              Problèmes de couple
            </option>
          </Style.Select>
          <Style.Icon as={IconChevronDown} />
        </Style.SelectContainer>
      </Style.Form>
    );
  }

  // Provide email step
  return (
    <Style.Form onSubmit={handleSubmit} className={className}>
      <Style.Input
        onChange={handleChange(onChange)}
        name="email"
        type="email"
        placeholder="Email"
        value={values.email}
      />
      <Style.SubmitButton type="submit">Envoyer</Style.SubmitButton>
    </Style.Form>
  );
};

export default SignUpForm;

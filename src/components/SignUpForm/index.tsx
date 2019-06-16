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

  return (
    <Style.Container className={className}>
      {step < 2 && (
        <Style.Form onSubmit={handleSubmit}>
          {step === 0 && (
            <>
              <Style.Label htmlFor="email">Inscrivez-vous</Style.Label>
              <Style.ControlRow>
                <Style.Input
                  value={values.email}
                  onChange={handleChange(onChange)}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                <Style.SubmitButton type="submit">Envoyer</Style.SubmitButton>
              </Style.ControlRow>
            </>
          )}
          {step === 1 && (
            <>
              <Style.Label htmlFor="motivation">
                Qu'est ce qui vous amène ?
              </Style.Label>
              <Style.ControlRow>
                <Style.Select
                  value={values.motivation}
                  defaultValue=""
                  onChange={handleMotivationChange}
                  id="motivation"
                  name="motivation"
                >
                  <option value="" disabled>
                    Choisissez une option
                  </option>
                  <option value={Motivation.COUPLE_ISSUES}>
                    Problèmes de couple
                  </option>
                </Style.Select>
                <Style.Icon as={IconChevronDown} />
              </Style.ControlRow>
            </>
          )}
        </Style.Form>
      )}
      {step === 2 && <Style.EndMessage>Merci !</Style.EndMessage>}
    </Style.Container>
  );
};

export default SignUpForm;

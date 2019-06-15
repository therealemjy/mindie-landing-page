import React from 'react';

import * as Style from './style';

interface Props {
  step: number;
  email: string;
  onEmailChange: (email: string) => void;
  onSubmit: () => void;
}

const handleChange = (callback: (inputValue: string) => void) => (
  event: React.ChangeEvent<HTMLInputElement>
) => callback(event.target.value);

const SignUpForm: React.SFC<Props> = ({
  step,
  email,
  onEmailChange,
  onSubmit,
}) => {
  if (step === 0) {
    return (
      <form onSubmit={onSubmit}>
        <Style.Input onChange={handleChange(onEmailChange)} value={email} />
        <Style.SubmitButton>Envoyer</Style.SubmitButton>
      </form>
    );
  }

  return null;
};

export default SignUpForm;

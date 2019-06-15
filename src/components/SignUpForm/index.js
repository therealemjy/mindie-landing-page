import React from 'react';

import * as Style from './style';

const handleChange = callback => event => callback(event.target.value);

const SignUpForm = ({ step, email, onEmailChange, onSubmit }) => {
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

import React, { useState } from 'react';

import SignUpForm from 'components/SignUpForm';

const ContainedSignUpForm = () => {
  const handleSubmit = () => {};

  const [email, setEmail] = useState('');
  const [step, setStep] = useState(0);

  return (
    <SignUpForm
      step={step}
      email={email}
      onSubmit={handleSubmit}
      onEmailChange={setEmail}
    />
  );
};

export default ContainedSignUpForm;

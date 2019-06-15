import React, { useState } from 'react';

import SignUpForm from 'components/SignUpForm';

const ContainedSignUpForm: React.SFC = () => {
  const handleSubmit = () => {};

  const [email, setEmail] = useState('');
  const [step, setStep] = useState(0);

  const handleEmailChange = (value: string) => setEmail(value);

  return (
    <SignUpForm
      step={step}
      email={email}
      onSubmit={handleSubmit}
      onEmailChange={handleEmailChange}
    />
  );
};

export default ContainedSignUpForm;
